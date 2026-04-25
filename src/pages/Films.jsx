import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import heroImg from "../assets/films/heroImg.png";
import film1 from "../assets/films/img1.png";
import film2 from "../assets/films/img2.png";
import film3 from "../assets/films/img3.png";
import film4 from "../assets/films/img4.png";
import film5 from "../assets/films/img5.png";

// import video1 from "../assets/films/videos/video1.mp4";

export default function Films() {
  const [activeVideo, setActiveVideo] = useState(null);
  

  const films = [
    {
      img: film1,
      title: "Ananth & Gandharva: The Vows",
      location: "HYDERABAD, INDIA",
      video: "https://www.youtube.com/embed/6fq0iuhd7Io?autoplay=1&mute=1",
    },
    {
      img: film2,
      title: "Elena & Julian: Under the Stars",
      location: "TUSCANY, ITALY",
      video: "https://www.youtube.com/embed/watch?v=9ZjbvPuYcts",
    },
    {
      img: film3,
      title: "The Royal Mandap",
      location: "JAIPUR, INDIA",
      video: "https://www.youtube.com/embed/ztQoCJlC4UI?autoplay=1&mute=1",
    },
    {
      img: film4,
      title: "Modern Elegance",
      location: "LONDON, UK",
      video: "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&mute=1",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white mt-20">
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <motion.img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif text-yellow-500">
            The Cinema
          </h1>

          <p className="mt-4 text-gray-300 text-sm max-w-md mx-auto">
            We don’t just document your story, we direct it. Every frame is
            composed with intention, every sequence crafted for emotion.
          </p>
        </div>
      </section>

      {/* ================= FILMS GRID ================= */}
      <section className="py-24 px-6 md:px-16 bg-black text-white">
        <div className="grid md:grid-cols-2 gap-16">
          {films.map((film, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveVideo(film.video)}
              whileTap={{ scale: 0.97 }}
              className={`relative group overflow-hidden cursor-pointer ${
                i % 2 !== 0 ? "mt-10 md:mt-0" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Image */}
              <motion.img
                src={film.img}
                alt={film.title}
                className="w-full h-[260px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(film.video);
                  }}
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-xl"
                >
                  ▶
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] tracking-widest text-yellow-500 mb-2">
                  {film.location}
                </p>

                <h3 className="text-lg font-serif">{film.title}</h3>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(film.video);
                  }}
                  className="mt-2 text-xs text-gray-300 hover:text-yellow-500 transition"
                >
                  WATCH FILM →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= VIDEO MODAL ================= */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 text-white text-2xl"
              >
                ✕
              </button>

              {/* Video */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-4xl aspect-video"
              >
                <iframe
                  src={activeVideo}
                  title="Film Video"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="py-24 px-6 md:px-16 bg-[#1C1B1C] text-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* ===== LEFT CONTENT ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              The Craft of <br />
              <span className="text-yellow-500">Cinematic Purity</span>
            </h2>

            <div className="mt-10 space-y-8">
              {/* ITEM 1 */}
              <div className="flex gap-4">
                <span className="text-yellow-500 text-sm mt-1">01</span>
                <div>
                  <h3 className="font-serif text-lg">Cinematic Optics</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    We utilize industry-grade anamorphic lenses and
                    high-dynamic-range sensors to capture the “film look” — rich
                    textures and natural skin tones.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex gap-4">
                <span className="text-yellow-500 text-sm mt-1">02</span>
                <div>
                  <h3 className="font-serif text-lg">Color Grading</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    Each frame undergoes meticulous color correction. We develop
                    custom LUTs for every wedding, ensuring a cohesive cinematic
                    palette.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex gap-4">
                <span className="text-yellow-500 text-sm mt-1">03</span>
                <div>
                  <h3 className="font-serif text-lg">Aural Experience</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    Sound is 50% of cinema. We capture crisp ambient audio and
                    layer it with bespoke music and immersive sound design.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT IMAGE (FRAMED STYLE) ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Outer Frame */}
            <div className="absolute w-[90%] h-[90%] border border-yellow-500/30 -bottom-6 -left-6 hidden md:block" />

            {/* Image Container */}
            <div className="relative bg-black p-3 shadow-xl">
              <img
                src={film5} // your camera image
                alt="Cinematic Camera"
                className="w-full max-w-md h-[420px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16 bg-black text-center text-white">
        {/* Small Label */}
        <p className="text-[10px] tracking-[0.3em] text-yellow-500 mb-6">
          LEGACY IN MOTION
        </p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl leading-[1.3] md:leading-[1.2] text-gray-200 max-w-4xl mx-auto"
        >
          Your film is <br />
          waiting to be told.
        </motion.h2>

        {/* CTA Button */}
        <motion.button
          onClick={() => navigate("/contact")}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#ffffff",
            color: "#000000",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-yellow-500 text-black px-8 py-3 text-sm tracking-[0.2em] font-medium"
        >
          START YOUR STORY
        </motion.button>
      </section>
    </div>
  );
}
