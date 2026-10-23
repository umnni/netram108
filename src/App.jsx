import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LeadForm from "./components/LeadForm.jsx";
import Location from "./components/Location.jsx";

import {
  ArrowUpRight,
  MoveRight,
  Phone,
  Check,
  Sparkles,
  Heart,
  Flower2,
  Leaf,
  Users,
  Trees,
  Sun,
  Landmark,
  BadgeCheck,
  MessageCircle,
  Sunrise,
  Compass,
} from "lucide-react";

/* ==========================================
   NETRAM — DIWALI OFFER PRICING
========================================== */

const plots = [
  {
    id: "plot-108",
    label: "THE SIGNATURE PLOT",
    size: "108",
    oldPrice: "₹54.99 Lakh",
    price: "₹42.99 Lakh",
    saving: "₹12 Lakh",
    image: "/images/108.jpeg",
    description:
      "A thoughtfully sized address to build a home that is truly yours.",
    number: "01",
  },
  {
    id: "plot-200",
    label: "ROOM TO DREAM BIGGER",
    size: "200",
    oldPrice: "₹99.99 Lakh",
    price: "₹79.99 Lakh",
    saving: "₹20 Lakh",
    image: "/images/200.jpeg",
    description:
      "More space for larger plans, greener moments and an elevated lifestyle.",
    number: "02",
  },
];

/* ==========================================
   HERO — DIWALI PRICE CARDS
========================================== */

function HeroOfferCard({ plot }) {
  return (
    <a
      href={`#${plot.id}`}
      className="hero-offer-card"
    >
      <div className="hero-offer-top">
        <span className="hero-offer-size">
          {plot.size} GAJ
        </span>

        <span className="hero-offer-badge">
          <Sparkles size={12} />
          DIWALI OFFER
        </span>
      </div>

      <div className="hero-offer-prices">
        <div className="hero-old-price">
          <span>Before Diwali</span>
          <del>{plot.oldPrice}</del>
        </div>

        <div className="hero-new-price">
          <span>Diwali Offer Price</span>
          <strong>{plot.price}</strong>
        </div>
      </div>

      <div className="hero-offer-bottom">
        <span>
          Save {plot.saving}
        </span>

        <ArrowUpRight size={17} />
      </div>
    </a>
  );
}

/* ==========================================
   INDIVIDUAL PLOT SECTIONS
========================================== */

function PlotSection({ plot, index }) {
  return (
    <section
      id={plot.id}
      className={`plot-section section-space ${
        index % 2 ? "plot-alt" : ""
      }`}
    >
      <div className="container plot-grid">
        <div
          className="plot-photo"
          data-aos={
            index % 2 ? "fade-left" : "fade-right"
          }
        >
          <img
            src={plot.image}
            alt={`${plot.size} Gaj Netram residential plot`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div className="photo-placeholder">
            <span>NETRAM</span>

            <strong>
              {plot.size} GAJ
            </strong>

            <small>
              Plot imagery coming soon
            </small>
          </div>

          <span className="photo-index">
            {plot.number} / 02
          </span>
        </div>

        <div
          className="plot-copy"
          data-aos="fade-up"
        >
          <span className="eyebrow">
            {plot.label}
          </span>

          <h2>
            Your Land.
            <br />
            <em>Your Legacy.</em>
          </h2>

          <div className="plot-size">
            {plot.size} <span>Gaj</span>
          </div>

          <p>{plot.description}</p>

          {/* DIWALI OFFER PRICE */}

          <div className="diwali-price-box">
            <div className="diwali-box-header">
              <span>
                <Sparkles size={14} />
                SPECIAL DIWALI OFFER
              </span>

              <BadgeCheck size={19} />
            </div>

            <div className="diwali-price-content">
              <div className="diwali-before">
                <span>
                  Before Diwali
                </span>

                <del>
                  {plot.oldPrice}
                </del>
              </div>

              <div className="diwali-after">
                <span>
                  Diwali Offer Price
                </span>

                <strong>
                  {plot.price}
                </strong>
              </div>
            </div>

            <div className="diwali-saving">
              <Check size={15} />

              Save {plot.saving} on your plot
            </div>
          </div>

          <a
            href="#enquiry"
            className="btn btn-dark"
          >
            Enquire for {plot.size} Gaj
            <MoveRight size={17} />
          </a>

          <small className="disclaimer">
            Taxes, registration and other applicable
            charges may be additional. Offers are
            subject to availability and confirmation.
          </small>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   HERO SECTION
========================================== */

function Hero() {
  return (
    <section
      className="hero premium-hero"
      id="home"
    >
      <div className="hero-art" />

      <div className="container premium-hero-grid">
        <div
          className="premium-hero-copy"
          data-aos="fade-up"
        >
          <span className="premium-eyebrow">
            NETRAM · RESIDENTIAL PLOTS
          </span>

          <h1>
            Land That Holds
            <br />
            <em>Your Future.</em>
          </h1>

          <p>
            Discover your own place at Netram —
            thoughtfully envisioned residential plots
            with space for everything that matters.
          </p>

          <div className="hero-festive-heading">
            <Sparkles size={17} />

            <span>
              EXCLUSIVE DIWALI PRICES
            </span>
          </div>

          <div className="premium-price-pills">
            {plots.map((plot) => (
              <HeroOfferCard
                key={plot.id}
                plot={plot}
              />
            ))}
          </div>

          <a
            href="#plot-108"
            className="premium-explore"
          >
            Explore Available Plots

            <ArrowUpRight size={18} />
          </a>
        </div>

        <div
          className="premium-form-card premium-hero-form"
          id="enquiry"
          data-aos="fade-left"
        >
          <div className="premium-form-heading">
            <span className="premium-eyebrow">
              PLAN YOUR SITE VISIT
            </span>

            <h2>
              Find Your
              <em> Perfect Plot.</em>
            </h2>

            <p>
              Enquire about pricing, availability
              and schedule a personalised visit.
            </p>
          </div>

          <LeadForm source="Hero form" />
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   NETRAM — AMENITIES DATA
========================================== */

const amenities = [
  {
    number: "01",
    icon: Sun,
    title: "Morning Meditation",
    description:
      "Start your day with peace, clarity and a calm spiritual rhythm.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Yoga & Wellness",
    description:
      "Daily movement and mindful living for a healthier body and mind.",
  },
  {
    number: "03",
    icon: Landmark,
    title: "Temple Rituals",
    description:
      "A spiritual center for devotion, prayer and inner connection.",
  },
  {
    number: "04",
    icon: Trees,
    title: "Nature Walks",
    description:
      "Walk amidst greenery, fresh air and peaceful natural surroundings.",
  },
  {
    number: "05",
    icon: Users,
    title: "Family Community",
    description:
      "A stronger bond among residents through shared values and harmony.",
  },
  {
    number: "06",
    icon: Leaf,
    title: "Green Living",
    description:
      "A calm and conscious environment designed for every age group.",
  },
  {
    number: "07",
    icon: Sunrise,
    title: "Sanatan Living",
    description:
      "Embrace the timeless wisdom of Sanatan Dharma through spiritual traditions, cultural values and mindful everyday living.",
  },
  {
    number: "08",
    icon: Compass,
    title: "Vastu Harmony",
    description:
      "Experience thoughtfully envisioned spaces inspired by Vastu Shastra, encouraging balance, positivity and harmony in daily life.",
  },
];
/* ==========================================
   LIFESTYLE CATEGORIES
========================================== */

const lifestyleCategories = [
  {
    number: "01",
    name: "Wellness",
    icon: Heart,
  },
  {
    number: "02",
    name: "Devotion",
    icon: Flower2,
  },
  {
    number: "03",
    name: "Nature",
    icon: Leaf,
  },
  {
    number: "04",
    name: "Community",
    icon: Users,
  },
];

/* ==========================================
   AMENITIES & LIFESTYLE SECTION
========================================== */

function Amenities() {
  return (
    <section
      id="amenities"
      className="netram-amenities"
    >
      <div className="container">
        <div className="amenities-intro">
          <div
            className="amenities-intro-copy"
            data-aos="fade-right"
          >
            <span className="amenities-eyebrow">
              <Flower2 size={17} />
              THE NETRAM LIFESTYLE
            </span>

            <h2>
              A Lifestyle That
              <br />
              <em>
                Nourishes Body,
                <br />
                Mind & Soul.
              </em>
            </h2>

            <div className="amenities-divider" />

            <p>
              From sunrise meditation to peaceful
              evening walks, Netram is created to
              make wellness a natural part of
              everyday living.
            </p>

            <a
              href="#contact"
              className="amenities-explore"
            >
              Explore Lifestyle

              <ArrowUpRight size={19} />
            </a>
          </div>

          <div
            className="lifestyle-categories"
            data-aos="fade-left"
          >
            {lifestyleCategories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  className="lifestyle-category"
                  key={category.number}
                >
                  <span className="lifestyle-number">
                    {category.number}
                  </span>

                  <div className="lifestyle-category-info">
                    <Icon size={24} />

                    <h3>
                      {category.name}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="lifestyle-arrow"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="amenities-list-heading">
          <span className="amenities-eyebrow">
            THOUGHTFULLY CURATED
          </span>

          <h3>
            Everyday Living,
            <em> Elevated.</em>
          </h3>
        </div>

        <div className="amenities-grid">
          {amenities.map((amenity) => {
            const Icon = amenity.icon;

            return (
              <article
                className="amenity-card"
                key={amenity.number}
                data-aos="fade-up"
              >
                <div className="amenity-card-top">
                  <div className="amenity-icon">
                    <Icon
                      size={29}
                      strokeWidth={1.5}
                    />
                  </div>

                  <span className="amenity-number">
                    {amenity.number} / 08
                  </span>
                </div>

                <h3>
                  {amenity.title}
                </h3>

                <p>
                  {amenity.description}
                </p>

                <span className="amenity-card-line" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   FLOATING WHATSAPP BUTTON
========================================== */

function FloatingWhatsApp() {
  const phone = "918388888666";

  const message = encodeURIComponent(
    "Hello, I would like to know more about Netram residential plots and the Diwali offers."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      className="netram-whatsapp-tab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Netram on WhatsApp"
      title="Chat with Netram on WhatsApp"
    >
      <MessageCircle
        size={26}
        fill="white"
        stroke="#18ce64"
        strokeWidth={2.5}
      />

      <span>
        WHATSAPP
      </span>
    </a>
  );
}

/* ==========================================
   BOTTOM CTA
========================================== */

function BottomCTA() {
  return (
    <section
      id="contact"
      className="premium-bottom-cta"
    >
      <div className="container premium-cta-layout">
        <div
          className="premium-cta-copy"
          data-aos="fade-right"
        >
          <span className="premium-eyebrow">
            TAKE THE FIRST STEP
          </span>

          <h2>
            Your Next Chapter
            <br />
            <em>Starts Here.</em>
          </h2>

          <p>
            Explore the possibilities at Netram.
            Connect with our team for plot
            availability, detailed information
            and a site visit.
          </p>

          <div className="premium-cta-highlights">
            <span>
              <Check size={17} />
              108 & 200 Gaj plot options
            </span>

            <span>
              <Check size={17} />
              Personalised site visit assistance
            </span>

            <span>
              <Check size={17} />
              Project details on enquiry
            </span>
          </div>

          <a
            href="tel:+918388888666"
            className="premium-cta-phone"
          >
            <Phone size={20} />
            +91 83888 88666
          </a>
        </div>

        <div
          className="premium-form-card premium-cta-form"
          data-aos="fade-left"
        >
          <div className="premium-form-heading">
            <span className="premium-eyebrow">
              CONNECT WITH NETRAM
            </span>

            <h2>
              Request a <em>Callback.</em>
            </h2>

            <p>
              Share your details and our team
              will reach out.
            </p>
          </div>

          <LeadForm source="Bottom CTA" />
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   MAIN APP
========================================== */

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <div className="intro-strip">
          <div className="container intro-inner">
            <span>
              PLANNED FOR YOUR TOMORROW
            </span>

            <p>
              Not just a plot of land.
              A place for your next chapter.
            </p>

            <span className="intro-mark">
              ✳
            </span>
          </div>
        </div>

        <div
          className="section-heading container"
          data-aos="fade-up"
        >
          <span className="eyebrow">
            FIND YOUR FIT
          </span>

          <h2>
            Two Sizes.
            <em> Endless Possibilities.</em>
          </h2>

          <p>
            Choose the perfect canvas for
            the life you want to build.
          </p>
        </div>

        {plots.map((plot, index) => (
          <PlotSection
            key={plot.id}
            plot={plot}
            index={index}
          />
        ))}

        {/* AMENITIES BEFORE GOOGLE MAPS */}

        <Amenities />

        <Location />

        <BottomCTA />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}