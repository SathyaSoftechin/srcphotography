import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Stories from "./pages/Stories";
import Films from "./pages/Films";
import Contact from "./pages/Contact";

import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-black text-white overflow-x-hidden">
        <ScrollToTop />
        
        {/* Universal Navbar */}
        <Navbar />

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/films" element={<Films />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;