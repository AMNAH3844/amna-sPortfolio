"use client";

import { Sun, Moon } from "lucide-react";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
      setLightMode(true);
    } else {
      document.body.classList.remove("light-mode");
      setLightMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    setLightMode(isLight);
  };

 return (
  <nav className="navbar">
    <Link href="/">Home</Link>

    <div className="dropdown">
      <Link href="/graphic-design">Graphic Design</Link>

      <div className="dropdown-menu">
        <Link href="/graphic-design#project1">Project 1</Link>
        <Link href="/graphic-design#project2">Project 2</Link>
        <Link href="/graphic-design#project3">Project 3</Link>
      </div>
    </div>

    <div className="dropdown">
      <Link href="/ui-ux">UI/UX Projects</Link>

      <div className="dropdown-menu">
        <Link href="/ui-ux#project1">FlexiFit App</Link>
        <Link href="/ui-ux#project2">AI Task Manager</Link>
      </div>
    </div>

    <Link href="/contact">Contact</Link>    
 <button onClick={toggleTheme} className="toggle">
  {lightMode ? "Dark" : "Light"}
</button>
   
    </nav>
  );
}
