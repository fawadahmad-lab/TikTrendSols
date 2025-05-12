import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/Topser" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/Supcont" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-gradient-to-r from-purple-800/90 to-purple-900/90 backdrop-blur-md py-2 shadow-lg shadow-purple-500/20'
        : 'bg-gradient-to-r from-purple-700 to-purple-900 py-4'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <FaTiktok className="text-2xl text-pink-400 mr-2" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
                TikTrend
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-4" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-white font-semibold' 
                        : 'text-purple-100 hover:scale-105 hover:bg-gradient-to-r from-pink-500 to-purple-600 hover:text-white shadow-md shadow-pink-400/20'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Navigation - Always visible */}
          <nav className="lg:hidden flex items-center space-x-2"> {/* Reduced from space-x-4 */}
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-1.5 py-1 text-[11px] font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-purple-100 hover:text-pink-200'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}