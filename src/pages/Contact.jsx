import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import contactHero from "../assets/contact/hero.png";
import contactImg from "../assets/contact/img1.png";

export default function Contact() {
  return (
    <div className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        <img
          src={contactHero}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-serif text-yellow-500">
            The Beginning of Your Story
          </h1>

          <p className="mt-3 text-sm tracking-widest text-gray-300">
            INQUIRE FOR YOUR BESPOKE CINEMATIC EXPERIENCE.
          </p>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="py-20 px-6 md:px-16 bg-neutral-900">
        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-serif mb-4 text-yellow-500">
              The Intention
            </h2>

            <p className="text-gray-400 text-sm mb-10">
              Let us know about your special day. We work selectively to give
              every story the attention it deserves.
            </p>

            <form className="space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none py-2"
                />

                <input
                  type="text"
                  placeholder="Partner's Name"
                  className="bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none py-2"
                />
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none py-2"
                />

                <input
                  type="text"
                  placeholder="Location"
                  className="bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none py-2"
                />
              </div>

              {/* Row 3 */}
              <input
                type="text"
                placeholder="Tell us about your vision"
                className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none py-2"
              />

              {/* Row 4 */}
              <input
                type="text"
                placeholder="How did you hear about us?"
                className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none py-2"
              />

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 text-yellow-500 tracking-widest text-sm hover:underline"
              >
                SUBMIT INQUIRY →
              </button>
            </form>
          </motion.div>

          {/* RIGHT - PROCESS + CONTACT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {/* Process */}
            <div className="mb-10">
              <h3 className="text-2xl text-gray-400 mb-6 font-serif">
                What happens next?
              </h3>

              <div className="space-y-6 text-lg">
                <div>
                  <span className="text-yellow-500 mr-3">01</span>
                  Personal Consultation
                  <p className="text-gray-400 text-xs mt-1 ml-6">
                    We discuss your vision and expectations.
                  </p>
                </div>

                <div>
                  <span className="text-yellow-500 mr-3">02</span>
                  Bespoke Proposal
                  <p className="text-gray-400 text-xs mt-1 ml-6">
                    A tailored plan designed for your story.
                  </p>
                </div>

                <div>
                  <span className="text-yellow-500 mr-3">03</span>
                  Secure the Date
                  <p className="text-gray-400 text-xs mt-1 ml-6">
                    Confirm and begin the journey together.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#1a1a1a] p-6 md:p-8 max-w-md">
              {/* Image */}
              <div className="mb-6">
                <img
                  src={contactImg}
                  alt="Contact"
                  className="w-full h-[180px] object-cover"
                />
              </div>

              {/* Heading */}
              <h3 className="text-yellow-500 font-serif text-xl mb-6">
                Contact Details
              </h3>

              {/* Details */}
              <div className="space-y-5 text-sm text-gray-300">
                {/* Address */}
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-yellow-500 text-base" />
                  <p>Hyderabad, Madhapur 100 Feet road</p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-yellow-500 text-base" />
                  <p>SRC123@.com</p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-yellow-500 text-base" />
                  <p>1234567890</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL QUOTE ================= */}
      <section className="py-20 text-center bg-[#0E0E0F]">
        <p className="text-yellow-500 text-xl mb-4">✦</p>

        <p className="text-gray-300 italic text-2xl max-w-xl mx-auto font-serif">
          “We don’t just capture moments; we preserve <br />the resonance of a
          timeless legacy.”
        </p>
      </section>
    </div>
  );
}
