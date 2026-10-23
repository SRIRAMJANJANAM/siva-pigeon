import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaTools,
  FaCalendarCheck,
  FaHeadset,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const PHONE = "919940399826";
const DISPLAY_PHONE = "+91 99403 99826";

const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Siva Safety Nets, I would like to know more about your safety net and invisible grill services."
)}`;

const services = [
  "Balcony Safety Nets",
  "Invisible Grills",
  "Anti Bird Netting",
  "Children Safety Nets",
  "Terrace Safety Nets",
  "Pet & Cat Safety Nets",
  "Duct Area Safety Nets",
  "Pigeon Control",
  "Bird Spikes",
  "Sports Nets",
  "Ceiling Cloth Hangers",
  "Other Enquiry",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".ssn-contact .ssn-reveal"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("ssn-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ssn-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const location = formData.get("location");
    const message = formData.get("message");

    const whatsappMessage = [
      "Hello Siva Safety Nets!",
      "",
      "I would like to enquire about your services.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Location: ${location || "Not specified"}`,
      `Message: ${message || "Please contact me with more details."}`,
    ].join("\n");

    setSubmitted(true);

    window.open(
      `https://wa.me/${PHONE}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="ssn-contact">
      <style>{contactStyles}</style>

      {/* HERO */}
      <section className="ssn-contact-hero">
        <div className="ssn-contact-hero-bg" />

        <div className="ssn-contact-container ssn-contact-hero-inner">
          <div className="ssn-reveal">
            <div className="ssn-contact-eyebrow">
              <span />
              WE ARE HERE TO HELP
            </div>

            <h1>
              Let's Make Your
              <br />
              <span>Space Safer.</span>
            </h1>

            <p className="ssn-contact-hero-text">
              Looking for reliable balcony safety nets, pigeon protection
              or invisible grills? Get in touch with Siva Safety Nets for
              a personalised enquiry and a suitable safety solution.
            </p>

            <div className="ssn-contact-hero-actions">
              <a href="#contact-form" className="ssn-contact-btn ssn-gold-btn">
                Request a Free Estimate
                <FaArrowRight />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="ssn-contact-btn ssn-outline-btn"
              >
                <FaWhatsapp />
                WhatsApp Us
              </a>
            </div>

            <div className="ssn-contact-trust">
              <span>
                <FaCheckCircle /> Personalised Enquiries
              </span>
              <span>
                <FaCheckCircle /> Safety-Focused Solutions
              </span>
            </div>
          </div>

          <div className="ssn-contact-hero-card ssn-reveal">
            <div className="ssn-contact-card-icon">
              <FaHeadset />
            </div>
            <span className="ssn-contact-card-label">
              NEED ASSISTANCE?
            </span>
            <h2>Talk to Our Team</h2>
            <p>
              Tell us what you need. We will help you explore the right
              safety net or invisible grill solution.
            </p>

            <a href={`tel:+${PHONE}`} className="ssn-contact-phone">
              <FaPhoneAlt />
              {DISPLAY_PHONE}
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="ssn-contact-card-whatsapp"
            >
              Chat on WhatsApp <FaArrowRight />
            </a>

            <div className="ssn-contact-card-bottom">
              <FaShieldAlt />
              Your safety enquiry matters to us.
            </div>
          </div>
        </div>

        <div className="ssn-contact-hero-bottom" />
      </section>

      {/* CONTACT INFORMATION */}
      <section className="ssn-contact-info-section">
        <div className="ssn-contact-container">
          <div className="ssn-contact-info-grid">
            <a
              href={`tel:+${PHONE}`}
              className="ssn-contact-info-card ssn-reveal"
            >
              <div className="ssn-contact-info-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <span>CALL US DIRECTLY</span>
                <h3>{DISPLAY_PHONE}</h3>
                <p>Speak with our team</p>
              </div>
              <FaArrowRight className="ssn-contact-info-arrow" />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="ssn-contact-info-card ssn-reveal"
            >
              <div className="ssn-contact-info-icon ssn-whatsapp-icon">
                <FaWhatsapp />
              </div>
              <div>
                <span>WHATSAPP ENQUIRIES</span>
                <h3>Chat With Us</h3>
                <p>Share your requirements</p>
              </div>
              <FaArrowRight className="ssn-contact-info-arrow" />
            </a>

            <div className="ssn-contact-info-card ssn-reveal">
              <div className="ssn-contact-info-icon">
                <FaCalendarCheck />
              </div>
              <div>
                <span>SITE VISIT</span>
                <h3>Request an Inspection</h3>
                <p>Availability can be confirmed by phone</p>
              </div>
              <FaArrowRight className="ssn-contact-info-arrow" />
            </div>
          </div>
        </div>
      </section>

      {/* FORM + SIDE CONTENT */}
      <section className="ssn-contact-main">
        <div className="ssn-contact-container ssn-contact-main-grid">
          <div className="ssn-contact-form-panel ssn-reveal" id="contact-form">
            <div className="ssn-contact-section-label">
              <span />
              SEND AN ENQUIRY
            </div>

            <h2>
              Tell Us What
              <br />
              You <span>Need.</span>
            </h2>

            <p className="ssn-contact-form-intro">
              Fill in the details below. Your enquiry will open in WhatsApp
              so you can send it directly to our team.
            </p>

            <form onSubmit={handleSubmit} className="ssn-contact-form">
              <div className="ssn-contact-field-row">
                <div className="ssn-contact-field">
                  <label htmlFor="ssn-name">Your Name *</label>
                  <input
                    id="ssn-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="ssn-contact-field">
                  <label htmlFor="ssn-phone">Phone Number *</label>
                  <input
                    id="ssn-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    pattern="[0-9+\s()-]{8,20}"
                    title="Please enter a valid phone number"
                    required
                  />
                </div>
              </div>

              <div className="ssn-contact-field-row">
                <div className="ssn-contact-field">
                  <label htmlFor="ssn-service">Service Required *</label>
                  <select id="ssn-service" name="service" required defaultValue="">
                    <option value="" disabled>
                      Choose a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="ssn-contact-field">
                  <label htmlFor="ssn-location">Your Location</label>
                  <input
                    id="ssn-location"
                    name="location"
                    type="text"
                    placeholder="Area / City"
                    autoComplete="address-level2"
                  />
                </div>
              </div>

              <div className="ssn-contact-field">
                <label htmlFor="ssn-message">Tell Us More</label>
                <textarea
                  id="ssn-message"
                  name="message"
                  rows="5"
                  placeholder="Describe your requirement, balcony size, building type or any questions..."
                />
              </div>

              <button type="submit" className="ssn-contact-submit">
                <FaWhatsapp />
                Send Enquiry on WhatsApp
                <FaArrowRight />
              </button>

              {submitted && (
                <p className="ssn-contact-submit-note">
                  If WhatsApp did not open, please use the WhatsApp button
                  or call us directly.
                </p>
              )}

              <p className="ssn-contact-privacy">
                <FaShieldAlt />
                Your details are used to help with your enquiry.
              </p>
            </form>
          </div>

          <aside className="ssn-contact-sidebar ssn-reveal">
            <div className="ssn-contact-sidebar-image">
              <img
                src="images/invisible-grills.webp"
                alt="Modern residential balcony and home interior"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="ssn-contact-image-overlay">
                <span>SAFETY STARTS AT HOME</span>
                <h3>Protect What Matters Most.</h3>
              </div>
            </div>

            <div className="ssn-contact-sidebar-content">
              <h3>How Can We Help?</h3>
              <p>
                From balcony protection to pigeon control, tell us about
                your space and the solution you are looking for.
              </p>

              <div className="ssn-contact-benefit">
                <div><FaShieldAlt /></div>
                <span>
                  <strong>Safety-Focused Solutions</strong>
                  <small>Solutions tailored to your requirements</small>
                </span>
              </div>

              <div className="ssn-contact-benefit">
                <div><FaTools /></div>
                <span>
                  <strong>Multiple Service Options</strong>
                  <small>Safety nets, bird nets and invisible grills</small>
                </span>
              </div>

              <div className="ssn-contact-benefit">
                <div><FaClock /></div>
                <span>
                  <strong>Easy Enquiry Process</strong>
                  <small>Call or message us to discuss your needs</small>
                </span>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="ssn-contact-sidebar-link"
              >
                Start a WhatsApp Chat <FaArrowRight />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* SERVICE SHORTCUTS */}
      <section className="ssn-contact-services">
        <div className="ssn-contact-container">
          <div className="ssn-contact-services-heading ssn-reveal">
            <div className="ssn-contact-section-label">
              <span />
              OUR SERVICES
            </div>
            <h2>
              Need Help With a <span>Specific Service?</span>
            </h2>
            <p>
              Explore our safety solutions or contact us for guidance.
            </p>
          </div>

          <div className="ssn-contact-service-grid">
            {[
              {
                title: "Balcony Safety Nets",
                text: "Added protection for balconies and open spaces.",
              },
              {
                title: "Invisible Grills",
                text: "A practical safety option for selected windows and balconies.",
              },
              {
                title: "Pigeon & Bird Nets",
                text: "Help discourage birds from entering unwanted areas.",
              },
              {
                title: "Children & Pet Safety",
                text: "Discuss suitable safety net options for your home.",
              },
            ].map((item, index) => (
              <div
                className="ssn-contact-service-card ssn-reveal"
                key={item.title}
                style={{ "--ssn-delay": `${index * 100}ms` }}
              >
                <div className="ssn-contact-service-number">
                  0{index + 1}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a
                  href={`${WHATSAPP_URL}&service=${encodeURIComponent(
                    item.title
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Enquire about ${item.title}`}
                >
                  Enquire Now <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ssn-contact-final">
        <div className="ssn-contact-container ssn-contact-final-inner ssn-reveal">
          <div>
            <span>LET'S TALK ABOUT YOUR REQUIREMENTS</span>
            <h2>
              Your Safer Space
              <br />
              Starts With a Conversation.
            </h2>
            <p>
              Contact Siva Safety Nets to discuss your safety net or
              invisible grill enquiry.
            </p>
          </div>

          <div className="ssn-contact-final-actions">
            <a href={`tel:+${PHONE}`} className="ssn-contact-btn ssn-gold-btn">
              <FaPhoneAlt /> Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="ssn-contact-btn ssn-final-whatsapp"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
            <Link to="/safety-nets" className="ssn-contact-final-link">
              Explore Our Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const contactStyles = `
.ssn-contact {
  --ssn-navy: #101d35;
  --ssn-navy-light: #172945;
  --ssn-gold: #e9b95e;
  --ssn-cream: #f8f6f1;
  --ssn-text: #192438;
  --ssn-muted: #6b7483;
  color: var(--ssn-text);
  font-family: inherit;
  overflow: hidden;
}
.ssn-contact * { box-sizing: border-box; }
.ssn-contact a { text-decoration: none; }
.ssn-contact-container {
  width: min(1160px, calc(100% - 44px));
  margin: 0 auto;
}
.ssn-contact-hero {
  position: relative;
  isolation: isolate;
  background: var(--ssn-navy);
  color: #fff;
  padding: 95px 0 104px;
}
.ssn-contact-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    radial-gradient(ellipse at 78% 20%, rgba(233,185,94,.16), transparent 37%),
    radial-gradient(ellipse at 10% 90%, rgba(52,92,146,.22), transparent 42%),
    linear-gradient(125deg, #101d35 10%, #172945 100%);
}
.ssn-contact-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: .15;
  background-image: radial-gradient(rgba(255,255,255,.38) .7px, transparent .7px);
  background-size: 23px 23px;
  pointer-events: none;
}
.ssn-contact-hero-inner {
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  align-items: center;
  gap: 70px;
}
.ssn-contact-eyebrow,
.ssn-contact-section-label {
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.2px;
}
.ssn-contact-eyebrow { color: var(--ssn-gold); }
.ssn-contact-eyebrow span,
.ssn-contact-section-label span {
  width: 31px;
  height: 2px;
  background: var(--ssn-gold);
  display: inline-block;
}
.ssn-contact-hero h1 {
  margin: 24px 0 20px;
  font-size: clamp(42px, 5.5vw, 70px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -2.5px;
}
.ssn-contact-hero h1 span,
.ssn-contact-form-panel h2 span,
.ssn-contact-services-heading h2 span {
  color: var(--ssn-gold);
}
.ssn-contact-hero-text {
  max-width: 570px;
  color: #c1cad8;
  font-size: 16px;
  line-height: 1.9;
}
.ssn-contact-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  margin-top: 30px;
}
.ssn-contact-btn {
  min-height: 53px;
  padding: 0 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 800;
  transition: transform .25s, background .25s, box-shadow .25s;
}
.ssn-contact-btn:hover {
  transform: translateY(-3px);
}
.ssn-gold-btn {
  background: var(--ssn-gold);
  color: #172238;
  box-shadow: 0 9px 24px rgba(233,185,94,.16);
}
.ssn-gold-btn:hover { background: #f5cb7a; }
.ssn-outline-btn {
  border: 1px solid rgba(255,255,255,.28);
  color: #fff;
}
.ssn-outline-btn:hover { background: rgba(255,255,255,.08); }
.ssn-contact-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 28px;
  color: #c8d1dd;
  font-size: 11px;
}
.ssn-contact-trust span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}
.ssn-contact-trust svg { color: var(--ssn-gold); }
.ssn-contact-hero-card {
  padding: 36px 30px 26px;
  border: 1px solid rgba(255,255,255,.13);
  border-radius: 15px;
  background: linear-gradient(145deg, rgba(255,255,255,.105), rgba(255,255,255,.035));
  box-shadow: 0 24px 70px rgba(0,0,0,.18);
  backdrop-filter: blur(10px);
}
.ssn-contact-card-icon {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  margin-bottom: 25px;
  color: var(--ssn-navy);
  background: var(--ssn-gold);
  border-radius: 12px;
  font-size: 24px;
}
.ssn-contact-card-label {
  color: var(--ssn-gold);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}
.ssn-contact-hero-card h2 {
  margin: 10px 0;
  font-size: 28px;
}
.ssn-contact-hero-card > p {
  color: #c2ccda;
  font-size: 13px;
  line-height: 1.8;
}
.ssn-contact-phone {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
  color: white;
  font-size: clamp(19px, 2vw, 24px);
  font-weight: 800;
}
.ssn-contact-phone svg { color: var(--ssn-gold); }
.ssn-contact-card-whatsapp {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 23px;
  padding: 16px 17px;
  background: #20b968;
  color: white;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 800;
  transition: background .2s;
}
.ssn-contact-card-whatsapp:hover { background: #159c55; }
.ssn-contact-card-bottom {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 23px;
  color: #aebccd;
  font-size: 11px;
}
.ssn-contact-card-bottom svg { color: var(--ssn-gold); }
.ssn-contact-hero-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--ssn-gold), transparent);
}
.ssn-contact-info-section {
  position: relative;
  z-index: 2;
  margin-top: -36px;
}
.ssn-contact-info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.ssn-contact-info-card {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 24px 20px;
  background: white;
  border: 1px solid #ece8df;
  border-radius: 10px;
  box-shadow: 0 12px 35px rgba(16,29,53,.07);
  color: var(--ssn-text);
  transition: transform .25s, box-shadow .25s;
}
.ssn-contact-info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 17px 40px rgba(16,29,53,.12);
}
.ssn-contact-info-icon {
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: #f8f1e3;
  color: #9b6b1c;
  font-size: 19px;
}
.ssn-contact-info-icon.ss n-whatsapp-icon { background: #e8f8ee; }
.ssn-contact-info-icon.ssn-whatsapp-icon { background: #e8f8ee; color: #169b54; }
.ssn-contact-info-card > div:nth-child(2) { min-width: 0; }
.ssn-contact-info-card span {
  color: #8a7450;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.2px;
}
.ssn-contact-info-card h3 {
  margin: 7px 0 4px;
  overflow-wrap: anywhere;
  font-size: 15px;
  font-weight: 800;
}
.ssn-contact-info-card p {
  margin: 0;
  color: var(--ssn-muted);
  font-size: 11px;
  line-height: 1.5;
}
.ssn-contact-info-arrow {
  flex: 0 0 auto;
  margin-left: auto;
  color: #b59a6b;
  font-size: 12px;
}
.ssn-contact-main {
  padding: 105px 0 100px;
  background: #fff;
}
.ssn-contact-main-grid {
  display: grid;
  grid-template-columns: 1.08fr .82fr;
  align-items: start;
  gap: 65px;
}
.ssn-contact-section-label { color: #9a7537; }
.ssn-contact-form-panel h2 {
  margin: 20px 0 13px;
  color: var(--ssn-navy);
  font-size: clamp(35px, 4vw, 49px);
  line-height: 1.13;
  letter-spacing: -1.4px;
}
.ssn-contact-form-panel h2 span { color: #c08c35; }
.ssn-contact-form-intro {
  margin: 0 0 30px;
  color: var(--ssn-muted);
  font-size: 14px;
  line-height: 1.85;
}
.ssn-contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.ssn-contact-field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 17px;
}
.ssn-contact-field {
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.ssn-contact-field label {
  color: #243149;
  font-size: 12px;
  font-weight: 800;
}
.ssn-contact-field input,
.ssn-contact-field select,
.ssn-contact-field textarea {
  width: 100%;
  min-width: 0;
  border: 1px solid #e1e4e9;
  border-radius: 7px;
  background: #fbfcfd;
  padding: 14px 15px;
  color: var(--ssn-text);
  font: inherit;
  font-size: 13px;
  outline: none;
  transition: border-color .2s, box-shadow .2s, background .2s;
}
.ssn-contact-field input,
.ssn-contact-field select { height: 49px; }
.ssn-contact-field textarea {
  min-height: 125px;
  resize: vertical;
  line-height: 1.7;
}
.ssn-contact-field input:focus,
.ssn-contact-field select:focus,
.ssn-contact-field textarea:focus {
  background: white;
  border-color: #c59a50;
  box-shadow: 0 0 0 3px rgba(197,154,80,.12);
}
.ssn-contact-field input::placeholder,
.ssn-contact-field textarea::placeholder { color: #a4aab4; }
.ssn-contact-submit {
  width: 100%;
  min-height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  border: none;
  border-radius: 7px;
  background: var(--ssn-navy);
  color: white;
  font: inherit;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition: transform .25s, background .25s;
}
.ssn-contact-submit:hover {
  background: #223958;
  transform: translateY(-2px);
}
.ssn-contact-submit svg:first-child { color: #4ee18c; font-size: 18px; }
.ssn-contact-submit svg:last-child { color: var(--ssn-gold); }
.ssn-contact-submit-note {
  margin: -7px 0 0;
  color: #9b6b1c;
  font-size: 12px;
  line-height: 1.6;
}
.ssn-contact-privacy {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: -5px 0 0;
  color: #8b94a2;
  font-size: 10px;
}
.ssn-contact-privacy svg { color: #b58b47; }
.ssn-contact-sidebar {
  overflow: hidden;
  border: 1px solid #ece8e0;
  border-radius: 12px;
  background: var(--ssn-cream);
}
.ssn-contact-sidebar-image {
  position: relative;
  height: 270px;
  overflow: hidden;
  background: #d9d5cc;
}
.ssn-contact-sidebar-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform .7s;
}
.ssn-contact-sidebar:hover .ssn-contact-sidebar-image img {
  transform: scale(1.04);
}
.ssn-contact-image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 28px;
  color: white;
  background: linear-gradient(0deg, rgba(10,22,39,.88), transparent 90%);
}
.ssn-contact-image-overlay span {
  color: var(--ssn-gold);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.7px;
}
.ssn-contact-image-overlay h3 {
  margin: 10px 0 0;
  max-width: 310px;
  font-size: 29px;
  line-height: 1.2;
}
.ssn-contact-sidebar-content { padding: 29px; }
.ssn-contact-sidebar-content > h3 {
  margin: 0 0 10px;
  color: var(--ssn-navy);
  font-size: 23px;
}
.ssn-contact-sidebar-content > p {
  margin: 0 0 24px;
  color: var(--ssn-muted);
  font-size: 12px;
  line-height: 1.8;
}
.ssn-contact-benefit {
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 19px 0;
}
.ssn-contact-benefit > div {
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  background: white;
  color: #b4873d;
  font-size: 17px;
}
.ssn-contact-benefit span {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.ssn-contact-benefit strong {
  color: #233047;
  font-size: 12px;
}
.ssn-contact-benefit small {
  color: #788191;
  font-size: 10px;
  line-height: 1.5;
}
.ssn-contact-sidebar-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 25px;
  padding: 16px 18px;
  border-radius: 7px;
  background: var(--ssn-navy);
  color: white;
  font-size: 12px;
  font-weight: 800;
  transition: background .2s;
}
.ssn-contact-sidebar-link:hover { background: #243c5c; }
.ssn-contact-sidebar-link svg { color: var(--ssn-gold); }
.ssn-contact-services {
  padding: 85px 0 95px;
  background: var(--ssn-cream);
}
.ssn-contact-services-heading {
  margin-bottom: 36px;
  text-align: center;
}
.ssn-contact-services-heading .ssn-contact-section-label {
  justify-content: center;
}
.ssn-contact-services-heading h2 {
  margin: 18px 0 12px;
  color: var(--ssn-navy);
  font-size: clamp(28px, 3.6vw, 43px);
  line-height: 1.2;
  letter-spacing: -1px;
}
.ssn-contact-services-heading h2 span { color: #b58537; }
.ssn-contact-services-heading > p {
  color: var(--ssn-muted);
  font-size: 13px;
  line-height: 1.8;
}
.ssn-contact-service-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 17px;
}
.ssn-contact-service-card {
  padding: 27px 23px;
  border: 1px solid #e9e4da;
  border-radius: 10px;
  background: white;
  transition: transform .3s, box-shadow .3s, border-color .3s;
  transition-delay: var(--ssn-delay, 0ms);
}
.ssn-contact-service-card:hover {
  transform: translateY(-6px);
  border-color: #d5b77f;
  box-shadow: 0 15px 35px rgba(16,29,53,.07);
}
.ssn-contact-service-number {
  margin-bottom: 23px;
  color: #c39a53;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
}
.ssn-contact-service-card h3 {
  margin: 0 0 12px;
  color: var(--ssn-navy);
  font-size: 17px;
  line-height: 1.45;
}
.ssn-contact-service-card p {
  min-height: 59px;
  margin: 0 0 20px;
  color: var(--ssn-muted);
  font-size: 12px;
  line-height: 1.8;
}
.ssn-contact-service-card a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid #eee9df;
  color: #98702f;
  font-size: 11px;
  font-weight: 800;
}
.ssn-contact-service-card a svg { transition: transform .2s; }
.ssn-contact-service-card a:hover svg { transform: translateX(4px); }
.ssn-contact-final {
  padding: 75px 0;
  background:
    radial-gradient(ellipse at 85% 50%, rgba(233,185,94,.13), transparent 35%),
    var(--ssn-navy);
  color: white;
}
.ssn-contact-final-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 45px;
}
.ssn-contact-final-inner > div:first-child { max-width: 630px; }
.ssn-contact-final-inner > div:first-child > span {
  color: var(--ssn-gold);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}
.ssn-contact-final h2 {
  margin: 16px 0 13px;
  font-size: clamp(30px, 4vw, 46px);
  line-height: 1.17;
  letter-spacing: -1px;
}
.ssn-contact-final p {
  margin: 0;
  color: #c1cad8;
  font-size: 13px;
  line-height: 1.8;
}
.ssn-contact-final-actions {
  min-width: 205px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
}
.ssn-final-whatsapp {
  border: 1px solid rgba(255,255,255,.25);
  color: white;
}
.ssn-final-whatsapp:hover { background: rgba(255,255,255,.08); }
.ssn-contact-final-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 8px 0;
  color: #d3dbe5;
  font-size: 11px;
  font-weight: 700;
}
.ssn-contact-final-link svg { color: var(--ssn-gold); }
.ssn-contact .ssn-reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity .7s ease, transform .7s ease;
}
.ssn-contact .ssn-reveal.ssn-visible {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .ssn-contact *,
  .ssn-contact *::before,
  .ssn-contact *::after {
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
    animation-duration: .01ms !important;
  }
  .ssn-contact .ssn-reveal {
    opacity: 1;
    transform: none;
  }
}
@media (max-width: 1000px) {
  .ssn-contact-hero-inner { gap: 35px; }
  .ssn-contact-main-grid { gap: 35px; }
  .ssn-contact-info-grid { gap: 12px; }
  .ssn-contact-info-card { padding: 20px 14px; gap: 11px; }
  .ssn-contact-info-icon { flex-basis: 42px; width: 42px; height: 42px; }
  .ssn-contact-info-card h3 { font-size: 13px; }
  .ssn-contact-service-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 760px) {
  .ssn-contact-container { width: min(100% - 34px, 560px); }
  .ssn-contact-hero { padding: 70px 0 82px; }
  .ssn-contact-hero-inner { grid-template-columns: 1fr; gap: 38px; }
  .ssn-contact-hero h1 { font-size: clamp(40px, 10vw, 58px); letter-spacing: -1.5px; }
  .ssn-contact-hero-text { font-size: 14px; }
  .ssn-contact-hero-card { padding: 28px 23px 23px; }
  .ssn-contact-info-section { margin-top: -27px; }
  .ssn-contact-info-grid { grid-template-columns: 1fr; gap: 11px; }
  .ssn-contact-info-card { padding: 18px; }
  .ssn-contact-info-card h3 { font-size: 15px; }
  .ssn-contact-main { padding: 75px 0; }
  .ssn-contact-main-grid { grid-template-columns: 1fr; gap: 45px; }
  .ssn-contact-sidebar { max-width: 560px; width: 100%; }
  .ssn-contact-sidebar-image { height: 250px; }
  .ssn-contact-services { padding: 68px 0; }
  .ssn-contact-final { padding: 60px 0; }
  .ssn-contact-final-inner { flex-direction: column; align-items: stretch; gap: 28px; }
  .ssn-contact-final-actions { max-width: 380px; width: 100%; }
}
@media (max-width: 480px) {
  .ssn-contact-container { width: calc(100% - 28px); }
  .ssn-contact-hero { padding-top: 55px; }
  .ssn-contact-eyebrow,
  .ssn-contact-section-label { font-size: 9px; letter-spacing: 1.5px; }
  .ssn-contact-hero-actions { flex-direction: column; align-items: stretch; }
  .ssn-contact-btn { width: 100%; min-height: 51px; }
  .ssn-contact-trust { flex-direction: column; gap: 11px; }
  .ssn-contact-hero-card h2 { font-size: 25px; }
  .ssn-contact-phone { font-size: 19px; }
  .ssn-contact-field-row { grid-template-columns: 1fr; gap: 19px; }
  .ssn-contact-form-panel h2 { font-size: 38px; }
  .ssn-contact-sidebar-image { height: 220px; }
  .ssn-contact-image-overlay h3 { font-size: 25px; }
  .ssn-contact-sidebar-content { padding: 23px 19px; }
  .ssn-contact-service-grid { grid-template-columns: 1fr; }
  .ssn-contact-service-card p { min-height: auto; }
  .ssn-contact-services-heading h2 { font-size: 30px; }
  .ssn-contact-final h2 { font-size: 34px; }
}
`;
