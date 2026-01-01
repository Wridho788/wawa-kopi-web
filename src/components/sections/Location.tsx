"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

export default function Location() {
  return (
    <section id="lokasi" className="py-20 md:py-32 bg-bg-secondary/30">
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
            Lokasi & Jam Buka
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-lg text-text-muted max-w-2xl mx-auto"
          >
            Wawa Kopi buka 24 jam dan mudah dijangkau dari jalan utama. Cocok untuk nongkrong siang maupun malam.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Info */}
          <motion.div variants={fadeUp} transition={defaultTransition} className="space-y-6">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-2">
                Wawa Kopi
              </h3>
              <p className="text-text-muted">Jl. Utomo, Bakaran Batu, Kec. Batang Kuis, Kabupaten Deli Serdang, Sumatera Utara 20372</p>
            </div>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold">
              🕐 Buka 24 Jam
            </div>

            <div className="space-y-3 pt-4">
              <Button
                href="https://www.google.com/maps/place/Wawa+kopi/@3.6033968,98.7918615,17z/data=!4m6!3m5!1s0x303137db7ec5a5dd:0x15b568814b2ea94a!8m2!3d3.6033968!4d98.7918615!16s%2Fg%2F11pg58dw_2!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Buka di Google Maps
              </Button>
              <p className="text-text-muted text-sm">
                Klik untuk melihat lokasi dan mendapatkan arah
              </p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-border h-80 md:h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0726385445545!2d98.78926831475442!3d3.6033968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303137db7ec5a5dd%3A0x15b568814b2ea94a!2sWawa%20kopi!5e0!3m2!1sen!2sid!4v1704124800000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wawa Kopi Location"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
