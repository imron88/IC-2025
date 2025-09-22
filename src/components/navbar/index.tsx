import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Dropdown = ({
  title,
  dropdown,
}: {
  title: string;
  dropdown: { title: string; link: string }[];
}) => {
  const [dropOpen, setDropOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropToggle = () => setDropOpen(!dropOpen);

  const { asPath } = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // @ts-ignore
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li
      ref={dropdownRef}
      onClick={dropToggle}
      className={"relative w-full cursor-pointer list-none"}
    >
      <span
        className={`${title.includes("20")
          ? "grow-on-hover mt-1 rounded bg-red-900 px-3 py-2 text-xs"
          : ""
          } inline-flex items-center text-white`}
      >
        {title.toUpperCase()}
        <AiFillCaretDown className={`ml-1 ${dropOpen ? "rotate-180" : ""}`} />
      </span>
      {dropOpen && (
        <div
          id="dropNav"
          className={`-left-1/2 z-10 mt-3 w-full divide-y divide-amber-800 rounded bg-amber-100 font-normal shadow-lg md:absolute ${title.toLowerCase().includes("archive") ? "md:w-36" : "md:w-52"
            }`}
        >
          <ul className="w-full py-2 text-sm font-semibold text-gray-700">
            {dropdown.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="block px-4 py-2 hover:bg-amber-200"
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
      title: "Call for papers",
      link: "/call-for-papers",
      enabled: true,
    },
    {
      title: "Paper Submission",
      link: "/papersubmission",
      enabled: true,
    },
    {
      title: "Registration",
      link: "/registration",
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
    // {
    //   title: "Special Sessions",
    //   link: "/special-session",
    //   enabled: true,
    // },
    // {
    //   title: "Archive",
    //   dropdown: [
    //     {
    //       title: "ICIMMI - 2023",
    //       link: "/archive/2023",
    //     },
    //     {
    //       title: "ICIMMI - 2022",
    //       link: "/archive/2022",
    //     },
    //     {
    //       title: "ICIMMI - 2021",
    //       link: "/archive/2021",
    //     },
    //     {
    //       title: "ICIMMI - 2020",
    //       link: "/archive/2020",
    //     },
    //     {
    //       title: "ICIMMI - 2019",
    //       link: "/archive/2019",
    //     },
    //   ],
    //   enabled: true,
    // },
  ];

  const [menuOpen, setMenu] = useState(false);
  
  const closeMenu = () => {
    setMenu(false);
  };

  const menuToggle = () => {
    setMenu(!menuOpen);
  };

  const router = useRouter();
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-[#071952] shadow-lg">
        <div className="mx-auto max-w-screen-xl flex-wrap items-center justify-between p-4">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="flex items-center space-x-4">
              <div className="h-14 w-14">
                <Image
                  width={56}
                  height={56}
                  src="/pietlogo.png"
                  className="object-contain"
                  alt="PIET Logo"
                />
              </div>
              
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  ICIDLHV2026
                </span>
                <span className="text-sm text-gray-300">
                  International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
                </span>
              </div>
            </Link>

            <div className="hidden lg:block">
              <Image
                width={250}
                height={150}
                src="/clglogo.png"
                className="object-contain"
                alt="College Logo"
              />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={menuToggle}
              className="inline-flex items-center p-2 text-white hover:bg-blue-900 rounded-lg md:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`${menuOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
              {links.map((link, index) => (
                link.enabled && link.link && (
                  <li key={index} className="group">
                    <Link 
                      href={link.link}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm uppercase tracking-wider"
                      onClick={closeMenu}
                    >
                      {link.title}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Index;
