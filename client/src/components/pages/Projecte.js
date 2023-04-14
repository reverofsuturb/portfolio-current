import React from "react";
import { motion } from "framer-motion";
import projarray from "../data/projarray";

export default function Projecte() {
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
            src={projarray[4].screenshot}
            className="max-w-lg rounded-lg shadow-2xl"
            alt="note taker application"
          />
          <div>
            <h1 className="text-2xl font-bold">{projarray[4].title}</h1>
            <p className="py-6">{projarray[4].description}</p>
            <button className="btn btn-base-200 m-5">
              <a href={projarray[4].deploylink}>take me there</a>
            </button>
            <button className="btn btn-base-200 m-5">
              <a href={projarray[4].githublink}>github</a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
