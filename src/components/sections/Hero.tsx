"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary opacity-50" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-bg-secondary text-accent text-sm font-medium">
              ☕ Buka 24 Jam
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-text-primary mb-6 leading-tight"
          >
            Ngopi. Ngobrol. <br />
            <span className="text-accent">24 Jam.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Tempat ngopi yang nyaman buat ngobrol, diskusi, atau sekadar duduk lama — kapan saja.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="#menu" variant="primary">
              Lihat Menu
            </Button>
            <Button
              href="https://maps.google.com"
              variant="secondary"
            >
              Buka di Google Maps →
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
