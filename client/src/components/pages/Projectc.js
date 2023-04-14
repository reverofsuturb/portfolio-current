import React from "react";
import { motion } from "framer-motion";
import projarray from "../data/projarray";

export default function Projectc() {
  return (
    <motion.div
      className="main__container"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={projarray[2].screenshot}
            className="max-w-lg rounded-lg shadow-2xl"
            alt="text editor application"
          />
          <div>
            <h1 className="text-2xl font-bold">{projarray[2].title}</h1>
            <p className="py-6">{projarray[2].description}</p>
            <button className="btn btn-base-200 m-5">
              <a href={projarray[2].deploylink}>take me there</a>
            </button>
            <button className="btn btn-base-200 m-5">
              <a href={projarray[2].githublink}>github</a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
