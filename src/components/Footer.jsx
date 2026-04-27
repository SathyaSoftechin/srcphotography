import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

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

            {/* Behance */}
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <g clipPath="url(#SVGXv8lpc2Y)">
                    <path
                      fill="#fff"
                      d="M22 7h-7V5h7zm1.726 10c-.442 1.297-2.029 3-5.101 3c-3.074 0-5.564-1.729-5.564-5.675c0-3.91 2.325-5.92 5.466-5.92c3.082 0 4.964 1.782 5.375 4.426c.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219c-1.466 0-2.277.768-2.488 2.219m-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906c3.461 1.26 3.577 8.061-3.207 8.061M3 11h3.584c2.508 0 2.906-3-.312-3H3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="SVGXv8lpc2Y">
                      <path fill="#fff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </g>
              </svg>
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
