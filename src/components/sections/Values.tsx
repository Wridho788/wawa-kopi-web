"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

const values = [
  {
    icon: "🤝",
    title: "Ramah",
    description: "Pelayanan yang hangat dan owner yang super ramah membuat suasana terasa seperti di rumah sendiri.",
  },
  {
    icon: "☕",
    title: "Nyaman",
    description: "Suasana sederhana namun elegan, cocok untuk nongkrong, diskusi, atau sekadar duduk lama.",
  },
  {
    icon: "🌙",
    title: "24 Jam",
    description: "Selalu buka untuk menemani kapan pun kamu butuh tempat untuk ngopi dan ngobrol.",
  },
];

export default function Values() {
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
            Kenapa Wawa Kopi?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            Lebih dari sekadar kedai kopi, ini tempat berkumpul dan berbagi cerita.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.1 }}
              className="bg-bg-secondary p-8 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
