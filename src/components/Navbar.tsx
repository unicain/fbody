import React, { useState, useEffect } from 'react';
import { FrequencyLogo } from './FrequencyLogo';
import { CONTACT_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGES } from '../data/frequencyData';
import { MessageCircle, Menu, X, Instagram, MapPin, Sparkles } from 'lucide-react';

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

  const navLinks = [
    { label: 'O Que É EMS', href: '#tecnologia' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Por Que em Casa?', href: '#comparativo' },
    { label: 'Calculadora SP', href: '#calculadora' },
    { label: 'Bairros Atendidos', href: '#bairros' },
    { label: 'Segurança & CREF', href: '#seguranca' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-announcement bar for SP context */}
      <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-indigo-950 border-b border-sky-500/20 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-medium text-sky-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              São Paulo VIP:
            </span>
            <span className="hidden sm:inline">Atendimento a domicílio e condomínios em Moema, Itaim Bibi, Jardins, Morumbi e região.</span>
            <span className="sm:hidden">Atendimento a domicílio em SP</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-pink-400 transition-colors text-[11px] font-medium"
              title="Seguir @frequency.body no Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{CONTACT_INFO.instagram}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a
              href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`px-4 sm:px-6 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070b14]/90 backdrop-blur-md shadow-xl shadow-black/40 border-b border-slate-800/80 py-3'
            : 'bg-[#070b14]/60 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <FrequencyLogo variant="horizontal" size="sm" lightText={true} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-400 transition-colors tracking-wide hover:-translate-y-0.5 duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Agendar no WhatsApp</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 bg-[#090e1c] rounded-2xl p-4 shadow-2xl border border-slate-700/60 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800/60 hover:text-cyan-400 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
                <a
                  href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm shadow-md shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Agendar Aula no WhatsApp
                </a>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2 bg-slate-800/80 text-slate-300 text-xs font-medium hover:text-white"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  Ver Instagram {CONTACT_INFO.instagram}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
