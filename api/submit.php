
<?php
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

// JSON Response
function respond($status, $message, $success = false) {
    http_response_code($status);

    echo json_encode([
        'ok' => $success,
        'message' => $message
    ]);

    exit;
}

// Only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, 'Method not allowed.');
}

// Read form data
$data = json_decode(file_get_contents('php://input'), true);

if (!is_array($data)) {
    respond(400, 'Invalid form submission.');
}

// Bot protection
if (!empty($data['website'])) {
    respond(200, 'Thank you!', true);
}

// Form values
$name = trim((string)($data['name'] ?? ''));
$phone = preg_replace('/\s+/', '', (string)($data['phone'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$plot = trim((string)($data['plot'] ?? ''));
$source = trim((string)($data['source'] ?? 'Netram Landing Page'));
$consent = $data['consent'] ?? false;

// Server-side validation
if (
    strlen($name) < 2 ||
    strlen($name) > 150 ||
    preg_match('/[\r\n]/', $name)
) {
    respond(422, 'Please enter a valid name.');
}

if (!preg_match('/^[6-9][0-9]{9}$/', $phone)) {
    respond(422, 'Please enter a valid mobile number.');
}

if (
    $email !== '' &&
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    respond(422, 'Please enter a valid email.');
}

if (!in_array($plot, ['108 Gaj', '200 Gaj'], true)) {
    respond(422, 'Please select a plot size.');
}

if ($consent !== true) {
    respond(422, 'Contact consent is required.');
}

// Basic submission cooldown
session_start();

if (
    isset($_SESSION['last_submission']) &&
    time() - $_SESSION['last_submission'] < 20
) {
    respond(429, 'Please wait before submitting again.');
}

// Load private SMTP settings
$configPath = __DIR__ . '/private/config.php';

if (!is_file($configPath)) {
    respond(503, 'Email configuration is missing.');
}

$config = require $configPath;

$required = [
    'smtp_host',
    'smtp_port',
    'smtp_user',
    'smtp_password',
    'mail_to',
    'mail_from',
    'mail_from_name'
];

foreach ($required as $key) {
    if (empty($config[$key])) {
        respond(503, 'Email configuration is incomplete.');
    }
}

// Load PHPMailer manually
require_once __DIR__ . '/PHPMailer/Exception.php';
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';

// Escape user-submitted values
function safe($value) {
    return htmlspecialchars(
        $value,
        ENT_QUOTES | ENT_SUBSTITUTE,
        'UTF-8'
    );
}

// Prepare email
$mail = new PHPMailer(true);

try {

    $mail->isSMTP();

    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;

    $mail->Username = $config['smtp_user'];
    $mail->Password = $config['smtp_password'];

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = (int)$config['smtp_port'];

    $mail->CharSet = 'UTF-8';

    // Sender
    $mail->setFrom(
        $config['mail_from'],
        $config['mail_from_name']
    );

    // Receiving email
    $mail->addAddress($config['mail_to']);

    // Customer email as Reply-To
    if ($email !== '') {
        $mail->addReplyTo($email, $name);
    }

    $mail->isHTML(true);

    $mail->Subject = 'New Netram Enquiry - ' . $plot;

    // HTML email
    $mail->Body = '
        <div style="
            font-family:Arial,sans-serif;
            max-width:600px;
            margin:auto;
            padding:25px;
            border:1px solid #ddd;
        ">

            <h2 style="
                background:#173b2b;
                color:#d2b166;
                padding:20px;
                margin:0 0 25px;
            ">
                New Netram Website Enquiry
            </h2>

            <p><strong>Customer Name:</strong> '
                . safe($name) . '</p>

            <p><strong>Phone Number:</strong> '
                . safe($phone) . '</p>

            <p><strong>Email:</strong> '
                . safe($email ?: 'Not Provided') . '</p>

            <p><strong>Interested Plot:</strong> '
                . safe($plot) . '</p>

            <p><strong>Form Source:</strong> '
                . safe($source) . '</p>

            <p><strong>Contact Consent:</strong> Yes</p>

            <hr>

            <p style="color:#777;font-size:12px;">
                This enquiry was submitted through
                the Netram landing page.
            </p>

        </div>
    ';

    // Plain-text fallback
    $mail->AltBody =
        "New Netram Enquiry\n\n" .
        "Name: $name\n" .
        "Phone: $phone\n" .
        "Email: $email\n" .
        "Plot: $plot\n" .
        "Source: $source\n" .
        "Contact Consent: Yes";

    // Send email
    $mail->send();

    $_SESSION['last_submission'] = time();

    respond(
        200,
        'Thank you! Your enquiry has been submitted successfully.',
        true
    );

} catch (Throwable $e) {

    error_log(
        'Netram Mail Error: ' . $e->getMessage()
    );

    respond(
        500,
        'Unable to send enquiry. Please try again.'
    );
}
