import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroImg from "../assets/home/hero.png"; // replace with your image
import img1 from "../assets/home/img1.png";
import img2 from "../assets/home/img2.png";
import img3 from "../assets/home/img3.png";
import img4 from "../assets/home/img4.png";
import img5 from "../assets/home/img5.png";
import img6 from "../assets/home/img6.png";
import img7 from "../assets/home/img7.png";
import img8 from "../assets/home/img8.png";
import img9 from "../assets/home/img9.png";
import img10 from "../assets/home/img10.png";
import img11 from "../assets/home/img11.png";
import img12 from "../assets/home/img12.png";
import img13 from "../assets/home/img13.png";
import heroVideo from "../assets/home/videos/home-video.mp4";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const navigate = useNavigate();

  const testimonials = [
    {
      text: `"The Obsidian doesn't just take photos; they capture the very soul of the moment."`,
      author: "SIDDHARTH & ANANYA",
    },
    {
      text: `"An unforgettable experience. Every frame felt intentional, artistic, and deeply emotional. Truly world-class storytelling."`,
      author: "ADITYA & PRIYA",
    },
    {
      text: `"From start to finish, the team delivered beyond expectations. The final output felt like a luxury cinematic masterpiece."`,
      author: "NEHA & SANJAY",
    },
  ];

  const collections = [
    { img: img7, title: "Baby Photography" },
    { img: img8, title: "Wedding photography" },
    { img: img9, title: "Personal Photo Shoots" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const faqs = [
    {
      question: "Do you travel for Destination Weddings?",
      answer:
        "Yes, we are available for destination weddings and love capturing celebrations in unique locations. Travel and accommodation details can be discussed based on your event.",
    },
    {
      question: "What is your turnaround time for the film?",
      answer:
        "Our typical turnaround time is 4–6 weeks, ensuring every film is carefully crafted with attention to detail.",
    },
    {
      question: "Can we request specific editing styles?",
      answer:
        "Yes, we’re happy to understand your preferences and incorporate your desired style while maintaining our signature look.",
    },
    {
      question: "How far in advance should we book?",
      answer:
        "We suggest booking as early as possible, as dates tend to fill quickly, particularly during peak seasons.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  function FAQItem({ faq, index }) {
    const [open, setOpen] = useState(false);
  }

  return (
    <div className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full pt-20 overflow-hidden">
        {/* Background Image (Slow Zoom / Parallax Feel) */}
        <motion.img
          src={heroImg}
          alt="Hero"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
        />

        {/* Overlay (Fade In) */}
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-6xl md:text-8xl font-serif font-semibold"
          >
            <span className="text-white">Your </span>

            <motion.span
              className="text-yellow-500 inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Story
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-4 text-sm tracking-widest text-gray-300"
          >
            - CINEMATIC LEGACIES CAPTURED FOREVER -
          </motion.p>

          {/* Optional CTA (Highly Recommended) */}
          <motion.button
            onClick={() => navigate("/films")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 border border-white px-6 py-2 text-sm tracking-wide"
          >
            VIEW PORTFOLIO
          </motion.button>
        </div>
      </section>

      {/* ================= MODERN APPROACH ================= */}
      <section className="py-24 px-6 md:px-16 bg-neutral-900 overflow-hidden">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT CONTENT */}
          <motion.div variants={fadeLeft}>
            <motion.h2
              variants={fadeLeft}
              className="text-4xl md:text-5xl font-serif mb-6 leading-tight"
            >
              A Modern <br /> Approach to Age Old Tradition
            </motion.h2>

            <motion.p
              variants={fadeLeft}
              className="text-gray-400 text-sm mb-8 leading-relaxed"
            >
              We believe that luxury is felt, not just seen. Our approach blends
              the quiet intimacy of fine-art film with the vibrant energy of
              high-fashion editorial.
              <br />
              <br />
              Every frame is a curated memory, treated with the reverence of a
              masterpiece.
            </motion.p>

            <motion.button
              variants={fadeLeft}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-500 px-6 py-2 text-sm"
            >
              THE PROCESS
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            variants={fadeRight}
            className="flex gap-4 justify-center"
          >
            {/* Image 1 */}
            <motion.img
              src={img1}
              alt="Photography sample 1"
              loading="lazy"
              className="w-52 h-72 object-cover rounded-md mt-8"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />

            {/* Image 2 */}
            <motion.img
              src={img2}
              alt="Photography sample 2"
              loading="lazy"
              className="w-52 h-72 object-cover rounded-md"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ICONIC PORTFOLIO ================= */}
      <section className="py-24 px-6 md:px-16 bg-black overflow-hidden">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-12"
        >
          <h2 className="text-5xl font-serif text-yellow-500">Iconic</h2>
          <p className="text-xs text-gray-400 tracking-widest">
            A CURATED EDITORIAL PORTFOLIO
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4"
        >
          {/* LEFT BIG IMAGE */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 overflow-hidden"
          >
            <motion.img
              src={img3}
              alt="Editorial wedding setup"
              loading="lazy"
              className="h-[400px] md:h-[800px] w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left */}
            <motion.div variants={fadeUp} className="overflow-hidden">
              <motion.img
                src={img4}
                alt="Hands detail shot"
                loading="lazy"
                className="h-[150px] md:h-[280px] w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Top Right */}
            <motion.div variants={fadeUp} className="overflow-hidden">
              <motion.img
                src={img5}
                alt="Ring detail shot"
                loading="lazy"
                className="h-[150px] md:h-[280px] w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Bottom Wide */}
            <motion.div
              variants={fadeUp}
              className="col-span-2 overflow-hidden"
            >
              <motion.img
                src={img6}
                alt="Wedding ceremony moment"
                loading="lazy"
                className="h-[250px] md:h-[500px] w-full object-cover object-[center_20%]"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= PORTFOLIO SECTION ================= */}
      <section className="bg-neutral-900 text-white py-24 px-6 md:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-yellow-500 uppercase mb-3">
            Portfolio Highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-100">
            The Collections
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {collections.map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover="hover"
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg">
                {/* Image */}
                <motion.img
                  src={itemData.img}
                  alt={itemData.title}
                  loading="lazy"
                  className="w-full h-[380px] object-cover"
                  variants={{
                    hover: { scale: 1.08 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/30"
                  initial={{ opacity: 0 }}
                  variants={{
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Title */}
              <motion.h3
                className="mt-5 text-lg font-serif text-gray-200"
                variants={{
                  hover: { y: -3, color: "#f59e0b" },
                }}
                transition={{ duration: 0.3 }}
              >
                {itemData.title}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="bg-[#0b0b0b] text-white py-24 px-6 md:px-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic text-gray-200">
            The Cinema
          </h2>
          <div className="w-16 h-[2px] bg-yellow-500 mx-auto mt-4" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Video Thumbnail */}
          <div
            className="relative group cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img
              src={img10} // your thumbnail image
              alt="Wedding film thumbnail"
              className="w-full h-[260px] md:h-[320px] object-cover rounded-lg"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-lg" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={180}
                height={50}
                viewBox="0 0 256 180"
              >
                <path
                  fill="#f00"
                  d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                ></path>
                <path
                  fill="#fff"
                  d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                ></path>
              </svg>
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-4 left-4">
              <p className="text-xs text-gray-300 uppercase tracking-widest">
                Official Trailer
              </p>
              <h3 className="text-lg font-serif">Aditya & Priya: The Vows</h3>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div>
            <h3 className="text-2xl font-serif mb-4 text-gray-200">
              Moving Stories
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Our films are more than just highlights. They are immersive
              audio-visual experiences that preserve the voices, the laughter,
              and the atmosphere of your celebration.
            </p>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex gap-4">
                <span className="text-yellow-500 text-lg font-semibold">
                  01.
                </span>
                <div>
                  <p className="text-sm text-gray-200 uppercase tracking-wide">
                    Director’s Cut
                  </p>
                  <p className="text-xs text-gray-400">
                    A 15-minute cinematic journey of the entire wedding week.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <span className="text-yellow-500 text-lg font-semibold">
                  02.
                </span>
                <div>
                  <p className="text-sm text-gray-200 uppercase tracking-wide">
                    Editorial Teaser
                  </p>
                  <p className="text-xs text-gray-400">
                    High-impact 60-second social media narrative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🎬 VIDEO MODAL */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4">
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Video container */}
            <div className="w-full max-w-4xl aspect-video">
              <video
                src={heroVideo}
                controls
                autoPlay
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        )}
      </section>

      {/* ================= VISION TO MASTERPIECE ================= */}
      <section className="bg-[#201F20] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT - IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left */}
            <img
              src={img11}
              className="w-full h-[180px] md:h-[220px] object-cover rounded-sm"
            />

            {/* Top Right */}
            <img
              src={img12}
              className="w-full h-[180px] md:h-[220px] object-cover rounded-sm"
            />

            {/* Bottom Full */}
            <img
              src={img13}
              className="col-span-2 w-full h-[260px] md:h-[320px] object-cover rounded-sm"
            />
          </div>

          {/* RIGHT - CONTENT */}
          <div className="text-left">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              <span className="text-gray-200">From Vision</span> <br />
              <span className="text-gray-200">to </span>
              <span className="text-yellow-500">Masterpiece</span>
            </h2>

            {/* Points */}
            <div className="mt-8 space-y-6 text-sm">
              {/* Item 1 */}
              <div className="flex gap-4 items-start">
                <span className="text-yellow-500 mt-1">◎</span>
                <div>
                  <h4 className="text-white font-medium">Creative Vision</h4>
                  <p className="text-gray-400">
                    Defining the unique visual language of your celebration.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 items-start">
                <span className="text-yellow-500 mt-1">✦</span>
                <div>
                  <h4 className="text-white font-medium">Artistic Curation</h4>
                  <p className="text-gray-400">
                    Meticulous post-production and color grading of every frame.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4 items-start">
                <span className="text-yellow-500 mt-1">▣</span>
                <div>
                  <h4 className="text-white font-medium">
                    The Editorial Album
                  </h4>
                  <p className="text-gray-400">
                    Hand-crafted physical legacies bound in Italian leather.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0c] py-28 px-6 md:px-16 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Animated Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Quote */}
              <p className="text-xl md:text-3xl font-serif text-gray-200 leading-relaxed">
                {testimonials[testimonialIndex].text}
              </p>

              {/* Author */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-sm tracking-widest text-yellow-500"
              >
                — {testimonials[testimonialIndex].author}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <motion.span
                key={i}
                animate={{
                  width: i === testimonialIndex ? 32 : 24,
                  backgroundColor:
                    i === testimonialIndex ? "#f59e0b" : "#4b5563",
                }}
                transition={{ duration: 0.4 }}
                className="h-[2px]"
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ's Section */}
      <section className="bg-[#1C1B1C] py-28 px-6 md:px-16 text-white">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-serif mb-16 text-gray-200"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFAQ === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#161617] rounded-md overflow-hidden border border-white/5"
              >
                {/* Question */}
                <button
                  onClick={() => setActiveFAQ(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-[#1c1c1e] transition"
                >
                  <span className="text-sm md:text-base text-gray-300">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-yellow-500 text-xl"
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-400 text-sm"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
