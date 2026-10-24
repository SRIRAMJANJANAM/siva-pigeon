
import React, { useEffect, useMemo, useState } from "react";
import {
  FaShieldAlt,
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowRight,
  FaCheckCircle,
  FaChild,
  FaBuilding,
  FaTools,
  FaFutbol,
  FaChevronRight,
  FaQuoteRight,
  FaSearch,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const PHONE = "919791170467";
const DISPLAY_PHONE = "+91 97911 70467";

const WHATSAPP_URL = (service = "") =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hello Siva Safety Nets, I would like to enquire about ${
      service || "your safety net services"
    }. Please share more details and pricing.`
  )}`;

const serviceImages = {
  balcony:
    "images/balcony-safety-nets.webp",
  terrace:
    "images/terrace-safety-nets.webp",
  building:
    "images/build.webp",
  children:
    "images/child.webp",
  parking:
    "images/park.webp",
  warehouse:
    "images/warehouse-safety-nets.webp",
  staircase:
    "images/stair.webp",
  pool:
    "images/pool.webp",
  birds:
    "images/bird.webp",
  pigeon:
    "images/pigeon-safety-nets.webp",
  spikes:
    "images/pigeon-safety-nets.webp",
  cricket:
    "images/sports-nets.webp",
  sports:
    "images/sports-nets.webp",
  coconut:
    "images/coco.webp",
  construction:
    "images/cons.webp",
  cloth:
    "images/cloth.webp",
    monkey:
    "images/monkey-safety-nets.webp"
};

const safetyServices = [
  {
    title: "Balcony Safety Nets",
    description:
      "Safety net options for apartment balconies, windows and open residential spaces.",
    category: "Safety Nets",
    image: serviceImages.balcony,
    icon: "home",
    featured: true,
  },
  {
    title: "Terrace Shed Covering Nets",
    description:
      "Netting solutions for terrace sheds and selected open rooftop areas.",
    category: "Safety Nets",
    image: serviceImages.terrace,
    icon: "home",
  },
  {
    title: "Ceiling Cloth Hangers",
    description:
      "Practical ceiling-mounted clothes-drying solutions for home use.",
    category: "Home Solutions",
    image: serviceImages.cloth,
    icon: "home",
  },
  {
    title: "Building Safety Nets",
    description:
      "Protective netting options for selected building openings and exposed areas.",
    category: "Safety Nets",
    image: serviceImages.building,
    icon: "building",
  },
  {
    title: "Car Parking Safety Nets",
    description:
      "Netting options for suitable parking spaces and open parking structures.",
    category: "Safety Nets",
    image: serviceImages.parking,
    icon: "building",
  },
  {
    title: "Children Safety Nets",
    description:
      "Safety net options for balconies, windows and other suitable home spaces.",
    category: "Home Safety",
    image: serviceImages.children,
    icon: "child",
    featured: true,
  },
  {
    title: "Coconut Tree Safety Nets",
    description:
      "Protective netting options for suitable coconut tree and surrounding areas.",
    category: "Safety Nets",
    image: serviceImages.coconut,
    icon: "home",
  },
  {
    title: "Building Facade Fall Nets",
    description:
      "Protective netting options for appropriate construction and facade projects.",
    category: "Commercial",
    image: serviceImages.construction,
    icon: "building",
  },
  {
    title: "Duct Area Safety Nets",
    description:
      "Netting for suitable apartment ducts, shafts and other open building spaces.",
    category: "Safety Nets",
    image: serviceImages.building,
    icon: "building",
  },
  {
    title: "Warehouse Pigeon Netting",
    description:
      "Bird-exclusion netting options for warehouses and industrial buildings.",
    category: "Bird Control",
    image: serviceImages.warehouse,
    icon: "bird",
    featured: true,
  },
  {
    title: "Monkey Safety Nets",
    description:
      "Netting options for selected areas where monkey access needs to be discouraged.",
    category: "Safety Nets",
    image: serviceImages.monkey,
    icon: "home",
  },
  {
    title: "Staircase Safety Nets",
    description:
      "Safety net options for suitable staircases, railings and open stairwells.",
    category: "Home Safety",
    image: serviceImages.staircase,
    icon: "building",
  },
  {
    title: "Swimming Pool Safety Nets",
    description:
      "Protective netting options for suitable swimming pool areas.",
    category: "Home Safety",
    image: serviceImages.pool,
    icon: "home",
  },
];

const birdSportsServices = [
  {
    title: "Pigeon Safety Nets",
    description:
      "Help keep pigeons away from selected balconies, ledges and building openings.",
    category: "Bird Control",
    image: serviceImages.pigeon,
    icon: "bird",
    featured: true,
  },
  {
    title: "Anti Bird Netting",
    description:
      "Bird-exclusion netting options for balconies, ducts and other suitable areas.",
    category: "Bird Control",
    image: serviceImages.birds,
    icon: "bird",
  },
  {
    title: "Bird / Pigeon Spikes",
    description:
      "Spikes for suitable ledges and surfaces to discourage bird perching.",
    category: "Bird Control",
    image: serviceImages.spikes,
    icon: "bird",
  },
  {
    title: "Bird Netting Installation",
    description:
      "Installation enquiries for bird netting in suitable residential and commercial spaces.",
    category: "Bird Control",
    image: serviceImages.birds,
    icon: "bird",
  },
  {
    title: "Bird Protection Nets",
    description:
      "Protective netting solutions for suitable openings and exposed spaces.",
    category: "Bird Control",
    image: serviceImages.pigeon,
    icon: "bird",
  },
  {
    title: "Pigeon Nets Installation",
    description:
      "Pigeon net installation enquiries for balconies, ducts and building spaces.",
    category: "Bird Control",
    image: serviceImages.balcony,
    icon: "bird",
  },
  {
    title: "Pigeon Nets Price",
    description:
      "Request an estimate based on your location, area dimensions and requirements.",
    category: "Bird Control",
    image: serviceImages.pigeon,
    icon: "bird",
  },
  {
    title: "Pigeon Nets for Balconies",
    description:
      "Balcony-focused pigeon netting options for apartments and homes.",
    category: "Bird Control",
    image: serviceImages.balcony,
    icon: "bird",
  },
  {
    title: "Pigeon Safety Net Installation",
    description:
      "Discuss a suitable pigeon netting arrangement for your property.",
    category: "Bird Control",
    image: serviceImages.birds,
    icon: "bird",
  },
  {
    title: "Terrace Cricket Nets",
    description:
      "Netting options for terrace cricket practice areas, subject to site suitability.",
    category: "Sports Nets",
    image: serviceImages.cricket,
    icon: "sports",
  },
  {
    title: "Cricket Practice Nets",
    description:
      "Practice netting enquiries for home, academy and training facilities.",
    category: "Sports Nets",
    image: serviceImages.cricket,
    icon: "sports",
  },
];

const allServices = [...safetyServices, ...birdSportsServices];

const filters = [
  "All Services",
  "Safety Nets",
  "Home Safety",
  "Bird Control",
  "Sports Nets",
  "Commercial",
  "Home Solutions",
];

function BirdSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M22 3.1c-2.1 1.3-4.1 1.7-6.1 1.2C13.2 3.6 10.4 4.5 8.8 7c-1 1.6-1.3 3.2-.9 4.8-2.7.1-5.1 1.3-7.1 3.6 3.8-.8 6.2-.4 8 1.1 1.3 1.1 2.5 1.8 4.1 1.8 3.7 0 6.3-3.2 6.3-6.8 0-1.9-.6-3.3-1.5-4.5C19.4 6.4 21.1 5 22 3.1Z" />
    </svg>
  );
}

function ServiceIcon({ type }) {
  if (type === "bird") return <BirdSvg />;
  if (type === "child") return <FaChild />;
  if (type === "building") return <FaBuilding />;
  if (type === "sports") return <FaFutbol />;
  if (type === "home") return <FaHome />;
  return <FaShieldAlt />;
}

export default function SafetyNets() {
  const [activeFilter, setActiveFilter] = useState("All Services");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".ssn-services-page .ssn-service-reveal"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("ssn-service-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ssn-service-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [activeFilter, searchText]);

  const filteredServices = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    return allServices.filter((service) => {
      const matchesCategory =
        activeFilter === "All Services" ||
        service.category === activeFilter;

      const matchesSearch =
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchText]);

  const safetyFiltered = filteredServices.filter((service) =>
    safetyServices.some((item) => item.title === service.title)
  );

  const birdSportsFiltered = filteredServices.filter((service) =>
    birdSportsServices.some((item) => item.title === service.title)
  );

  const renderServiceCard = (service, index) => (
    <article
      className="ssn-service-card ssn-service-reveal"
      key={service.title}
      style={{ "--ssn-service-delay": `${(index % 3) * 70}ms` }}
    >
      <div className="ssn-service-image">
        <img
          src={service.image}
          alt={`${service.title} service`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.parentElement.classList.add(
              "ssn-service-image-fallback"
            );
          }}
        />

        <div className="ssn-service-image-shade" />

        <span className="ssn-service-category">{service.category}</span>

        {service.featured && (
          <span className="ssn-service-featured">
            <FaCheckCircle /> Popular Service
          </span>
        )}

        <div className="ssn-service-icon">
          <ServiceIcon type={service.icon} />
        </div>
      </div>

      <div className="ssn-service-card-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <a
          className="ssn-service-card-link"
          href={WHATSAPP_URL(service.title)}
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
          <span>Enquire on WhatsApp</span>
          <FaArrowRight className="ssn-service-link-arrow" />
        </a>
      </div>
    </article>
  );

  return (
    <main className="ssn-services-page">
      <style>{safetyNetsStyles}</style>

      {/* HERO */}
      <section className="ssn-services-hero">
        <div className="ssn-services-hero-pattern" />

        <div className="ssn-services-container ssn-services-hero-grid">
          <div className="ssn-services-hero-content ssn-service-reveal">
            <div className="ssn-services-eyebrow">
              <span />
              COMPLETE SAFETY NET SOLUTIONS
            </div>

            <h1>
              The Right Protection
              <br />
              for <span>Every Space.</span>
            </h1>

            <p>
              Explore safety nets, balcony protection, pigeon control,
              bird netting and sports nets. Tell us what you need and
              enquire about a suitable solution for your property.
            </p>

            <div className="ssn-services-hero-actions">
              <a
                href="#all-safety-services"
                className="ssn-services-btn ssn-services-gold"
              >
                Explore All Services <FaArrowRight />
              </a>

              <a
                href={WHATSAPP_URL()}
                target="_blank"
                rel="noreferrer"
                className="ssn-services-btn ssn-services-outline"
              >
                <FaWhatsapp /> Get an Estimate
              </a>
            </div>

            <div className="ssn-services-trust">
              <span>
                <FaCheckCircle /> Residential Solutions
              </span>
              <span>
                <FaCheckCircle /> Bird Protection
              </span>
              <span>
                <FaCheckCircle /> Sports Netting
              </span>
            </div>
          </div>

          <div className="ssn-services-hero-visual ssn-service-reveal">
            <div className="ssn-services-hero-photo">
              <img
                src={serviceImages.balcony}
                alt="Modern home and balcony"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="ssn-services-hero-photo-overlay">
                <FaShieldAlt />
                <div>
                  <strong>Safety for Everyday Living</strong>
                  <span>Solutions for your space</span>
                </div>
              </div>
            </div>

            <div className="ssn-services-floating-card">
              <div className="ssn-services-floating-icon">
                <FaTools />
              </div>
              <div>
                <strong>Have a Specific Requirement?</strong>
                <span>Tell us what you need.</span>
                <a
                  href={WHATSAPP_URL()}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact our team <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY QUICK LINKS */}
      <section className="ssn-services-quick">
        <div className="ssn-services-container ssn-services-quick-grid">
          {[
            {
              icon: <FaShieldAlt />,
              title: "Safety Nets",
              text: "Protection for homes and buildings",
              filter: "Safety Nets",
            },
            {
              icon: <BirdSvg />,
              title: "Bird & Pigeon Nets",
              text: "Cleaner, bird-resistant spaces",
              filter: "Bird Control",
            },
            {
              icon: <FaChild />,
              title: "Home Safety",
              text: "Explore residential safety options",
              filter: "Home Safety",
            },
            {
              icon: <FaFutbol />,
              title: "Sports Nets",
              text: "Practice and sports areas",
              filter: "Sports Nets",
            },
          ].map((item) => (
            <button
              className="ssn-services-quick-item"
              key={item.title}
              type="button"
              onClick={() => {
                setActiveFilter(item.filter);
                setSearchText("");
                document
                  .getElementById("all-safety-services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="ssn-services-quick-icon">{item.icon}</div>
              <div>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
              <FaChevronRight className="ssn-services-quick-arrow" />
            </button>
          ))}
        </div>
      </section>

      {/* SERVICES CATALOG */}
      <section
        className="ssn-services-catalog"
        id="all-safety-services"
      >
        <div className="ssn-services-container">
          <div className="ssn-services-heading ssn-service-reveal">
            <div className="ssn-services-section-label">
              <span />
              OUR SERVICES
              <span />
            </div>

            <h2>
              Find the Right <span>Safety Solution.</span>
            </h2>

            <p>
              Browse our service categories and choose the option that
              matches your requirements.
            </p>
          </div>

          <div className="ssn-services-toolbar ssn-service-reveal">
            <div className="ssn-services-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={
                    activeFilter === filter
                      ? "ssn-services-filter active"
                      : "ssn-services-filter"
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <label className="ssn-services-search">
              <FaSearch />
              <input
                type="search"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search services..."
                aria-label="Search safety net services"
              />
            </label>
          </div>

          <div className="ssn-services-results-count">
            Showing <strong>{filteredServices.length}</strong> services
          </div>

          {safetyFiltered.length > 0 && (
            <div className="ssn-services-group">
              <div className="ssn-services-group-heading">
                <div className="ssn-services-group-icon">
                  <FaShieldAlt />
                </div>
                <div>
                  <h3>Safety Nets</h3>
                  <p>
                    Residential, commercial and specialised safety net
                    options.
                  </p>
                </div>
                <span>{safetyFiltered.length} Services</span>
              </div>

              <div className="ssn-services-grid">
                {safetyFiltered.map(renderServiceCard)}
              </div>
            </div>
          )}

          {birdSportsFiltered.length > 0 && (
            <div className="ssn-services-group ssn-services-group-second">
              <div className="ssn-services-group-heading">
                <div className="ssn-services-group-icon">
                  <BirdSvg />
                </div>
                <div>
                  <h3>Bird, Pigeon & Sports Nets</h3>
                  <p>
                    Bird-exclusion solutions, pigeon netting and sports
                    practice netting options.
                  </p>
                </div>
                <span>{birdSportsFiltered.length} Services</span>
              </div>

              <div className="ssn-services-grid">
                {birdSportsFiltered.map(renderServiceCard)}
              </div>
            </div>
          )}

          {filteredServices.length === 0 && (
            <div className="ssn-services-empty">
              <FaSearch />
              <h3>No matching services found</h3>
              <p>Try another search term or reset the service category.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter("All Services");
                  setSearchText("");
                }}
              >
                Show All Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="ssn-services-why">
        <div className="ssn-services-container ssn-services-why-grid">
          <div className="ssn-services-why-content ssn-service-reveal">
            <div className="ssn-services-section-label">
              <span /> WHY CHOOSE SIVA SAFETY NETS
            </div>

            <h2>
              Protection Designed Around <span>Your Needs.</span>
            </h2>

            <p>
              Every property is different. We help you explore suitable
              netting options based on the area, intended use and your
              requirements.
            </p>

            <div className="ssn-services-why-points">
              <div>
                <FaCheckCircle />
                <span>
                  <strong>Multiple Service Options</strong>
                  <small>
                    Residential, bird-control and sports netting enquiries.
                  </small>
                </span>
              </div>
              <div>
                <FaCheckCircle />
                <span>
                  <strong>Requirement-Based Guidance</strong>
                  <small>
                    Discuss your property and intended application with us.
                  </small>
                </span>
              </div>
              <div>
                <FaCheckCircle />
                <span>
                  <strong>Direct Enquiry</strong>
                  <small>
                    Contact us by phone or send your requirements through WhatsApp.
                  </small>
                </span>
              </div>
            </div>

            <a
              href={WHATSAPP_URL()}
              target="_blank"
              rel="noreferrer"
              className="ssn-services-btn ssn-services-dark-btn"
            >
              Discuss Your Requirements <FaArrowRight />
            </a>
          </div>

          <div className="ssn-services-why-visual ssn-service-reveal">
            <img
              src={serviceImages.terrace}
              alt="Modern residential space"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="ssn-services-why-quote">
              <FaQuoteRight />
              <p>
                A safer space starts with understanding your requirements
                and choosing an appropriate solution.
              </p>
              <span>— Siva Safety Nets</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ssn-services-cta">
        <div className="ssn-services-container ssn-services-cta-inner ssn-service-reveal">
          <div className="ssn-services-cta-icon">
            <FaShieldAlt />
          </div>
          <div className="ssn-services-cta-copy">
            <span>LET'S DISCUSS YOUR REQUIREMENTS</span>
            <h2>Need a Safety Net for Your Space?</h2>
            <p>
              Contact Siva Safety Nets to discuss your service requirements
              and request an estimate.
            </p>
          </div>
          <div className="ssn-services-cta-actions">
            <a
              href={WHATSAPP_URL()}
              target="_blank"
              rel="noreferrer"
              className="ssn-services-btn ssn-services-gold"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
            <a
              href={`tel:+${PHONE}`}
              className="ssn-services-btn ssn-services-outline"
            >
              <FaPhoneAlt /> {DISPLAY_PHONE}
            </a>
            <Link to="/contact" className="ssn-services-cta-contact">
              Go to Contact Page <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

const safetyNetsStyles = `
.ssn-services-page {
  --ssn-navy: #101d35;
  --ssn-navy-2: #192c48;
  --ssn-gold: #e9b95e;
  --ssn-cream: #f8f6f1;
  --ssn-text: #192438;
  --ssn-muted: #657185;
  width: 100%;
  max-width: 100%;
  color: var(--ssn-text);
  font-family: inherit;
  overflow-x: clip;
}
.ssn-services-page *,
.ssn-services-page *::before,
.ssn-services-page *::after { box-sizing: border-box; }
.ssn-services-page img { max-width: 100%; }
.ssn-services-page a { text-decoration: none; }
.ssn-services-page button,
.ssn-services-page input { font: inherit; }
.ssn-services-container {
  width: min(1190px, calc(100% - 44px));
  max-width: 100%;
  margin: 0 auto;
}
.ssn-services-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 88px 0 94px;
  background: var(--ssn-navy);
  color: white;
}
.ssn-services-hero-pattern {
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: .18;
  background-image:
    radial-gradient(rgba(255,255,255,.35) .7px, transparent .7px),
    radial-gradient(ellipse at 85% 25%, rgba(233,185,94,.6), transparent 45%);
  background-size: 23px 23px, 100% 100%;
}
.ssn-services-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);
  align-items: center;
  gap: 55px;
}
.ssn-services-hero-content { min-width: 0; }
.ssn-services-eyebrow,
.ssn-services-section-label {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #b98d46;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
}
.ssn-services-eyebrow { color: var(--ssn-gold); }
.ssn-services-eyebrow span,
.ssn-services-section-label span {
  display: inline-block;
  flex: 0 0 28px;
  width: 28px;
  height: 2px;
  background: var(--ssn-gold);
}
.ssn-services-hero h1 {
  margin: 24px 0 21px;
  color: white;
  font-size: clamp(40px, 5vw, 66px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1.6px;
  overflow-wrap: anywhere;
}
.ssn-services-hero h1 span { color: var(--ssn-gold); }
.ssn-services-hero-content > p {
  max-width: 570px;
  color: #d2d9e4;
  font-size: 17px;
  line-height: 1.85;
}
.ssn-services-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}
.ssn-services-btn {
  min-height: 53px;
  max-width: 100%;
  padding: 12px 19px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.4;
  text-align: center;
  transition: transform .25s, background .25s, box-shadow .25s;
}
.ssn-services-btn:hover { transform: translateY(-3px); }
.ssn-services-gold {
  color: #1a263a;
  background: var(--ssn-gold);
  box-shadow: 0 9px 25px rgba(233,185,94,.14);
}
.ssn-services-gold:hover { background: #f4ca7a; }
.ssn-services-outline {
  border: 1px solid rgba(255,255,255,.35);
  color: white;
}
.ssn-services-outline:hover { background: rgba(255,255,255,.08); }
.ssn-services-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 27px;
}
.ssn-services-trust span {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #d5dce6;
  font-size: 12px;
}
.ssn-services-trust svg { flex: 0 0 auto; color: var(--ssn-gold); }
.ssn-services-hero-visual {
  position: relative;
  min-width: 0;
  padding: 0 0 36px 18px;
}
.ssn-services-hero-photo {
  position: relative;
  height: 390px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.17);
  border-radius: 13px;
  background: #283a50;
}
.ssn-services-hero-photo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform .7s;
}
.ssn-services-hero-photo::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(10,21,37,.72), transparent 65%);
  pointer-events: none;
}
.ssn-services-hero-visual:hover .ssn-services-hero-photo img {
  transform: scale(1.04);
}
.ssn-services-hero-photo-overlay {
  position: absolute;
  z-index: 1;
  right: 18px;
  bottom: 22px;
  left: 18px;
  display: flex;
  align-items: center;
  gap: 13px;
  color: white;
}
.ssn-services-hero-photo-overlay > svg {
  flex: 0 0 45px;
  width: 45px;
  height: 45px;
  padding: 12px;
  border-radius: 9px;
  background: var(--ssn-gold);
  color: var(--ssn-navy);
  font-size: 21px;
}
.ssn-services-hero-photo-overlay > div {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.ssn-services-hero-photo-overlay strong { font-size: 15px; }
.ssn-services-hero-photo-overlay span { color: #dce2eb; font-size: 12px; }
.ssn-services-floating-card {
  position: absolute;
  right: 0;
  bottom: 0;
  width: min(365px, 95%);
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  border: 1px solid #eee7da;
  border-radius: 10px;
  background: white;
  box-shadow: 0 18px 50px rgba(0,0,0,.16);
  color: var(--ssn-text);
}
.ssn-services-floating-icon {
  flex: 0 0 43px;
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  background: #f8f0df;
  color: #9e7028;
  font-size: 18px;
}
.ssn-services-floating-card > div:last-child {
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}
.ssn-services-floating-card strong { font-size: 14px; }
.ssn-services-floating-card span { color: var(--ssn-muted); font-size: 12px; }
.ssn-services-floating-card a {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 3px;
  color: #93671f;
  font-size: 13px;
  font-weight: 800;
}
.ssn-services-quick {
  position: relative;
  z-index: 2;
  border-bottom: 1px solid #eae6dd;
  background: white;
  box-shadow: 0 9px 28px rgba(16,29,53,.035);
}
.ssn-services-quick-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.ssn-services-quick-item {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 23px 13px;
  border: 0;
  border-right: 1px solid #eeeae3;
  background: transparent;
  color: var(--ssn-text);
  text-align: left;
  cursor: pointer;
  transition: background .2s;
}
.ssn-services-quick-item:first-child { border-left: 1px solid #eeeae3; }
.ssn-services-quick-item:hover { background: #fcfaf5; }
.ssn-services-quick-icon {
  flex: 0 0 43px;
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  background: #f8f1e3;
  color: #9d742f;
  font-size: 20px;
}
.ssn-services-quick-icon svg { display: block; max-width: 24px; max-height: 24px; }
.ssn-services-quick-item > div:nth-child(2) {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.ssn-services-quick-item strong { font-size: 14px; line-height: 1.4; }
.ssn-services-quick-item span {
  color: var(--ssn-muted);
  font-size: 12px;
  line-height: 1.5;
  overflow-wrap: anywhere;
}
.ssn-services-quick-arrow {
  flex: 0 0 auto;
  margin-left: auto;
  color: #b28a49;
  font-size: 12px;
}
.ssn-services-catalog {
  padding: 88px 0 100px;
  background: #fff;
}
.ssn-services-heading {
  margin-bottom: 35px;
  text-align: center;
}
.ssn-services-heading .ssn-services-section-label { justify-content: center; }
.ssn-services-heading h2 {
  margin: 17px 0 13px;
  color: var(--ssn-navy);
  font-size: clamp(32px, 4vw, 46px);
  line-height: 1.2;
  letter-spacing: -1px;
}
.ssn-services-heading h2 span { color: #b88a3d; }
.ssn-services-heading > p {
  max-width: 650px;
  margin: 0 auto;
  color: var(--ssn-muted);
  font-size: 16px;
  line-height: 1.8;
}
.ssn-services-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 19px;
  padding: 17px;
  border: 1px solid #ece8df;
  border-radius: 9px;
  background: #fcfbf8;
}
.ssn-services-filters {
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.ssn-services-filter {
  max-width: 100%;
  padding: 10px 13px;
  border: 1px solid #e6e2da;
  border-radius: 5px;
  background: white;
  color: #536076;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: background .2s, color .2s, border-color .2s;
}
.ssn-services-filter:hover {
  border-color: #c6a66b;
  color: #9a712f;
}
.ssn-services-filter.active {
  border-color: var(--ssn-navy);
  background: var(--ssn-navy);
  color: white;
}
.ssn-services-search {
  flex: 0 1 240px;
  min-width: 0;
  height: 44px;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 0 12px;
  border: 1px solid #e5e1d9;
  border-radius: 5px;
  background: white;
  color: #9b8b6d;
}
.ssn-services-search input {
  width: 100%;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--ssn-text);
  font-size: 13px;
}
.ssn-services-results-count {
  margin: 0 0 31px;
  color: #697587;
  font-size: 13px;
}
.ssn-services-results-count strong { color: var(--ssn-navy); }
.ssn-services-group { margin-top: 34px; }
.ssn-services-group-second { margin-top: 70px; }
.ssn-services-group-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}
.ssn-services-group-icon {
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: #f8f0df;
  color: #9b712e;
  font-size: 21px;
}
.ssn-services-group-icon svg { display: block; max-width: 25px; max-height: 25px; }
.ssn-services-group-heading > div:nth-child(2) { min-width: 0; }
.ssn-services-group-heading h3 {
  margin: 0 0 5px;
  color: var(--ssn-navy);
  font-size: 24px;
  line-height: 1.35;
}
.ssn-services-group-heading p {
  margin: 0;
  color: var(--ssn-muted);
  font-size: 14px;
  line-height: 1.7;
}
.ssn-services-group-heading > span {
  margin-left: auto;
  padding: 9px 11px;
  border-radius: 5px;
  background: #f6f3ec;
  color: #8c7144;
  font-size: 11px;
  font-weight: 800;
  white-space: nowrap;
}
.ssn-services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 23px;
}
.ssn-service-card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e4e7ec;
  border-radius: 11px;
  background: white;
  box-shadow: 0 3px 12px rgba(16,29,53,.025);
  transition: transform .3s, box-shadow .3s, border-color .3s;
  transition-delay: var(--ssn-service-delay, 0ms);
}
.ssn-service-card:hover {
  transform: translateY(-5px);
  border-color: #d7bd8b;
  box-shadow: 0 16px 38px rgba(16,29,53,.09);
}
.ssn-service-image {
  position: relative;
  height: 215px;
  overflow: hidden;
  background: linear-gradient(135deg, #dce2e8, #a8b8c8);
}
.ssn-service-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform .6s;
}
.ssn-service-card:hover .ssn-service-image img { transform: scale(1.05); }
.ssn-service-image-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(12,26,45,.48), transparent 62%);
  pointer-events: none;
}
.ssn-service-category {
  position: absolute;
  top: 13px;
  left: 13px;
  max-width: calc(100% - 26px);
  padding: 8px 10px;
  border: 1px solid rgba(255,255,255,.3);
  border-radius: 4px;
  background: rgba(16,29,53,.88);
  color: white;
  font-size: 11px;
  font-weight: 800;
  overflow-wrap: anywhere;
}
.ssn-service-featured {
  position: absolute;
  top: 49px;
  left: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: calc(100% - 26px);
  padding: 7px 9px;
  border-radius: 4px;
  background: var(--ssn-gold);
  color: #17243a;
  font-size: 10px;
  font-weight: 800;
}
.ssn-service-icon {
  position: absolute;
  bottom: 13px;
  left: 15px;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.6);
  border-radius: 9px;
  background: white;
  color: #946a29;
  font-size: 22px;
  box-shadow: 0 5px 16px rgba(0,0,0,.1);
}
.ssn-service-icon svg {
  display: block;
  max-width: 25px;
  max-height: 25px;
}
.ssn-service-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 23px 21px 20px;
}
.ssn-service-card-body h3 {
  margin: 0 0 12px;
  color: var(--ssn-navy);
  font-size: 21px;
  line-height: 1.4;
  overflow-wrap: anywhere;
}
.ssn-service-card-body > p {
  flex: 1;
  min-height: 78px;
  margin: 0 0 20px;
  color: #596579;
  font-size: 15px;
  line-height: 1.8;
}
.ssn-service-card-link {
  width: 100%;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: auto;
  padding: 12px 13px;
  border: 2px solid #159c55;
  border-radius: 7px;
  background: #1cba64;
  color: #fff;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.4;
  text-align: center;
  overflow-wrap: anywhere;
  transition: background .2s, transform .2s, box-shadow .2s;
}
.ssn-service-card-link:hover {
  background: #11994e;
  border-color: #11994e;
  box-shadow: 0 5px 16px rgba(17,153,78,.2);
  transform: translateY(-2px);
}
.ssn-service-card-link > svg:first-child {
  flex: 0 0 auto;
  font-size: 21px;
}
.ssn-service-card-link span { min-width: 0; }
.ssn-service-link-arrow {
  flex: 0 0 auto;
  font-size: 12px;
}
.ssn-services-empty {
  padding: 60px 20px;
  border: 1px dashed #d8d1c3;
  border-radius: 10px;
  text-align: center;
}
.ssn-services-empty > svg { color: #b28a49; font-size: 30px; }
.ssn-services-empty h3 { color: var(--ssn-navy); font-size: 23px; }
.ssn-services-empty p { color: var(--ssn-muted); font-size: 15px; }
.ssn-services-empty button {
  margin-top: 12px;
  padding: 13px 18px;
  border: 0;
  border-radius: 5px;
  background: var(--ssn-navy);
  color: white;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.ssn-services-why {
  padding: 90px 0;
  background: var(--ssn-cream);
}
.ssn-services-why-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, .9fr);
  align-items: center;
  gap: 65px;
}
.ssn-services-why-content { min-width: 0; }
.ssn-services-why-content h2 {
  margin: 20px 0 15px;
  color: var(--ssn-navy);
  font-size: clamp(32px, 4vw, 45px);
  line-height: 1.2;
  letter-spacing: -1px;
}
.ssn-services-why-content h2 span { color: #b88a3d; }
.ssn-services-why-content > p {
  color: var(--ssn-muted);
  font-size: 15px;
  line-height: 1.9;
}
.ssn-services-why-points {
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 29px 0;
}
.ssn-services-why-points > div {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.ssn-services-why-points > div > svg {
  flex: 0 0 auto;
  margin-top: 2px;
  color: #b78b43;
  font-size: 19px;
}
.ssn-services-why-points span {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.ssn-services-why-points strong {
  color: var(--ssn-navy);
  font-size: 15px;
}
.ssn-services-why-points small {
  color: var(--ssn-muted);
  font-size: 13px;
  line-height: 1.7;
}
.ssn-services-dark-btn {
  background: var(--ssn-navy);
  color: white;
}
.ssn-services-dark-btn:hover { background: #263e5d; }
.ssn-services-why-visual {
  position: relative;
  min-width: 0;
  padding: 0 0 35px 20px;
}
.ssn-services-why-visual > img {
  display: block;
  width: 100%;
  height: 405px;
  object-fit: cover;
  border-radius: 11px;
  background: #d9d5cc;
}
.ssn-services-why-quote {
  position: absolute;
  right: 0;
  bottom: 0;
  width: min(340px, 90%);
  padding: 23px;
  border: 1px solid #e8e1d4;
  border-radius: 9px;
  background: white;
  box-shadow: 0 15px 40px rgba(16,29,53,.08);
}
.ssn-services-why-quote > svg { color: #c39a53; font-size: 23px; }
.ssn-services-why-quote p {
  margin: 12px 0;
  color: #334056;
  font-size: 14px;
  line-height: 1.8;
}
.ssn-services-why-quote span {
  color: #967039;
  font-size: 12px;
  font-weight: 800;
}
.ssn-services-cta {
  padding: 65px 0;
  background:
    radial-gradient(ellipse at 85% 30%, rgba(233,185,94,.13), transparent 35%),
    var(--ssn-navy);
  color: white;
}
.ssn-services-cta-inner {
  display: flex;
  align-items: center;
  gap: 23px;
}
.ssn-services-cta-icon {
  flex: 0 0 65px;
  width: 65px;
  height: 65px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(233,185,94,.4);
  border-radius: 12px;
  background: rgba(233,185,94,.1);
  color: var(--ssn-gold);
  font-size: 27px;
}
.ssn-services-cta-copy { flex: 1; min-width: 0; }
.ssn-services-cta-copy > span {
  color: var(--ssn-gold);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
}
.ssn-services-cta-copy h2 {
  margin: 10px 0;
  font-size: clamp(24px, 3vw, 35px);
  line-height: 1.3;
}
.ssn-services-cta-copy p {
  margin: 0;
  color: #d1d9e5;
  font-size: 14px;
  line-height: 1.8;
}
.ssn-services-cta-actions {
  flex: 0 0 235px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ssn-services-cta-actions .ssn-services-btn { width: 100%; }
.ssn-services-cta-contact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 7px 0;
  color: #d6deea;
  font-size: 12px;
  font-weight: 700;
}
.ssn-services-cta-contact svg { color: var(--ssn-gold); }

.ssn-services-floating-whatsapp svg { font-size: 26px; }
.ssn-services-page .ssn-service-reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity .65s ease, transform .65s ease;
}
.ssn-services-page .ssn-service-reveal.ssn-service-visible {
  opacity: 1;
  transform: translateY(0);
}
.ssn-services-page .ssn-service-card.ssn-service-reveal {
  transition:
    opacity .6s ease,
    transform .3s ease,
    box-shadow .3s ease,
    border-color .3s ease;
  transition-delay: var(--ssn-service-delay, 0ms);
}
.ssn-services-page .ssn-service-card.ssn-service-visible:hover {
  transform: translateY(-5px);
}
@media (prefers-reduced-motion: reduce) {
  .ssn-services-page *,
  .ssn-services-page *::before,
  .ssn-services-page *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
  .ssn-services-page .ssn-service-reveal {
    opacity: 1;
    transform: none;
  }
}
@media (max-width: 1050px) {
  .ssn-services-hero-grid { gap: 30px; }
  .ssn-services-quick-item { padding: 18px 10px; gap: 9px; }
  .ssn-services-quick-icon { flex-basis: 37px; width: 37px; height: 37px; }
  .ssn-services-quick-item strong { font-size: 12px; }
  .ssn-services-quick-item span { font-size: 11px; }
  .ssn-services-grid { gap: 16px; }
  .ssn-service-card-body { padding: 20px 17px; }
  .ssn-service-card-body h3 { font-size: 19px; }
  .ssn-service-card-link { font-size: 13px; padding: 11px 8px; }
  .ssn-services-why-grid { gap: 35px; }
}
@media (max-width: 850px) {
  .ssn-services-hero { padding: 70px 0 80px; }
  .ssn-services-hero-grid { grid-template-columns: minmax(0, 1fr); gap: 45px; }
  .ssn-services-hero-content { max-width: 650px; }
  .ssn-services-hero-visual { width: min(570px, 100%); margin: 0 auto; }
  .ssn-services-quick-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .ssn-services-quick-item:nth-child(3) { border-left: 1px solid #eeeae3; }
  .ssn-services-quick-item:nth-child(-n+2) { border-bottom: 1px solid #eeeae3; }
  .ssn-services-toolbar { align-items: stretch; flex-direction: column; }
  .ssn-services-search { flex: 0 0 44px; width: 100%; }
  .ssn-services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .ssn-services-why-grid { grid-template-columns: minmax(0, 1fr); gap: 45px; }
  .ssn-services-why-content { max-width: 650px; }
  .ssn-services-why-visual { width: min(570px, 100%); margin: 0 auto; }
  .ssn-services-cta-inner { flex-wrap: wrap; }
  .ssn-services-cta-copy { flex-basis: calc(100% - 90px); }
  .ssn-services-cta-actions { flex-basis: 100%; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .ssn-services-cta-contact { grid-column: 1 / -1; }
}
@media (max-width: 560px) {
  .ssn-services-container { width: calc(100% - 30px); }
  .ssn-services-hero { padding: 55px 0 68px; }
  .ssn-services-eyebrow,
  .ssn-services-section-label { font-size: 10px; letter-spacing: 1px; }
  .ssn-services-hero h1 { font-size: clamp(36px, 9vw, 48px); letter-spacing: -1px; }
  .ssn-services-hero-content > p { font-size: 15px; }
  .ssn-services-hero-actions { flex-direction: column; align-items: stretch; }
  .ssn-services-btn { width: 100%; min-height: 52px; font-size: 14px; }
  .ssn-services-trust { flex-direction: column; gap: 12px; }
  .ssn-services-hero-visual { padding-left: 0; padding-bottom: 45px; }
  .ssn-services-hero-photo { height: 270px; }
  .ssn-services-floating-card { right: 0; width: 98%; padding: 14px; }
  .ssn-services-quick-item { padding: 15px 8px; gap: 8px; }
  .ssn-services-quick-icon { flex-basis: 32px; width: 32px; height: 32px; font-size: 15px; }
  .ssn-services-quick-item strong { font-size: 11px; }
  .ssn-services-quick-item span { font-size: 10px; }
  .ssn-services-quick-arrow { display: none; }
  .ssn-services-catalog { padding: 60px 0 70px; }
  .ssn-services-heading h2 { font-size: 31px; }
  .ssn-services-heading > p { font-size: 14px; }
  .ssn-services-toolbar { padding: 12px; }
  .ssn-services-filters { gap: 7px; }
  .ssn-services-filter { padding: 10px 11px; font-size: 11px; }
  .ssn-services-group-heading { gap: 10px; align-items: flex-start; }
  .ssn-services-group-icon { flex-basis: 40px; width: 40px; height: 40px; font-size: 17px; }
  .ssn-services-group-heading h3 { font-size: 19px; }
  .ssn-services-group-heading p { font-size: 12px; }
  .ssn-services-group-heading > span { padding: 7px; font-size: 9px; }
  .ssn-services-grid { grid-template-columns: minmax(0, 1fr); gap: 20px; }
  .ssn-service-image { height: 220px; }
  .ssn-service-card-body { padding: 22px 18px 18px; }
  .ssn-service-card-body h3 { font-size: 21px; }
  .ssn-service-card-body > p { min-height: 0; font-size: 15px; }
  .ssn-service-card-link { min-height: 54px; font-size: 14px; }
  .ssn-services-group-second { margin-top: 50px; }
  .ssn-services-why { padding: 60px 0; }
  .ssn-services-why-content h2 { font-size: 33px; }
  .ssn-services-why-content > p { font-size: 14px; }
  .ssn-services-why-points strong { font-size: 14px; }
  .ssn-services-why-points small { font-size: 12px; }
  .ssn-services-why-visual { padding-left: 0; }
  .ssn-services-why-visual > img { height: 280px; }
  .ssn-services-why-quote { right: 0; width: 95%; padding: 17px; }
  .ssn-services-cta { padding: 48px 0; }
  .ssn-services-cta-inner { align-items: flex-start; gap: 14px; }
  .ssn-services-cta-icon { flex-basis: 46px; width: 46px; height: 46px; font-size: 20px; }
  .ssn-services-cta-copy { flex-basis: calc(100% - 60px); }
  .ssn-services-cta-copy h2 { font-size: 25px; }
  .ssn-services-cta-copy p { font-size: 13px; }
  .ssn-services-cta-actions { display: flex; width: 100%; }
  .ssn-services-floating-whatsapp {
    right: 12px;
    bottom: 12px;
    min-height: 51px;
    padding: 10px 16px;
    gap: 8px;
    font-size: 14px;
  }
  .ssn-services-floating-whatsapp svg { font-size: 24px; }
}
@media (max-width: 360px) {
  .ssn-services-container { width: calc(100% - 24px); }
  .ssn-services-hero h1 { font-size: 34px; }
  .ssn-services-quick-item { gap: 6px; }
  .ssn-services-quick-icon { flex-basis: 28px; width: 28px; height: 28px; }
  .ssn-services-quick-item strong { font-size: 10px; }
  .ssn-services-quick-item span { font-size: 9px; }
  .ssn-services-group-heading > span { white-space: normal; text-align: center; }
  .ssn-services-floating-whatsapp {
    right: 8px;
    bottom: 8px;
    padding: 9px 12px;
  }
}

/* ===== HERO OVERLAP FIX ===== */

.ssn-services-page .ssn-services-hero-visual {
  position: relative;
  min-width: 0;
  padding: 0 0 125px 18px;
  isolation: isolate;
}

.ssn-services-page .ssn-services-hero-photo {
  position: relative;
  width: 100%;
  height: 390px;
  overflow: hidden;
  border-radius: 13px;
}

.ssn-services-page .ssn-services-hero-photo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.ssn-services-page .ssn-services-hero-photo::after {
  z-index: 1;
}

.ssn-services-page .ssn-services-hero-photo-overlay {
  position: absolute;
  z-index: 2;
  right: 18px;
  bottom: 20px;
  left: 18px;
  display: flex;
  align-items: center;
  gap: 13px;
  min-width: 0;
  color: #fff;
}

.ssn-services-page .ssn-services-hero-photo-overlay > svg {
  flex: 0 0 45px;
}

.ssn-services-page .ssn-services-hero-photo-overlay > div {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ssn-services-page .ssn-services-hero-photo-overlay strong {
  font-size: 15px;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.ssn-services-page .ssn-services-hero-photo-overlay span {
  font-size: 12px;
  line-height: 1.5;
}

.ssn-services-page .ssn-services-floating-card {
  position: absolute;
  z-index: 3;
  right: 0;
  bottom: 0;
  width: min(365px, calc(100% - 10px));
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px;
  background: #fff;
  border: 1px solid #eee7da;
  border-radius: 10px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.16);
}

.ssn-services-page .ssn-services-floating-icon {
  flex: 0 0 43px;
}

.ssn-services-page .ssn-services-floating-card > div:last-child {
  min-width: 0;
}

.ssn-services-page .ssn-services-floating-card strong {
  font-size: 14px;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.ssn-services-page .ssn-services-floating-card span {
  font-size: 12px;
  line-height: 1.6;
}

.ssn-services-page .ssn-services-floating-card a {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
  line-height: 1.6;
}

/* ===== TABLET ===== */

@media (max-width: 850px) {
  .ssn-services-page .ssn-services-hero-visual {
    width: min(570px, 100%);
    padding: 0 0 120px 12px;
  }

  .ssn-services-page .ssn-services-hero-photo {
    height: 350px;
  }
}

/* ===== MOBILE ===== */

@media (max-width: 560px) {
  .ssn-services-page .ssn-services-hero-visual {
    width: 100%;
    padding: 0 0 145px;
  }

  .ssn-services-page .ssn-services-hero-photo {
    height: 270px;
  }

  .ssn-services-page .ssn-services-hero-photo-overlay {
    right: 12px;
    bottom: 15px;
    left: 12px;
    gap: 10px;
  }

  .ssn-services-page .ssn-services-hero-photo-overlay > svg {
    flex: 0 0 38px;
    width: 38px;
    height: 38px;
    padding: 10px;
  }

  .ssn-services-page .ssn-services-hero-photo-overlay strong {
    font-size: 13px;
    line-height: 1.4;
  }

  .ssn-services-page .ssn-services-hero-photo-overlay span {
    font-size: 11px;
    line-height: 1.5;
  }

  .ssn-services-page .ssn-services-floating-card {
    right: 0;
    bottom: 0;
    width: 100%;
    padding: 14px;
    gap: 10px;
  }

  .ssn-services-page .ssn-services-floating-icon {
    flex-basis: 38px;
    width: 38px;
    height: 38px;
    font-size: 16px;
  }

  .ssn-services-page .ssn-services-floating-card strong {
    font-size: 13px;
  }
}

/* ===== SMALL PHONES ===== */

@media (max-width: 360px) {
  .ssn-services-page .ssn-services-hero-visual {
    padding-bottom: 150px;
  }

  .ssn-services-page .ssn-services-hero-photo {
    height: 245px;
  }

  .ssn-services-page .ssn-services-hero-photo-overlay {
    right: 9px;
    left: 9px;
    gap: 8px;
  }

  .ssn-services-page .ssn-services-hero-photo-overlay strong {
    font-size: 12px;
  }

  .ssn-services-page .ssn-services-floating-card {
    padding: 12px;
  }
}

`;
