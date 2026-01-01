"use client";

import React, { useState, useEffect } from "react";
import Container from "./Container";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <a
            href="#"
            className="text-xl md:text-2xl font-heading font-semibold text-text-primary"
          >
            Wawa Kopi
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#menu"
              className="text-text-primary hover:text-accent transition-colors"
            >
              Menu
            </a>
            <a
              href="#lokasi"
              className="text-text-primary hover:text-accent transition-colors"
            >
              Lokasi
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}
