import Link from "next/link";
import React from "react";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-rose-900 py-16 px-4 md:px-6">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">Bump to Parenthood™</p>
          <p className="mt-2 text-rose-600">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <nav className="grid gap-3">
          <Link href="/services" className="hover:text-rose-600 transition-colors">
            Services
          </Link>
          <Link href="/blog" className="hover:text-rose-600 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:text-rose-600 transition-colors">
            About
          </Link>
          <Link href="/appointment" className="hover:text-rose-600 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex gap-6 items-start">
          <a
            href="https://www.instagram.com/bumptoparenthood/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-600 transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-600 transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-600 transition-colors"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="mailto:raven@bumptoparenthood.com"
            className="hover:text-rose-600 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
