import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import ThemeContext from '../context/ThemeContext';
import { personalInfo } from '../data/portfolio';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-slate-700/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <span className="font-bold text-xl gradient-text">
              {personalInfo.name.split(' ')[0]}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-slate-700 dark:text-yellow-400" />
              ) : (
                <Moon size={20} className="text-slate-700 dark:text-slate-200" />
              )}
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.resumeUrl}
              download
              className="button-primary flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-slate-700 dark:text-slate-200" />
            ) : (
              <Menu size={24} className="text-slate-700 dark:text-slate-200" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/20 dark:border-slate-700/20"
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/20 dark:border-slate-700/20">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleDarkMode}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? (
                      <Sun size={20} className="text-slate-700 dark:text-yellow-400" />
                    ) : (
                      <Moon size={20} className="text-slate-700 dark:text-slate-200" />
                    )}
                  </motion.button>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={personalInfo.resumeUrl}
                    download
                    className="button-primary flex items-center space-x-2"
                  >
                    <Download size={16} />
                    <span>Resume</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 