import React, { useState, useEffect } from 'react';
import { FrequencyLogo } from './FrequencyLogo';
import { CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { MessageCircle, Menu, X, Instagram } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exact 4 editorial chapters + Book Your Session
  const navLinks = [
    { label: 'THE EXPERIENCE', href: '#experience' },
    { label: 'THE METHOD', href: '#method' },
    { label: 'YOUR SESSION', href: '#session' },
    { label: 'ABOUT', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top subtle editorial micro-bar */}
      <div className="bg-[#EFECE6] border-b border-[#E3DED6] py-1.5 px-4 text-xs text-[#5A6065]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8276C9]"></span>
            <span className="font-medium text-[#202126]">São Paulo VIP:</span>
            <span className="hidden sm:inline">Atendimento com hora marcada em condomínios e residências (Moema, Itaim, Jardins e Morumbi).</span>
            <span className="sm:hidden">Atendimento em domicílio em SP</span>
          </div>

          <div className="flex items-center gap-4 text-[#5A6065]">
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#8276C9] transition-colors text-[11px] font-medium"
            >
              <Instagram className="w-3.5 h-3.5 text-[#8276C9]" />
              <span className="hidden md:inline">{CONTACT_INFO.instagram}</span>
            </a>
            <span className="hidden md:inline text-[#D0C9BF]">|</span>
            <a
              href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-[#202126] hover:text-[#8276C9] font-medium text-[11px]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#8276C9]" />
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Editorial Navbar */}
      <nav
        className={`px-4 sm:px-8 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F5F0]/95 backdrop-blur-md shadow-sm border-b border-[#E5E0D8] py-3.5'
            : 'bg-[#F7F5F0]/80 backdrop-blur-sm py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <FrequencyLogo variant="horizontal" size="sm" lightText={false} />
          </a>

          {/* Desktop Nav Links (The 4 Editorial Chapters) */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-9 text-xs font-semibold tracking-[0.14em] text-[#202126]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#8276C9] transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#8276C9] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* BOOK YOUR SESSION Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase text-white bg-[#202126] hover:bg-[#8276C9] shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>BOOK YOUR SESSION</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#EAE5DC] text-[#202126]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#8276C9]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#202126] hover:bg-[#EAE5DC]"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#E5E0D8] bg-[#F7F5F0] rounded-2xl p-4 shadow-xl border border-[#E0DBD2] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-[#202126] hover:bg-[#EFECE6] text-xs font-bold tracking-[0.14em] uppercase transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#E5E0D8] flex flex-col gap-2">
                <a
                  href="#book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full flex items-center justify-center gap-2 bg-[#202126] text-white font-bold text-xs tracking-[0.12em] uppercase"
                >
                  <span>BOOK YOUR SESSION</span>
                </a>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full flex items-center justify-center gap-2 bg-[#EFECE6] text-[#5A6065] text-xs font-medium"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#8276C9]" />
                  <span>{CONTACT_INFO.instagram}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
