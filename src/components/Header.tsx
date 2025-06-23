'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { title: 'ENTREPRISE', href: '/' },
    { title: 'PRODUITS', href: '/produits' },
    { title: 'TECHNOLOGIE', href: '/technologie' },
    { title: 'INTÉGRATIONS OPÉRATIONNELLES', href: '/integration-operationnelles' },
    { title: 'CARRIÈRES', href: '/carrieres' },
    { title: 'CONTACT', href: '/contact' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="w-full h-24 bg-background">
        <div className="h-full max-w-7xl mx-auto px-8 md:px-16 flex justify-between items-center">
          <div className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="EasyMile Logo" 
              width={220} 
              height={55} 
              className="h-50 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:block flex-shrink-0">
            <ul className="flex space-x-2 items-center text-sm tracking-wider">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return (
                  <li key={link.title}>
                    <Link 
                      href={link.href} 
                      className={`px-4 py-2 rounded-md transition-colors duration-300 whitespace-nowrap ${
                        isActive 
                          ? 'bg-[#37b0a6] text-white' 
                          : 'hover:bg-[#37b0a6] hover:text-white'
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="hidden md:block flex-shrink-0">
            <Link href="/contact">
              <button className="bg-primary text-white py-2 px-5 rounded-md border border-accent text-sm tracking-wider transition-colors duration-300 hover:bg-[#37b0a6] hover:border-[#37b0a6] whitespace-nowrap">
                NOUS CONTACTER
              </button>
            </Link>
          </div>
          <div className="md:hidden flex-shrink-0">
            <button onClick={() => setIsOpen(!isOpen)} className="p-1">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center">
          <nav>
            <ul className="flex flex-col space-y-4 items-center text-2xl tracking-wider">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return (
                  <li key={link.title}>
                    <Link 
                      href={link.href} 
                      className={`px-6 py-3 rounded-md transition-colors duration-300 whitespace-nowrap ${
                        isActive 
                          ? 'bg-[#37b0a6] text-white' 
                          : 'hover:bg-[#37b0a6] hover:text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-12">
            <Link href="/contact">
              <button className="bg-primary text-white py-3 px-6 rounded-md border border-accent text-lg tracking-wider transition-colors duration-300 hover:bg-[#37b0a6] hover:border-[#37b0a6] whitespace-nowrap">
                NOUS CONTACTER
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 