import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

import Home from "./components/Home";
import About from "./components/About";
import SafetyNets from "./components/SafetyNets";
import Contact from "./components/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/safety-nets" element={<SafetyNets />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="page-banner">
                <h1>Page Not Found</h1>
                <p>The page you requested does not exist.</p>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}