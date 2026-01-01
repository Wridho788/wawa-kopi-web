import React from "react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary py-12 mt-20">
      <Container>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
            Wawa Kopi
          </h3>

          <div className="space-y-2 text-text-muted">
            <p>Jl. Raya Utama, Kota</p>
            <p className="text-accent font-semibold">Buka 24 Jam</p>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-text-muted text-sm">
            <p>&copy; {new Date().getFullYear()} Wawa Kopi. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
