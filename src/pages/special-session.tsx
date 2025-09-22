import Schedule from "@/components/schedule";
import Head from "next/head";
import Image from "next/image";
import React from "react";

function SpecialSession() {
  // const track1 = [
  //   {
  //     name: "Dr. Ashima Rani",
  //     designation: "(Session Chair)",
  //     image: "/gallery/special_sessions_old/track1/i1.png",
  //   },
  //   {
  //     name: "Dr. Yojna Arora",
  //     designation: "(Session Co-Chair)",
  //     image: "/gallery/special_sessions_old/track1/i2.jpg",
  //   },
  // ];
  // const track2 = [
  //   {
  //     name: "Dr. T. Poongodi",
  //     designation: "(Session Chair)",
  //     image: "/gallery/special_sessions_old/track2/i1.jpg",
  //   },
  //   {
  //     name: "Dr. M. Kiruthika",
  //     designation: "(Session Co-Chair)",
  //     image: "/gallery/special_sessions_old/track2/i2.jpg",
  //   },
  // ];
  // const track3 = [
  //   {
  //     name: "Dr. Nisha Charaya",
  //     designation: "(Session Chair)",
  //     image: "/gallery/special_sessions_old/track3/i1.png",
  //   },
  //   {
  //     name: "Dr. Aarti Chugh",
  //     designation: "(Session Co-Chair)",
  //     image: "/gallery/special_sessions_old/track3/i2.png",
  //   },
  //   {
  //     name: "Dr. Charu Jain",
  //     designation: "(Session Co-Chair)",
  //     image: "/gallery/special_sessions_old/track3/i3.png",
  //   },
  // ];
  // const track4 = [
  //   {
  //     name: "Dr. Gajanand Sharma",
  //     designation: "(Session Chair)",
  //     image: "/gallery/special_sessions_old/track4/i1.jpg",
  //   },
  //   {
  //     name: "Ms. Shruti Mathur",
  //     designation: "(Session Co-Chair)",
  //     image: "/gallery/special_sessions_old/track4/i2.jpg",
  //   },
  // ];
  // const track5 = [
  //   {
  //     name: "Prof.(Dr.) Namrata Dhanda",
  //     designation: "(Session Chair)",
  //     image: "/gallery/special_sessions_old/track5/i1.jpg",
  //   },
  //   {
  //     name: "Ms. Garima Srivastava",
  //     designation: "(Session Co-Chair)",
  //     image: "/gallery/special_sessions_old/track5/i2.jpg",
  //   },
  // ];
  // const track6 = [
  //   {
  //     name: "Dr. Khyati Chopra,",
  //     designation: "(Session Chair)",
  //     image: "/gallery/special_sessions_old/Khyati.png",
  //   },
  //   {
  //     name: "Dr. Sherin Zafar",
  //     designation: "(Session Chair)",
  //     image: "/gallery/special_sessions_old/Sherin.png",
  //   },
  // ];
  // const track7 = [
  //   {
  //     name: "Dr. A. Mansurali",
  //     designation: "(Session Chair)",
  //     image: "/gallery/special_sessions_old/Mansurali.jpg",
  //   },
  //   {
  //     name: "Dr. Manikandan Rajagopal",
  //     designation: "(Session Co-Chair)",
  //     image: "/gallery/special_sessions_old/Manikandan.jpg",
  //   },
  // ];
  // const track8 = [
  //   {
  //     name: "Prof. Sarvesh Kumar",
  //     designation: "(Session Chair)",
  //     image: "/gallery/special_sessions_old/track8/i1.png",
  //   },
  //   {
  //     name: "Dr. Ashish Tiwari",
  //     designation: "(Session Co-Chair)",
  //     image: "/gallery/special_sessions_old/track8/i2.jpg",
  //   },
  //   {
  //     name: "Dr. Surendra Kumar",
  //     designation: "(Session Co-Chair)",
  //     image: "/gallery/special_sessions_old/track8/i3.jpg",
  //   },
  //   {
  //     name: "Dr. Neeraj kumar Verma",
  //     designation: "(Session Co-Chair)",
  //     image: "/gallery/special_sessions_old/track8/i4.png",
  //   },
  // ];
  // const track9 = [
  //   {
  //     name: "Dr. Dilip Kumar J Saini",
  //     designation: "(Session Chair)",
  //     image: "/gallery/special_sessions_old/track9/i1.png",
  //   },
  //   {
  //     name: "Dr Sagar Pandey",
  //     designation: "(Session Co-Chair)",
  //     image: "/gallery/special_sessions_old/track9/i2.jpg",
  //   },
  // ];
  return (
    <div className="mx-4">
      <Head>
        <title>
          Special Sessions - ICIDLHV - International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <Schedule />
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
      <h1 className="text-center text-sm font-semibold lg:text-2xl">
        To be Updated Soon.
      </h1>
      {/* <div className="my-12">
        <h1 className={"heading my-2 mb-12 text-sm font-bold lg:text-2xl"}>
          Track 1: Practical Appplication of Data Science and IT Systems in
          Society
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {track1.map((item, index) => {
            return (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div
                  key={index}
                  className={
                    "col-span-1 grid grid-cols-3 gap-3 rounded-lg bg-gray-100 shadow-md"
                  }
                >
                  <div className={"col-span-1 h-44 w-full"}>
                    <img
                      src={item.image}
                      className={"h-full w-full rounded-lg object-cover "}
                      alt={item.name}
                    />
                  </div>
                  <div className={"col-span-2 my-2 flex flex-col gap-1"}>
                    <span className={"text-lg font-semibold"}>{item.name}</span>
                    <span className={"pr-2 text-xs font-light"}>
                      {item.designation}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-12">
        <h1 className={"heading my-2 mb-12 text-sm font-bold lg:text-2xl"}>
          Track 2: Cryptographic Techniques and Security Challenges in Artifical
          Intelligence of Things
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {track2.map((item, index) => {
            return (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div
                  key={index}
                  className={
                    "col-span-1 grid grid-cols-3 gap-3 rounded-lg bg-gray-100 shadow-md"
                  }
                >
                  <div className={"col-span-1 h-44 w-full"}>
                    <img
                      src={item.image}
                      className={"h-full w-full rounded-lg object-cover "}
                      alt={item.name}
                    />
                  </div>
                  <div className={"col-span-2 my-2 flex flex-col gap-1"}>
                    <span className={"text-lg font-semibold"}>{item.name}</span>
                    <span className={"pr-2 text-xs font-light"}>
                      {item.designation}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-12">
        <h1 className={"heading my-2 mb-12 text-sm font-bold lg:text-2xl"}>
          Track 3: Intelligent Computing in Multidisciplinary Engineering
          Aplications
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {track3.map((item, index) => {
            return (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div
                  key={index}
                  className={
                    "col-span-1 grid grid-cols-3 gap-3 rounded-lg bg-gray-100 shadow-md"
                  }
                >
                  <div className={"col-span-1 h-44 w-full"}>
                    <img
                      src={item.image}
                      className={"h-full w-full rounded-lg object-cover "}
                      alt={item.name}
                    />
                  </div>
                  <div className={"col-span-2 my-2 flex flex-col gap-1"}>
                    <span className={"text-lg font-semibold"}>{item.name}</span>
                    <span className={"pr-2 text-xs font-light"}>
                      {item.designation}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-12">
        <h1 className={"heading my-2 mb-12 text-sm font-bold lg:text-2xl"}>
          Track 4: Next-Gen Tech Synergy: MEtaverse, IoT, Blockchain, Deep
          Learning, and Intelligent Systems
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {track4.map((item, index) => {
            return (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div
                  key={index}
                  className={
                    "col-span-1 grid grid-cols-3 gap-3 rounded-lg bg-gray-100 shadow-md"
                  }
                >
                  <div className={"col-span-1 h-44 w-full"}>
                    <img
                      src={item.image}
                      className={"h-full w-full rounded-lg object-cover "}
                      alt={item.name}
                    />
                  </div>
                  <div className={"col-span-2 my-2 flex flex-col gap-1"}>
                    <span className={"text-lg font-semibold"}>{item.name}</span>
                    <span className={"pr-2 text-xs font-light"}>
                      {item.designation}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-12">
        <h1 className={"heading my-2 mb-12 text-sm font-bold lg:text-2xl"}>
          Track 5: Innovative Approaches to Big Data Analytics and Machine
          Learning Integration for Enhanced System Performance and Scoietal
          Impact
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {track5.map((item, index) => {
            return (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div
                  key={index}
                  className={
                    "col-span-1 grid grid-cols-3 gap-3 rounded-lg bg-gray-100 shadow-md"
                  }
                >
                  <div className={"col-span-1 h-44 w-full"}>
                    <img
                      src={item.image}
                      className={"h-full w-full rounded-lg object-cover "}
                      alt={item.name}
                    />
                  </div>
                  <div className={"col-span-2 my-2 flex flex-col gap-1"}>
                    <span className={"text-lg font-semibold"}>{item.name}</span>
                    <span className={"pr-2 text-xs font-light"}>
                      {item.designation}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-12">
        <h1 className={"heading my-2 mb-12 text-sm font-bold lg:text-2xl"}>
          Track 6: Artifical Intelligence-Based Internet of Things for Industry
          5.0
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {track6.map((item, index) => {
            return (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div
                  key={index}
                  className={
                    "col-span-1 grid grid-cols-3 gap-3 rounded-lg bg-gray-100 shadow-md"
                  }
                >
                  <div className={"col-span-1 h-44 w-full"}>
                    <img
                      src={item.image}
                      className={"h-full w-full rounded-lg object-cover "}
                      alt={item.name}
                    />
                  </div>
                  <div className={"col-span-2 my-2 flex flex-col gap-1"}>
                    <span className={"text-lg font-semibold"}>{item.name}</span>
                    <span className={"pr-2 text-xs font-light"}>
                      {item.designation}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-12">
        <h1 className={"heading my-2 mb-12 text-sm font-bold lg:text-2xl"}>
          Track 7: Machine Learning Applications in Buisness Decision Making
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {track7.map((item, index) => {
            return (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div
                  key={index}
                  className={
                    "col-span-1 grid grid-cols-3 gap-3 rounded-lg bg-gray-100 shadow-md"
                  }
                >
                  <div className={"col-span-1 h-44 w-full"}>
                    <img
                      src={item.image}
                      className={"h-full w-full rounded-lg object-cover "}
                      alt={item.name}
                    />
                  </div>
                  <div className={"col-span-2 my-2 flex flex-col gap-1"}>
                    <span className={"text-lg font-semibold"}>{item.name}</span>
                    <span className={"pr-2 text-xs font-light"}>
                      {item.designation}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-12">
        <h1 className={"heading my-2 mb-12 text-sm font-bold lg:text-2xl"}>
          Track 8: Cloud-Based AI for Autonomous Systems: Challenges and
          Opportunities
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {track8.map((item, index) => {
            return (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div
                  key={index}
                  className={
                    "col-span-1 grid grid-cols-3 gap-3 rounded-lg bg-gray-100 shadow-md"
                  }
                >
                  <div className={"col-span-1 h-44 w-full"}>
                    <img
                      src={item.image}
                      className={"h-full w-full rounded-lg object-cover "}
                      alt={item.name}
                    />
                  </div>
                  <div className={"col-span-2 my-2 flex flex-col gap-1"}>
                    <span className={"text-lg font-semibold"}>{item.name}</span>
                    <span className={"pr-2 text-xs font-light"}>
                      {item.designation}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-12">
        <h1 className={"heading my-2 mb-12 text-sm font-bold lg:text-2xl"}>
          Track 9: Emerging Trends in ML and IoT for Smart Agriculture,
          Healthcare and Automation
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {track9.map((item, index) => {
            return (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div
                  key={index}
                  className={
                    "col-span-1 grid grid-cols-3 gap-3 rounded-lg bg-gray-100 shadow-md"
                  }
                >
                  <div className={"col-span-1 h-44 w-full"}>
                    <img
                      src={item.image}
                      className={"h-full w-full rounded-lg object-cover "}
                      alt={item.name}
                    />
                  </div>
                  <div className={"col-span-2 my-2 flex flex-col gap-1"}>
                    <span className={"text-lg font-semibold"}>{item.name}</span>
                    <span className={"pr-2 text-xs font-light"}>
                      {item.designation}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
}

export default SpecialSession;
