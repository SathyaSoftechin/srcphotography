import { motion } from "framer-motion";
import img1 from "../assets/stories/img1.png";
import img2 from "../assets/stories/img2.png";
import img3 from "../assets/stories/img3.png";
import img4 from "../assets/stories/img4.png";
import img5 from "../assets/stories/img5.png";

export default function Stories() {
  const stories = [
    {
      img: img3,
      title: "Couple Dance",
    },
    {
      img: img4,
      title: "The Alchemist's Light: Arjun & Salisha",
    },
    {
      img: img5,
      title: "Vivid Traditions: Vikram & Sanaya",
    },
  ];
  return (
    <div className="bg-black text-white px-6 md:px-16 py-20 mt-20">
      {/* ================= HEADER ================= */}
      <div className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-serif text-yellow-500"
        >
          The Stories
        </motion.h1>

        <p className="text-gray-400 text-md mt-4 max-w-md">
          A curated archive of timeless legacies. We don’t just capture magic,
          we document the way it unfolds — frame by frame, story by story.
        </p>

        {/* Filters */}
        {/* <div className="flex gap-6 mt-6 text-xs tracking-widest text-gray-400">
          <span className="text-yellow-500 cursor-pointer">ALL</span>
          <span className="cursor-pointer hover:text-white">ENGAGEMENT</span>
          <span className="cursor-pointer hover:text-white">TRADITIONAL</span>
          <span className="cursor-pointer hover:text-white">DESTINATION</span>
        </div> */}
      </div>

      {/* ================= FEATURED STORY ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="overflow-hidden">
          <motion.img
            src={img1}
            alt="Royal wedding"
            className="w-full h-[400px] md:h-[500px] object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-serif">
              A Royal wedding in Rajasthan: <br /> Anant & Meera
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              The Thar Desert witnessed a union of ancient souls. A three-day <br />
              celebration within the golden walls of Jaisalmer, where every <br />
              frame felt like a fragment of a lost epic.
            </p>
          </div>

          {/* <span className="text-yellow-500 text-sm cursor-pointer">
            Read Story →
          </span> */}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* ===== TOP LEFT (OFFSET DOWN) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 md:mt-20"
        >
          <div className="overflow-hidden">
            <motion.img
              src={img3}
              className="w-full h-[350px] object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          <p className="text-[10px] tracking-widest text-yellow-500 mt-4">
            TRADITIONAL
          </p>

          <h3 className="text-sm font-serif mt-2 text-gray-200">
            The Heritage Soul: Dev & Ishani
          </h3>

          <p className="text-[10px] text-gray-500 mt-1">MUMBAI, NOV 2023</p>
        </motion.div>

        {/* ===== TOP RIGHT (TALLER) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="overflow-hidden">
            <motion.img
              src={img2}
              className="w-full h-[500px] object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          <p className="text-[10px] tracking-widest text-yellow-500 mt-4">
            DESTINATION
          </p>

          <h3 className="text-sm font-serif mt-2 text-gray-200">
            Couple Dance
          </h3>

          <p className="text-[10px] text-gray-500 mt-1">ITALY, OCT 2023</p>
        </motion.div>

        {/* ===== BOTTOM LEFT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="overflow-hidden">
            <motion.img
              src={img4}
              className="w-full h-[260px] object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          <p className="text-[10px] tracking-widest text-yellow-500 mt-4">
            CINEMATIC
          </p>

          <h3 className="text-sm font-serif mt-2 text-gray-200">
            Vivid Traditions: Vikram & Sanjana
          </h3>

          <p className="text-[10px] text-gray-500 mt-1">DELHI, JAN 2024</p>
        </motion.div>

        {/* ===== BOTTOM RIGHT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="overflow-hidden">
            <motion.img
              src={img5}
              className="w-full h-[260px] object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          <p className="text-[10px] tracking-widest text-yellow-500 mt-4">
            CINEMATIC
          </p>

          <h3 className="text-sm font-serif mt-2 text-gray-200">
            The Alchemist’s Light: Arjun’s Solitude
          </h3>

          <p className="text-[10px] text-gray-500 mt-1">JAIPUR, DEC 2023</p>
        </motion.div>
      </div>
    </div>
  );
}
