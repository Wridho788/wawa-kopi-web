"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

type MenuItem = {
  name: string;
  price: string;
  category: "drink" | "food";
  highlight?: boolean;
};

const menuItems: MenuItem[] = [
  { name: "Kopi Susu", price: "15.000", category: "drink", highlight: true },
  { name: "Sanger", price: "12.000", category: "drink", highlight: true },
  { name: "V60", price: "18.000", category: "drink" },
  { name: "Americano", price: "14.000", category: "drink" },
  { name: "Indomie Goreng", price: "12.000", category: "food" },
  { name: "Nasi Goreng", price: "20.000", category: "food", highlight: true },
  { name: "Ayam Penyet", price: "22.000", category: "food" },
];

export default function Menu() {
  const drinks = menuItems.filter((item) => item.category === "drink");
  const foods = menuItems.filter((item) => item.category === "food");

  return (
    <section id="menu" className="py-20 md:py-32 bg-bg-secondary/30">
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
            Menu Unggulan
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            Pilihan menu favorit yang sering dipesan pengunjung kami.
          </motion.p>
        </motion.div>

        {/* Minuman */}
        <div className="mb-16">
          <motion.h3
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={defaultTransition}
            className="text-2xl font-heading font-semibold text-accent mb-8"
          >
            Minuman
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {drinks.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.05 }}
                className="bg-bg-secondary p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 relative"
              >
                {item.highlight && (
                  <span className="absolute top-3 right-3 text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                    Favorit
                  </span>
                )}
                <h4 className="text-xl font-heading font-semibold text-text-primary mb-2">
                  {item.name}
                </h4>
                <p className="text-accent font-semibold">Rp {item.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Makanan */}
        <div className="mb-12">
          <motion.h3
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={defaultTransition}
            className="text-2xl font-heading font-semibold text-accent mb-8"
          >
            Makanan
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {foods.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.05 }}
                className="bg-bg-secondary p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 relative"
              >
                {item.highlight && (
                  <span className="absolute top-3 right-3 text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                    Favorit
                  </span>
                )}
                <h4 className="text-xl font-heading font-semibold text-text-primary mb-2">
                  {item.name}
                </h4>
                <p className="text-accent font-semibold">Rp {item.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={defaultTransition}
          className="text-center mt-12"
        >
          <p className="text-text-muted mb-6">
            Masih banyak menu lainnya yang bisa kamu nikmati di tempat
          </p>
          <Button href="#lokasi" variant="secondary">
            Mampir Sekarang
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
