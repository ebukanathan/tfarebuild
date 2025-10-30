import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">LIVYN Tech</h2>
          <p className="text-gray-400 leading-relaxed">
            We build digital experiences that help businesses grow — from modern websites to custom software solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-pink-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-pink-500 transition">About</a></li>
            <li><a href="/services" className="hover:text-pink-500 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-pink-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 mb-2">
            <Phone size={18} className="text-pink-500" />
            <a href="tel:+2348001234567" className="hover:text-pink-500 transition">
              +234 800 123 4567
            </a>
          </p>
          <p className="flex items-center gap-2 mb-4">
            <Mail size={18} className="text-pink-500" />
            <a href="mailto:info@livyntech.com" className="hover:text-pink-500 transition">
              info@livyntech.com
            </a>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener" className="hover:text-pink-500 transition">
              <Facebook size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-pink-500 transition">
              <Instagram size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-pink-500 transition">
              <Twitter size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-pink-500 transition">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} LIVYN Tech. All Rights Reserved.
      </div>
    </footer>
  );
}
