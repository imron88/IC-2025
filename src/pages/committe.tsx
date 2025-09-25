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
      name: "Dr. Balwan",
      designation: "Registrar & Chief Proctor, PIET",
    },
    {
      name: "Dr. Amit Shrivastav",
      designation: "CoE, PIET",
    },
    {
      name: "Dr. Mukesh Chandra",
      designation: "Co-ordinators, IQAC PIET",
    },
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
  ];

  const conferenceChair = [
    {
      name: "Dr. Sama Jain",
      designation: "HoD, Department of Applied Science, PIET",
    },
  ];

  const conferenceCoChair = [
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
      name: "Prof. (Dr) Krati Sharma",
      designation: "Professor, PIET",
    },
  ];

  const coConvener = [
    {
      name: "Ms. Suman Jain",
      designation: "Chief Librarian, PIET",
    },
  ];

  const organizingCommittee = [
    {
      name: "Dr. Prince Dawar",
      designation: "Assoc. Professor, Humanities",
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

  const nationalAdvisoryCommittee = [
    {
      name: "Dr. Rajesh Singh",
      designation: "University Librarian, University of Delhi, Delhi",
    },
    {
      name: "Dr. P. K. Jain",
      designation: "Librarian, Institute of Economic Growth, University of Delhi, Delhi",
    },
    {
      name: "Prof. R. C. Gaur",
      designation: "Dean and Director, IGNCA, New Delhi",
    },
    {
      name: "Prof. M. P. Singh",
      designation: "Dean and Professor, Department of Library and Information Science, Babasaheb Bhimrao Ambedkar University, Lucknow, U.P.",
    },
    {
      name: "Dr. P. R. Goswami",
      designation: "Former Director (Library), Ministry of Culture, New Delhi",
    },
    {
      name: "Dr. Debal C. Kar",
      designation: "Dean and University Librarian, Galgotias University, Greater Noida, U.P.",
    },
    {
      name: "Dr. Nabi Hasan",
      designation: "Librarian, IIT Delhi",
    },
    {
      name: "Dr. Priya Rai",
      designation: "Librarian, National Law University, Delhi",
    },
    {
      name: "Dr. R. K. Sharma",
      designation: "Former Director General, Delhi Public Library, Delhi",
    },
    {
      name: "Prof. Hemant Sharma",
      designation: "Department of Library and Information Science, Jiwaji University, Gwalior, M.P.",
    },
    {
      name: "Dr. Parveen Babbar",
      designation: "Deputy Librarian, JNU, Delhi",
    },
    {
      name: "Mr. N. K. Wadhwa",
      designation: "Former Chief Scientist, CSIR-National Physical Laboratory, New Delhi",
    },
    {
      name: "Dr. Shiva Kanojia Shukla",
      designation: "Deputy Librarian, JNU, Delhi",
    },
    {
      name: "Dr. Dinesh Kumar",
      designation: "Deputy Librarian, AUD, Delhi",
    },
    {
      name: "Dr. Santosh Gupta",
      designation: "Assistant Professor, University of Rajasthan, Jaipur",
    },
    {
      name: "Dr. Akash Singh",
      designation: "Assistant Librarian, National Law University, Delhi",
    },
    {
      name: "Dr. Neelu Jain",
      designation: "Assistant Professor, Manipal University, Jaipur",
    },
    {
      name: "Dr. Pooja Joshi",
      designation: "Assistant Professor, University of Rajasthan, Jaipur",
    },
    {
      name: "Dr. Tanjeen Ara Khan",
      designation: "Principal In-Charge, Bastar, Chhattisgarh",
    },
    {
      name: "Dr. Anupam Chauhan",
      designation: "Assistant Professor, Central University, Bilaspur",
    },
    {
      name: "Dr. Anita Sharma",
      designation: "Professor, Banaras Hindu University, U.P.",
    },
    {
      name: "Dr. Shalini Yadav",
      designation: "Assistant Professor, Maharani's College, University of Rajasthan, Jaipur",
    },
    {
      name: "Dr. Deepa Mathur",
      designation: "Head of Department, Department of English, University of Rajasthan, Jaipur",
    },
    {
      name: "Dr. Mohit Jangir",
      designation: "Assistant Professor, Department of English, University of Rajasthan, Jaipur",
    },
    {
      name: "Dr. Rashmi Jain",
      designation: "Director, MMTTP, University of Rajasthan, Jaipur",
    },
    {
      name: "Dr. Anil Aaniket",
      designation: "Director, SSRC, University of Rajasthan, Jaipur",
    },
    {
      name: "Dr. Jai Singh",
      designation: "Director, Department of Lifelong Learning, University of Rajasthan, Jaipur",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Committees - ICIDLHV - International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#3a7e44' }}>Conference Co Chair</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {conferenceCoChair.map((item, index) => (
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

        {/* National Advisory Committee Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#3a7e44' }}>National Advisory Committee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {nationalAdvisoryCommittee.map((item, index) => (
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