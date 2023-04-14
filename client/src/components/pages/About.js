import React from "react";
import fantasia from "../images/sfantasia.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="main__container"
      initial={{ x:300, opacity: 0  }}
      animate={{ x:0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={fantasia}
            className="max-w-md rounded-sm shadow-2xl"
            alt="sam friedman, the creator of the page with a dog in a comic book look"
          />
          <div>
          <h1 className="py-6 text-5xl font-bold">hi, i'm sam.</h1>
            <h1 className="text-2xl font-bold">about me</h1>
            <p className="py-6">
              welcome, i'm an aspiring full stack web developer living in denver, colorado. in my spare time i enjoy learning, climbing, hanging out, gaming, reading, and friendship. please take a look around and feel free to leave me a message, thank you
            </p>
            <button className="btn btn-base-200 m-5">
              <a href="https://github.com/reverofsuturb/">github</a>
            </button>
            <button className="btn btn-base-200 m-5">
              <a href="mailto:sfriedman6711@gmail.com">e-mail me</a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
