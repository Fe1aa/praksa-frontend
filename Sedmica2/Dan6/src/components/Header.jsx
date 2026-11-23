import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { startCanvas } from "../canvas.js";

function Header() {
  const canvasRef = useRef(null);

  useEffect(() => {
    return startCanvas(canvasRef.current);
  }, []);

  return (
    <header id="header">
      <Navbar />

      <canvas ref={canvasRef} id="canvas"></canvas>
      <div className="header-box text-center">
        <h1 className="h1 text-center mb-3">
          Hello, I'm <span>Emir Felić</span>
        </h1>
        <h2 className="h2 text-center mb-5">I'm a computer science student</h2>
        <a href="#projects">
          <button className="cta">View my projects</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
