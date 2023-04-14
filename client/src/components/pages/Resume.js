import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      className="main__container"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <a
        className="btn btn-ghost btn-lg place-items-center"
        href="https://docs.google.com/document/d/e/2PACX-1vQ_oiWKtjhEGaxOJsP4gQOhSUj0KLOpLzVeN1kHGW22nbksJ7txf_dXE5iEk02fz478Gwc4pF3OPKaD/pub"
      >
        resume
      </a>
      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn btn-ghost btn-lg drawer-button place-items-center">Proficiencies</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <a>mysql</a>
            </li>
            <li>
              <a>react</a>
            </li>
            <li>
              <a>javascript</a>
            </li>
            <li>
              <a>css</a>
            </li>
            <li>
              <a>html</a>
            </li>
            <li>
              <a>graphql</a>
            </li>
            <li>
              <a>express</a>
            </li>
            <li>
              <a>sequelize</a>
            </li>
            <li>
              <a>mongoose</a>
            </li>
            <li>
              <a>github flow</a>
            </li>
            <li>
              <a>leadership</a>
            </li>
          </ul>
        </div>
      </div>
      ;
    </motion.div>
  );
}
