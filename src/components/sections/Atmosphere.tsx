"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

const reviews = [
  {
    text: "Yang punya super ramah, bikin betah buat ngobrol lama-lama.",
    author: "Pengunjung",
    rating: 5,
  },
  {
    text: "Pelayanan bagus, tempatnya nyaman buat diskusi atau kerja santai.",
    author: "Pengunjung",
    rating: 5,
  },
  {
    text: "Sederhana namun elegan. Cocok banget buat anak muda nongkrong.",
    author: "Pengunjung",
    rating: 4,
  },
];

export default function Atmosphere() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            transition={defaultTransition}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-text-primary mb-4"
          >
            Suasana & Review
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            Tempat sederhana yang nyaman untuk ngobrol, diskusi, atau duduk lama tanpa terburu-buru.
          </motion.p>
        </motion.div>

        {/* Atmosphere placeholder */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={defaultTransition}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-bg-secondary to-bg-primary rounded-2xl h-64 md:h-80 flex items-center justify-center border border-border">
              <p className="text-text-muted">📸 Suasana Malam</p>
            </div>
            <div className="bg-gradient-to-br from-bg-primary to-bg-secondary rounded-2xl h-64 md:h-80 flex items-center justify-center border border-border">
              <p className="text-text-muted">📸 Interior</p>
            </div>
          </div>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h3
            variants={fadeUp}
            transition={defaultTransition}
            className="text-2xl font-heading font-semibold text-text-primary text-center mb-12"
          >
            Apa Kata Mereka
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                className="bg-bg-secondary/50 p-6 rounded-xl border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < review.rating ? "text-accent" : "text-border"}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-text-muted italic mb-4 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-text-muted text-sm">— {review.author}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-center text-text-muted mt-8 italic"
          >
            Banyak yang datang untuk ngopi, lalu betah untuk ngobrol lebih lama.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
