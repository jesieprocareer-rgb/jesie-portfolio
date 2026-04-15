import { useEffect, useState } from "react";
import "./Intro.css";

const text = "Welcome To My Portfolio";

function Intro({ onFinish }) {
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setTimeout(() => setPhase(1), 300);
    setTimeout(() => setPhase(2), 1200);
    setTimeout(() => setPhase(3), 2200);
    setTimeout(() => setPhase(4), 2600);

    let i = 0;
    const typing = setInterval(() => {
      setTyped(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(typing);
    }, 60);

    setTimeout(() => {
      setPhase(5);
      setTimeout(onFinish, 1000);
    }, 5000);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className={`intro phase-${phase}`}>

      {/* PORTAL */}
      <div className="portal"></div>

      {/* LOGO (CHANGED TO HELLO!) */}
      <h1 className="logo">HELLO!</h1>

      {/* TYPING TEXT (BACK TO ORIGINAL) */}
      <h1 className="main-text">
        {typed}
        <span className="cursor">|</span>
      </h1>

    </div>
  );
}

export default Intro;