
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
} from "lucide-react";

const navLinks = [
  { label: "108 Gaj Plots", href: "#plot-108" },
  { label: "200 Gaj Plots", href: "#plot-200" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="premium-header">
      <div className="premium-header-line" />

      <div className="container premium-nav">
        <a
          href="#home"
          className="premium-logo"
          aria-label="Netram Home"
        >
          <img
            src="/images/logo.png"
            alt="Netram Logo"
          />
        </a>

        <nav
          className={`premium-nav-links ${
            menuOpen ? "active" : ""
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="premium-nav-actions">
          <a
            href="tel:+918388888666"
            className="premium-call"
          >
            <Phone size={16} />
            <span>+91 83888 88666</span>
          </a>

          <a
            href="#enquiry"
            className="premium-visit-btn"
          >
            Book a Visit
            <ArrowUpRight size={17} />
          </a>
        </div>

        <button
          className="premium-mobile-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>
    </header>
  );
}
