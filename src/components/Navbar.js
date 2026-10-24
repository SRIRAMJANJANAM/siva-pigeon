import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const PHONE = "919791170467";
const DISPLAY_PHONE = "+91 97911 70467";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Siva Safety Nets, I would like to enquire about your safety net and invisible grill services."
);

const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${WHATSAPP_MESSAGE}`;

const styles = `
:root {
  --siva-navy: #073b53;
  --siva-navy-dark: #052f43;
  --siva-gold: #bd8428;
  --siva-gold-light: #d5a34e;
  --siva-cream: #fffdf9;
  --siva-text: #183c50;
  --siva-navbar-height: 100px;
}

/* Prevent horizontal overflow without breaking fixed positioning */
.premium-navbar,
.premium-navbar * {
  box-sizing: border-box;
}

.premium-navbar {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 99999 !important;
  isolation: isolate;
  width: 100%;
  max-width: 100%;
  background: rgba(255, 254, 251, 0.98);
  border-bottom: 1px solid rgba(7, 59, 83, 0.08);
  box-shadow: 0 4px 20px rgba(7, 59, 83, 0.06);
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
}

.premium-nav-inner {
  position: relative;
  width: 100%;
  max-width: 1720px;
  min-height: 100px;
  margin: 0 auto;
  padding: 12px clamp(18px, 4vw, 64px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.premium-brand {
  display: inline-flex;
  flex: 0 1 350px;
  min-width: 0;
  align-items: center;
  text-decoration: none;
}

.premium-brand img {
  display: block;
  width: 100%;
  max-width: 350px;
  max-height: 78px;
  height: auto;
  object-fit: contain;
  object-position: left center;
  transition: transform 0.25s ease;
}

.premium-brand:hover img {
  transform: scale(1.015);
}

.premium-nav-links {
  display: flex;
  flex: 1;
  min-width: 0;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(18px, 2vw, 30px);
}

.premium-nav-items {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
  gap: clamp(18px, 2vw, 32px);
}

.premium-nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 46px;
  padding: 4px 0;
  color: var(--siva-text);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.1px;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.25s ease;
}

.premium-nav-link::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--siva-gold),
    var(--siva-gold-light)
  );
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.premium-nav-link:hover,
.premium-nav-link.active {
  color: var(--siva-navy);
}

.premium-nav-link:hover::after,
.premium-nav-link.active::after {
  transform: scaleX(1);
}

.premium-nav-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
}

.premium-quote-button {
  min-height: 48px;
  padding: 0 19px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #a97018;
  background: transparent;
  border: 1.5px solid var(--siva-gold);
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.25s ease;
}

.premium-quote-button:hover {
  color: #fff;
  background: var(--siva-navy);
  border-color: var(--siva-navy);
  box-shadow: 0 8px 24px rgba(7, 59, 83, 0.14);
  transform: translateY(-2px);
}

.premium-quote-button .quote-icon {
  flex-shrink: 0;
  font-size: 16px;
}

.premium-quote-button .quote-arrow {
  flex-shrink: 0;
  font-size: 12px;
  transition: transform 0.25s ease;
}

.premium-quote-button:hover .quote-arrow {
  transform: translateX(3px);
}

/* Mobile-only elements are hidden on desktop */
.premium-menu-toggle,
.premium-mobile-brand,
.premium-mobile-contact,
.premium-nav-backdrop {
  display: none;
}

.premium-navbar a:focus-visible,
.premium-navbar button:focus-visible {
  outline: 3px solid rgba(189, 132, 40, 0.7);
  outline-offset: 3px;
}

/* Laptop */
@media (max-width: 1250px) and (min-width: 1025px) {
  :root {
    --siva-navbar-height: 88px;
  }

  .premium-nav-inner {
    min-height: 88px;
    padding-inline: 24px;
    gap: 18px;
  }

  .premium-brand {
    flex-basis: 275px;
  }

  .premium-brand img {
    max-width: 275px;
    max-height: 66px;
  }

  .premium-nav-links {
    gap: 18px;
  }

  .premium-nav-items {
    gap: 19px;
  }

  .premium-nav-link {
    font-size: 14px;
  }

  .premium-quote-button {
    min-height: 44px;
    padding-inline: 14px;
    gap: 7px;
    font-size: 13px;
  }
}

/* Tablet and mobile */
@media (max-width: 1024px) {
  :root {
    --siva-navbar-height: 78px;
  }

  .premium-navbar {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    z-index: 99999 !important;
  }

  .premium-nav-inner {
    min-height: 78px;
    padding: 10px 22px;
    gap: 12px;
  }

  .premium-brand {
    flex: 1 1 auto;
    width: auto;
    min-width: 0;
  }

  .premium-brand img {
    width: 100%;
    max-width: 310px;
    max-height: 60px;
  }

  /* Always-visible hamburger */
  .premium-navbar .premium-menu-toggle {
    position: relative;
    z-index: 100002;
    display: inline-flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto;
    width: 46px;
    height: 46px;
    flex: 0 0 46px;
    align-items: center;
    justify-content: center;
    padding: 0;
    color: var(--siva-navy);
    background: #fff;
    border: 1px solid rgba(189, 132, 40, 0.65);
    border-radius: 50%;
    font-size: 21px;
    line-height: 1;
    cursor: pointer;
    box-shadow: 0 3px 12px rgba(7, 59, 83, 0.08);
    transition: color 0.25s ease, background 0.25s ease;
  }

  .premium-navbar .premium-menu-toggle:hover,
  .premium-navbar .premium-menu-toggle.is-open {
    color: #fff;
    background: var(--siva-navy);
    border-color: var(--siva-navy);
  }

  .premium-navbar .premium-menu-toggle svg {
    display: block;
    width: 21px;
    height: 21px;
  }

  /* Full-height mobile drawer */
  .premium-navbar .premium-nav-links {
    position: fixed !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: auto !important;
    z-index: 100001 !important;
    width: min(390px, 88vw);
    height: 100vh;
    height: 100dvh;
    max-width: 100%;
    margin: 0;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 26px;
    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior: contain;
    background: var(--siva-cream);
    box-shadow: -15px 0 45px rgba(7, 59, 83, 0.16);
    transform: translateX(105%);
    visibility: hidden;
    pointer-events: none;
    transition: transform 0.3s ease, visibility 0.3s ease;
  }

  .premium-navbar .premium-nav-links.menu-open {
    transform: translateX(0);
    visibility: visible;
    pointer-events: auto;
  }

  .premium-mobile-brand {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(189, 132, 40, 0.25);
  }

  .premium-mobile-brand img {
    display: block;
    width: min(250px, calc(100% - 50px));
    max-width: 100%;
    max-height: 60px;
    object-fit: contain;
    object-position: left center;
  }

  .premium-mobile-brand button {
    display: inline-flex;
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    align-items: center;
    justify-content: center;
    padding: 0;
    color: var(--siva-navy);
    background: #fff;
    border: 1px solid rgba(7, 59, 83, 0.14);
    border-radius: 50%;
    font-size: 17px;
    cursor: pointer;
  }

  .premium-nav-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0;
  }

  .premium-navbar .premium-nav-link {
    width: 100%;
    min-height: 56px;
    padding: 0 5px;
    border-bottom: 1px solid rgba(7, 59, 83, 0.08);
    font-size: 16px;
  }

  .premium-nav-link::after {
    right: auto;
    width: 42px;
    bottom: 0;
  }

  .premium-nav-actions {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }

  .premium-quote-button {
    width: 100%;
    min-height: 52px;
    padding-inline: 14px;
    justify-content: center;
    gap: 10px;
    font-size: 14px;
  }

  .premium-mobile-contact {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .premium-mobile-contact a {
    width: 100%;
    min-height: 48px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    color: var(--siva-navy);
    background: #fff;
    border: 1px solid rgba(7, 59, 83, 0.09);
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    overflow-wrap: anywhere;
  }

  .premium-mobile-contact a svg {
    flex: 0 0 auto;
    color: var(--siva-gold);
    font-size: 18px;
  }

  .premium-mobile-contact a:hover {
    background: #fffaf0;
    border-color: var(--siva-gold);
  }

  /* Backdrop behind the drawer */
  .premium-navbar .premium-nav-backdrop {
    position: fixed !important;
    inset: 0 !important;
    z-index: 100000 !important;
    width: 100%;
    height: 100%;
    display: block;
    padding: 0;
    background: rgba(4, 28, 40, 0.5);
    border: 0;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    cursor: pointer;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .premium-navbar .premium-nav-backdrop.visible {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
}

/* Mobile phones */
@media (max-width: 600px) {
  :root {
    --siva-navbar-height: 70px;
  }

  .premium-nav-inner {
    min-height: 70px;
    padding: 9px 15px;
    gap: 10px;
  }

  .premium-brand img {
    max-width: 320px;
    max-height: 62px;
  }

  .premium-navbar .premium-menu-toggle {
    width: 43px;
    height: 43px;
    flex-basis: 43px;
    font-size: 19px;
  }

  .premium-navbar .premium-nav-links {
    width: min(360px, 90vw);
    padding: 20px;
    gap: 23px;
  }

  .premium-mobile-brand img {
    max-height: 52px;
  }
}

/* Extra-small phones */
@media (max-width: 360px) {
  :root {
    --siva-navbar-height: 64px;
  }

  .premium-nav-inner {
    min-height: 64px;
    padding: 8px 11px;
    gap: 8px;
  }

  .premium-brand img {
    max-width: 245px;
    max-height: 54px;
  }

  .premium-navbar .premium-menu-toggle {
    width: 39px;
    height: 39px;
    flex-basis: 39px;
    font-size: 17px;
  }

  .premium-navbar .premium-nav-links {
    width: 92vw;
    padding: 17px;
    gap: 20px;
  }

  .premium-mobile-brand img {
    max-height: 45px;
  }

  .premium-navbar .premium-nav-link {
    min-height: 52px;
    font-size: 15px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .premium-navbar *,
  .premium-nav-backdrop {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth <= 1024
  );

  const location = useLocation();

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About Us" },
    { to: "/safety-nets", label: "Safety Nets/ Invisible Grills" },
    { to: "/contact", label: "Contact Us" },
  ];

  // Keep the breakpoint synchronized with the screen size.
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);

      if (!mobile) {
        setOpen(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent the page behind the drawer from scrolling.
  useEffect(() => {
    if (!open || !isMobile) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open, isMobile]);

  // Close the drawer with Escape.
  useEffect(() => {
    if (!open) return undefined;

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <style>{styles}</style>

      <header className="premium-navbar">
        <div className="premium-nav-inner">
          <Link
            to="/"
            className="premium-brand"
            aria-label="Siva Safety Nets home"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="Siva Safety Nets - Invisible Grills"
            />
          </Link>

          <button
            type="button"
            className={`premium-menu-toggle ${open ? "is-open" : ""}`}
            onClick={() => setOpen((previous) => !previous)}
            aria-label={
              open ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="premium-navigation"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          <nav
            id="premium-navigation"
            className={`premium-nav-links ${open ? "menu-open" : ""}`}
            aria-label="Main navigation"
            aria-hidden={isMobile ? !open : undefined}
          >
            <div className="premium-mobile-brand">
              <img src="/logo.png" alt="Siva Safety Nets" />

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                tabIndex={isMobile && !open ? -1 : 0}
              >
                <FaTimes />
              </button>
            </div>

            <div className="premium-nav-items">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={closeMenu}
                  tabIndex={isMobile && !open ? -1 : 0}
                  className={({ isActive }) =>
                    `premium-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="premium-nav-actions">
              <a
                className="premium-quote-button"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <FaEnvelope className="quote-icon" />
                <span>Get a Free Quote</span>
                <FaArrowRight className="quote-arrow" />
              </a>

              <div className="premium-mobile-contact">
                <a href={`tel:+${PHONE}`} onClick={closeMenu}>
                  <FaPhoneAlt />
                  <span>{DISPLAY_PHONE}</span>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <FaWhatsapp />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>

          <button
            type="button"
            className={`premium-nav-backdrop ${open ? "visible" : ""}`}
            onClick={closeMenu}
            aria-label="Close navigation menu"
            aria-hidden={!open}
            tabIndex={open ? 0 : -1}
          />
        </div>
      </header>
    </>
  );
}