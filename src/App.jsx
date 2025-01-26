import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./app.css";
import Home from "./component/Home";
import Features from "./component/Features";
import Feaslider from "./component/Feaslider";
import Header from "./component/Header";
import Footer from "./component/Footer";
import OTC3DayPackage from "./component/OTC3DayPackage";
import PayToTrc20 from "./component/payment details/PayToTrc20";
import OTC5DayPackage from "./component/OTC5DayPackage";
import PayToBep20 from "./component/payment details/PayToBep20";
import PayTobtc from "./component/payment details/PayToBtc";
import OTC15DayPackage from "./component/OTC15DayPackage";
import ScrollToTop from "./component/ScrollToTop"; // Import ScrollToTop

// Layout Component
const Layout = ({ children }) => {
  const location = useLocation();

  // Hide Header and Footer for specific routes
  const hideHeaderAndFooter =
    location.pathname.startsWith("/OTC3DayPackage") ||
    location.pathname.startsWith("/OTC5DayPackage") ||
    location.pathname.startsWith("/OTC15DayPackage");

  return (
    <>
      {!hideHeaderAndFooter && <Header />}
      <div>{children}</div>
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensure ScrollToTop is used */}
      <Layout>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/feaslider" element={<Feaslider />} />

          {/* Nested Routes for OTC Packages */}
          <Route path="/OTC3DayPackage" element={<OTC3DayPackage />} />
          <Route path="/OTC5DayPackage" element={<OTC5DayPackage />} />
          <Route path="/OTC15DayPackage" element={<OTC15DayPackage />} />

          {/* Payment Details Routes */}
          <Route path="/OTC3DayPackage/PayToTrc20" element={<PayToTrc20 />} />
          <Route path="/OTC3DayPackage/PayToBep20" element={<PayToBep20 />} />
          <Route path="/OTC3DayPackage/PayTobtc" element={<PayTobtc />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
