"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footers() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 overflow-x-hidden border-t border-[#E5B664]/15">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.jpg"
                alt="The Pearl Logo"
                width={72}
                height={72}
                className="object-contain"
                style={{ filter: "drop-shadow(0 0 6px rgba(212,175,55,0.6))" }}
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Experience luxury nightlife, curated cocktails, live DJ events, and
              unforgettable evenings at the city&apos;s most exclusive venue.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" aria-label="WhatsApp" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E5B664]/40 text-[#E5B664] hover:bg-[#E5B664] hover:text-black transition-all">
                <FaWhatsapp size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E5B664]/40 text-[#E5B664] hover:bg-[#E5B664] hover:text-black transition-all">
                <FaInstagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E5B664]/40 text-[#E5B664] hover:bg-[#E5B664] hover:text-black transition-all">
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#E5B664] text-base font-semibold mb-5 tracking-[0.15em] uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-[#E5B664] transition">Home</Link></li>
              <li><Link href="/bar" className="hover:text-[#E5B664] transition">Bar</Link></li>
              <li><Link href="/club" className="hover:text-[#E5B664] transition">Club</Link></li>
              <li><Link href="/events" className="hover:text-[#E5B664] transition">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-[#E5B664] transition">Gallery</Link></li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="text-[#E5B664] text-base font-semibold mb-5 tracking-[0.15em] uppercase">
              Experiences
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/reserve" className="hover:text-[#E5B664] transition">VIP Services</Link></li>
              <li><Link href="/events" className="hover:text-[#E5B664] transition">Overseas Events</Link></li>
              <li><Link href="/reserve" className="hover:text-[#E5B664] transition">Bottle Service</Link></li>
              <li><Link href="/reserve" className="hover:text-[#E5B664] transition">Private Celebrations</Link></li>
              <li><Link href="/contact" className="hover:text-[#E5B664] transition">Reservations</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#E5B664] text-base font-semibold mb-5 tracking-[0.15em] uppercase">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaEnvelope size={16} className="text-[#E5B664] mt-1 shrink-0" />
                <span>thepearl149@hotmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt size={16} className="text-[#E5B664] mt-1 shrink-0" />
                <span>+61 410 036 729</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="gold-divider mx-auto max-w-7xl" />

      {/* Bottom Footer */}
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm">
          <span>© 2024 The Pearl. All rights reserved.</span>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <Link href="/contact" className="hover:text-[#E5B664] transition">Privacy Policy</Link>
            <span className="text-[#E5B664]/40">•</span>
            <Link href="/contact" className="hover:text-[#E5B664] transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
