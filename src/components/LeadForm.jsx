
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  plot: "",
  consent: false,
};

export default function LeadForm({ source = "Landing Page" }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const id = source.replace(/\W+/g, "-").toLowerCase();

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const next = {};

    if (form.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) {
      next.phone = "Enter a valid 10-digit mobile number.";
    }

    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      next.email = "Enter a valid email address.";
    }

    if (!form.plot) {
      next.plot = "Please select a plot size.";
    }

    if (!form.consent) {
      next.consent = "Please accept the consent checkbox.";
    }

    return next;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setSuccess(false);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) return;

    setLoading(true);

    try {
      const response = await fetch("/api/submit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source,
          website: "",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Submission failed.");
      }

      setSuccess(true);
      setMessage("Thank you! Our team will contact you shortly.");
      setForm(initialForm);
    } catch (error) {
      setMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="premium-lead-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="premium-form-grid">
        <div className="premium-field">
          <label htmlFor={`${id}-name`}>Full Name *</label>
          <input
            id={`${id}-name`}
            type="text"
            placeholder="Enter your name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
          />
          {errors.name && <small>{errors.name}</small>}
        </div>

        <div className="premium-field">
          <label htmlFor={`${id}-phone`}>Phone Number *</label>
          <input
            id={`${id}-phone`}
            type="tel"
            inputMode="numeric"
            placeholder="10-digit mobile number"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <small>{errors.phone}</small>}
        </div>

        <div className="premium-field">
          <label htmlFor={`${id}-email`}>Email (Optional)</label>
          <input
            id={`${id}-email`}
            type="email"
            placeholder="Your email address"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>

        <div className="premium-field">
          <label htmlFor={`${id}-plot`}>Interested In *</label>
          <select
            id={`${id}-plot`}
            value={form.plot}
            onChange={(e) => update("plot", e.target.value)}
            aria-invalid={!!errors.plot}
          >
            <option value="">Select plot size</option>
            <option value="108 Gaj">108 Gaj — ₹42.99 Lakh</option>
            <option value="200 Gaj">200 Gaj — ₹79.99 Lakh</option>
          </select>
          {errors.plot && <small>{errors.plot}</small>}
        </div>
      </div>

      <label className="premium-consent">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
        />
        <span>
          I agree to be contacted regarding my Netram enquiry.
        </span>
      </label>

      {errors.consent && (
        <small className="premium-consent-error">
          {errors.consent}
        </small>
      )}

      <button
        type="submit"
        className="premium-submit-btn"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Get Plot Details"}
        <ArrowUpRight size={18} />
      </button>

      {message && (
        <p
          className={`premium-form-message ${
            success ? "success" : "error"
          }`}
          role="status"
        >
          {message}
        </p>
      )}

      <p className="premium-form-note">
        Your information is used only to respond to your enquiry.
      </p>
    </form>
  );
}
