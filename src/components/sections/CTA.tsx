"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export default function CTA() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="bg-gradient-to-br from-bg-secondary to-bg-primary rounded-3xl p-8 md:p-16 text-center border border-border"
        >
          <motion.h2
            variants={fadeUp}
            transition={defaultTransition}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6"
          >
            Yuk, Mampir ke Wawa Kopi
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="text-lg text-text-muted mb-8 max-w-2xl mx-auto"
          >
            Tunggu apa lagi? Kami buka 24 jam untuk menemanimu ngopi dan ngobrol kapan saja.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="#lokasi" variant="primary">
              Lihat Lokasi
            </Button>
            <Button href="https://wa.me/628123456789" variant="secondary">
              Hubungi Kami
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
