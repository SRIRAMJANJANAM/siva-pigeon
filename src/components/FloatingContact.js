import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const PHONE = "919791170467";

export default function FloatingContact() {
  const whatsappMessage = encodeURIComponent(
    "Hello Siva Safety Nets, I would like to enquire about your services."
  );

  return (
    <>
      <div className="ssn-floating-contact">
        <a
          href={`https://wa.me/${PHONE}?text=${whatsappMessage}`}
          className="ssn-float-whatsapp"
          aria-label="Chat with Siva Safety Nets on WhatsApp"
          title="Chat on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          <span className="ssn-float-label">WhatsApp</span>
        </a>

        <a
          href={`tel:+${PHONE}`}
          className="ssn-float-call"
          aria-label="Call Siva Safety Nets"
          title="Call Siva Safety Nets"
        >
          <FaPhoneAlt />
          <span className="ssn-float-label">Call Now</span>
        </a>
      </div>

      <style>{`
        .ssn-floating-contact {
          position: fixed;
          right: 20px;
          bottom: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          max-width: calc(100vw - 24px);
          font-family: Arial, sans-serif;
          box-sizing: border-box;
        }

        .ssn-floating-contact *,
        .ssn-floating-contact *::before,
        .ssn-floating-contact *::after {
          box-sizing: border-box;
        }

        .ssn-floating-contact a {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 56px;
          min-height: 56px;
          padding: 0 17px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50px;
          color: #fff;
          text-decoration: none;
          font-size: 22px;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.24);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
          animation: ssn-float-appear 0.45s ease both;
          -webkit-tap-highlight-color: transparent;
        }

        .ssn-floating-contact a:hover {
          transform: translateY(-3px);
          box-shadow: 0 9px 24px rgba(0, 0, 0, 0.3);
        }

        .ssn-float-whatsapp {
          background: #20bd5a;
        }

        .ssn-float-call {
          background: #123c70;
          animation-delay: 0.08s !important;
        }

        .ssn-float-label {
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
        }

        .ssn-float-whatsapp::before,
        .ssn-float-call::before {
          content: "";
          position: absolute;
          inset: -3px;
          border: 1px solid currentColor;
          border-radius: inherit;
          opacity: 0;
          pointer-events: none;
          animation: ssn-float-pulse 2.8s infinite;
        }

        @keyframes ssn-float-pulse {
          0% {
            transform: scale(0.98);
            opacity: 0.35;
          }

          100% {
            transform: scale(1.12);
            opacity: 0;
          }
        }

        @keyframes ssn-float-appear {
          from {
            opacity: 0;
            transform: translateX(18px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* TABLET AND MOBILE */
        @media (max-width: 600px) {
          .ssn-floating-contact {
            right: 12px;
            bottom: calc(12px + env(safe-area-inset-bottom, 0px));
            gap: 9px;
          }

          .ssn-floating-contact a {
            min-width: 48px;
            min-height: 48px;
            padding: 0 13px;
            gap: 8px;
            font-size: 19px;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.24);
          }

          .ssn-float-label {
            font-size: 12px;
          }
        }

        /* SMALL MOBILE SCREENS */
        @media (max-width: 360px) {
          .ssn-floating-contact {
            right: 8px;
            bottom: calc(10px + env(safe-area-inset-bottom, 0px));
            gap: 8px;
          }

          .ssn-floating-contact a {
            min-width: 44px;
            min-height: 44px;
            padding: 0 11px;
            gap: 7px;
            font-size: 17px;
          }

          .ssn-float-label {
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ssn-floating-contact a,
          .ssn-floating-contact a::before {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
