import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 pt-16 pb-6">
      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left - Logo & Tagline */}
        <div>
          <img
            src="/logo2.png"
            alt="SRC Photography"
            className="h-32 w-52 mb-4 bg-white rounded-full"
          />
          <p className="text-gray-400 text-md max-w-xs leading-relaxed">
            Turning life’s most precious <br />
            moments into timeless works of art
          </p>
        </div>

        {/* Center - Quick Links */}
        <div>
          <h3 className="text-md tracking-widest mb-4 font-serif text-yellow-300">
            QUICK LINK’s
          </h3>
          <ul className="space-y-3 text-gray-300 text-md font-serif">
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Stories
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Film's
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Right - Social */}
        <div>
          <h3 className="text-md font-serif mb-4 text-yellow-300">
            Follow Us On Social Media
          </h3>

          <div className="flex gap-5 text-2xl">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919XXXXXXXXX?text=Hi%20I%20want%20to%20book%20a%20shoot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="m9.237 7.004l4.84-5.505H12.93L8.727 6.28L5.371 1.5H1.5l5.075 7.228L1.5 14.499h1.147l4.437-5.047l3.545 5.047H14.5zM7.666 8.791l-.514-.72L3.06 2.344h1.762l3.302 4.622l.514.72l4.292 6.007h-1.761z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-xs">
        ©2026 SRC Photography. All Rights Reserved.
      </div>
    </footer>
  );
}
