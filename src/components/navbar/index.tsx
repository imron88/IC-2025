import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Dropdown = ({
  title,
  dropdown,
  isMobile = false,
  closeMenu,
}: {
  title: string;
  dropdown: { title: string; link: string }[];
  isMobile?: boolean;
  closeMenu?: () => void;
}) => {
  const [dropOpen, setDropOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const dropToggle = () => setDropOpen(!dropOpen);

  const { asPath } = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setDropOpen(false);
    if (closeMenu) closeMenu();
  };

  return (
    <li
      ref={dropdownRef}
      className={"relative cursor-pointer list-none"}
    >
      <button
        onClick={dropToggle}
        className={`group inline-flex items-center justify-between w-full py-3 px-4 text-left transition-all duration-200 hover:bg-primary-700 rounded-lg ${
          isMobile ? "text-white" : "text-secondary-200 hover:text-white"
        }`}
      >
        <span className="text-sm font-medium uppercase tracking-wider">
          {title}
        </span>
        <AiFillCaretDown 
          className={`ml-2 text-xs transition-transform duration-200 ${
            dropOpen ? "rotate-180" : ""
          }`} 
        />
      </button>
      
      {dropOpen && (
        <div
          className={`${
            isMobile 
              ? "mt-2 w-full bg-primary-800 rounded-lg" 
              : "absolute left-0 top-full mt-2 w-64 bg-white shadow-xl rounded-lg border border-gray-100 z-50"
          }`}
        >
          <ul className="py-2">
            {dropdown.map((item, index) => {
              const isActive = asPath === item.link;
              return (
                <li key={index}>
                  <Link
                    href={item.link}
                    onClick={handleLinkClick}
                    className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      isMobile
                        ? "text-secondary-200 hover:text-white hover:bg-primary-900"
                        : isActive
                        ? "bg-secondary-100 border-l-4 border-primary-600"
                        : "hover:bg-secondary-50"
                    }`}
                    style={!isMobile ? { color: '#3a7e44' } : {}}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

function Index() {
  const links = [
    {
      title: "Home",
      link: "/",
      enabled: true,
    },
    {
      title: "Call for Papers",
      link: "/call-for-papers",
      enabled: true,
    },
    {
      title: "Paper Submission",
      link: "/paper-submission",
      enabled: true,
    },
    {
      title: "Registration",
      link: "/register",
      enabled: true,
    },
    {
      title: "Committees",
      link: "/committe",
      enabled: true,
    },
    {
      title: "Publications",
      link: "/publications",
      enabled: true,
    },
    {
      title: "Keynote Speakers",
      link: "/speakers",
      enabled: true,
    },
    {
      title: "Contact Us",
      link: "/contact",
      enabled: true,
    },
  ];

  const [menuOpen, setMenu] = useState(false);
  const router = useRouter();
  
  const closeMenu = () => {
    setMenu(false);
  };

  const menuToggle = () => {
    setMenu(!menuOpen);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-1.5 px-2 sm:py-2 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 mb-1 sm:mb-0">
            <span className="text-secondary-200">📧 icidlhv2023@poornima.org</span>
            <span className="text-secondary-200">📞 +91-9950809459</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2">
            <span className="text-secondary-200">📅 May 16-17, 2026</span>
            <span className="text-secondary-200">📍 Jaipur, Rajasthan, India</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header Section */}
          <div className="flex items-center justify-between h-20 border-b border-gray-100">
            {/* Logo and Conference Title */}
            <Link href="/" className="flex items-center space-x-4 flex-shrink-0">
              <div className="h-12 w-12 sm:h-14 sm:w-14">
                <Image
                  width={56}
                  height={56}
                  src="/pietlogo.png"
                  className="object-contain"
                  alt="PIET Logo"
                  priority
                />
              </div>
              
              <div className="flex flex-col">
                <span 
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: '#3a7e44' }}
                >
                  ICIDLHV 2026
                </span>

                <span className="hidden sm:block text-xs sm:text-sm text-gray-600 max-w-xs sm:max-w-md lg:max-w-2xl">
                  International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
                </span>
              </div>
            </Link>

            {/* College Logo - Top Right */}
            <div className="hidden md:block flex-shrink-0">
              <Image
                width={200}
                height={120}
                src="/clglogo.png"
                className="object-contain"
                alt="College Logo"
              />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={menuToggle}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <AiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation Links Row - Below Header */}
          <div className="hidden md:block">
            <ul className="flex items-center justify-center space-x-6 py-3">
              {links.map((link, index) => {
                if (!link.enabled || !link.link) return null;
                
                const isActive = router.asPath === link.link;
                
                return (
                  <li key={index}>
                    <Link 
                      href={link.link}
                      className={`group relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-200 rounded hover:bg-secondary-50 whitespace-nowrap ${
                        isActive 
                          ? 'bg-secondary-100' 
                          : ''
                      }`}
                      style={{ color: isActive ? '#118B50' : '#3a7e44' }}
                    >
                      {link.title}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform transition-transform duration-200 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Navigation Menu */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-3 pt-3 pb-4 space-y-1 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg mt-2 mb-4">
              {/* College Logo for Mobile */}
              <div className="md:hidden flex justify-center mb-4">
                <Image
                  width={150}
                  height={90}
                  src="/clglogo.png"
                  className="object-contain"
                  alt="College Logo"
                />
              </div>
              
              {links.map((link, index) => {
                if (!link.enabled || !link.link) return null;
                
                const isActive = router.asPath === link.link;
                
                return (
                  <Link
                    key={index}
                    href={link.link}
                    onClick={handleLinkClick}
                    className={`block px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors duration-200 rounded-lg ${
                      isActive 
                        ? 'bg-primary-800 text-white border-l-4 border-secondary-200' 
                        : 'text-secondary-200 hover:text-white hover:bg-primary-700'
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Index;
