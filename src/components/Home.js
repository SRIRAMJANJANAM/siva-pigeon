import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaChild,
  FaPaw,
  FaEye,
  FaCloudSun,
  FaPhoneAlt,
  FaWhatsapp,
  FaStar,
  FaTools,
  FaRulerCombined,
  FaClock,
  FaAward,
  FaHome,
  FaQuoteLeft,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaRegCheckCircle,
} from "react-icons/fa";

const PHONE = "919791170467";
const DISPLAY_PHONE = "+91 97911 70467";

const images = {
  hero: {
    local: "/images/balcony-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
  },
  balcony: {
    local: "/images/balcony-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  window: {
    local: "/images/cloth.webp",
    fallback:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
  },
  grill: {
    local: "/images/invisible-grills.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
  pigeon: {
    local: "/images/pigeon-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=900&q=80",
  },
  terrace: {
    local: "/images/terrace-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
  sports: {
    local: "/images/sports-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
  },
  apartment: {
    local: "/images/apartment-balcony.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=80",
  },
  children: {
    local: "/images/child.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
  pet: {
    local: "/images/pet-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80",
  },
  duct: {
    local: "/images/duct-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  warehouse: {
    local: "/images/warehouse-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  },
  monkey: {
    local: "/images/monkey-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=900&q=80",
  },
};

/* HERO CAROUSEL SLIDES */
const heroSlides = [
  {
    eyebrow: "BALCONY PIGEON SAFETY NETS",
    title: "Keep Pigeons Away.",
    highlight: "Enjoy a Cleaner Balcony.",
    description:
      "Protect your balcony from unwanted birds with suitable pigeon safety netting. Explore practical solutions designed to help maintain cleanliness, natural light and airflow.",
    image: {
      local: "/images/child.webp",
      fallback:
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=2000&q=85",
    },
    alt: "Balcony pigeon safety nets",
    message:
      "Hello Siva Safety Nets, I would like a quotation for balcony pigeon safety nets.",
    buttonText: "Explore Pigeon Safety Nets",
    link: "/safety-nets",
  },
  {
    eyebrow: "BALCONY INVISIBLE GRILLS",
    title: "Protect Your Balcony.",
    highlight: "Keep Your View Open.",
    description:
      "Discover invisible grill solutions for balconies and windows. Add a protective barrier while maintaining an open appearance and the modern look of your home.",
    image: {
      local: "/images/third.webp",
      fallback:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
    },
    alt: "Invisible grills for a modern balcony",
    message:
      "Hello Siva Safety Nets, I would like a quotation for balcony invisible grills.",
    buttonText: "Explore Invisible Grills",
    link: "/safety-nets",
  },
  {
    eyebrow: "CEILING CLOTH HANGERS",
    title: "Make Laundry Easier.",
    highlight: "Save Space at Home.",
    description:
      "Make everyday laundry more convenient with practical ceiling-mounted cloth hangers designed to help save floor space and keep your home organised.",
    image: {
      local: "/images/cloth.webp",
      fallback:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=85",
    },
    alt: "Ceiling cloth hangers for home laundry",
    message:
      "Hello Siva Safety Nets, I would like a quotation for ceiling cloth hangers.",
    buttonText: "Explore Cloth Hangers",
    link: "/safety-nets",
  },
];

const services = [
  {
    title: "Balcony Safety Nets",
    category: "HOME SAFETY",
    description:
      "Durable safety netting for balconies to help protect children and pets while maintaining airflow.",
    image: images.balcony,
    icon: <FaHome />,
  },
  {
    title: "Invisible Grills for Balcony",
    category: "PREMIUM PROTECTION",
    description:
      "Stainless-steel cable grills designed for balcony safety while preserving your open view.",
    image: images.grill,
    icon: <FaEye />,
  },
  {
    title: "Anti Bird Netting",
    category: "BIRD CONTROL",
    description:
      "Bird-proofing solutions for balconies, windows, ledges and open spaces.",
    image: images.pigeon,
    icon: <FaShieldAlt />,
  },
  {
    title: "Children Safety Nets",
    category: "CHILD SAFETY",
    description:
      "Safety netting for appropriate balconies and windows to help reduce fall risks.",
    image: images.children,
    icon: <FaChild />,
  },
  {
    title: "Terrace Safety Nets",
    category: "TERRACE PROTECTION",
    description:
      "Netting solutions for terraces, rooftops and open residential areas.",
    image: images.terrace,
    icon: <FaCloudSun />,
  },
  {
    title: "Ceiling Cloth Hangers",
    category: "HOME CONVENIENCE",
    description:
      "Space-saving ceiling-mounted clothes drying systems for everyday laundry.",
    image: images.window,
    icon: <FaTools />,
  },
  {
    title: "Pet & Cat Safety Nets",
    category: "PET PROTECTION",
    description:
      "Balcony and open-area netting options for households with pets.",
    image: images.pet,
    icon: <FaPaw />,
  },
  {
    title: "Apartment Balcony & Duct Netting",
    category: "APARTMENT SOLUTIONS",
    description:
      "Custom-fitted netting for apartment balconies, ventilation shafts and ducts.",
    image: images.apartment,
    icon: <FaHome />,
  },
  {
    title: "Warehouse Pigeon & Duct Nets",
    category: "COMMERCIAL SOLUTIONS",
    description:
      "Bird-exclusion netting for warehouses, commercial buildings and high-ceiling areas.",
    image: images.warehouse,
    icon: <FaTools />,
  },
  {
    title: "Duct Area Safety Nets",
    category: "DUCT PROTECTION",
    description:
      "Made-to-measure netting for service shafts and open ducts.",
    image: images.duct,
    icon: <FaShieldAlt />,
  },
  {
    title: "Bird Spikes & Pigeon Control",
    category: "BIRD DETERRENCE",
    description:
      "Bird deterrent solutions for suitable ledges and AC-unit surroundings.",
    image: images.pigeon,
    icon: <FaTools />,
  },
  {
    title: "Pigeon Safety Nets",
    category: "BALCONY BIRD PROTECTION",
    description:
      "UV-resistant netting options to discourage pigeons while allowing light and airflow.",
    image: images.balcony,
    icon: <FaShieldAlt />,
  },
  {
    title: "Monkey Safety Nets",
    category: "SPECIALIST PROTECTION",
    description:
      "Reinforced netting options for selected areas requiring additional protection.",
    image: images.monkey,
    icon: <FaShieldAlt />,
  },
  {
    title: "Sports Nets",
    category: "SPORTS & RECREATION",
    description:
      "Netting for cricket, football, volleyball, schools, academies and practice areas.",
    image: images.sports,
    icon: <FaTools />,
  },
];

const advantages = [
  {
    icon: <FaShieldAlt />,
    title: "Protection That Matters",
    text: "Practical netting and grill solutions tailored to your property.",
  },
  {
    icon: <FaRulerCombined />,
    title: "Careful Site Measurement",
    text: "Recommendations based on your space and installation requirements.",
  },
  {
    icon: <FaAward />,
    title: "Quality-Focused Installation",
    text: "Suitable materials, secure fixing methods and careful finishing.",
  },
  {
    icon: <FaClock />,
    title: "Convenient Service",
    text: "Discuss your requirements and arrange a site visit where available.",
  },
];

const reviews = [
  {
    initials: "HS",
    name: "Homeowner",
    title: "Professional service",
    text: "A well-planned installation starts with understanding the customer's needs and selecting the right solution.",
  },
  {
    initials: "RS",
    name: "Residential Customer",
    title: "Neat finishing",
    text: "Careful measurements, secure fittings and clean finishing make a difference to an installation.",
  },
  {
    initials: "AP",
    name: "Apartment Resident",
    title: "Safety and appearance",
    text: "Balcony safety solutions should provide practical protection while keeping the home comfortable.",
  },
];

const faqs = [
  {
    question: "How much does balcony safety net installation cost?",
    answer:
      "Pricing depends on the area, net material, installation height and fixing method. Contact us with your requirements for a quotation.",
  },
  {
    question: "Which net is suitable for pigeon protection?",
    answer:
      "UV-resistant bird netting is commonly used for balconies, ducts and open areas. The correct mesh and fixing method depend on the site.",
  },
  {
    question: "Are invisible grills suitable for apartments?",
    answer:
      "They may be suitable for certain balconies and windows. Cable specifications, anchoring and building requirements should be checked before installation.",
  },
  {
    question: "Can I install safety nets for children and pets?",
    answer:
      "Suitable safety netting can be installed in appropriate areas. It should be correctly fitted and inspected regularly, and must not replace supervision or required safety measures.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation time varies with the area, access, height and fixing requirements. Share your site details for a more accurate estimate.",
  },
  {
    question: "Do you provide site visits and quotations?",
    answer:
      "Contact us to discuss your location, check service availability and request a quotation before proceeding.",
  },
  {
    question: "How can I book an installation?",
    answer:
      "Call us or send your name, location and required service through WhatsApp to discuss the next steps.",
  },
];

function SafeImage({
  image,
  alt,
  className = "",
  loading = "lazy",
}) {
  const [src, setSrc] = useState(image.local);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    setSrc(image.local);
    setUsingFallback(false);
  }, [image]);

  function handleError() {
    if (!usingFallback) {
      setUsingFallback(true);
      setSrc(image.fallback);
    }
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
    />
  );
}

function WhatsAppLink({
  children,
  message = "",
  className = "",
  ...props
}) {
  const defaultMessage =
    "Hello Siva Safety Nets, I would like to know more about your safety net and invisible grill services.";

  return (
    <a
      {...props}
      className={className}
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(
        message || defaultMessage
      )}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className={`siva-section-heading ${light ? "light" : ""} reveal`}>
      <span className="siva-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [visibleServices, setVisibleServices] = useState(6);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    service: "",
    location: "",
    message: "",
  });

  const [formError, setFormError] = useState("");
  const homeRef = useRef(null);

  const currentSlide = heroSlides[activeSlide];

  function goToPreviousSlide() {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length
    );
  }

  function goToNextSlide() {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  }

  // Automatically rotate the hero carousel every five seconds.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  // Animate elements when they enter the viewport.
  useEffect(() => {
    const root = homeRef.current;
    if (!root) return undefined;

    const elements = root.querySelectorAll(".reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [visibleServices]);

  function updateForm(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function submitForm(event) {
    event.preventDefault();
    setFormError("");

    const name = form.name.trim();
    const mobile = form.mobile.trim();
    const service = form.service.trim();
    const digits = mobile.replace(/\D/g, "");

    if (!name || !mobile || !service) {
      setFormError(
        "Please complete your name, mobile number and service."
      );
      return;
    }

    if (digits.length < 10 || digits.length > 13) {
      setFormError("Please enter a valid mobile number.");
      return;
    }

    const message = [
      "Hello Siva Safety Nets!",
      "",
      "I would like to request a quotation.",
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `Service: ${service}`,
      `Location: ${form.location.trim() || "Not provided"}`,
      `Requirements: ${form.message.trim() || "Please contact me"}`,
    ].join("\n");

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const styles = `
  .siva-home {
    --siva-navy: #073b53;
    --siva-deep: #052f43;
    --siva-gold: #bd8428;
    --siva-gold-light: #d9ae65;
    --siva-cream: #fffdf9;
    --siva-ink: #243f51;
    --siva-muted: #697987;
    width: 100%;
    color: var(--siva-ink);
    background: #fff;
    font-family: inherit;
    overflow-x: clip;
  }

  .siva-home, .siva-home * { box-sizing: border-box; }
  .siva-home img { max-width: 100%; }
  .siva-home a { text-decoration: none; }
  .siva-home button, .siva-home input, .siva-home select,
  .siva-home textarea { font: inherit; }

  .siva-home button:focus-visible, .siva-home a:focus-visible,
  .siva-home input:focus-visible, .siva-home select:focus-visible,
  .siva-home textarea:focus-visible {
    outline: 3px solid rgba(189,132,40,.65);
    outline-offset: 3px;
  }

  .siva-container {
    width: min(1400px, calc(100% - 9%));
    margin-inline: auto;
  }

 .siva-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  margin-top: 35px;
  margin-bottom: 8px;
  padding: 10px 14px;
  color: #ffffff;
  background: #073b53;
  border-left: 4px solid #d9ae65;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.8px;
  line-height: 1.5;
  text-transform: uppercase;
  position: relative;
  z-index: 5;
}

.siva-eyebrow::after {
  content: "";
  width: 25px;
  height: 2px;
  background: #d9ae65;
  flex-shrink: 0;
}

  .siva-section-heading {
    max-width: 760px;
    margin: 0 auto 45px;
    text-align: center;
  }

  .siva-section-heading .siva-eyebrow { justify-content: center; }

  .siva-section-heading h2 {
    margin: 15px 0;
    color: var(--siva-navy);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(30px, 4vw, 48px);
    line-height: 1.15;
    letter-spacing: -1px;
  }

  .siva-section-heading p {
    max-width: 690px;
    margin: auto;
    color: var(--siva-muted);
    font-size: 15px;
    line-height: 1.85;
  }

  .siva-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 49px;
    padding: 12px 23px;
    border: 1px solid transparent;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.4;
    text-align: center;
    cursor: pointer;
    transition: transform .25s ease, background .25s ease,
      color .25s ease, box-shadow .25s ease;
  }

  .siva-button:hover { transform: translateY(-2px); }

  .siva-button-primary {
    color: #fff;
    background: var(--siva-navy);
    box-shadow: 0 8px 22px rgba(7,59,83,.12);
  }

  .siva-button-primary:hover { background: var(--siva-deep); }

  .siva-button-outline {
    color: var(--siva-navy);
    background: #fff;
    border-color: var(--siva-gold);
  }

  .siva-button-outline:hover {
    color: #fff;
    background: var(--siva-navy);
    border-color: var(--siva-navy);
  }

  .siva-home .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity .65s ease, transform .65s ease;
  }

  .siva-home .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .siva-home .siva-service-card:nth-child(3n + 2),
  .siva-home .siva-why-card:nth-child(3n + 2) {
    transition-delay: .08s;
  }

  .siva-home .siva-service-card:nth-child(3n),
  .siva-home .siva-why-card:nth-child(3n) {
    transition-delay: .15s;
  }

  /* HERO CAROUSEL */
  .siva-hero {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 570px;
    isolation: isolate;
    overflow: hidden;
    background: #f8f5ee;
  }

  .siva-hero-image {
    position: absolute;
    z-index: -2;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    animation: sivaHeroImageIn .8s ease both;
  }

  .siva-hero::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(255,253,249,.99) 0%,
      rgba(255,253,249,.96) 32%,
      rgba(255,253,249,.80) 48%,
      rgba(255,253,249,.22) 72%,
      rgba(255,253,249,.04) 100%
    );
  }

  .siva-hero-content {
    width: min(1400px, calc(100% - 9%));
    margin-inline: auto;
    padding-block: 65px;
  }

  .siva-hero-copy {
  position: relative;
  z-index: 3;
  padding-top: 15px;
}

  .siva-hero-copy.slide-enter {
    animation: sivaHeroTextIn .55s ease both;
  }

  .siva-hero h1 {
    margin: 20px 0;
    color: var(--siva-navy);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(40px, 5vw, 66px);
    line-height: 1.08;
    letter-spacing: -2px;
  }

  .siva-hero h1 span { color: var(--siva-gold); }

  .siva-hero-copy > p {
    max-width: 550px;
    color: #405568;
    font-size: clamp(15px, 1.4vw, 18px);
    line-height: 1.85;
  }

  .siva-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 27px;
  }

  .siva-hero-note {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 20px;
    margin-top: 25px;
    color: #536779;
    font-size: 12px;
    font-weight: 600;
  }

  .siva-hero-note span {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }

  .siva-hero-note svg { color: var(--siva-gold); }

  .siva-hero-carousel-controls {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-top: 27px;
  }

  .siva-hero-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    color: var(--siva-navy);
    background: rgba(255,255,255,.9);
    border: 1px solid rgba(7,59,83,.18);
    border-radius: 50%;
    cursor: pointer;
    transition: color .2s ease, background .2s ease, transform .2s ease;
  }

  .siva-hero-arrow:hover {
    color: #fff;
    background: var(--siva-navy);
    transform: translateY(-2px);
  }

  .siva-hero-dots {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .siva-hero-dot {
    width: 10px;
    height: 10px;
    padding: 0;
    background: rgba(7,59,83,.3);
    border: 0;
    border-radius: 20px;
    cursor: pointer;
    transition: width .25s ease, background .25s ease;
  }

  .siva-hero-dot.active {
    width: 30px;
    background: var(--siva-gold);
  }

  .siva-hero-slide-count {
    margin-left: 4px;
    color: var(--siva-navy);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
  }

  @keyframes sivaHeroTextIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes sivaHeroImageIn {
    from { opacity: .55; transform: scale(1.025); }
    to { opacity: 1; transform: scale(1); }
  }

  /* BENEFITS */
  .siva-benefit-strip {
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    border-bottom: 1px solid #f0eee9;
  }

  .siva-benefit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    min-width: 0;
    min-height: 100px;
    padding: 18px;
    border-right: 1px solid #eee4d5;
  }

  .siva-benefit:last-child { border-right: 0; }
  .siva-benefit-icon { flex-shrink: 0; color: var(--siva-gold); font-size: 26px; }
  .siva-benefit strong { display: block; color: var(--siva-navy); font-size: 13px; line-height: 1.5; }
  .siva-benefit small { display: block; margin-top: 4px; color: var(--siva-muted); font-size: 11px; line-height: 1.5; }

  /* ABOUT */
  .siva-about { padding-block: 100px; background: var(--siva-cream); }
  .siva-about-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); align-items: center; gap: clamp(35px,6vw,85px); }
  .siva-about-visual { position: relative; min-width: 0; padding: 0 28px 28px 0; }
  .siva-about-visual > img { display: block; width: 100%; height: 450px; object-fit: cover; border-radius: 8px 85px 8px 8px; box-shadow: 0 18px 55px rgba(7,59,83,.12); }
  .siva-about-badge { position: absolute; right: 0; bottom: 0; display: flex; flex-direction: column; justify-content: center; width: 165px; min-height: 135px; padding: 20px; color: white; background: var(--siva-navy); border: 5px solid var(--siva-cream); border-radius: 6px 6px 6px 28px; }
  .siva-about-badge strong { color: var(--siva-gold-light); font-family: Georgia,serif; font-size: 34px; }
  .siva-about-badge span { margin-top: 7px; font-size: 12px; line-height: 1.5; }
  .siva-about-copy h2, .siva-contact-copy h2 { margin: 15px 0 20px; color: var(--siva-navy); font-family: Georgia,serif; font-size: clamp(32px,4vw,47px); line-height: 1.15; letter-spacing: -.7px; }
  .siva-about-copy > p, .siva-contact-copy > p { color: var(--siva-muted); font-size: 14px; line-height: 1.9; }
  .siva-turnkey { display: flex; align-items: flex-start; gap: 13px; margin-top: 22px; padding: 20px; background: white; border-left: 3px solid var(--siva-gold); box-shadow: 0 8px 25px rgba(7,59,83,.04); }
  .siva-turnkey > svg { flex-shrink: 0; margin-top: 3px; color: var(--siva-gold); font-size: 23px; }
  .siva-turnkey strong { display: block; margin-bottom: 6px; color: var(--siva-navy); font-size: 13px; }
  .siva-turnkey p { margin: 0; color: var(--siva-muted); font-size: 12px; line-height: 1.8; }
  .siva-about-actions { margin-top: 25px; }

  /* STATS */
  .siva-stats { padding-block: 40px; color: white; background: var(--siva-navy); }
  .siva-stats-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); }
  .siva-stat { padding: 15px; text-align: center; border-right: 1px solid rgba(255,255,255,.18); }
  .siva-stat:last-child { border: 0; }
  .siva-stat strong { display: block; color: var(--siva-gold-light); font-family: Georgia,serif; font-size: clamp(27px,3vw,39px); }
  .siva-stat span { display: block; margin-top: 8px; color: rgba(255,255,255,.85); font-size: 12px; }

  /* WHY US */
  .siva-why { padding-block: 95px; background: white; }
  .siva-why-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 20px; }
  .siva-why-card { min-width: 0; padding: 28px 22px; background: var(--siva-cream); border: 1px solid #f0ece5; border-radius: 9px; transition: transform .3s ease,box-shadow .3s ease,border-color .3s ease; }
  .siva-why-card:hover { transform: translateY(-5px); border-color: rgba(189,132,40,.5); box-shadow: 0 16px 35px rgba(7,59,83,.07); }
  .siva-why-icon { display: flex; align-items: center; justify-content: center; width: 52px; height: 52px; margin-bottom: 20px; color: var(--siva-gold); background: white; border: 1px solid #f0e4cf; border-radius: 50%; font-size: 22px; }
  .siva-why-card h3 { margin: 0 0 10px; color: var(--siva-navy); font-family: Georgia,serif; font-size: 20px; line-height: 1.35; }
  .siva-why-card p { margin: 0; color: var(--siva-muted); font-size: 13px; line-height: 1.85; }

  /* SERVICES */
  .siva-services { padding-block: 100px; background: #faf9f6; }
  .siva-services-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 24px; }
  .siva-service-card { display: flex; flex-direction: column; min-width: 0; overflow: hidden; background: white; border: 1px solid #eae9e5; border-radius: 12px; transition: transform .3s ease,box-shadow .3s ease,border-color .3s ease; }
  .siva-service-card:hover { transform: translateY(-5px); border-color: rgba(189,132,40,.5); box-shadow: 0 18px 38px rgba(7,59,83,.09); }
  .siva-service-image { position: relative; height: 225px; overflow: hidden; background: #e8e5dd; }
  .siva-service-image img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
  .siva-service-card:hover .siva-service-image img { transform: scale(1.055); }
  .siva-service-icon { position: absolute; left: 18px; bottom: 0; display: flex; align-items: center; justify-content: center; width: 47px; height: 47px; color: var(--siva-gold); background: white; border-radius: 8px 8px 0 0; font-size: 21px; }
  .siva-service-body { display: flex; flex: 1; flex-direction: column; padding: 24px 22px 21px; }
  .siva-service-category { color: var(--siva-gold); font-size: 9px; font-weight: 800; letter-spacing: 1.6px; }
  .siva-service-body h3 { margin: 9px 0 10px; color: var(--siva-navy); font-family: Georgia,serif; font-size: 21px; line-height: 1.3; }
  .siva-service-body p { flex: 1; margin: 0; color: var(--siva-muted); font-size: 13px; line-height: 1.8; }
  .siva-service-actions { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 20px; padding-top: 17px; border-top: 1px solid #efede8; }
  .siva-service-link { display: inline-flex; align-items: center; gap: 7px; color: var(--siva-navy); font-size: 12px; font-weight: 700; }
  .siva-service-link svg { color: var(--siva-gold); transition: transform .2s ease; }
  .siva-service-link:hover svg { transform: translateX(4px); }
  .siva-service-whatsapp { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-height: 38px; padding: 9px 12px; color: #167a49; background: #edf8f0; border-radius: 6px; font-size: 11px; font-weight: 700; transition: background .2s ease; }
  .siva-service-whatsapp:hover { background: #d9f1e0; }
  .siva-services-more { display: flex; justify-content: center; margin-top: 38px; }

  /* FEATURE CTA */
  .siva-feature { padding-block: 35px; background: white; }
  .siva-feature-box { position: relative; display: grid; grid-template-columns: minmax(0,1fr) auto; align-items: center; gap: 25px; padding: 42px 45px; overflow: hidden; color: white; background: var(--siva-navy); border-radius: 12px; }
  .siva-feature-box h2 { margin: 0 0 12px; color: white; font-family: Georgia,serif; font-size: clamp(26px,3vw,38px); line-height: 1.2; }
  .siva-feature-box p { max-width: 670px; margin: 0; color: rgba(255,255,255,.8); font-size: 13px; line-height: 1.8; }
  .siva-feature-box .siva-button { position: relative; z-index: 1; color: var(--siva-navy); background: var(--siva-gold-light); }
  .siva-feature-box .siva-button:hover { background: white; }

  /* CUSTOMER EXPERIENCE */
  .siva-reviews { padding-block: 95px; background: var(--siva-cream); }
  .siva-review-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 22px; }
  .siva-review-card { padding: 27px; background: white; border: 1px solid #eeeae3; border-radius: 9px; }
  .siva-review-quote { color: var(--siva-gold); font-size: 25px; }
  .siva-review-stars { display: flex; gap: 4px; margin: 15px 0; color: #d6a13c; font-size: 13px; }
  .siva-review-card h3 { margin: 0 0 9px; color: var(--siva-navy); font-family: Georgia,serif; font-size: 20px; }
  .siva-review-card p { margin: 0; color: var(--siva-muted); font-size: 13px; line-height: 1.85; }
  .siva-review-person { display: flex; align-items: center; gap: 12px; margin-top: 22px; padding-top: 18px; border-top: 1px solid #f0eee9; }
  .siva-review-avatar { display: flex; align-items: center; justify-content: center; width: 42px; height: 42px; flex-shrink: 0; color: var(--siva-navy); background: #f5ead6; border-radius: 50%; font-size: 12px; font-weight: 800; }
  .siva-review-person strong { display: block; color: var(--siva-navy); font-size: 12px; }
  .siva-review-person small { display: block; margin-top: 4px; color: var(--siva-muted); font-size: 11px; }
  .siva-review-disclaimer { margin: 20px 0 0; color: #7b858c; font-size: 11px; line-height: 1.7; text-align: center; }

  /* GALLERY */
  .siva-gallery { padding-block: 95px; background: white; }
  .siva-gallery-grid { display: grid; grid-template-columns: 1.25fr 1fr 1fr; grid-template-rows: 190px 190px; gap: 15px; }
  .siva-gallery-item { position: relative; min-width: 0; overflow: hidden; background: #e9e5de; border-radius: 8px; }
  .siva-gallery-item:first-child { grid-row: span 2; }
  .siva-gallery-item img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .45s ease; }
  .siva-gallery-item:hover img { transform: scale(1.06); }
  .siva-gallery-caption { position: absolute; inset: auto 0 0; padding: 28px 18px 17px; color: white; background: linear-gradient(transparent,rgba(4,31,43,.88)); font-size: 13px; font-weight: 700; }
  .siva-gallery-caption small { display: block; margin-bottom: 5px; color: #f0cb8d; font-size: 9px; letter-spacing: 1.4px; text-transform: uppercase; }

  /* FAQ */
  .siva-faq { padding-block: 95px; background: #faf9f6; }
  .siva-faq-list { max-width: 850px; margin: auto; }
  .siva-faq-item { margin-bottom: 12px; overflow: hidden; background: white; border: 1px solid #eae7e0; border-radius: 8px; }
  .siva-faq-question { display: flex; align-items: center; justify-content: space-between; gap: 20px; width: 100%; min-height: 65px; padding: 19px 22px; color: var(--siva-navy); background: white; border: 0; text-align: left; font-size: 14px; font-weight: 700; line-height: 1.5; cursor: pointer; }
  .siva-faq-question svg { flex-shrink: 0; color: var(--siva-gold); transition: transform .25s ease; }
  .siva-faq-question[aria-expanded="true"] svg { transform: rotate(180deg); }
  .siva-faq-answer { padding: 0 22px 22px; color: var(--siva-muted); font-size: 13px; line-height: 1.9; }

  /* CONTACT */
  .siva-contact { padding-block: 100px; background: var(--siva-cream); }
  .siva-contact-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 55px; align-items: start; }
  .siva-contact-copy h2 { margin-top: 16px; }
  .siva-contact-checks { display: grid; gap: 14px; margin: 26px 0; }
  .siva-contact-checks span { display: flex; align-items: flex-start; gap: 10px; color: var(--siva-ink); font-size: 13px; line-height: 1.6; }
  .siva-contact-checks svg { flex-shrink: 0; margin-top: 3px; color: var(--siva-gold); }
  .siva-contact-details { display: grid; gap: 14px; margin-top: 30px; }
  .siva-contact-details a { display: flex; align-items: center; gap: 13px; color: var(--siva-navy); font-size: 14px; font-weight: 600; overflow-wrap: anywhere; }
  .siva-contact-details svg { flex-shrink: 0; color: var(--siva-gold); font-size: 19px; }
  .siva-contact-form { min-width: 0; padding: clamp(24px,4vw,42px); background: white; border: 1px solid #eee9e0; border-radius: 12px; box-shadow: 0 18px 50px rgba(7,59,83,.06); }
  .siva-contact-form h3 { margin: 0 0 9px; color: var(--siva-navy); font-family: Georgia,serif; font-size: 28px; }
  .siva-contact-form > p { margin: 0 0 24px; color: var(--siva-muted); font-size: 12px; line-height: 1.7; }
  .siva-form-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 17px; }
  .siva-form-field { display: flex; flex-direction: column; gap: 8px; min-width: 0; }
  .siva-form-field.full { grid-column: 1 / -1; }
  .siva-form-field label { color: var(--siva-navy); font-size: 12px; font-weight: 700; }
  .siva-form-field input, .siva-form-field select, .siva-form-field textarea { display: block; width: 100%; min-width: 0; min-height: 47px; padding: 12px 14px; color: var(--siva-ink); background: #fffefa; border: 1px solid #e7e4dc; border-radius: 6px; font-size: 13px; }
  .siva-form-field textarea { min-height: 100px; resize: vertical; }
  .siva-form-field input:focus, .siva-form-field select:focus, .siva-form-field textarea:focus { border-color: var(--siva-gold); outline: 2px solid rgba(189,132,40,.15); }
  .siva-form-error { margin: 15px 0 0; color: #b42318; font-size: 12px; line-height: 1.6; }
  .siva-form-submit { width: 100%; margin-top: 21px; border: 0; }
  .siva-form-privacy { margin-top: 14px; color: #7c858a; font-size: 10px; line-height: 1.7; text-align: center; }

  /* FINAL CTA */
  .siva-final-cta { padding-block: 55px; background: white; }
  .siva-final-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 25px; padding: 35px 40px; border: 1px solid #eee5d6; border-radius: 10px; background: linear-gradient(120deg,#fffdf8,#f7f0e3); }
  .siva-final-cta h2 { margin: 0 0 8px; color: var(--siva-navy); font-family: Georgia,serif; font-size: clamp(24px,3vw,34px); line-height: 1.25; }
  .siva-final-cta p { margin: 0; color: var(--siva-muted); font-size: 13px; line-height: 1.7; }
  .siva-final-cta-actions { display: flex; flex-wrap: wrap; gap: 12px; }

  @media (max-width: 1050px) {
    .siva-container, .siva-hero-content { width: calc(100% - 48px); }
    .siva-hero { min-height: 500px; }
    .siva-benefit { justify-content: flex-start; padding-inline: 12px; gap: 10px; }
    .siva-benefit strong { font-size: 12px; }
    .siva-about-grid { gap: 32px; }
    .siva-about-visual > img { height: 390px; }
    .siva-why-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .siva-services-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .siva-contact-grid { gap: 28px; }
    .siva-service-image { height: 220px; }
  }

  @media (max-width: 700px) {
    .siva-container, .siva-hero-content { width: calc(100% - 36px); }
    .siva-section-heading { margin-bottom: 32px; }
    .siva-section-heading h2 { font-size: clamp(29px,7vw,35px); letter-spacing: -.5px; }
    .siva-section-heading p { font-size: 13px; }

    .siva-hero {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      min-height: 0;
    }

    .siva-hero-image {
      position: relative;
      inset: auto;
      z-index: 0;
      display: block;
      width: 100%;
      height: clamp(220px,62vw,330px);
      object-position: center;
    }

    .siva-hero::before {
      inset: 170px 0 0;
      z-index: 1;
      background: linear-gradient(180deg,rgba(255,253,249,0),#fffdf9 100%);
    }

    .siva-hero-content {
      position: relative;
      z-index: 2;
      margin-top: -22px;
      padding: 0 0 35px;
    }

    .siva-hero .siva-eyebrow {
  margin-top: 18px;
  margin-bottom: 8px;
  padding: 8px 10px;
  font-size: 9px;
  letter-spacing: 1.2px;
}

.siva-hero-copy {
  padding-top: 0;
}
    .siva-hero h1 { margin: 14px 0; font-size: clamp(36px,9vw,52px); line-height: 1.08; letter-spacing: -1.3px; }
    .siva-hero-copy > p { font-size: 14px; line-height: 1.8; }
    .siva-hero-actions { display: grid; grid-template-columns: minmax(0,1fr); gap: 10px; margin-top: 22px; }
    .siva-hero-actions .siva-button { width: 100%; }
    .siva-hero-note { gap: 10px 14px; font-size: 10px; }
    .siva-hero-carousel-controls { margin-top: 22px; }
    .siva-hero-arrow { width: 37px; height: 37px; }

    .siva-benefit-strip { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .siva-benefit { min-height: 82px; padding: 13px 10px; border-bottom: 1px solid #eee4d5; }
    .siva-benefit:nth-child(2n) { border-right: 0; }
    .siva-benefit-icon { font-size: 20px; }
    .siva-benefit strong { font-size: 11px; }
    .siva-benefit small { font-size: 10px; }

    .siva-about, .siva-why, .siva-services, .siva-reviews, .siva-gallery, .siva-faq, .siva-contact { padding-block: 62px; }
    .siva-about-grid { grid-template-columns: minmax(0,1fr); gap: 32px; }
    .siva-about-visual { padding: 0 16px 22px 0; }
    .siva-about-visual > img { height: clamp(260px,75vw,350px); border-radius: 8px 55px 8px 8px; }
    .siva-about-badge { width: 132px; min-height: 108px; padding: 13px; }
    .siva-about-badge strong { font-size: 28px; }
    .siva-about-badge span { font-size: 10px; }
    .siva-about-copy h2, .siva-contact-copy h2 { font-size: clamp(31px,8vw,38px); }

    .siva-stats { padding-block: 25px; }
    .siva-stats-grid { grid-template-columns: repeat(3,minmax(0,1fr)); gap: 4px; }
    .siva-stat { padding: 10px 4px; }
    .siva-stat strong { font-size: clamp(19px,5.5vw,26px); }
    .siva-stat span { font-size: 10px; line-height: 1.5; }

    .siva-why-grid { grid-template-columns: minmax(0,1fr); gap: 13px; }
    .siva-why-card { padding: 22px; }
    .siva-why-icon { margin-bottom: 14px; }

    .siva-services-grid { grid-template-columns: minmax(0,1fr); gap: 18px; }
    .siva-service-image { height: clamp(210px,60vw,270px); }
    .siva-service-body { padding: 22px 18px 18px; }
    .siva-service-body h3 { font-size: 22px; }
    .siva-service-body p { flex: initial; }

    .siva-feature { padding-block: 18px; }
    .siva-feature-box { grid-template-columns: minmax(0,1fr); gap: 20px; padding: 28px 22px; }
    .siva-feature-box .siva-button { width: 100%; }

    .siva-review-grid { grid-template-columns: minmax(0,1fr); gap: 15px; }
    .siva-review-card { padding: 22px; }

    .siva-gallery-grid { grid-template-columns: repeat(2,minmax(0,1fr)); grid-template-rows: 220px 150px 150px; gap: 10px; }
    .siva-gallery-item:first-child { grid-column: 1 / -1; grid-row: auto; }
    .siva-gallery-caption { padding: 24px 11px 12px; font-size: 11px; }

    .siva-faq-question { min-height: 60px; padding: 16px; font-size: 13px; }
    .siva-faq-answer { padding: 0 16px 18px; font-size: 12px; }

    .siva-contact-grid { grid-template-columns: minmax(0,1fr); gap: 32px; }
    .siva-contact-form { padding: 23px 18px; }
    .siva-contact-form h3 { font-size: 25px; }
    .siva-form-grid { grid-template-columns: minmax(0,1fr); gap: 15px; }
    .siva-form-field.full { grid-column: auto; }

    .siva-final-cta { padding-block: 28px; }
    .siva-final-cta-inner { flex-direction: column; align-items: stretch; padding: 24px 19px; }
    .siva-final-cta-actions { display: grid; grid-template-columns: minmax(0,1fr); }
    .siva-final-cta-actions .siva-button { width: 100%; }
  }

  @media (max-width: 360px) {
    .siva-container, .siva-hero-content { width: calc(100% - 28px); }
    .siva-hero h1 { font-size: 35px; }
    .siva-benefit { gap: 7px; padding-inline: 7px; }
    .siva-benefit-icon { font-size: 18px; }
    .siva-service-actions { align-items: flex-start; flex-direction: column; }
    .siva-gallery-grid { grid-template-rows: 190px 135px 135px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .siva-home .reveal {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }

    .siva-home *, .siva-home *::before, .siva-home *::after {
      scroll-behavior: auto !important;
      animation-duration: .01ms !important;
      transition-duration: .01ms !important;
    }
  }
  `;

  return (
    <main className="siva-home" ref={homeRef}>
      <style>{styles}</style>

      {/* HERO CAROUSEL */}
      <section className="siva-hero" aria-label="Featured services">
        <SafeImage
          key={`hero-image-${activeSlide}`}
          image={currentSlide.image}
          alt={currentSlide.alt}
          className="siva-hero-image"
          loading="eager"
        />

        <div className="siva-hero-content">
          <div
            key={`hero-copy-${activeSlide}`}
            className="siva-hero-copy slide-enter"
            aria-live="polite"
          >
            <span className="siva-eyebrow">{currentSlide.eyebrow}</span>

            <h1>
              {currentSlide.title}
              <br />
              <span>{currentSlide.highlight}</span>
            </h1>

            <p>{currentSlide.description}</p>

            <div className="siva-hero-actions">
              <Link
                to={currentSlide.link}
                className="siva-button siva-button-primary"
              >
                {currentSlide.buttonText} <FaArrowRight />
              </Link>

              <WhatsAppLink
                className="siva-button siva-button-outline"
                message={currentSlide.message}
              >
                <FaEnvelope /> Get a Free Quote
              </WhatsAppLink>
            </div>

            <div className="siva-hero-note">
              <span><FaCheckCircle /> Tailored Solutions</span>
              <span><FaCheckCircle /> Quality-Focused Work</span>
              <span><FaCheckCircle /> Personalised Assistance</span>
            </div>

            <div className="siva-hero-carousel-controls">
              <button
                type="button"
                className="siva-hero-arrow"
                onClick={goToPreviousSlide}
                aria-label="Previous carousel slide"
              >
                <FaChevronLeft />
              </button>

              <div
                className="siva-hero-dots"
                aria-label="Choose carousel slide"
              >
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.eyebrow}
                    type="button"
                    className={`siva-hero-dot ${
                      activeSlide === index ? "active" : ""
                    }`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
                    aria-current={activeSlide === index ? "true" : undefined}
                  />
                ))}
              </div>

              <span className="siva-hero-slide-count">
                0{activeSlide + 1} / 0{heroSlides.length}
              </span>

              <button
                type="button"
                className="siva-hero-arrow"
                onClick={goToNextSlide}
                aria-label="Next carousel slide"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="siva-benefit-strip" aria-label="Our benefits">
        <div className="siva-benefit reveal">
          <FaMapMarkerAlt className="siva-benefit-icon" />
          <div>
            <strong>Service That Reaches You</strong>
            <small>Ask about availability in your area</small>
          </div>
        </div>
        <div className="siva-benefit reveal">
          <FaShieldAlt className="siva-benefit-icon" />
          <div>
            <strong>Bird Protection</strong>
            <small>Solutions for balconies and open areas</small>
          </div>
        </div>
        <div className="siva-benefit reveal">
          <FaRulerCombined className="siva-benefit-icon" />
          <div>
            <strong>Transparent Quotations</strong>
            <small>Discuss requirements before booking</small>
          </div>
        </div>
        <div className="siva-benefit reveal">
          <FaTools className="siva-benefit-icon" />
          <div>
            <strong>Careful Installation</strong>
            <small>Measurements and finishing</small>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="siva-about">
        <div className="siva-container siva-about-grid">
          <div className="siva-about-visual reveal">
            <SafeImage image={images.apartment} alt="Modern residential balcony" />
            <div className="siva-about-badge">
              <strong>Safety</strong>
              <span>Thoughtful solutions for modern homes</span>
            </div>
          </div>

          <div className="siva-about-copy reveal">
            <span className="siva-eyebrow">About Siva Safety Nets</span>
            <h2>Your Trusted Partner for Balcony Safety & Invisible Grills</h2>
            <p>
              Siva Safety Nets provides practical safety netting and invisible
              grill solutions for homes, apartments and commercial properties.
              We help customers explore protection for balconies, windows,
              terraces, ducts and other open spaces.
            </p>
            <p>
              From pigeon protection and child safety netting to stainless-steel
              invisible grills, our focus is understanding your space, discussing
              suitable materials and planning a neat installation.
            </p>
            <p>
              Every property is different. We consider your layout, access,
              intended use and appearance preferences when discussing your
              requirements and quotation.
            </p>

            <div className="siva-turnkey">
              <FaShieldAlt />
              <div>
                <strong>From Consultation to Installation</strong>
                <p>
                  Discuss your requirements, arrange measurements where
                  available, and understand material, installation and
                  maintenance requirements before proceeding.
                </p>
              </div>
            </div>

            <div className="siva-about-actions">
              <Link to="/about" className="siva-button siva-button-primary">
                Learn More About Us <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="siva-stats">
        <div className="siva-container siva-stats-grid">
          <div className="siva-stat reveal">
            <strong>15+</strong>
            <span>Yrs of Experience</span>
          </div>
          <div className="siva-stat reveal">
            <strong>10000+</strong>
            <span>Happy Customers</span>
          </div>
          <div className="siva-stat reveal">
            <strong>4.9*</strong>
            <span>Rating</span>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="siva-why">
        <div className="siva-container">
          <SectionHeading
            eyebrow="The Siva Difference"
            title="Why Choose Siva Safety Nets?"
            description="A good safety solution combines suitable materials, careful measurements, appropriate fixing methods and a finish that complements your property."
          />

          <div className="siva-why-grid">
            {advantages.map((item) => (
              <article className="siva-why-card reveal" key={item.title}>
                <div className="siva-why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="siva-services" id="safety-services">
        <div className="siva-container">
          <SectionHeading
            eyebrow="Our Services"
            title="Safety Nets & Invisible Grill Solutions"
            description="Explore solutions for balconies, windows, terraces, bird control, pets, children and commercial spaces. Contact us to discuss a suitable option."
          />

          <div className="siva-services-grid">
            {services.slice(0, visibleServices).map((service) => (
              <article className="siva-service-card reveal" key={service.title}>
                <div className="siva-service-image">
                  <SafeImage image={service.image} alt={service.title} />
                  <div className="siva-service-icon">{service.icon}</div>
                </div>

                <div className="siva-service-body">
                  <span className="siva-service-category">
                    {service.category}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="siva-service-actions">
                    <Link to="/safety-nets" className="siva-service-link">
                      Explore Service <FaArrowRight />
                    </Link>

                    <WhatsAppLink
                      className="siva-service-whatsapp"
                      message={`Hello Siva Safety Nets, I am interested in ${service.title}. Please share the details, availability and quotation.`}
                      aria-label={`Enquire on WhatsApp about ${service.title}`}
                    >
                      <FaWhatsapp /> Enquire on WhatsApp
                    </WhatsAppLink>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="siva-services-more">
            {visibleServices < services.length ? (
              <button
                type="button"
                className="siva-button siva-button-primary"
                onClick={() =>
                  setVisibleServices((count) =>
                    Math.min(count + 6, services.length)
                  )
                }
              >
                View More Services <FaArrowRight />
              </button>
            ) : (
              <button
                type="button"
                className="siva-button siva-button-outline"
                onClick={() => {
                  setVisibleServices(6);
                  document.getElementById("safety-services")?.scrollIntoView({
                    behavior: window.matchMedia(
                      "(prefers-reduced-motion: reduce)"
                    ).matches
                      ? "auto"
                      : "smooth",
                    block: "start",
                  });
                }}
              >
                Show Fewer Services
              </button>
            )}
          </div>
        </div>
      </section>

      {/* FEATURED CTA */}
      <section className="siva-feature">
        <div className="siva-container">
          <div className="siva-feature-box reveal">
            <div>
              <h2>Make Your Balcony Safer and More Comfortable</h2>
              <p>
                Looking for pigeon nets, balcony safety netting or invisible
                grills? Tell us about your space and explore a suitable solution.
              </p>
            </div>

            <WhatsAppLink
              className="siva-button"
              message="Hello Siva Safety Nets, I would like a quotation for balcony safety nets or invisible grills."
            >
              Get a WhatsApp Quote <FaArrowRight />
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* CUSTOMER EXPERIENCE */}
      <section className="siva-reviews">
        <div className="siva-container">
          <SectionHeading
            eyebrow="Customer Experience"
            title="What Matters in Every Installation"
            description="Good service starts with understanding the customer, explaining available options and paying attention to installation details."
          />

          <div className="siva-review-grid">
            {reviews.map((review) => (
              <article className="siva-review-card reveal" key={review.title}>
                <FaQuoteLeft className="siva-review-quote" />

                <div className="siva-review-stars" aria-label="Decorative stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>

                <h3>{review.title}</h3>
                <p>{review.text}</p>

                <div className="siva-review-person">
                  <div className="siva-review-avatar">{review.initials}</div>
                  <div>
                    <strong>{review.name}</strong>
                    <small>Illustrative service principle</small>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="siva-review-disclaimer">
            These are general service principles, not verified customer
            testimonials. Replace them with genuine customer reviews when
            available and published with permission.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="siva-gallery">
        <div className="siva-container">
          <SectionHeading
            eyebrow="Installation Inspiration"
            title="Solutions for Different Spaces"
            description="Visual inspiration for balconies, invisible grills, bird protection, terraces and sports netting."
          />

          <div className="siva-gallery-grid">
            <div className="siva-gallery-item reveal">
              <SafeImage
                image={images.balcony}
                alt="Balcony safety net inspiration"
              />
              <div className="siva-gallery-caption">
                <small>Residential Protection</small>
                Balcony Safety Solutions
              </div>
            </div>

            <div className="siva-gallery-item reveal">
              <SafeImage
                image={images.grill}
                alt="Invisible grill inspiration"
              />
              <div className="siva-gallery-caption">Invisible Grills</div>
            </div>

            <div className="siva-gallery-item reveal">
              <SafeImage
                image={images.pigeon}
                alt="Bird protection inspiration"
              />
              <div className="siva-gallery-caption">Bird Protection</div>
            </div>

            <div className="siva-gallery-item reveal">
              <SafeImage
                image={images.terrace}
                alt="Terrace protection inspiration"
              />
              <div className="siva-gallery-caption">Terrace Solutions</div>
            </div>

            <div className="siva-gallery-item reveal">
              <SafeImage
                image={images.sports}
                alt="Sports netting inspiration"
              />
              <div className="siva-gallery-caption">Sports Netting</div>
            </div>
          </div>

          <p className="siva-review-disclaimer">
            Gallery images are illustrative. Replace them with photos of your
            completed installations to showcase your actual work.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="siva-faq">
        <div className="siva-container">
          <SectionHeading
            eyebrow="Helpful Information"
            title="Frequently Asked Questions"
            description="Answers to common questions about balcony safety nets, invisible grills, pigeon control and installation."
          />

          <div className="siva-faq-list">
            {faqs.map((faq, index) => (
              <div className="siva-faq-item reveal" key={faq.question}>
                <button
                  type="button"
                  className="siva-faq-question"
                  onClick={() =>
                    setActiveFaq((current) =>
                      current === index ? -1 : index
                    )
                  }
                  aria-expanded={activeFaq === index}
                  aria-controls={`siva-faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <FaChevronDown />
                </button>

                {activeFaq === index && (
                  <div
                    className="siva-faq-answer"
                    id={`siva-faq-answer-${index}`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="siva-contact" id="get-a-quote">
        <div className="siva-container siva-contact-grid">
          <div className="siva-contact-copy reveal">
            <span className="siva-eyebrow">Let's Talk Safety</span>
            <h2>Get Your Free Quote Today</h2>

            <p>
              Tell us what you need for your home, apartment or commercial
              property. Share your preferred service and location so we can
              discuss your requirements and the next steps.
            </p>

            <div className="siva-contact-checks">
              <span><FaRegCheckCircle /> Discuss a suitable solution</span>
              <span><FaRegCheckCircle /> Understand material and installation options</span>
              <span><FaRegCheckCircle /> Request a quotation before proceeding</span>
              <span><FaRegCheckCircle /> Arrange a site visit where available</span>
            </div>

            <div className="siva-contact-details">
              <a href={`tel:+${PHONE}`}>
                <FaPhoneAlt />
                <span>{DISPLAY_PHONE}</span>
              </a>

              <WhatsAppLink>
                <FaWhatsapp />
                <span>Chat with us on WhatsApp</span>
              </WhatsAppLink>
            </div>
          </div>

          <form className="siva-contact-form reveal" onSubmit={submitForm}>
            <h3>Request a Callback</h3>
            <p>
              Fill in your details. WhatsApp will open with your enquiry
              ready to send.
            </p>

            <div className="siva-form-grid">
              <div className="siva-form-field">
                <label htmlFor="siva-name">Full Name *</label>
                <input
                  id="siva-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  value={form.name}
                  onChange={updateForm}
                  required
                />
              </div>

              <div className="siva-form-field">
                <label htmlFor="siva-mobile">Mobile Number *</label>
                <input
                  id="siva-mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Enter mobile number"
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.mobile}
                  onChange={updateForm}
                  required
                />
              </div>

              <div className="siva-form-field full">
                <label htmlFor="siva-service">Choose a Service *</label>
                <select
                  id="siva-service"
                  name="service"
                  value={form.service}
                  onChange={updateForm}
                  required
                >
                  <option value="">Select your required service</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Other Safety Net Requirement">
                    Other Safety Net Requirement
                  </option>
                </select>
              </div>

              <div className="siva-form-field full">
                <label htmlFor="siva-location">Your Location</label>
                <input
                  id="siva-location"
                  name="location"
                  type="text"
                  placeholder="City / Area / PIN code"
                  autoComplete="address-level2"
                  value={form.location}
                  onChange={updateForm}
                />
              </div>

              <div className="siva-form-field full">
                <label htmlFor="siva-message">Message</label>
                <textarea
                  id="siva-message"
                  name="message"
                  placeholder="Tell us about your balcony, windows or other requirements..."
                  value={form.message}
                  onChange={updateForm}
                />
              </div>
            </div>

            {formError && (
              <p className="siva-form-error" role="alert">
                {formError}
              </p>
            )}

            <button
              type="submit"
              className="siva-button siva-button-primary siva-form-submit"
            >
              <FaWhatsapp /> Send Enquiry on WhatsApp <FaArrowRight />
            </button>

            <div className="siva-form-privacy">
              By continuing, you agree to contact Siva Safety Nets through
              WhatsApp regarding your enquiry.
            </div>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="siva-final-cta">
        <div className="siva-container siva-final-cta-inner reveal">
          <div>
            <h2>Your Space. Your Safety. Our Priority.</h2>
            <p>
              Talk to Siva Safety Nets about your balcony safety and bird
              protection requirements.
            </p>
          </div>

          <div className="siva-final-cta-actions">
            <a
              href={`tel:+${PHONE}`}
              className="siva-button siva-button-primary"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <WhatsAppLink className="siva-button siva-button-outline">
              <FaWhatsapp /> WhatsApp Us
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </main>
  );
}