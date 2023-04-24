import React from "react";
import projarray from "../data/projarray";
import { motion } from "framer-motion";


export default function Projects() {
  return (
    <motion.div
      className="main__container"
      initial={{ x:300, opacity: 0  }}
      animate={{ x:0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-row flex-wrap justify-center">
        <div className="grid h-20 w-full card bg-base-100 rounded-box place-items-center text-xl">
          - projects -
        </div>
        <div className="card m-5 w-96 bg-base-200 shadow-xl">
          <figure>
            <img src={projarray[5].screenshot} alt="flix and tails homepage" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{projarray[5].title}</h2>
            <p>
            {projarray[5].description}
            </p>
            <div className="card-actions">
              <button className="btn btn-ghost">
                <a href={projarray[5].deploylink}>
                  take me there
                </a>
              </button>
              <button className="btn btn-ghost">
              <a href={projarray[5].githublink}>github</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card m-5 w-96 bg-base-200 shadow-xl">
          <figure>
            <img src={projarray[1].screenshot} alt="fluffy homepage" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{projarray[1].title}</h2>
            <p>
            {projarray[1].description}
            </p>
            <div className="card-actions">
              <button className="btn btn-ghost">
                <a href={projarray[1].deploylink}>
                  take me there
                </a>
              </button>
              <button className="btn btn-ghost">
              <a href={projarray[1].githublink}>github</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card m-5 w-96 bg-base-200 shadow-xl">
          <figure>
            <img src={projarray[0].screenshot} alt="text editor application" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{projarray[0].title}</h2>
            <p>
            {projarray[0].description}
            </p>
            <div className="card-actions">
              <button className="btn btn-ghost">
                <a href={projarray[0].deploylink}>
                  take me there
                </a>
              </button>
              <button className="btn btn-ghost">
              <a href={projarray[0].githublink}>github</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card m-5 w-96 bg-base-200 shadow-xl">
          <figure>
            <img src={projarray[3].screenshot} alt="tech blog homepage" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{projarray[3].title}</h2>
            <p>
            {projarray[3].description}
            </p>
            <div className="card-actions">
              <button className="btn btn-ghost">
                <a href={projarray[3].deploylink}>
                  take me there
                </a>
              </button>
              <button className="btn btn-ghost">
              <a href={projarray[3].githublink}>github</a>
              </button>
            </div>
          </div>
        </div>
       <div className="card m-5 w-96 bg-base-200 shadow-xl">
          <figure>
            <img src={projarray[4].screenshot} alt="note taker application" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{projarray[4].title}</h2>
            <p>
            {projarray[4].description}
            </p>
            <div className="card-actions">
              <button className="btn btn-ghost">
                <a href={projarray[4].deploylink}>
                  take me there
                </a>
              </button>
              <button className="btn btn-ghost">
              <a href={projarray[4].githublink}>github</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card m-5 w-96 bg-base-200 shadow-xl">
          <figure>
            <img src={projarray[2].screenshot} alt="business tool application" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{projarray[2].title}</h2>
            <p>
            {projarray[2].description}
            </p>
            <div className="card-actions">
              <button className="btn btn-ghost">
                <a href={projarray[2].deploylink}>
                  take me there
                </a>
              </button>
              <button className="btn btn-ghost">
              <a href={projarray[2].githublink}>github</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
