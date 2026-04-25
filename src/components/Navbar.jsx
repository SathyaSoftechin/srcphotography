import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Stories", path: "/stories" },
    { name: "Film's", path: "/films" },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full z-50">
      
      {/* Container */}
      <div className="flex items-center justify-between px-6 py-2">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center h-12 overflow-visible bg-white rounded-full cursor-pointer"
        >
          <img
            src="/logo2.png"
            alt="SRC Photography"
            className="h-32 object-contain -my-2"
          />
        </div>

        {/* Center Nav */}
        <div className="flex items-center gap-2 bg-black/40 px-2 py-1 rounded-full backdrop-blur-md">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-md font-serif transition-all duration-300 ${
                  isActive
                    ? "bg-black text-white shadow-[0_10px_25px_rgba(255,255,255,0.35),0_15px_35px_rgba(255,255,255,0.15)]"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-6 py-2 rounded-full text-md font-medium font-serif
            hover:bg-white hover:text-black transition-all duration-300"
          >
            Book a consult
          </button>
        </div>

      </div>
    </div>
  );
}