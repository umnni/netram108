
import {
  ArrowUpRight,
  MapPin,
  Navigation,
  Trees,
  Landmark,
  Route,
} from "lucide-react";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=28.7501812%2C77.529672";

const features = [
  {
    number: "01",
    icon: Landmark,
    title: "GHAZIABAD NCR",
    text: "Located in the Ghaziabad region of Delhi NCR.",
  },
  {
    number: "02",
    icon: Trees,
    title: "GANGA CANAL",
    text: "Situated along the Ganga Canal corridor.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "CLEAR LANDMARK",
    text: "Opposite RURBAN Resort, Baraka Arifpur.",
  },
  {
    number: "04",
    icon: Route,
    title: "EASY NAVIGATION",
    text: "Follow live Google Maps directions to the site.",
  },
];

export default function Location() {
  return (
    <section id="location" className="netram-location">
      <div className="container">
        <div className="netram-location-heading" data-aos="fade-up">
          <span className="premium-eyebrow">LOCATION & CONNECTIVITY</span>

          <h2>
            Connected to
            <br />
            <em>what matters.</em>
          </h2>

          <p>
            Discover Netram along the Ganga Canal corridor in
            Ghaziabad NCR. Explore the location and plan your
            personal site visit.
          </p>
        </div>

        <div className="netram-map-shell" data-aos="fade-up">
          <iframe
            title="Netram Township Google Map"
            src="https://www.google.com/maps?q=28.7501812%2C77.529672&z=15&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="netram-map-info">
            <div className="netram-map-icon">
              <MapPin size={25} />
            </div>

            <span className="premium-eyebrow">
              VISIT NETRAM
            </span>

            <h3>
              Your Future
              <br />
              Has an Address.
            </h3>

            <p>
              On Ganga Canal, opposite RURBAN Resort,
              Baraka Arifpur, Ghaziabad,
              Uttar Pradesh 201206.
            </p>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="netram-directions-btn"
            >
              Get Directions
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="netram-location-features">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="netram-location-feature"
                data-aos="fade-up"
              >
                <div className="netram-feature-top">
                  <span>{feature.number}</span>
                  <Icon size={22} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            );
          })}
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="netram-location-link"
        >
          <Navigation size={17} />
          View Complete Route on Google Maps
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
