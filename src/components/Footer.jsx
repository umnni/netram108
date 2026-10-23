
import {
  ArrowUpRight,
  Phone,
  MapPin,
  MoveUpRight,
} from "lucide-react";

const mapsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=28.7501812%2C77.529672";

export default function Footer() {
  return (
    <footer className="netram-premium-footer">
      <div className="netram-footer-glow" />

      <div className="container">
        <div className="netram-footer-top">
          <div>
            <span className="premium-eyebrow">
              DISCOVER YOUR NEXT ADDRESS
            </span>

            <h2>
              A Place to Build.
              <br />
              <em>A Legacy to Leave.</em>
            </h2>
          </div>

          <a href="#enquiry" className="netram-footer-cta">
            Enquire Now
            <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="netram-footer-main">
          <div className="netram-footer-brand">
            <a href="#home" aria-label="Netram Home">
              <img
                src="/images/logo.png"
                alt="Netram Logo"
              />
            </a>

            <p>
              Thoughtfully envisioned residential
              plots for the life you want to create.
            </p>
          </div>

          <div className="netram-footer-links">
            <h3>EXPLORE NETRAM</h3>

            <a href="#plot-108">
              108 Gaj Plots
              <MoveUpRight size={15} />
            </a>

            <a href="#plot-200">
              200 Gaj Plots
              <MoveUpRight size={15} />
            </a>

            <a href="#location">
              Location
              <MoveUpRight size={15} />
            </a>

            <a href="#contact">
              Contact Us
              <MoveUpRight size={15} />
            </a>
          </div>

          <div className="netram-footer-contact">
            <h3>GET IN TOUCH</h3>

            <a href="tel:+918388888666">
              <Phone size={18} />
              +91 83888 88666
            </a>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={19} />

              <span>
                On Ganga Canal, opposite RURBAN
                Resort, Baraka Arifpur, Ghaziabad,
                Uttar Pradesh 201206
              </span>
            </a>
          </div>
        </div>

        <div className="netram-footer-disclaimer">
          <p>
            Plot prices and availability are subject
            to confirmation. Registration, stamp
            duty, taxes and other applicable charges
            may be additional. Project images are
            illustrative. Please verify all relevant
            details before booking.
          </p>
        </div>
      </div>

      <div className="netram-footer-bottom">
        <div className="container">
          <span>
            © {new Date().getFullYear()} Netram.
            All rights reserved.
          </span>

          <a href="#home">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
