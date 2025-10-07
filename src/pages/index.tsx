import Head from "next/head";

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

const AnimatedNumbers = dynamic(import("react-animated-numbers"), {
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
      id: "m3n4o5p7",
      alt: "College Infrastructure",
      title: "Research Facilities"
    },
  ];
  const logoImages = [
    {
      image: "/gallery/logos/sla.jpeg",
      id: "i9j0k1l2",
      alt: "",
    },
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
      {/* <Schedule /> */}
      <br />

      {/* Hero Section */}
      <main className="bg-gradient-to-b from-background-primary to-white px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-4 sm:gap-6 lg:gap-8 py-4 sm:py-6 lg:py-8">
          <div className="col-span-full lg:col-span-2 space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="flex items-center space-x-2 bg-secondary-100 px-3 sm:px-4 py-2 rounded-full w-fit shadow-sm">
              <RiCalendarTodoFill className="text-base sm:text-lg lg:text-xl text-primary-600 flex-shrink-0" />
              <p className="font-semibold text-primary-600 text-xs sm:text-sm lg:text-base whitespace-nowrap">20th & 21st February, 2026</p>
            </div>

            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight" style={{ color: '#3a7e44' }}>
              2nd International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
            </h1>

            <div className="flex items-start space-x-2">
              <RiMapPin2Fill className="text-base sm:text-lg lg:text-xl text-primary-600 flex-shrink-0 mt-1" />
              <div className="text-primary-600">
                <p className="font-semibold text-xs sm:text-sm lg:text-base">Poornima Institute of Engineering and Technology</p>
                <p className="text-xs sm:text-sm text-gray-600">Sitapura Jaipur, Rajasthan</p>
              </div>
            </div>

            <div className="flex space-x-3 sm:space-x-4 lg:space-x-5 text-lg sm:text-xl lg:text-2xl text-primary-600">
              <Link href={"tel:+91-9950809459"} aria-label={"ICIDLHV phone"} className="hover:scale-110 transition-transform duration-200">
                <RiPhoneFill className="cursor-pointer hover:text-emerald-500 transition-colors duration-200" />
              </Link>
              <Link href={"mailto:icidlhv2023@poornima.org"} aria-label={"ICIDLHV mail"} className="hover:scale-110 transition-transform duration-200">
                <RiMailFill className="cursor-pointer hover:text-amber-400 transition-colors duration-200" />
              </Link>
            </div>
          </div>

          <div className="col-span-full lg:col-span-3">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100">
              <Carousel
                autoPlay={true}
                interval={4000}
                loop={true}
                renderArrowLeft={() => null}
                renderArrowRight={() => null}
                renderDots={({ setActiveIndex, activeIndex }) => (
                  <div className="absolute bottom-0 left-0 right-0 flex h-6 sm:h-8 lg:h-12 items-center justify-center gap-1.5 sm:gap-2 lg:gap-3 bg-gradient-to-t from-black/50 to-transparent">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-1.5 sm:h-2 lg:h-2.5 transition-all duration-300 rounded-full
                          ${index === activeIndex
                            ? 'bg-white w-3 sm:w-4 lg:w-5'
                            : 'bg-white/50 w-1.5 sm:w-2 lg:w-2.5 hover:bg-white/80'}`}
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
                    <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-0 right-0 px-4 text-center">
                      <h3 className="text-white text-sm sm:text-base lg:text-xl font-semibold drop-shadow-lg">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <hr className="my-4 sm:my-6 lg:my-8 h-px border-0 bg-gray-200" />

        {/* Preamble Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <div className="lg:col-span-2 prose prose-sm sm:prose-base lg:prose-lg max-w-none" style={{ color: '#3a7e44' }}>
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6" style={{ color: '#3a7e44' }}>About Conference</h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-base">
              <p className="text-justify leading-relaxed">
                International Conference on Sustainable &amp; Intelligent Computing in Science and Technology
                (ICIDLHV2026) will be held at Poornima Institute
                of Engineering &amp; Technology, Jaipur, Rajasthan, India on
                February 20-21, 2026.
              </p>
              <p className="text-justify leading-relaxed">
                The changes in present society evolving as a knowledge society have very strong implications on the services of libraries. The advancement in Information & Communication Technologies coupled with social media applications have largely impacted Libraries and Information Centers. The emerging challenges posed by the contemporary environment, manifested in many forms such as digital repositories, big data, cloud computing, open access, user-centric services (e-learning, e-teaching, information literacy, orientation programs), web-based library services, application of social networking, library cooperation (including consortia), and IPR and legal issues, etc., are significant.
              </p>
              <p className="text-justify leading-relaxed">
                Conspicuously, a variety of forces, most specifically economic changes and technological developments, have reshaped and transformed libraries from storehouses and data archives to information/knowledge centers and community spaces. The initiatives of government towards building a digital-based society, fostering skill development, and promoting a collaborative and shared ambience have virtually changed the very face of the present society.
              </p>
              <p className="text-justify leading-relaxed">
                The conference theme is aptly selected to enable deliberations on the challenges faced by libraries and information centers. The fast-changing social, cultural, and economic environments pose different types of challenges for libraries and information centers, as they are a reflection of society. It is perceived that the deliberations in the conference will help in understanding newer avenues for teaching and learning with ample emphasis on e-Learning, e-Publishing, OERs, and MOOCs.
              </p>
              <p className="text-justify leading-relaxed">
                Libraries, as intermediaries, have a larger role to imbibe these advancements and changes and to develop services to help the academic community and the society cope with these developments. Research and innovation are constantly demanding availability of research data management and the search for newer strategies and techniques to adapt to the challenges. The changes in library and information services are inevitable, and so library professionals must get actively involved in the core missions and values of ICT-based tools and techniques.
              </p>
              <p className="text-justify leading-relaxed">
                Librarianship, not to be left behind, strives to develop and achieve new strategies and competencies as well as explore new arenas to put into use the technical skills for furthering library and information services more valuably and effectively.
              </p>
            </div>
            <hr className="my-4 sm:my-6 lg:my-8 h-px border-0 bg-gray-200" />
          </div>

          {/* Conference Images Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-3xl transition-all duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-2 sm:p-3">
                  <Image
                    src="/bg.JPG"
                    alt="Conference venue and location images"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-all duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
                    priority={false}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Conference Venue
                  </h3>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-3xl transition-all duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-2 sm:p-3">
                  <Image
                    src="/bg2.jpg"
                    alt="Conference venue and location images"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-all duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
                    priority={false}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Event Highlights
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-gradient-to-br from-background-primary to-white rounded-xl shadow-lg border border-gray-100 p-3 sm:p-4 lg:p-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-primary-100 rounded-full -translate-y-6 sm:-translate-y-8 lg:-translate-y-10 translate-x-6 sm:translate-x-8 lg:translate-x-10 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-secondary-100 rounded-full translate-y-5 sm:translate-y-6 lg:translate-y-8 -translate-x-5 sm:-translate-x-6 lg:-translate-x-8 opacity-50"></div>

            <div className="relative z-10">
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  In Collaboration With
                </h2>
                <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-inner border border-gray-50">
                <div className="flex h-[200px] sm:h-[240px] lg:h-[280px] w-full overflow-hidden rounded-lg justify-center">
                  <Carousel
                    autoPlay={true}
                    interval={4000}
                    loop={true}
                    renderArrowLeft={() => null}
                    renderArrowRight={() => null}
                    renderDots={({ setActiveIndex, activeIndex }) => {
                      return (
                        <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex items-center justify-center gap-1.5 sm:gap-2">
                          {logoImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveIndex(index)}
                              className={`h-2 sm:h-3 transition-all duration-300 rounded-full
                                ${index === activeIndex
                                  ? 'bg-primary-500 w-6 sm:w-8 shadow-lg'
                                  : 'bg-white/60 w-2 sm:w-3 hover:bg-white/80 hover:w-3 sm:hover:w-4'}`}
                              aria-label={`Go to collaboration slide ${index + 1}`}
                            />
                          ))}
                        </div>
                      );
                    }}
                  >
                    {logoImages.map((image, index) => (
                      <div
                        key={index}
                        className="flex h-full w-full items-center justify-center p-4 sm:p-6 lg:p-8"
                      >
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                          <Image
                            height={300}
                            width={400}
                            draggable={false}
                            className="relative max-h-[160px] sm:max-h-[200px] lg:max-h-[240px] w-auto object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl rounded-lg"
                            src={image.image}
                            alt={image.alt || "Publication Partner Logo"}
                          />
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives Section */}
        <section className="py-8 sm:py-12">
          <div className="container space-y-8 sm:space-y-12 text-text-primary">
            {/* About Rajasthan */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#3a7e44' }}>About Rajasthan</h2>
                <p className="text-justify leading-relaxed">
                  Rajasthan is the largest state of India by an area 3,42,239 sq km. It encompasses most of the area of the large, inhospitable Great Indian Desert (Thar Desert), which has an edge paralleling the Sutlej-Indus River valley along its border with Pakistan. The state has borders with Pakistan to the west, Gujrat to the southwest, Madhya Pradesh to the southeast, Uttar Pradesh &amp; Haryana to the northeast &amp; Punjab to the north. The glory of the state is retained by its majestic places, forts, monuments, vibrant culture, and rich heritage which draw innumerable tourists from across the globe.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery/city_images/wtp.avif"
                  alt="Rajasthan landscape and monuments"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* About Jaipur */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#3a7e44' }}>About Jaipur</h2>
                <p className="text-justify leading-relaxed">
                  Jaipur (Pink City of India), the capital of Rajasthan state in India, was founded in 1727 by Maharaj Sawai Jai Singh. It is an enormously admired tourist destination in Rajasthan and India. Its features of beautiful Architecture, Town Planning, Arts and Crafts, Culture, tourism have endowed it with uniqueness in India&apos;s urban character. Jaipur being capital of Rajasthan and one of the important cities of Golden Triangle is the focus of the socio-economic and political center of the State. Jaipur is an expression of the astronomical skills, living traditions, unique urban form and exemplary foresighted city planning of an 18th century city from India.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/gallery/city_images/jaipur-hd-img.webp"
                  alt="Jaipur Pink City architecture"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* About Poornima Institute */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#3a7e44' }}>About Poornima Institute of Engineering and Technology (PIET)</h2>
                <p className="text-justify leading-relaxed">
                  Poornima Institute of Engineering and Technology (PIET) is a premier
                  institution in engineering education, established in the academic year
                  2007. Affiliated with Rajasthan Technical University (Kota), approved by
                  AICTE, and recognized under UGC 2(f), PIET was accredited with NAAC -
                  A Grade in 2025. PIET has been granted Autonomous Status in July 2025,
                  marking a significant milestone in its journey toward academic excellence
                  and innovation.With over 1700 students, the institute offers eight
                  specialized undergraduate engineering programs, focused on imparting
                  robust technical skills and holistic development. In recognition of its
                  sustained quality enhancement, PIET has consistently ranked among the
                  top five institutions under the QIV Ranking by RTU, Kota, and holds a
                  Diamond rating by QS I-Gauge.Rated PLATINUM by AICTE-CII Survey for
                  strong industry-linked technical institutes, PIET has also been rated 3.5
                  Star by the Innovation Council, Ministry of Education, Government of
                  India. PIET is the only private institute in Rajasthan to receive funding from AICTE, India for establishing an IDEA Lab.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/piet.jpg"
                  alt="Poornima Institute of Engineering and Technology campus"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* About Central Library */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#3a7e44' }}>Central Library, PIET</h2>
                <div className="space-y-4">
                  <p className="text-justify leading-relaxed">
                    The PIET Central Library is a fully computerized and technology-enabled knowledge hub equipped with TCS-iON Library Management Software, an integrated Gate Entry Management System, and Bar-Code Technology for smooth and efficient circulation services. A user-friendly Web OPAC facility is also available, allowing faculty and students to search and access the library&apos;s collection and services with ease. Designed with a systematic approach, the library integrates state-of-the-art infrastructure, advanced digital resources, and a rich collection of academic and technical materials to support the teaching, learning, and research needs of the institute. To ensure safety and efficiency, the entire library is monitored by CCTV surveillance and secured with modern fire safety systems. Committed to excellence, the library provides innovative, user-centered services in a comfortable open-stack environment, maintaining its vital role in the academic and research ecosystem of PIET.
                  </p>
                  <p className="text-justify leading-relaxed">
                    The print collection further comprises  42 national and international journals, 24 magazines, and 8 newspapers. For advanced research, the library subscribes to premium e-resources such as IEEE, J-GATE, and DELNET. The library ensures security while offering innovative, user-focused services that foster teaching, learning, and research excellence.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/library.jpeg"
                  alt="PIET Central Library facilities"
                  width={400}
                  height={500}
                  className="transform hover:scale-105 transition-transform duration-300 w-full h-auto max-h-[500px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Visitor Counter */}
        {/* <div className="bg-secondary-100 rounded-xl p-4 sm:p-8 text-center my-8 sm:my-12">
          <div className="text-3xl sm:text-5xl font-bold text-primary-600 mb-2 sm:mb-4 text-text-primary">
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
          <p className="text-lg sm:text-xl font-semibold" style={{ color: '#3a7e44' }}>Visitors</p>
        </div> */}

        {/* <hr className="my-6 sm:my-8 h-px border-0 bg-gray-200" /> */}

        {/* Statistics Section */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-8 sm:my-12"> */}
        {/* {counterData.map((item, index) => (
            <div key={index}
              className="bg-background-primary rounded-xl shadow-md p-4 sm:p-6 text-center transform hover:scale-105 transition-all duration-300">
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
              <p className="mt-2 text-text-secondary font-medium text-sm sm:text-base">{item.subTitle}</p>
            </div>
          ))} */}
        {/* </div> */}

        <Sponsored />
      </main>
    </>
  );
};

export default Home;
