import {
  RiFacebookBoxFill,
  RiMailFill,
  RiPhoneFill,
  RiTwitterFill,
  RiMapPin2Fill,
  RiGlobalLine
} from "react-icons/ri";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    {
      icon: RiTwitterFill,
      href: "https://x.com/PIET_Jaipur?t=Kjg5TmQrklkkRdjvFVElDw&s=09",
      label: "Twitter",
      hoverColor: "hover:text-sky-400"
    },
    {
      icon: RiPhoneFill,
      href: "tel:+91-9896017351",
      label: "Phone",
      hoverColor: "hover:text-emerald-500"
    },
    {
      icon: RiFacebookBoxFill,
      href: "https://www.facebook.com/PoornimaInstitute",
      label: "Facebook",
      hoverColor: "hover:text-indigo-500"
    },
    {
      icon: RiMailFill,
      href: "https://www.piet.poornima.org/",
      label: "Website",
      hoverColor: "hover:text-amber-400"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 via-secondary-400 to-accent-400"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4 sm:space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                <Image
                  width={40}
                  height={40}
                  src="/pietlogo.png"
                  className="relative object-contain transition-transform duration-300 group-hover:scale-110"
                  alt="PIET Logo"
                />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">
                  ICIDLHV 2026
                </h2>
                <p className="text-xs sm:text-sm text-secondary-200 font-medium">
                  International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
                </p>
              </div>
            </Link>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-secondary-200 text-xs sm:text-sm leading-relaxed">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference.
                This service was provided for free by Microsoft and they bore all expenses, including costs for
                Azure cloud services as well as for software development and support.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
                  Join us for the 2nd International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
                  in Science and Technology at PIET.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white border-b-2 border-accent-400 pb-2 inline-block">
              Contact Information
            </h3>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start space-x-3 group">
                <div className="bg-accent-500 p-2 rounded-lg group-hover:bg-accent-400 transition-colors duration-300">
                  <RiMapPin2Fill className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-white text-sm sm:text-base font-medium">
                    Department Of Applied Sciences
                  </p>
                  <p className="text-secondary-200 text-xs sm:text-sm">
                    PIET, Jaipur, Rajasthan
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="bg-accent-500 p-2 rounded-lg group-hover:bg-accent-400 transition-colors duration-300">
                  <RiPhoneFill className="text-white text-lg" />
                </div>
                <a
                  href="tel:+91-8118874724"
                  className="text-secondary-200 hover:text-white text-sm sm:text-base transition-colors duration-300 font-medium"
                >
                  +91-8118874724
                </a>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="bg-accent-500 p-2 rounded-lg group-hover:bg-accent-400 transition-colors duration-300">
                  <RiGlobalLine className="text-white text-lg" />
                </div>
                <a
                  href="https://www.piet.poornima.org"
                  className="text-secondary-200 hover:text-white text-sm sm:text-base transition-colors duration-300 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.piet.poornima.org
                </a>
              </div>
            </div>
          </div>

          {/* College Logo - Enhanced */}
          <div className="hidden xl:flex justify-center items-start">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <Image
                width={220}
                height={140}
                src="/clglogo.png"
                className="object-contain filter drop-shadow-lg"
                alt="College Logo"
              />
            </div>
          </div>

          {/* Mobile College Logo */}
          <div className="xl:hidden flex justify-center mt-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
              <Image
                width={160}
                height={100}
                src="/clglogo.png"
                className="object-contain filter drop-shadow-md"
                alt="College Logo"
              />
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative my-6 sm:my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-accent-400 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-accent-400 to-secondary-400 h-1 w-24 sm:w-32 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 pt-4">
          <div className="text-center lg:text-left">
            <p className="text-sm sm:text-base text-white font-medium">
              © 2026 ICIDLHV. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-secondary-200 mt-1">
              Created with ❤️ by{" "}
              {[
                { name: "Ronak", href: "https://github.com/Ronak282005" }
              ].map((dev, index) => (
                <React.Fragment key={dev.name}>
                  <a
                    href={dev.href}
                    className="text-accent-300 hover:text-accent-200 font-medium transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dev.name}
                  </a>
                  {index < 0 && ", "}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Social Links - Enhanced */}
          <div className="flex space-x-3 sm:space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className={`group relative p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-xl 
                           ${social.hoverColor} transition-all duration-300 
                           hover:bg-white/20 hover:scale-110 hover:shadow-lg`}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {social.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Conference Badge */}
        <div className="text-center mt-6 sm:mt-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-secondary-500 
                         px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-medium text-xs sm:text-sm
                         shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span>International Conference 2026</span>
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
