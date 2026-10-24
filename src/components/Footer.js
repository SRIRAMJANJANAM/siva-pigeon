import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaCheckCircle,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

const PHONE = "919791170467";
const DISPLAY_PHONE = "+91 97911 70467";
const EMAIL = "Info@domain.com";

const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Siva Safety Nets, I would like to enquire about safety nets and invisible grills in Chennai."
)}`;

const serviceAreas = [
  "Anna Nagar",
  "T. Nagar",
  "Adyar",
  "Velachery",
  "Mylapore",
  "Nungambakkam",
  "Kodambakkam",
  "Ashok Nagar",
  "West Mambalam",
  "Teynampet",
  "Alwarpet",
  "Guindy",
  "Saidapet",
  "Vadapalani",
  "K. K. Nagar",
  "Virugambakkam",
  "Choolaimedu",
];

const services = [
  "Balcony Safety Nets",
  "Children Safety Nets",
  "Pigeon Safety Nets",
  "Bird Protection Nets",
  "Invisible Grills",
  "Anti Bird Spikes",
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const styles = `
.ssn-footer,
.ssn-footer * {
  box-sizing: border-box;
}

.ssn-footer {
  position: relative;
  overflow: hidden;
  color: #dce7ec;
  background: linear-gradient(135deg, #062c3e 0%, #073b53 48%, #041f2d 100%);
  font-family: inherit;
}

.ssn-footer::before {
  content: "";
  position: absolute;
  top: -150px;
  right: -100px;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.035);
  pointer-events: none;
}

.ssn-footer::after {
  content: "";
  position: absolute;
  bottom: -180px;
  left: -100px;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: rgba(241, 211, 155, 0.035);
  pointer-events: none;
}

/* SERVICE COVERAGE */
.ssn-footer-coverage-wrap {
  position: relative;
  z-index: 1;
  padding: 34px 24px 0;
}

.ssn-footer-coverage {
  max-width: 1192px;
  margin: 0 auto;
  padding: 24px;
  border: 1px solid rgba(241, 211, 155, 0.24);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.045);
}

.ssn-footer-coverage-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 18px;
  color: #fff;
  font-size: 17px;
  font-weight: 800;
  line-height: 1.5;
}

.ssn-footer-coverage-pin {
  flex-shrink: 0;
  color: #f1d39b;
  font-size: 18px;
}

.ssn-footer-area-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.ssn-footer-area-list li {
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 7px;
  color: #dce7ec;
  background: rgba(255, 255, 255, 0.055);
  font-size: 12px;
  line-height: 1.35;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.ssn-footer-area-list li:hover {
  color: #f1d39b;
  border-color: rgba(241, 211, 155, 0.6);
  background: rgba(255, 255, 255, 0.09);
}

.ssn-footer-coverage-bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  max-width: 1192px;
  margin: 24px auto 0;
}

.ssn-footer-rating {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  color: #e0eaf0;
  font-size: 13px;
  line-height: 1.6;
}

.ssn-footer-rating-stars {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #f4bc3c;
  font-size: 17px;
}

.ssn-footer-rating-label {
  color: #e0eaf0;
}

.ssn-footer-coverage-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.ssn-footer-coverage-btn {
  min-height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 22px;
  border: 1px solid transparent;
  border-radius: 50px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    background 0.22s ease;
}

.ssn-footer-coverage-btn:hover {
  transform: translateY(-2px);
}

.ssn-footer-coverage-call {
  color: #fff;
  background: #192f4b;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.ssn-footer-coverage-call:hover {
  color: #fff;
  background: #244466;
  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.25);
}

.ssn-footer-coverage-whatsapp {
  color: #fff;
  background: #16a34a;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
}

.ssn-footer-coverage-whatsapp:hover {
  color: #fff;
  background: #12833d;
  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.2);
}

/* MAIN FOOTER */
.ssn-footer-main {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.35fr 0.85fr 1fr 1.1fr;
  gap: 38px;
  max-width: 1240px;
  margin: 0 auto;
  padding: 52px 24px 45px;
}

.ssn-footer-column {
  min-width: 0;
}

.ssn-footer-brand {
  display: inline-block;
  margin-bottom: 18px;
  color: #fff;
  font-size: 25px;
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: -0.5px;
  text-decoration: none;
}

.ssn-footer-brand span {
  color: #f1d39b;
}

.ssn-footer-description {
  margin: 0 0 20px;
  color: #c2d2db;
  font-size: 14px;
  line-height: 1.9;
}

.ssn-footer-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 20px;
}

.ssn-footer-trust span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  color: #e0eaf0;
  font-size: 11px;
  font-weight: 600;
}

.ssn-footer-trust svg {
  color: #f1d39b;
}

.ssn-footer-heading {
  position: relative;
  margin: 4px 0 25px;
  padding-bottom: 13px;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.4px;
}

.ssn-footer-heading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 42px;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, #f1d39b, #d7a64f);
}

.ssn-footer-links {
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.ssn-footer-links a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #c2d2db;
  font-size: 13px;
  line-height: 1.6;
  text-decoration: none;
  transition: color 0.25s ease, transform 0.25s ease;
}

.ssn-footer-links a svg {
  flex-shrink: 0;
  color: #f1d39b;
  font-size: 10px;
}

.ssn-footer-links a:hover {
  color: #f1d39b;
  transform: translateX(4px);
}

.ssn-footer-contact-list {
  display: flex;
  flex-direction: column;
  gap: 19px;
}

.ssn-footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
  color: #c2d2db;
  font-size: 13px;
  line-height: 1.75;
  overflow-wrap: anywhere;
}

.ssn-footer-contact-icon {
  display: flex;
  flex: 0 0 38px;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(241, 211, 155, 0.25);
  border-radius: 9px;
  color: #f1d39b;
  background: rgba(255, 255, 255, 0.055);
  font-size: 14px;
}

.ssn-footer-contact-item strong {
  display: block;
  margin-bottom: 2px;
  color: #fff;
  font-size: 12px;
  font-weight: 800;
}

.ssn-footer-contact-item a {
  color: #c2d2db;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color 0.25s ease;
}

.ssn-footer-contact-item a:hover {
  color: #f1d39b;
}

.ssn-footer-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 23px;
  padding: 12px 17px;
  border: 1px solid #f1d39b;
  border-radius: 7px;
  color: #073b53;
  background: linear-gradient(135deg, #f1d39b, #d7a64f);
  font-size: 12px;
  font-weight: 900;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.ssn-footer-cta:hover {
  color: #073b53;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(215, 166, 79, 0.22);
}

/* COPYRIGHT */
.ssn-footer-bottom {
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.13);
}

.ssn-footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 18px;
  max-width: 1240px;
  margin: 0 auto;
  padding: 22px 24px;
}

.ssn-footer-copyright {
  margin: 0;
  color: #c2d2db;
  font-size: 12px;
  line-height: 1.8;
}

.ssn-footer-developer {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  color: #cbd8e0;
  font-size: 12px;
  line-height: 1.7;
}

.ssn-footer-developer a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 13px;
  border: 1px solid rgba(241, 211, 155, 0.6);
  border-radius: 6px;
  color: #073b52;
  background: linear-gradient(135deg, #f1d39b, #d7a64f);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.7px;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.ssn-footer-developer a:hover {
  color: #073b52;
  transform: translateY(-2px);
  box-shadow: 0 7px 20px rgba(189, 133, 44, 0.35);
}

/* TABLET */
@media (max-width: 1000px) {
  .ssn-footer-main {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 38px 32px;
    padding: 45px 24px 40px;
  }

  .ssn-footer-coverage-wrap {
    padding: 28px 24px 0;
  }

  .ssn-footer-coverage {
    padding: 22px;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .ssn-footer-coverage-wrap {
    padding: 25px 16px 0;
  }

  .ssn-footer-coverage {
    padding: 18px 15px;
    border-radius: 11px;
  }

  .ssn-footer-coverage-heading {
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 15px;
    font-size: 15px;
  }

  .ssn-footer-area-list {
    gap: 7px;
  }

  .ssn-footer-area-list li {
    padding: 7px 9px;
    font-size: 11px;
  }

  .ssn-footer-coverage-bottom {
    gap: 17px;
    margin-top: 20px;
  }

  .ssn-footer-rating {
    gap: 9px;
    font-size: 12px;
  }

  .ssn-footer-rating-stars {
    font-size: 15px;
    gap: 3px;
  }

  .ssn-footer-coverage-actions {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    width: 100%;
    gap: 10px;
  }

  .ssn-footer-coverage-btn {
    width: 100%;
    min-height: 46px;
    padding: 0 14px;
    font-size: 13px;
  }

  .ssn-footer-main {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding: 35px 20px 32px;
  }

  .ssn-footer-column {
    width: 100%;
    min-width: 0;
  }

  .ssn-footer-brand {
    font-size: 23px;
  }

  .ssn-footer-heading {
    margin-bottom: 22px;
  }

  .ssn-footer-contact-item {
    gap: 11px;
  }

  .ssn-footer-bottom-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 14px;
    padding: 20px 20px 35px;
  }

  .ssn-footer-copyright {
    display: block;
    width: 100%;
    margin: 0;
    font-size: 11px;
    line-height: 1.8;
    overflow-wrap: anywhere;
  }

  .ssn-footer-developer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
    margin: 0;
    font-size: 11px;
    line-height: 1.7;
  }

  .ssn-footer-developer a {
    display: inline-flex;
    max-width: 100%;
    padding: 9px 12px;
    font-size: 10px;
    letter-spacing: 0.6px;
    line-height: 1.5;
    white-space: normal;
    overflow-wrap: anywhere;
    text-align: left;
  }

  .ssn-footer-cta {
    max-width: 100%;
  }
}

@media (max-width: 360px) {
  .ssn-footer-coverage-wrap {
    padding-right: 12px;
    padding-left: 12px;
  }

  .ssn-footer-coverage {
    padding: 15px 12px;
  }

  .ssn-footer-main {
    padding-right: 16px;
    padding-left: 16px;
  }

  .ssn-footer-bottom-inner {
    padding-right: 16px;
    padding-left: 16px;
  }

  .ssn-footer-developer a {
    font-size: 9px;
    letter-spacing: 0.4px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ssn-footer *,
  .ssn-footer *::before,
  .ssn-footer *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

export default function Footer() {
  return (
    <>
      <style>{styles}</style>

      <footer className="ssn-footer">
        {/* CHENNAI SERVICE COVERAGE */}
        <section
          className="ssn-footer-coverage-wrap"
          aria-labelledby="ssn-footer-coverage-heading"
        >
          <div className="ssn-footer-coverage">
            <h3
              className="ssn-footer-coverage-heading"
              id="ssn-footer-coverage-heading"
            >
              <FaMapMarkerAlt className="ssn-footer-coverage-pin" />
              Primary Service Coverage in Chennai
            </h3>

            <ul className="ssn-footer-area-list">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="ssn-footer-coverage-bottom">
            <div
              className="ssn-footer-rating"
              aria-label="Displayed service rating: 5.0"
            >
              <span className="ssn-footer-rating-stars" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </span>

              <span className="ssn-footer-rating-label">
                5.0 Rated Service in Chennai
              </span>
            </div>

            <div className="ssn-footer-coverage-actions">
              <a
                href={`tel:+${PHONE}`}
                className="ssn-footer-coverage-btn ssn-footer-coverage-call"
              >
                <FaPhoneAlt />
                Call Now: {DISPLAY_PHONE}
              </a>

              <a
                href={WHATSAPP_URL}
                className="ssn-footer-coverage-btn ssn-footer-coverage-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                WhatsApp Quote
              </a>
            </div>
          </div>
        </section>

        {/* MAIN FOOTER */}
        <div className="ssn-footer-main">
          <div className="ssn-footer-column">
            <Link to="/" className="ssn-footer-brand">
              SIVA <span>SAFETY NETS</span>
            </Link>

            <p className="ssn-footer-description">
              Your trusted partner for premium safety net solutions.
              We provide reliable protection for balconies, windows,
              apartments, and residential and commercial spaces.
            </p>

            <div className="ssn-footer-trust">
              <span>
                <FaShieldAlt />
                Safety First
              </span>

              <span>
                <FaCheckCircle />
                Quality Service
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="ssn-footer-column">
            <h3 className="ssn-footer-heading">Quick Links</h3>

            <ul className="ssn-footer-links">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    <FaChevronRight />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="ssn-footer-column">
            <h3 className="ssn-footer-heading">Our Services</h3>

            <ul className="ssn-footer-links">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services">
                    <FaChevronRight />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="ssn-footer-column">
            <h3 className="ssn-footer-heading">Contact Us</h3>

            <div className="ssn-footer-contact-list">
              <div className="ssn-footer-contact-item">
                <span className="ssn-footer-contact-icon">
                  <FaPhoneAlt />
                </span>

                <span>
                  <strong>Service Enquiries</strong>
                  <a href={`tel:+${PHONE}`}>{DISPLAY_PHONE}</a>
                </span>
              </div>

              <div className="ssn-footer-contact-item">
                <span className="ssn-footer-contact-icon">
                  <FaWhatsapp />
                </span>

                <span>
                  <strong>WhatsApp</strong>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with us
                  </a>
                </span>
              </div>

              <div className="ssn-footer-contact-item">
                <span className="ssn-footer-contact-icon">
                  <FaEnvelope />
                </span>

                <span>
                  <strong>Email Us</strong>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </span>
              </div>

              <div className="ssn-footer-contact-item">
                <span className="ssn-footer-contact-icon">
                  <FaMapMarkerAlt />
                </span>

                <span>
                  <strong>Service Location</strong>
                  Entire Chennai
                </span>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              className="ssn-footer-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a Free Quote
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* COPYRIGHT AND DEVELOPER CREDIT */}
        <div className="ssn-footer-bottom">
          <div className="ssn-footer-bottom-inner">
            <p className="ssn-footer-copyright">
              © {new Date().getFullYear()} Siva Safety Nets. All rights
              reserved.
            </p>

            <p className="ssn-footer-developer">
              <span>Designed &amp; Developed by</span>

              <a
                href="https://smyvisiontechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SMYVISION TECHNOLOGIES
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
