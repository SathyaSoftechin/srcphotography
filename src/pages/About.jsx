import { motion } from "framer-motion";
import aboutHero from "../assets/about/img1.png";
import cam1 from "../assets/about/img2.png";
import cam2 from "../assets/about/img3.png";
import cam3 from "../assets/about/img4.png";
import cam4 from "../assets/about/img5.png";
import cam5 from "../assets/about/img6.png";

export default function About() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] w-full">
        <motion.img
          src={aboutHero}
          alt="About Hero"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
        />

        {/* <div className="absolute inset-0 bg-black/50" /> */}

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-widest text-yellow-500 mb-3"
          >
            OUR VISION
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif leading-tight max-w-2xl"
          >
            The Poetry of <br /> Light & Shadow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-gray-300 max-w-md"
          >
            A manifesto for our artistic philosophy.
          </motion.p>
        </div>
      </section>

      {/* ================= BEHIND THE LENS ================= */}
      <section className="py-20 px-6 md:px-16 bg-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          {/* LEFT */}
          <div>
            <div className="text-xs tracking-widest text-yellow-400 mb-3">
              IN ACTION
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif"
            >
              Behind the Lens
            </motion.h2>
          </div>

          {/* RIGHT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-gray-400 max-w-md text-left md:text-right leading-relaxed"
          >
            A glimpse into our discreet, documentary-style approach at grand
            celebrations worldwide.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Big Image */}
          <motion.img
            src={cam1}
            className="w-full h-[300px] md:h-[400px] object-cover"
            whileHover={{ scale: 1.03 }}
          />

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            {[cam2, cam3, cam4, cam5].map((img, i) => (
              <motion.div
                key={i}
                className="overflow-hidden rounded-md"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={img}
                  alt={`Behind the scenes ${i + 1}`}
                  loading="lazy"
                  className="w-full h-[190px] object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PILLARS ================= */}
      <section className="py-20 px-6 md:px-16 bg-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-serif mb-16"
        >
          The Pillars of Our Craft
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            {
              title: "ARTISTRY",
              text: "We treat every wedding as a masterpiece in progress. Our compositions are inspired by classical cinema and baroque portraiture, ensuring a timeless aesthetic.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.385 19.616q-.592 0-1.17-.204t-1.023-.566q.497-.327.845-.878t.348-1.352q0-.847.577-1.424q.577-.576 1.423-.576t1.423.576t.577 1.424q0 1.237-.882 2.118t-2.118.881m0-1q.825 0 1.412-.587t.588-1.412q0-.425-.288-.713t-.712-.288t-.713.288t-.287.713q0 .575-.138 1.05t-.362.9q.125.05.25.05zM11.25 14.5l-1.711-1.711l8.18-8.181q.275-.275.688-.288t.712.288l.312.311q.3.3.3.7t-.3.7zm-3.866 2.116"
                  />
                </svg>
              ),
            },
            {
              title: "INTIMACY",
              text: "Our presence is felt but rarely seen. We specialize in the unseen moments the stolen glances and heavy silences that define your connection.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-8.037-2.49a.75.75 0 0 0-.954 1.16zm-4.659-3.009a.75.75 0 1 0 1.316-.72zm.408-4.274c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16zm-5.148 0c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92zm-5.768-5.63a7.25 7.25 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.275z"
                  />
                </svg>
              ),
            },
            {
              title: "LEGACY",
              text: "We create heirlooms. Our editorial style is designed to age with grace, serving as a visceral bridge between your present and the generations to follow.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                  >
                    <path d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828" />
                    <path d="m18 8l-2.159 1.8c-1.836 1.53-2.755 2.295-3.841 2.295c-.65 0-1.239-.274-2-.82M6 8l.9.75l.9.75" />
                  </g>
                </svg>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -6 }}
              className="group text-center"
            >
              {/* ICON */}
              <motion.div
                className="flex justify-center mb-5 text-yellow-500 w-10 h-10 mx-auto"
                whileHover={{ scale: 1.1 }}
              >
                {item.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="text-sm tracking-[0.2em] mb-3 text-gray-200 font-serif">
                {item.title}
              </h3>

              {/* TEXT */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center bg-[#131314]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs text-yellow-500 tracking-widest mb-4"
        >
          LEGACY IN MOTION
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-serif mb-8"
        >
          Your film is <br /> waiting to be told.
        </motion.h2>

        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#f59e0b",
            color: "#000",
          }}
          className="bg-yellow-500 text-black px-6 py-2 text-sm tracking-wide font-serif"
        >
          START YOUR STORY
        </motion.button>
      </section>
    </div>
  );
}
