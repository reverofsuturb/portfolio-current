import Navbar from "./components/Navbar";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Projecta from "./components/pages/Projecta";
import Projectb from "./components/pages/Projectb"
import Projectc from "./components/pages/Projectc";
import Projectd from "./components/pages/Projectd";
import Projecte from "./components/pages/Projecte";
import Projectf from "./components/pages/Projectf";
import Resume from "./components/pages/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

import "./App.css";

export default function App() {

  return (
    <div className="bg-base-100 text-slate-300">
      <Router>
      <Navbar />
      <AnimatePresence>
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio-current" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/1" element={<Projecta />} />
          <Route path="/project/2" element={<Projectb />} />
          <Route path="/project/3" element={<Projectc />} />
          <Route path="/project/4" element={<Projectd />} />
          <Route path="/project/5" element={<Projecte />} />
          <Route path="/project/6" element={<Projectf />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        </AnimatePresence>
      <Footer />
      </Router>
      </div>

  );
}
