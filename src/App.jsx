
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LeadForm from "./components/LeadForm.jsx";
import Location from "./components/Location.jsx";

import {
  ArrowUpRight,
  MoveRight,
  Phone,
  Check,
} from "lucide-react";

const plots = [
  {
    id: "plot-108",
    label: "THE SIGNATURE PLOT",
    size: "108",
    price: "₹42.99 Lakh",
    image: "/images/108.jpeg",
    description:
      "A thoughtfully sized address to build a home that is truly yours.",
    number: "01",
  },
  {
    id: "plot-200",
    label: "ROOM TO DREAM BIGGER",
    size: "200",
    price: "₹79.99 Lakh",
    image: "/images/200.jpeg",
    description:
      "More space for larger plans, greener moments and an elevated lifestyle.",
    number: "02",
  },
];

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
          data-aos={index % 2 ? "fade-left" : "fade-right"}
        >
          <img
            src={plot.image}
            alt={`${plot.size} Gaj Netram plot`}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div className="photo-placeholder">
            <span>NETRAM</span>
            <strong>{plot.size} GAJ</strong>
            <small>Plot imagery coming soon</small>
          </div>

          <span className="photo-index">
            {plot.number} / 02
          </span>
        </div>

        <div className="plot-copy" data-aos="fade-up">
          <span className="eyebrow">{plot.label}</span>

          <h2>
            Your Land.
            <br />
            <em>Your Legacy.</em>
          </h2>

          <div className="plot-size">
            {plot.size} <span>Gaj</span>
          </div>

          <p>{plot.description}</p>

          <div className="price-box">
            <span>Starting From</span>
            <strong>{plot.price}</strong>
          </div>

          <a href="#enquiry" className="btn btn-dark">
            Enquire for {plot.size} Gaj
            <MoveRight size={17} />
          </a>

          <small className="disclaimer">
            Taxes, registration and other applicable charges
            may be additional.
          </small>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero premium-hero" id="home">
      <div className="hero-art" />

      <div className="container premium-hero-grid">
        <div className="premium-hero-copy" data-aos="fade-up">
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

          <div className="premium-price-pills">
            <span>
              <Check size={15} />
              108 Gaj — ₹42.99 Lakh
            </span>

            <span>
              <Check size={15} />
              200 Gaj — ₹79.99 Lakh
            </span>
          </div>

          <a href="#plot-108" className="premium-explore">
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
              Enquire about pricing, availability and
              schedule a personalised visit.
            </p>
          </div>

          <LeadForm source="Hero form" />
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section id="contact" className="premium-bottom-cta">
      <div className="container premium-cta-layout">
        <div className="premium-cta-copy" data-aos="fade-right">
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
            Connect with our team for plot availability,
            detailed information and a site visit.
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

          <a href="tel:+918388888666" className="premium-cta-phone">
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
              Share your details and our team will reach out.
            </p>
          </div>

          <LeadForm source="Bottom CTA" />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <div className="intro-strip">
          <div className="container intro-inner">
            <span>PLANNED FOR YOUR TOMORROW</span>
            <p>
              Not just a plot of land.
              A place for your next chapter.
            </p>
            <span className="intro-mark">✳</span>
          </div>
        </div>

        <div
          className="section-heading container"
          data-aos="fade-up"
        >
          <span className="eyebrow">FIND YOUR FIT</span>

          <h2>
            Two Sizes. <em>Endless Possibilities.</em>
          </h2>

          <p>
            Choose the perfect canvas for the life
            you want to build.
          </p>
        </div>

        {plots.map((plot, index) => (
          <PlotSection
            key={plot.id}
            plot={plot}
            index={index}
          />
        ))}

        <Location />

        <BottomCTA />
      </main>

      <Footer />
    </>
  );
}
