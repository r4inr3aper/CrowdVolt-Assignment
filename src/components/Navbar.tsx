import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { scrollToElement, getActiveSection } from "../utils/smoothScroll";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const scrollToSection = (sectionId: string) => {
    scrollToElement(sectionId, { 
      offset: 80 
    });
    closeMobileMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "events", "contact"];
      const active = getActiveSection(sections);
      if (active) {
        setActiveSection(active);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#home", action: () => scrollToSection("home") },
    { label: "About", href: "#about", action: () => scrollToSection("about") },
    { label: "Events", href: "#events", action: () => scrollToSection("events") },
    { label: "Contact", href: "#contact", action: () => scrollToSection("contact") },
  ];

  return (
    <nav className="flex items-center justify-between text-white px-4 py-5 md:px-8 relative z-50">
      {/* Logo Section */}
      <div className="flex items-center cursor-pointer justify-center h-8 w-32">
        <img src="CrowdVoltLogo.svg" alt="CrowdVolt Logo" />
      </div>

      {/* Mobile Buttons */}
      <div className="md:hidden flex items-center space-x-2">
        <button
          onClick={() => console.log("Search icon clicked")}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>

        <button
          onClick={toggleMobileMenu}
          className={`p-2 rounded-full transition-colors duration-200 ${
            isMobileMenuOpen ? "bg-gray-800" : "hover:bg-gray-800"
          }`}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex flex-1 max-w-lg mx-8">
        <div className="relative w-full">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
            aria-hidden="true"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
            placeholder="Search by event or venue"
            className="w-full text-white placeholder-white rounded-full px-4 py-2 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 border border-white hover:border-l-white"
            aria-label="Search events and venues"
          />
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link, index) => (
          <button
            key={index}
            onClick={link.action}
            className={`transition-colors duration-200 font-medium cursor-pointer ${
              activeSection === link.href.replace('#', '') 
                ? 'text-purple-300' 
                : 'text-white hover:text-purple-300'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile Top Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col">
          <nav className="space-y-1 p-4">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className={`block w-full font-grotesk text-left hover:bg-gray-800/50 transition-all duration-200 py-3 px-4 rounded-lg text-lg ${
                  activeSection === link.href.replace('#', '') 
                    ? 'text-purple-300 bg-gray-800/30' 
                    : 'text-white hover:text-purple-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="border-t border-gray-800 p-4">
            <p className="text-gray-400 font-grotesk text-sm text-center">
              Find your next favorite event
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
