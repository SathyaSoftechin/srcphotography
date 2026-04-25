import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Stories", path: "/stories" },
    { name: "Film's", path: "/films" },
  ];

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full z-50 px-4">

      {/* ===== NAVBAR ===== */}
      <div className="flex items-center justify-between px-4 md:px-6 py-2">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center h-12 bg-white rounded-full cursor-pointer"
        >
          <img
            src="/logo2.png"
            alt="SRC Photography"
            className="h-28 object-contain -my-2"
          />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-2 bg-black/40 px-2 py-1 rounded-full backdrop-blur-md">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-md font-serif transition-all duration-300 ${
                  isActive
                    ? "bg-black text-white shadow-[0_10px_25px_rgba(255,255,255,0.35)]"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-6 py-2 rounded-full text-md font-medium font-serif hover:bg-white hover:text-black transition-all duration-300"
          >
            Book a consult
          </button>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <FiMenu className="text-white text-2xl" />
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 1 }} // ⚠️ important (no fade reveal)
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            className="fixed inset-0 z-[9999] bg-[#05070c] isolate flex flex-col"
          >

            {/* Gradient Layer (visual only) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] to-[#05070c]" />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col h-full">

              {/* TOP BAR */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <img src="/logo2.png" className="h-8" />

                <button onClick={() => setMenuOpen(false)}>
                  <FiX className="text-white text-2xl" />
                </button>
              </div>

              {/* MENU */}
              <div className="flex flex-col items-center justify-center flex-1 gap-10 text-white">

                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-serif"
                  >
                    {item.name}
                  </NavLink>
                ))}

                <button
                  onClick={() => {
                    navigate("/contact");
                    setMenuOpen(false);
                  }}
                  className="bg-yellow-500 text-black px-8 py-3 text-sm tracking-widest"
                >
                  BOOK A CONSULT
                </button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}