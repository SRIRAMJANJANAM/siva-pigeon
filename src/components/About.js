
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaAward,
  FaBullseye,
  FaEye,
  FaTools,
  FaUsers,
  FaStar,
  FaClock,
  FaRulerCombined,
  FaHeart,
} from "react-icons/fa";

const PHONE = "919940399826";
const DISPLAY_PHONE = "+91 99403 99826";

const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Siva Safety Nets, I would like to know more about your safety net and invisible grill services."
)}`;

const aboutStyles = `
.ssn-about {
  --navy: #073b52;
  --dark: #042b3e;
  --gold: #bd852c;
  --gold-light: #f0cb8a;
  --cream: #fffdf9;
  --text: #18394a;
  --muted: #637681;
  color: var(--text);
  background: var(--cream);
  overflow: hidden;
  font-family: inherit;
}

.ssn-about *,
.ssn-about *::before,
.ssn-about *::after {
  box-sizing: border-box;
}

.ssn-about a {
  text-decoration: none;
}

.ssn-about-container {
  width: min(1160px, calc(100% - 44px));
  margin: 0 auto;
}

/* HERO */

.ssn-about-hero {
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: 410px;
  align-items: center;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 85% 15%, rgba(211,167,92,.2), transparent 34%),
    linear-gradient(125deg, #073b52 0%, #052f43 65%, #031f30 100%);
  animation: aboutHeroIn 1s cubic-bezier(.22,1,.36,1) both;
}

.ssn-about-hero::before,
.ssn-about-hero::after {
  position: absolute;
  z-index: -1;
  content: "";
  border: 1px solid rgba(255,255,255,.09);
  border-radius: 50%;
  pointer-events: none;
}

.ssn-about-hero::before {
  width: 480px;
  height: 480px;
  top: -210px;
  right: -80px;
  animation: aboutOrbit 25s linear infinite;
}

.ssn-about-hero::after {
  width: 350px;
  height: 350px;
  top: -145px;
  right: -15px;
  animation: aboutOrbit 18s linear infinite reverse;
}

.ssn-about-hero-content {
  padding-top: 75px;
  padding-bottom: 78px;
}

.ssn-about-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 18px;
  color: var(--gold-light);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.8px;
  text-transform: uppercase;
}

.ssn-about-eyebrow::before {
  width: 32px;
  height: 2px;
  flex-shrink: 0;
  background: #d7a650;
  content: "";
}

.ssn-about-hero h1 {
  max-width: 780px;
  margin: 0 0 20px;
  color: var(--cream);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(37px, 5.5vw, 62px);
  font-weight: 700;
  letter-spacing: -1.7px;
  line-height: 1.1;
  animation: aboutFadeUp .85s .15s both;
}

.ssn-about-hero h1 span {
  color: #e9c17d;
}

.ssn-about-hero p {
  max-width: 670px;
  margin: 0;
  color: #d1e0e6;
  font-size: 15px;
  line-height: 1.95;
  animation: aboutFadeUp .85s .3s both;
}

.ssn-about-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
  color: #b9ced8;
  font-size: 12px;
  animation: aboutFadeUp .85s .45s both;
}

.ssn-about-breadcrumb a {
  color: #f1d39b;
  transition: color .25s ease;
}

.ssn-about-breadcrumb a:hover {
  color: white;
}

.ssn-about-breadcrumb span {
  color: #7f9ca9;
}

/* COMMON SECTIONS */

.ssn-about-section {
  padding: 86px 0;
}

.ssn-about-kicker {
  margin: 0 0 13px;
  color: #ad792a;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.1px;
  text-transform: uppercase;
}

.ssn-about-heading {
  margin: 0 0 20px;
  color: var(--navy);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(29px, 3.5vw, 43px);
  font-weight: 700;
  letter-spacing: -.8px;
  line-height: 1.2;
}

.ssn-about-heading span {
  color: #b98432;
}

.ssn-about-copy {
  margin: 0 0 16px;
  color: #5b6e79;
  font-size: 14px;
  line-height: 1.95;
}

/* SCROLL ANIMATIONS */

.ssn-about-reveal {
  opacity: 0;
  transform: translate3d(0, 35px, 0);
  transition:
    opacity .8s cubic-bezier(.22,1,.36,1),
    transform .8s cubic-bezier(.22,1,.36,1);
  will-change: opacity, transform;
}

.ssn-about-reveal.ssn-about-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.ssn-about-reveal-delay-1 {
  transition-delay: .12s;
}

.ssn-about-reveal-delay-2 {
  transition-delay: .24s;
}

.ssn-about-reveal-delay-3 {
  transition-delay: .36s;
}

/* INTRODUCTION */

.ssn-about-intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 68px;
}

.ssn-about-visual {
  position: relative;
  min-width: 0;
}

.ssn-about-image-wrap {
  position: relative;
  min-height: 430px;
  overflow: hidden;
  border-radius: 18px;
  background: #e7eef0;
  box-shadow: 0 22px 55px rgba(7,59,82,.15);
}

.ssn-about-image-wrap img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(.22,1,.36,1);
}

.ssn-about-image-wrap:hover img {
  transform: scale(1.075);
}

.ssn-about-image-wrap::after {
  position: absolute;
  inset: 45% 0 0;
  background: linear-gradient(transparent, rgba(3,34,49,.65));
  content: "";
  pointer-events: none;
}

.ssn-about-image-label {
  position: absolute;
  z-index: 1;
  right: 18px;
  bottom: 18px;
  left: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 17px;
  border: 1px solid rgba(255,255,255,.25);
  border-radius: 12px;
  color: white;
  background: rgba(4,43,62,.88);
  backdrop-filter: blur(10px);
  transition: transform .35s ease;
}

.ssn-about-image-wrap:hover .ssn-about-image-label {
  transform: translateY(-4px);
}

.ssn-about-image-label-icon {
  display: grid;
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  place-items: center;
  border-radius: 10px;
  color: #f0ce8c;
  background: rgba(255,255,255,.1);
  font-size: 20px;
}

.ssn-about-image-label strong {
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
}

.ssn-about-image-label small {
  display: block;
  color: #d0e0e7;
  font-size: 11px;
  line-height: 1.6;
}

.ssn-about-image-decoration {
  position: absolute;
  z-index: -1;
  right: -17px;
  bottom: -17px;
  width: 145px;
  height: 145px;
  border-radius: 16px;
  background: repeating-linear-gradient(
    45deg,
    rgba(189,133,44,.24),
    rgba(189,133,44,.24) 2px,
    transparent 2px,
    transparent 11px
  );
  animation: aboutFloat 5s ease-in-out infinite;
}

/* CHECKLIST */

.ssn-about-checklist {
  display: grid;
  gap: 13px;
  margin: 24px 0 28px;
  padding: 0;
  list-style: none;
}

.ssn-about-checklist li {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  color: #294958;
  font-size: 13px;
  line-height: 1.7;
}

.ssn-about-checklist svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--gold);
}

/* BUTTONS */

.ssn-about-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.ssn-about-btn {
  position: relative;
  isolation: isolate;
  display: inline-flex;
  min-height: 51px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 20px;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition:
    transform .3s cubic-bezier(.22,1,.36,1),
    box-shadow .3s ease,
    background .3s ease;
}

.ssn-about-btn::before {
  position: absolute;
  z-index: -1;
  inset: 0;
  content: "";
  background: linear-gradient(
    110deg,
    transparent 20%,
    rgba(255,255,255,.4) 48%,
    transparent 75%
  );
  transform: translateX(-120%);
  transition: transform .65s ease;
}

.ssn-about-btn:hover::before {
  transform: translateX(120%);
}

.ssn-about-btn:hover {
  transform: translateY(-4px);
}

.ssn-about-btn:active {
  transform: scale(.97);
}

.ssn-about-btn:focus-visible {
  outline: 3px solid var(--gold);
  outline-offset: 4px;
}

.ssn-about-btn-primary {
  color: var(--navy);
  background: linear-gradient(135deg, #f0d29a, #c7933c);
  box-shadow: 0 8px 23px rgba(189,133,44,.22);
}

.ssn-about-btn-primary:hover {
  box-shadow: 0 14px 30px rgba(189,133,44,.36);
}

.ssn-about-btn-secondary {
  border-color: #d7e0e4;
  color: var(--navy);
  background: white;
}

.ssn-about-btn-secondary:hover {
  border-color: var(--gold);
  background: #fffaf0;
}

/* STATISTICS STRIP */

.ssn-about-stats {
  color: white;
  background: linear-gradient(110deg, #073b52, #042b3e);
}

.ssn-about-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  padding-top: 34px;
  padding-bottom: 34px;
}

.ssn-about-stat {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 15px;
  border-right: 1px solid rgba(255,255,255,.14);
}

.ssn-about-stat:last-child {
  border-right: 0;
}

.ssn-about-stat-icon {
  display: grid;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  place-items: center;
  border: 1px solid rgba(238,197,123,.35);
  border-radius: 12px;
  color: #f0cb8a;
  background: rgba(255,255,255,.05);
  font-size: 19px;
  transition:
    transform .35s ease,
    background .35s ease,
    border-color .35s ease;
}

.ssn-about-stat:hover .ssn-about-stat-icon {
  transform: translateY(-5px) rotate(-5deg);
  border-color: #f0cb8a;
  background: rgba(255,255,255,.13);
}

.ssn-about-stat strong {
  display: block;
  margin-bottom: 4px;
  color: var(--cream);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 25px;
  line-height: 1.2;
}

.ssn-about-stat span {
  display: block;
  color: #c8d9e1;
  font-size: 11px;
  line-height: 1.6;
}

/* WHY CHOOSE US */

.ssn-about-why {
  background: #f4f7f8;
}

.ssn-about-section-heading {
  max-width: 710px;
  margin: 0 auto 45px;
  text-align: center;
}

.ssn-about-section-heading .ssn-about-heading {
  margin-bottom: 15px;
}

.ssn-about-section-heading > p:last-child {
  margin: 0;
  color: #637681;
  font-size: 14px;
  line-height: 1.9;
}

.ssn-about-benefits {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.ssn-about-benefit {
  position: relative;
  padding: 30px 25px;
  overflow: hidden;
  border: 1px solid #e5ebee;
  border-radius: 15px;
  background: white;
  box-shadow: 0 7px 24px rgba(7,59,82,.035);
  transition:
    transform .4s cubic-bezier(.22,1,.36,1),
    box-shadow .4s ease,
    border-color .4s ease;
}

.ssn-about-benefit:nth-child(1) {
  transition-delay: .04s;
}

.ssn-about-benefit:nth-child(2) {
  transition-delay: .13s;
}

.ssn-about-benefit:nth-child(3) {
  transition-delay: .22s;
}

.ssn-about-benefit::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #bd852c, #f0cb8a);
  content: "";
  transition: width .4s ease;
}

.ssn-about-benefit:hover {
  transform: translateY(-9px);
  border-color: #d8bd8e;
  box-shadow: 0 20px 38px rgba(7,59,82,.11);
}

.ssn-about-benefit:hover::after {
  width: 100%;
}

.ssn-about-benefit-icon {
  display: grid;
  width: 53px;
  height: 53px;
  margin-bottom: 21px;
  place-items: center;
  border-radius: 13px;
  color: #a97422;
  background: #fbf1df;
  font-size: 22px;
  transition:
    transform .4s ease,
    color .3s ease,
    background .3s ease;
}

.ssn-about-benefit:hover .ssn-about-benefit-icon {
  transform: translateY(-4px) rotate(-7deg) scale(1.08);
  color: white;
  background: var(--navy);
}

.ssn-about-benefit h3 {
  margin: 0 0 12px;
  color: var(--navy);
  font-size: 17px;
  line-height: 1.45;
}

.ssn-about-benefit p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
}

.ssn-about-benefit ul {
  display: grid;
  gap: 10px;
  margin: 19px 0 0;
  padding: 0;
  list-style: none;
}

.ssn-about-benefit li {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  color: #415c69;
  font-size: 12px;
  line-height: 1.7;
}

.ssn-about-benefit li svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--gold);
}

/* MISSION AND VALUES */

.ssn-about-values-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  align-items: center;
  gap: 65px;
}

.ssn-about-values-image {
  position: relative;
  min-height: 410px;
  overflow: hidden;
  border-radius: 17px;
  background: #e7eef0;
  box-shadow: 0 18px 45px rgba(7,59,82,.1);
}

.ssn-about-values-image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(.22,1,.36,1);
}

.ssn-about-values-image:hover img {
  transform: scale(1.075);
}

.ssn-about-values-list {
  display: grid;
  gap: 21px;
  margin-top: 27px;
}

.ssn-about-value {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.ssn-about-value-icon {
  display: grid;
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  place-items: center;
  border: 1px solid #e8d5b4;
  border-radius: 11px;
  color: #a97422;
  background: #fff8ea;
  font-size: 17px;
  transition:
    transform .35s ease,
    background .35s ease;
}

.ssn-about-value:hover .ssn-about-value-icon {
  transform: scale(1.1) rotate(-6deg);
  background: #f6e6c8;
}

.ssn-about-value h3 {
  margin: 1px 0 6px;
  color: var(--navy);
  font-size: 15px;
}

.ssn-about-value p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.85;
}

/* CALL TO ACTION */

.ssn-about-cta {
  position: relative;
  overflow: hidden;
  padding: 66px 0;
  color: white;
  background:
    radial-gradient(circle at 90% 10%, rgba(225,184,108,.18), transparent 32%),
    linear-gradient(115deg, #073b52, #042b3e);
  background-size: 150% 150%;
  animation: aboutBackground 14s ease-in-out infinite alternate;
}

.ssn-about-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
}

.ssn-about-cta h2 {
  max-width: 660px;
  margin: 0 0 12px;
  color: var(--cream);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.2;
}

.ssn-about-cta p:not(.ssn-about-eyebrow) {
  max-width: 620px;
  margin: 0;
  color: #c9dce4;
  font-size: 14px;
  line-height: 1.9;
}

.ssn-about-cta .ssn-about-actions {
  flex-shrink: 0;
}

/* ANIMATION KEYFRAMES */

@keyframes aboutHeroIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes aboutFadeUp {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes aboutOrbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes aboutFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes aboutBackground {
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
}

/* TABLET */

@media (max-width: 950px) {
  .ssn-about-intro-grid {
    gap: 38px;
  }

  .ssn-about-stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .ssn-about-stat:nth-child(2) {
    border-right: 0;
  }

  .ssn-about-benefits {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ssn-about-values-grid {
    gap: 38px;
  }

  .ssn-about-cta-inner {
    align-items: flex-start;
    flex-direction: column;
  }
}

/* MOBILE */

@media (max-width: 650px) {
  .ssn-about-container {
    width: min(calc(100% - 32px), 540px);
  }

  .ssn-about-hero {
    min-height: auto;
  }

  .ssn-about-hero-content {
    padding-top: 64px;
    padding-bottom: 62px;
  }

  .ssn-about-hero h1 {
    font-size: clamp(35px, 10vw, 48px);
    letter-spacing: -1px;
  }

  .ssn-about-hero p {
    font-size: 14px;
  }

  .ssn-about-section {
    padding: 60px 0;
  }

  .ssn-about-intro-grid,
  .ssn-about-values-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .ssn-about-image-wrap {
    min-height: 340px;
  }

  .ssn-about-values-image {
    min-height: 330px;
  }

  .ssn-about-heading {
    font-size: 32px;
  }

  .ssn-about-stats-grid {
    gap: 8px;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .ssn-about-stat {
    gap: 10px;
    padding: 12px 4px;
  }

  .ssn-about-stat-icon {
    width: 39px;
    height: 39px;
    font-size: 16px;
  }

  .ssn-about-stat strong {
    font-size: 21px;
  }

  .ssn-about-stat span {
    font-size: 10px;
  }

  .ssn-about-benefits {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .ssn-about-benefit {
    padding: 25px 22px;
  }

  .ssn-about-section-heading {
    margin-bottom: 30px;
  }

  .ssn-about-actions {
    width: 100%;
  }

  .ssn-about-btn {
    flex: 1 1 180px;
  }

  .ssn-about-cta {
    padding: 52px 0;
  }

  .ssn-about-cta .ssn-about-actions {
    flex-direction: column;
  }

  .ssn-about-cta .ssn-about-btn {
    width: 100%;
    flex-basis: auto;
  }

  .ssn-about-reveal {
    transform: translate3d(0, 22px, 0);
  }
}

@media (max-width: 370px) {
  .ssn-about-container {
    width: calc(100% - 24px);
  }

  .ssn-about-stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .ssn-about-stat {
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;
  }

  .ssn-about-actions {
    flex-direction: column;
  }

  .ssn-about-btn {
    width: 100%;
    flex-basis: auto;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .ssn-about *,
  .ssn-about *::before,
  .ssn-about *::after {
    animation: none !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
    transition-delay: 0ms !important;
  }

  .ssn-about-reveal {
    opacity: 1 !important;
    transform: none !important;
    will-change: auto;
  }
}
`;

function useAboutReveal() {
  useEffect(() => {
    const root = document.querySelector(".ssn-about");

    if (!root) return;

    const elements = root.querySelectorAll(".ssn-about-reveal");

    const showAll = () => {
      elements.forEach((element) => {
        element.classList.add("ssn-about-visible");
      });
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ssn-about-visible");
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
  }, []);
}

export default function About() {
  useAboutReveal();

  return (
    <>
      <style>{aboutStyles}</style>

      <main className="ssn-about">
        {/* HERO */}
        <section className="ssn-about-hero">
          <div className="ssn-about-container ssn-about-hero-content">
            <div className="ssn-about-eyebrow">
              About Siva Safety Nets
            </div>

            <h1>
              Safety You Can Trust.
              <br />
              <span>Quality You Can See.</span>
            </h1>

            <p>
              We provide practical safety net and invisible grill
              solutions designed to help protect your family, children
              and pets while keeping your home open, comfortable and bright.
            </p>

            <div className="ssn-about-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
          </div>
        </section>

        {/* COMPANY INTRODUCTION */}
        <section className="ssn-about-section">
          <div className="ssn-about-container ssn-about-intro-grid">
            <div className="ssn-about-visual ssn-about-reveal">
              <div className="ssn-about-image-wrap">
                <img
                  src="images/pigeon-safety-nets.webp"
                  alt="Modern home balcony with an elegant open view"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85";
                  }}
                />

                <div className="ssn-about-image-label">
                  <span className="ssn-about-image-label-icon">
                    <FaShieldAlt />
                  </span>
                  <span>
                    <strong>Protection Meets Design</strong>
                    <small>
                      Practical solutions for modern homes
                    </small>
                  </span>
                </div>
              </div>

              <div className="ssn-about-image-decoration" />
            </div>

            <div className="ssn-about-intro-copy ssn-about-reveal ssn-about-reveal-delay-1">
              <p className="ssn-about-kicker">Who We Are</p>

              <h2 className="ssn-about-heading">
                Your Partner in
                <br />
                <span>Home Safety</span>
              </h2>

              <p className="ssn-about-copy">
                At Siva Safety Nets, we focus on safety netting and
                invisible grill solutions for balconies, windows,
                terraces, duct areas and other open spaces.
              </p>

              <p className="ssn-about-copy">
                We understand that your home should feel safe without
                losing its natural light, fresh air or beautiful views.
                Our goal is to help you find a suitable solution based
                on your space, requirements and budget.
              </p>

              <p className="ssn-about-copy">
                From discussing your needs to arranging measurements
                and installation enquiries, we aim to make the process
                clear, convenient and professional.
              </p>

              <ul className="ssn-about-checklist">
                <li>
                  <FaCheckCircle />
                  Safety solutions for balconies, windows and terraces
                </li>
                <li>
                  <FaCheckCircle />
                  Options for children, pets and bird protection
                </li>
                <li>
                  <FaCheckCircle />
                  Enquiries for invisible grills and pigeon netting
                </li>
                <li>
                  <FaCheckCircle />
                  Clear communication about service and installation
                </li>
              </ul>

              <div className="ssn-about-actions">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ssn-about-btn ssn-about-btn-primary"
                >
                  <FaWhatsapp />
                  Enquire on WhatsApp
                  <FaArrowRight />
                </a>

                <a
                  href={`tel:+${PHONE}`}
                  className="ssn-about-btn ssn-about-btn-secondary"
                >
                  <FaPhoneAlt />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS / BENEFITS STRIP */}
        <section className="ssn-about-stats">
          <div className="ssn-about-container ssn-about-stats-grid">
            <div className="ssn-about-stat ssn-about-reveal">
              <div className="ssn-about-stat-icon">
                <FaShieldAlt />
              </div>
              <div>
                <strong>Safety</strong>
                <span>Protection-focused solutions</span>
              </div>
            </div>

            <div className="ssn-about-stat ssn-about-reveal ssn-about-reveal-delay-1">
              <div className="ssn-about-stat-icon">
                <FaTools />
              </div>
              <div>
                <strong>Quality</strong>
                <span>Careful installation planning</span>
              </div>
            </div>

            <div className="ssn-about-stat ssn-about-reveal ssn-about-reveal-delay-2">
              <div className="ssn-about-stat-icon">
                <FaUsers />
              </div>
              <div>
                <strong>Service</strong>
                <span>Customer-focused assistance</span>
              </div>
            </div>

            <div className="ssn-about-stat ssn-about-reveal ssn-about-reveal-delay-3">
              <div className="ssn-about-stat-icon">
                <FaHeart />
              </div>
              <div>
                <strong>Peace of Mind</strong>
                <span>Solutions for everyday living</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="ssn-about-section ssn-about-why">
          <div className="ssn-about-container">
            <div className="ssn-about-section-heading ssn-about-reveal">
              <p className="ssn-about-kicker">Why Choose Us</p>

              <h2 className="ssn-about-heading">
                Thoughtful Safety.
                <br />
                <span>Professional Service.</span>
              </h2>

              <p>
                Every space is different. We help you explore suitable
                safety solutions with attention to function, appearance
                and your household's needs.
              </p>
            </div>

            <div className="ssn-about-benefits">
              <article className="ssn-about-benefit ssn-about-reveal">
                <div className="ssn-about-benefit-icon">
                  <FaShieldAlt />
                </div>

                <h3>Safety-Focused Solutions</h3>

                <p>
                  Explore netting and grill options for open areas
                  where additional protection may be needed.
                </p>

                <ul>
                  <li>
                    <FaCheckCircle />
                    Balcony and window protection
                  </li>
                  <li>
                    <FaCheckCircle />
                    Child and pet safety options
                  </li>
                  <li>
                    <FaCheckCircle />
                    Bird and pigeon exclusion
                  </li>
                </ul>
              </article>

              <article className="ssn-about-benefit ssn-about-reveal ssn-about-reveal-delay-1">
                <div className="ssn-about-benefit-icon">
                  <FaEye />
                </div>

                <h3>Designed for Your Space</h3>

                <p>
                  Find a solution that complements your home while
                  preserving light, ventilation and the appearance
                  of your balcony.
                </p>

                <ul>
                  <li>
                    <FaCheckCircle />
                    Invisible grill options
                  </li>
                  <li>
                    <FaCheckCircle />
                    Different netting applications
                  </li>
                  <li>
                    <FaCheckCircle />
                    Space-specific recommendations
                  </li>
                </ul>
              </article>

              <article className="ssn-about-benefit ssn-about-reveal ssn-about-reveal-delay-2">
                <div className="ssn-about-benefit-icon">
                  <FaRulerCombined />
                </div>

                <h3>Clear Enquiry Process</h3>

                <p>
                  Discuss your requirements and ask about measurements,
                  available materials, installation timelines and costs.
                </p>

                <ul>
                  <li>
                    <FaCheckCircle />
                    Service enquiries made simple
                  </li>
                  <li>
                    <FaCheckCircle />
                    Pricing based on your requirements
                  </li>
                  <li>
                    <FaCheckCircle />
                    Direct phone and WhatsApp contact
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* MISSION AND VALUES */}
        <section className="ssn-about-section">
          <div className="ssn-about-container ssn-about-values-grid">
            <div className="ssn-about-values-image ssn-about-reveal">
              <img
                src="images/duct-safety-nets.webp"
                alt="Bright contemporary home designed for comfortable living"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src =
                    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85";
                }}
              />
            </div>

            <div className="ssn-about-reveal ssn-about-reveal-delay-1">
              <p className="ssn-about-kicker">Our Commitment</p>

              <h2 className="ssn-about-heading">
                More Than Installation.
                <br />
                <span>Peace of Mind.</span>
              </h2>

              <p className="ssn-about-copy">
                Our approach is built around understanding what matters
                to you, explaining available options and helping you
                make an informed decision about your property.
              </p>

              <div className="ssn-about-values-list">
                <div className="ssn-about-value">
                  <div className="ssn-about-value-icon">
                    <FaBullseye />
                  </div>
                  <div>
                    <h3>Our Mission</h3>
                    <p>
                      To make everyday spaces more secure with
                      practical safety netting and invisible grill
                      solutions tailored to individual requirements.
                    </p>
                  </div>
                </div>

                <div className="ssn-about-value">
                  <div className="ssn-about-value-icon">
                    <FaAward />
                  </div>
                  <div>
                    <h3>Our Quality Promise</h3>
                    <p>
                      To discuss suitable materials, fitting methods
                      and maintenance expectations clearly before
                      work proceeds.
                    </p>
                  </div>
                </div>

                <div className="ssn-about-value">
                  <div className="ssn-about-value-icon">
                    <FaClock />
                  </div>
                  <div>
                    <h3>Our Service Approach</h3>
                    <p>
                      To respond to enquiries and help customers
                      understand the next steps for their project.
                    </p>
                  </div>
                </div>

                <div className="ssn-about-value">
                  <div className="ssn-about-value-icon">
                    <FaStar />
                  </div>
                  <div>
                    <h3>Our Vision</h3>
                    <p>
                      To build lasting customer trust through
                      thoughtful recommendations, careful work
                      and professional communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="ssn-about-cta">
          <div className="ssn-about-container ssn-about-cta-inner">
            <div className="ssn-about-reveal">
              <p className="ssn-about-eyebrow">
                Let's Make Your Space Safer
              </p>

              <h2>Ready to Protect Your Balcony?</h2>

              <p>
                Contact Siva Safety Nets to discuss balcony safety nets,
                invisible grills, pigeon netting or another safety
                solution for your home.
              </p>
            </div>

            <div className="ssn-about-actions ssn-about-reveal ssn-about-reveal-delay-1">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ssn-about-btn ssn-about-btn-primary"
              >
                <FaWhatsapp />
                Get an Enquiry
                <FaArrowRight />
              </a>

              <a
                href={`tel:+${PHONE}`}
                className="ssn-about-btn ssn-about-btn-secondary"
                style={{
                  color: "#fff",
                  borderColor: "rgba(255,255,255,.3)",
                  background: "rgba(255,255,255,.06)",
                }}
              >
                <FaPhoneAlt />
                {DISPLAY_PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
