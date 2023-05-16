import React from "react";
import Contact from "./pages/Contact";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <Link className="btn btn-ghost normal-case text-xl" to="/">
        about me
      </Link>
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost normal-case text-xl">
          projects
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/projects">view all</Link>
          </li>
          <li>
            <Link to="/project/1">'flix'n'tails</Link>
          </li>
          <li>
            <Link to="/project/2">fluffy</Link>
          </li>

          <li>
            <Link to="/project/3">just another text editor</Link>
          </li>

          <li>
            <Link to="/project/4">tech blog</Link>
          </li>

          <li>
            <Link to="/project/5">the daily note</Link>
          </li>

          <li>
            <Link to="/project/6">get busy</Link>
          </li>

          <li></li>
        </ul>
      </div>
      <Contact />
    </div>
  );
}
