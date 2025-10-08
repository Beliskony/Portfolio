import React, { useState, useEffect } from "react";
import { Menu, X, Home, Code, Folder, Mail } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet pour détecter le scroll et ajouter un fond
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le scroll du body quand le drawer est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: "#presentation", label: "Accueil", icon: Home },
    { href: "#skills", label: "Compétences", icon: Code },
    { href: "#projects", label: "Projets", icon: Folder },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-4"
            : "bg-white/90 backdrop-blur-md py-6 lg:bg-transparent lg:backdrop-blur-none"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
              >
                Digital-Gick
              </a>
            </div>

            {/* Navigation Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Bouton Menu Mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-xl bg-white shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X size={24} className="text-gray-700" />
                ) : (
                  <Menu size={24} className="text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">DG</span>
            </div>
            <span className="text-lg font-bold text-gray-900">Menu</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Fermer le menu"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Navigation Mobile */}
        <div className="p-6">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex items-center gap-4 p-4 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-2xl transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors duration-200">
                    <IconComponent size={20} />
                  </div>
                  <span className="font-medium text-lg">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Disponible pour de nouveaux projets</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-600 text-sm font-medium">En ligne</span>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  handleNavClick();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Discuter d'un projet
              </button>
            </div>
          </div>
        </div>

        {/* Footer du Drawer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Digital-Gick
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;