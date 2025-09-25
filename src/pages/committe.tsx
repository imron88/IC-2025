import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Committe() {
  const patron = [
    {
      name: "Dinesh Goyal",
      designation: "Director & Principal, PIET",
    },
  ];

  const pietAdvisoryCommittee = [
    {
      name: "Dr. Anil Kumar",
      designation: "HoD, CSE, PIET",
    },
    {
      name: "Dr. Budesh Kanwar",
      designation: "HoD, AI & DS PIET",
    },
    {
      name: "Dr. Payal Bansal",
      designation: "HoD, IoT, PIET",
    },
    {
      name: "Dr. Mukesh Chandra",
      designation: "Co-ordinators, IQAC PIET",
    },
    {
      name: "Mr. Ashok Choudhary",
      designation: "Proctor, PIET",
    },
    {
      name: "Dr. Amit Shrivastav",
      designation: "CoE, PIET",
    },
    {
      name: "Dr. Rekha Rani Agarwal",
      designation: "Prof., PIET",
    },
  ];

  const conferenceChair = [
    {
      name: "Dr. Balwan",
      designation: "Registrar & Chief Proctor, PIET",
    },
  ];

  const programmeChair = [
    {
      name: "Dr. Sama Jain",
      designation: "HoD, Department of Applied Science, PIET",
    },
    {
      name: "Dr. Bhanu Pratap",
      designation: "Associate Professor, PIET",
    },
    {
      name: "Mr. Nitin Mukesh Mathur",
      designation: "Asstt Professor, PIET",
    },
  ];

  const convener = [
    {
      name: "Dr. Sama Jain",
      designation: "HoD, Department of Applied Science, PIET",
    },
  ];

  const coConvener = [
    {
      name: "Prof. (Dr) Krati Sharma",
      designation: "Professor, PIET",
    },
    {
      name: "Dr. Prince Dawar",
      designation: "Associate Prof., PIET",
    },
  ];

  const organizingCommittee = [
    {
      name: "Ms. Suman Jain",
      designation: "Chief Librarian, PIET",
    },
    {
      name: "Mr. Ashok Sharma",
      designation: "Librarian, PIET",
    },
  ];

  const internationalAdvisoryCommittee = [
    {
      name: "Prof. Bernd Markscheffel",
      designation: "Technische Universität Ilmenau, Germany",
    },
    {
      name: "Prof. Jean-Charles Lamirel",
      designation: "Université de Strasbourg, France",
    },
    {
      name: "Dr. Amir Raza Asnafi",
      designation: "Tehran, Iran",
    },
    {
      name: "Dr. Jay Bhatt",
      designation: "Drexel University, Philadelphia, USA",
    },
    {
      name: "Dr. Deepika Gaur",
      designation: "Assistant Professor, Symbiosis University, Dubai",
    },
    {
      name: "Ms. Labibah Zain",
      designation: "Head LIS Department & University Library Sunan Kalijaga State, Indonesia",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Committees - ICIDLHV- International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <br />

      <main className="bg-gradient-to-b from-background-primary to-white px-4 sm:px-6 lg:px-8 pt-7 rounded-lg">
        {/* Patron Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#3a7e44' }}>Patron</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {patron.map((item, index) => (
              <div
                key={index}
                className="bg-secondary-100 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: '#3a7e44' }}>
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PIET Advisory Committee Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#3a7e44' }}>PIET Advisory Committee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pietAdvisoryCommittee.map((item, index) => (
              <div
                key={index}
                className="bg-secondary-100 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: '#3a7e44' }}>
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Chair Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#3a7e44' }}>Conference Chair</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {conferenceChair.map((item, index) => (
              <div
                key={index}
                className="bg-secondary-100 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: '#3a7e44' }}>
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Programme Chair & Co Chair Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#3a7e44' }}>Programme Chair & Co Chair</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {programmeChair.map((item, index) => (
              <div
                key={index}
                className="bg-secondary-100 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: '#3a7e44' }}>
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Convener Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#3a7e44' }}>Convener</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {convener.map((item, index) => (
              <div
                key={index}
                className="bg-secondary-100 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: '#3a7e44' }}>
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Co Convener Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#3a7e44' }}>Co Convener</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {coConvener.map((item, index) => (
              <div
                key={index}
                className="bg-secondary-100 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: '#3a7e44' }}>
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* International Advisory Committee Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#3a7e44' }}>International Advisory Committee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {internationalAdvisoryCommittee.map((item, index) => (
              <div
                key={index}
                className="bg-secondary-100 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: '#3a7e44' }}>
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Committee Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#3a7e44' }}>Organizing Committee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {organizingCommittee.map((item, index) => (
              <div
                key={index}
                className="bg-secondary-100 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: '#3a7e44' }}>
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Sponsored />
      </main>
    </>
  );
}

export default Committe;