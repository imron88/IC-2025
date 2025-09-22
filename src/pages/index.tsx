import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";
import {
  RiArticleLine,
  RiBuildingFill,
  RiCalendarTodoFill,
  RiFacebookBoxFill,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiTwitterFill,
} from "react-icons/ri";
import ImportantDates from "../components/importantDates";
import ImportantDownloads from "../components/importantDownloads";
import React, { useEffect, useState } from "react";
import ImportantMessage from "@/components/importantMessage";
import Button from "@/components/button";
import Link from "next/link";
import { speakers } from "@/data/speakers";

import dynamic from "next/dynamic";
import Carousel from "framer-motion-carousel";
import Image from "next/image";
import axios from "axios";
import InaugurationPdf from "@/components/inaugurationPdf";
// import EntryModal from "@/components/entryModal";
import Sponsored from "@/components/sponsored";
import Schedule from "@/components/schedule";

const AnimatedNumbers = dynamic( import("react-animated-numbers"), {
  ssr: false,
});

const Home = () => {
  const [visitorCounter, setVisitorCounter] = useState(20000);

  const counterData = [
    {
      maxCount: 600,
      subTitle: "Papers Published",
    },
    {
      maxCount: 200,
      subTitle: "Members",
    },
    {
      maxCount: 1400,
      subTitle: "Participants",
    },
    {
      maxCount: 500,
      subTitle: "Active Standards",
    },
  ];

  const sliderImages = [
    {
      image: "/clg.jpg",
      id: "e5f6g7h8",
      alt: "College Campus View",
      title: "PIET Campus"
    },
    {
      image: "/clg2.jpg",
      id: "i9j0k1l2",
      alt: "College Building",
      title: "Academic Block"
    },
    {
      image: "/clg3.jpg",
      id: "m3n4o5p6",
      alt: "College Infrastructure",
      title: "Research Facilities"
    },
  ];
  const logoImages = [
    // {
    //   image: "/gallery/logos/taru.png",
    //   id: "e5f6g7h8",
    //   alt: "",
    // },
    {
      image: "/gallery/logos/scopus1.png",
      id: "i9j0k1l2",
      alt: "",
    },
    // {
    //   image: "/gallery/logos/icps1.jpg",
    //   id: "i9j0k1l2",
    //   alt: "",
    // },
  ];

  const fetch = (i: number) => {
    const options = { method: "GET", url: `/api/counter?i=${i}` };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setVisitorCounter(response.data.counter);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let lastSession = localStorage.getItem("token");
      if (lastSession === null) {
        console.log("null");
        localStorage.setItem("token", Date.now().toString());
        fetch(1);
      } else if (parseInt(lastSession) - Date.now() > 21600000) {
        console.log("expired");
        localStorage.setItem("token", Date.now().toString());
        fetch(1);
      } else {
        console.log("not expired");
        fetch(0);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          ICIDLHV- International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <Schedule />
      <br/>

      {/* Hero Section */}
      <main className="bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-5 py-4 sm:py-6 lg:py-8">
          <div className="col-span-full lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-full w-fit">
              <RiCalendarTodoFill className="text-lg sm:text-xl text-[#034EA2]" />
              <p className="font-semibold text-[#034EA2] text-sm sm:text-base">16th & 17th May, 2026</p>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
              2nd International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
            </h1>

            <div className="flex items-center space-x-2">
              <RiMapPin2Fill className="text-lg sm:text-xl text-[#034EA2]" />
              <div className="text-[#034EA2]">
                <p className="font-semibold text-sm sm:text-base">Poornima Institute of Engineering and technology</p>
                <p className="text-xs sm:text-sm">Sitapura Jaipur, Rajasthan</p>
              </div>
            </div>

            <div className="flex space-x-3 sm:space-x-5 text-xl sm:text-2xl text-[#034EA2]">
              {/* <Link
                href={"https://www.piet.poornima.org/"}
                aria-label={"icimmi twitter"}
              >
                <RiTwitterFill
                  className={"grow-on-hover cursor-pointer hover:text-sky-500"}
                />
              </Link> */}
              <Link href={"tel:+91-8118874724"} aria-label={"icimmi phone"}>
                <RiPhoneFill
                  className={
                    "grow-on-hover cursor-pointer hover:text-emerald-500"
                  }
                />
              </Link>
              {/* <Link
                href={"https://www.piet.poornima.org/"}
                aria-label={"icimmi facebook"}
              >
                <RiFacebookBoxFill
                  className={
                    "grow-on-hover cursor-pointer hover:text-indigo-700"
                  }
                />
              </Link> */}
              <Link
                href={"mailto:icsicst@poornima.org"}
                aria-label={"ICIDLHVmail"}
              >
                <RiMailFill
                  className={
                    "grow-on-hover cursor-pointer hover:text-amber-400"
                  }
                />
              </Link>
            </div>
          </div>

          <div className="col-span-full lg:col-span-3">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <Carousel
                autoPlay={true}
                interval={4000}
                loop={true}
                renderArrowLeft={() => null}
                renderArrowRight={() => null}
                renderDots={({ setActiveIndex, activeIndex }) => (
                  <div className="absolute bottom-0 left-0 right-0 flex h-8 sm:h-12 items-center justify-center gap-2 sm:gap-3 bg-gradient-to-t from-black/50 to-transparent">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 sm:h-2.5 transition-all duration-300 rounded-full
                          ${index === activeIndex 
                            ? 'bg-white w-3 sm:w-4' 
                            : 'bg-white/50 w-2 sm:w-2.5 hover:bg-white/80'}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              >
                {sliderImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="relative aspect-[16/9] w-full select-none"
                  >
                    <Image
                      src={image.image}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 66vw"
                      draggable={false}
                    />
                    <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 px-4 text-center">
                      <h3 className="text-white text-base sm:text-xl font-semibold drop-shadow-lg">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <hr className="my-6 sm:my-8 h-px border-0 bg-gray-200" />

        {/* Preamble Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About Conference</h2>
            <p className="text-justify">
              International Conference on Sustainable &amp; Intelligent Computing in Science and Technology
              (ICIDLHV2026) will be held at Poornima Institute
              of Engineering &amp; Technology, Jaipur, Rajasthan, India on
              May 16-17, 2026.
              {<br />}
              {<br />}
              The IC-SICST 2026 conference aims to showcase the recent challenges and their solutions for the development of Sustainable & Intelligent Computing across all areas of science and technology. The International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics (IC-SICST 2026) is a premier platform for researchers, academicians, industry professionals, and students to converge and exchange innovative ideas in the fields of sustainable and intelligent computing. This annual event brings together a diverse community of experts to discuss cutting-edge research, emerging trends, and real-world applications in various interdisciplinary areas of science and technology. Our goal for this conference is to gather academic and research contributions from experts working to provide intelligence to their machines and systems.
              {<br />}
              {<br />}
            </p>
            <hr className="my-6 sm:my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Publication Partners</h2>
            <div className="col-span-full flex h-[250px] sm:h-[300px] w-full overflow-hidden rounded-lg px-1 lg:col-span-3">
              <Carousel
                autoPlay={true}
                interval={4000}
                loop={true}
                renderArrowLeft={() => null}
                renderArrowRight={({ activeIndex, handleNext }) => null}
                renderDots={({ setActiveIndex, activeIndex }) => {
                  return (
                    <div className="absolute bottom-0 left-0 flex h-8 sm:h-10 w-full flex-row items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-gray-800 bg-opacity-20">
                      {logoImages.map((image, index) => {
                        return (
                          <div
                            key={index}
                            className={`${
                              index == activeIndex ? "bg-amber-400" : "bg-white"
                            } h-2.5 sm:h-3 w-2.5 sm:w-3 cursor-pointer rounded-full transition duration-300 ease-in-out hover:bg-red-600`}
                            onClick={() => setActiveIndex(index)}
                          ></div>
                        );
                      })}
                    </div>
                  );
                }}
              >
                {logoImages.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="flex h-full w-full items-center justify-center p-4 sm:p-8"
                    >
                      <Image
                        height={300}
                        width={400}
                        draggable={false}
                        className="max-h-[200px] sm:max-h-[250px] w-auto object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                        src={image.image}
                        alt={image.alt || "Publication Partner Logo"}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>

        {/* Objectives Section */}
        <section className="py-8 sm:py-12">
          <div className="container flex flex-col md:flex-row-reverse gap-6 sm:gap-8">
            <div className="md:w-3/4">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold">Objectives</h2>
                <p className="mb-6 sm:mb-8 text-justify">
                  The main objective of this conference is to provide a platform
                  for researchers, academicians, industry professionals, and
                  students to showcase their expertise and knowledge in the latest
                  developments and strategies in the field of Science and technology.
                  It is expected to receive a
                  large number of high-quality submissions and foster innovative
                  research discussions among scholars, scientists, engineers, and
                  students from all over the world.
                </p>
                Other Objectives of the conference include:&nbsp;
                <ul className="prose mx-4 my-4 list-disc text-justify text-sm sm:text-base">
                  <li>
                    Encouraging the proposal of new technologies, sharing of
                    experiences, and discussion of recent developments and
                    strategies in the field of Information Management and Machine
                    Learning.
                  </li>
                  <li>
                    Providing a common platform for academic pioneers to share
                    their views and achievements, and for participants to network
                    and collaborate.
                  </li>
                  <li>
                    Enhancing the knowledge and skills of technocrats and
                    academicians by presenting original and productive
                    information.
                  </li>
                  <li>
                    Highlighting pioneering issues internationally by bringing
                    together experts from different countries.
                  </li>
                  <li>
                    Promoting interdisciplinary collaborations to explore the
                    integration of information Management and Machine Learning
                    across diverse domains.
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About Rajasthan</h2>
                  <p className="mb-6 sm:mb-8 text-justify">
                    Rajasthan is the largest state of India by an area 3,42,239 sq km. It encompasses most of the area of the large, inhospitable Great Indian Desert (Thar Desert), which has an edge paralleling the Sutlej-Indus River valley along its border with Pakistan. The state has borders with Pakistan to the west, Gujrat to the southwest, Madhya Pradesh to the southeast, Uttar Pradesh &amp; Haryana to the northeast &amp; Punjab to the north. The glory of the state is retained by its majestic places, forts, monuments, vibrant culture, and rich heritage which draw innumerable tourists from across the globe.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About Jaipur</h2>
                  <p className="mb-6 sm:mb-8 text-justify">
                    Jaipur (Pink City of India), the capital of Rajasthan state in India, was founded in 1727 by Maharaj Sawai Jai Singh. It is an enormously admired tourist destination in Rajasthan and India. Its features of beautiful Architecture, Town Planning, Arts and Crafts, Culture, tourism have endowed it with uniqueness in India&apos;s urban character. Jaipur being capital of Rajasthan and one of the important cities of Golden Triangle is the focus of the socio-economic and political center of the State. Jaipur is an expression of the astronomical skills, living traditions, unique urban form and exemplary foresighted city planning of an 18th century city from India.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About Poornima Institute</h2>
                  <p className="mb-6 sm:mb-8 text-justify">
                    Poornima Institute of Engineering and Technology, Jaipur is a premier institution in Engineering Education, established in the academic year 2007. It is affiliated to RTU, Kota and approved by AICTE and it is recognized under UGC 2(f) and  NAAC A Accredited. It is the learning home to a total of 1700 students and is committed to impart best technical skills in students through its six specializations of engineering at UG level.
                    Being ranked 4th in annual QIV ranking by RTU, Kota. Institute is accredited by NAAC since 2019. PIET is the 2nd Institution across India to offer B. Tech CSE in Indian language under NEP 2020. PIET has been sponsored and funded by AICTE for IDEA Lab first in Rajasthan. PIET got overall Diamond rating in QS i-Gauge. PIET is funded for Rs. 1.7 crore in the last five years from various agencies from agencies like TEQIP III, AICTE, NITTTR etc. PIET has been awarded a center of excellence for Advanced Digital Manufacturing by RTU, Kota that facilitates Skill Development, Hands on learning and innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 space-y-4 sm:space-y-6">
              {/* Images section - wrapped in rounded corners and shadow */}
              {["/bg.JPG", "/gallery/2022/i1.jpg", "/gallery/city_images/RAJASTHAN.jpg", 
                "/gallery/city_images/jaipur.jpg", "/gallery/city_images/jaipur-hd-img.webp"].map((src, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={src}
                    alt="Conference venue and location images"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Conference Section */}
        {/* <section className="bg-white rounded-xl shadow-md p-4 sm:p-8 my-8 sm:my-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">About Conference</h1>
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">
              2nd International Conference on Sustainable &amp; Intelligent Computing in Science and Technology (IC-SICST 2026)
            </h2>
            <p className="mb-6 sm:mb-8 text-justify text-sm sm:text-base">
              The IC-SICST 2026 conference aims to showcase the recent challenges and their solutions for the development of Sustainable &amp; Intelligent Computing across all areas of science and technology. The International Conference on Sustainable &amp; Intelligent Computing in Science and Technology (IC-SICST 2026) is a premier platform for researchers, academicians, industry professionals, and students to converge and exchange innovative ideas in the fields of sustainable and intelligent computing. This annual event brings together a diverse community of experts to discuss cutting-edge research, emerging trends, and real-world applications in various interdisciplinary areas of science and technology. Our goal for this conference is to gather academic and research contributions from experts working to provide intelligence to their machines and systems.
            </p>
          </div>
        </section> */}

        {/* Visitor Counter */}
        <div className="bg-blue-50 rounded-xl p-4 sm:p-8 text-center my-8 sm:my-12">
          <div className="text-3xl sm:text-5xl font-bold text-[#034EA2] mb-2 sm:mb-4">
            <AnimatedNumbers
              includeComma
              animateToNumber={visitorCounter}
              locale="en-US"
              configs={[
                { mass: 1, tension: 220, friction: 100 },
                { mass: 1, tension: 180, friction: 130 },
                { mass: 1, tension: 280, friction: 90 },
                { mass: 1, tension: 180, friction: 135 },
                { mass: 1, tension: 260, friction: 100 },
                { mass: 1, tension: 210, friction: 180 },
              ]}
            />
          </div>
          <p className="text-lg sm:text-xl font-semibold text-gray-700">Visitors</p>
        </div>

        <hr className="my-6 sm:my-8 h-px border-0 bg-gray-200" />

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-8 sm:my-12">
          {counterData.map((item, index) => (
            <div key={index} 
                 className="bg-white rounded-xl shadow-md p-4 sm:p-6 text-center transform hover:scale-105 transition-all duration-300">
              <AnimatedNumbers
                animateToNumber={item.maxCount}
                locale="en-US"
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              />
              <p className="mt-2 text-gray-600 font-medium text-sm sm:text-base">{item.subTitle}</p>
            </div>
          ))}
        </div>

        <Sponsored />
      </main>
    </>
  );
};

export default Home;
