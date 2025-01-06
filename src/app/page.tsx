'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';
import Image from 'next/image';
import blinky from '../../public/blinky.jpg';

const BlinkyWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const storyParagraphs = [
    "In the fast-paced world of crypto, fortunes are made in the blink of an eye.",
    "That's where Blinky comes in—a wide-eyed, high-energy frog from the Solana swamp with one mission: to make you rich while you blink.",
    "Blinky's magic lies in his simplicity.",
    "Every $BLINKY rewards those who don't just blink but hold—because the longer you hold, the closer you get to the dream.",
    "Don't miss the leap of a lifetime. Blink and you're rich."
  ];

  return (
    <div className="min-h-screen bg-[#768f29] text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#768f29]/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Image src={blinky} alt="Blinky" className="w-12 h-12 rounded-full" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#ca" className="hover:text-[#e55c9c] transition-colors">CA</a>
            <a href="#story" className="hover:text-[#e55c9c] transition-colors">Story</a>
            <a href="#socials" className="hover:text-[#e55c9c] transition-colors">Socials</a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-[#768f29] border-t border-white/20">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#ca" onClick={() => setIsMenuOpen(false)} className="hover:text-[#e55c9c] transition-colors">CA</a>
              <a href="#story" onClick={() => setIsMenuOpen(false)} className="hover:text-[#e55c9c] transition-colors">Story</a>
              <a href="#socials" onClick={() => setIsMenuOpen(false)} className="hover:text-[#e55c9c] transition-colors">Socials</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6">
            <Image src={blinky} alt="Blinky" />
          </div>
          <h1 className="text-[#e55c9c] text-6xl md:text-8xl font-bold mb-6">Meet Blinky</h1>
          <p className="text-2xl md:text-4xl mb-8">Blink and You're Rich</p>
          <div className="break-all text-sm opacity-70">
            ca: B4fuA7wKBagyR1V5BBAhGJu7z2cD16rubZ5HPUNcpump
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20">
        <div className="container mx-auto px-4">
          {storyParagraphs.map((paragraph, index) => (
            <div
              key={index}
              className="flex items-center mb-20"
              style={{
                opacity: scrollY > 300 + index * 200 ? 1 : 0,
                transform: `translateY(${scrollY > 300 + index * 200 ? 0 : '50px'})`,
                transition: 'all 0.8s ease-out'
              }}
            >
              <Image
                src={blinky}
                alt="Blinky"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full mr-6"
              />
              <div className="relative bg-white/10 p-6 rounded-lg flex-1">
                <div className="absolute w-4 h-4 bg-white/10 transform rotate-45 -left-2 top-1/2 -mt-2" />
                <p className="text-lg md:text-xl">{paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="socials" className="bg-[#768f29]/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="https://x.com/Blinky990862"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#e55c9c] transition-colors"
            >
              <X className="mr-2" /> Twitter
            </a>
            <a
              href="https://t.co/yhqomNziUn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#e55c9c] transition-colors"
            >
              <Send className="mr-2" /> Telegram
            </a>
            <a
              href="https://dexscreener.com/solana/hyvgxxle1ykbtyyktpbkxsdek15pxlsbfo8adu3gue5z"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e55c9c] transition-colors"
            >
              Dexscreener
            </a>
          </div>
          <div className="text-center mt-6">
            <p className="text-xl">#MeetBlinky</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlinkyWebsite;