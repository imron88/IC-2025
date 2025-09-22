import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Committe() {
  const honaryPateron = [
    {
      name: "Mr. Hari Singh Shekhawat",
      designation: "Director (Infrastructure), Poornima Group, Jaipur India",
    },
    {
      name: "Mr. MKM Shah",
      designation: "Director (Admin & Finance), Poornima Group, Jaipur",
    },
  ];
  const honarayChair = [
    {
      name: "Prof. (Dr.) Dinesh Goyal",
      designation:
        "Principal & Director. PIET, Jaipur, India",
    },
    // {
    //   name: "Prof. Marcin Paprzycki",
    //   designation:
    //     "System Research Institute Polish Academy of Sciences and IBS PAN, Warsaw, Poland",
    // },
    // {
    //   name: "Prof. B.B. Gupta",
    //   designation:
    //     "Director, Center for AI & Cyber Security, Asia University, Taichung 413, Taiwan",
    // },
    // {
    //   name: "Dr. Sugandha Singh",
    //   designation:
    //     "Dean-Faculty of Engineering and Technology and Prof - CSE(SGTU) Gurugra",
    // },
  ];
  const GeneralChair = [
    {
      name: "Prof Dharam Singh",
      designation: "Namibia University of Science & Tech., Namibia",
      profile: "https://fci.nust.na/prof-dharm-singh-jat",
    },
  ];
  const conferenceChair = [
    {
      name: "Dr. Dinesh Goyal",
      designation: "Professor & Director, PIET, Jaipur",
      profile: "/conference_chair",
    },
  ];
  const SteeringCommittee = [
    {
      name: "Dr. Pooja Jain",
      designation: "Professor, IIIT, Nagpur",
    },
    {
      name: "Dr. JC Bansal",
      designation: "Professor, South Asian University",
    },
    {
      name: "Dr. Carlos M. Travieso-Gonzalez",
      designation:
        "Professor Signals and Communication Department. University of Las Palmas de Gran Canaria, Spain",
    },
    {
      name: "Dr. Saurabh Sinha",
      designation: "Professor University Of Canterbury",
    },
    {
      name: "Dr. Nischal Verma",
      designation: "Professor ,IIT Kanpur",
    },
  ];
  const conferenceCoChair = [
    {
      name: "Dr. Anil Kumar",
      designation: "Professor & HoD CSE, PIET, Jaipur",
    },
    {
      name: "Prof. (Dr.) Budesh Kanwar",
      designation: "Professor & HoD AI & DS, PIET, Jaipur",
    },
    {
      name: "Dr. Payal Bansal",
      designation: "Professor, IOT, PIET Jaipur",
    },
  ];
  const organizingChair = [
    {
      name: "Prof. (Dr.) Sama Jain",
      designation: "Department of Applied Sciences, PIET, Jaipur, India",
    },
    // {
    //   name: "Dr. Uday Pratap Singh",
    //   designation: "Associate Prof. & Dy HoD, AI & DS, PIET, Jaipur",
    // },
    // {
    //   name: "Dr. Shalini Choudhary",
    //   designation: "Associate Prof., CS, PIET, Jaipur",
    // },
  ];
  // const organizingCoChair = [
  //   {
  //     name: "Mr. Udit Mamodiya",
  //     designation: "Assistant Professor, PIET, Jaipur",
  //   },
  //   {
  //     name: "Dr. Bhanu Pratap Singh",
  //     designation: "Associate Professor, PIET, Jaipur",
  //   },
  // ];
  const technicalProgramChair = [
    {
      name: "Dr. Atul Gonsai",
      designation: "Professor, Saurasthra University, Rajkot",
    },
    {
      name: "Dr. Manoj Kumar",
      designation: "Professor, Delhi Technical University, Delhi",
    },
    {
      name: "Dr. Harish Sharma",
      designation: "Associate Professor, RTU",
    },
    {
      name: "Dr. OP Verma",
      designation: "Professor, DTU",
    },
    {
      name: "Dr. Akash Saxena",
      designation: "Professor,University Of Haryana",
    },
    {
      name: "Dr. Shruti Thapar",
      designation: "Associate Professor, PIET, Jaipur",
    },
    {
      name: "Dr. Jasdeep Kaur Dhanoa",
      designation: "Professor, IGDTUW",
    },
    {
      name: "Mr. Vivek Saxena",
      designation: "Assistant Professor, PIET, Jaipur",
    },
    {
      name: "Dr. Monika Agrawal",
      designation: "Associate Professor, IIT, Delhi",
    },
    {
      name: "Prof. (Dr.) Rambilas",
      designation: "Professor ,IIT Indore",
    },
    {
      name: "Dr. Sandeep Gupta",
      designation: "Associate Professor, AI & DS, PIET, Jaipur",
    },
    {
      name: "Dr. Dilip Singh Sisodia",
      designation:
        "Associate Professor, Computer Science & Engineering National Institute of Technology, Raipur, India",
    },
  ];
  const editorial = [
    {
      name: "Dr. Dinesh Goyal",
      designation: "Professor & Director, PIET, Jaipur",
    },
    {
      name: "Dr. Anil Kumar",
      designation: "Professor & HOD, CSE, PIET, Jaipur",
    },
    {
      name: "Dr. Uday Pratap Singh",
      designation: "Associate Prof. & Dy HoD, AI & DS, PIET, Jaipur",
    },
    {
      name: "Prof. Dharm Singh",
      designation: "Namibia University of Science & Tech., Namibia",
    },
    {
      name: "Prof. Marcin Paprzycki",
      designation:
        "System Research Institute Polish Academy of Sciences and IBS PAN, Warsaw, Poland",
    },
  ];
  const keynoteSpeakers = [
    {
      name: "Dr. Manjusri Misra",
      designation:
        "Professor & Tier 1 Canada Research Chair (CRC) in Sustainable Biocomposites, Fellow RSC(UK), Fellow AIChE, Fellow SPE University of Guelph, Canada",
    },
    {
      name: "Prof. Dr. Patrick Cato",
      designation:
        "Professor, Big Data-Technologies, Technische Hochschule Ingolstadt",
    },
    {
      name: "Dr. Avadhesh Yadav",
      designation:
        "Deputy Director General, National Institute of Solar Energy, Gurugram",
    },
    {
      name: "Dr. Laura Sanita",
      designation:
        " Associate Professor in the Department of Computing Sciences of Bocconi",
    },
  //   {
  //     name: "Prof Dharm Singh",
  //     designation:
  //       "Professor & UNESCO Chair Holder Secure on High-performance Computing for Higher Education and Research, Namibia University of Science and Technology",
  //   },
  //   {
  //     name: "Dr. J. C. Bansal",
  //     designation: "Associate Professor, South Asian University, New Delhi",
  //   },
  //   {
  //     name: "Dr.Ashish Khanna",
  //     designation:
  //       "Associate professor CSE DEPT MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY ",
  //   },
  //   {
  //     name: "Dr. Saurabh Sinha",
  //     designation: "University Of Canterbury",
  //   },
  //   {
  //     name: "Dr. Maria Ganzha",
  //     designation:
  //       "Associate Professor, Warsaw University of Technology (Warsaw, Poland)",
  //   },
  //   {
  //     name: "Dr. Pooja Jain",
  //     designation: "Professor, IIIT, Nagpur",
  //   },
  //   {
  //     name: "Dr. Enrico Cambiaso",
  //     designation:
  //       "Consiglio Nazionale delle Ricerche (CNR) A Via De Marini, 16 - 16149 Genoa (Italy)",
  //   },
  //   {
  //     name: "Dr. Anshuman Kalla",
  //     designation:
  //       "Centre for Wireless Communications (CWC) University of Oulu, Finland.",
  //   },
  //   {
  //     name: "Dr. Majusri Misra",
  //     designation:
  //       "Professor & Tier 1 Canada Research Chair (CRC) in Sustainable Biocomposites, Fellow RSC(UK), Fellow AIChE, Fellow SPE University of Guelph, Canada",
  //   },
  ];
  const financeCommittee = [
    {
      name: "Dr. Ajay Maurya",
      designation: "Professor, PIET, Jaipur",
    },
  ];
  const publicityChair = [
    {
      name: "Dr. Basant Agarwal",
      designation: "Associate Professor, Central University Rajasthan",
    },
    {
      name: "Dr. Priya Mathur",
      designation: "PIET, Jaipur",
    },
    {
      name: "Dr. Shruti Jain",
      designation:
        "Professor at Jaypee University of Information Technology, Waknaghat",
    },
  ];
  const internationalAdvisoryCommittee = [
    // {
    //   name : "Prof Dharm Singh",
    //   designation: "Professor & UNESCO Chair Holder Secure on High-performance Computing for Higher Education and Research, Namibia University of Science and Technology",
    // },
    {
      name : "Dr. Anshuman Kalla",
      designation: "Centre for Wireless Communications (CWC) University of Oulu, Finland",
    },
    {
      name : "Dr. Maria Ganzha",
      designation: "Associate Professor, Warsaw University of Technology (Warsaw, Poland)",
    },
    {
      name : "Dr. Saurabh Sinha",
      designation: "University Of Canterbury",
    },
    {
      name : "Dr. Enrico Cambiaso",
      designation: "Consiglio Nazionale delle Ricerche (CNR) A Via De Marini, 16 - 16149 Genoa (Italy)",
    },
    {
      name : "Dr. Majusri Misra",
      designation: "Professor & Tier 1 Canada Research Chair (CRC) in Sustainable Biocomposites, Fellow RSC(UK), Fellow AIChE, Fellow SPE University of Guelph, Canada",
    },
    {
      name : "Dr. Ramkumar Yadav",
      designation: "Department of Biomedical, Surgical, and Dental Sciences, University of Milan,Italy",
    },
    {
      name : "Dr. Habtamu Mohammed",
      designation: "Deputy Scientific Director, Wollo University, Ethiopia",
    },
    // {
    //   name: "Aleksandra Mileva",
    //   designation: "Goce Delcev University STIP, Macedonia",
    // },
    // {
    //   name: "Carlos M. Travieso",
    //   designation: "University of Las Palmas de Gran Canaria, Spain",
    // },
    // {
    //   name: "Armin Aberle",
    //   designation: "SERIS National University of Singapore, Singapore",
    // },
    // {
    //   name: "Sedat Akleylek",
    //   designation: "Ondokuz Mayis University Samsun, Turkey",
    // },
    // {
    //   name: "Sureswaran Ramadass",
    //   designation: "USM University Penang, Malaysia",
    // },
    // {
    //   name: "Youcef Soufi",
    //   designation: "University of Tabessa, Algeria",
    // },
    // {
    //   name: "Lalit Kumar Goel",
    //   designation: "NTU Nanyang, Singapore",
    // },
    // {
    //   name: "Pinnamaneni Bhanu",
    //   designation: "Kelenn Technology Antony, France",
    // },
    // {
    //   name: "Daniele Riboni",
    //   designation: "University of Cagliari, Italy",
    // },
    // {
    //   name: "Wan Young Chung",
    //   designation: "Pukyong National University Busan, South Korea",
    // },
    // {
    //   name: "Dr. Sheng-Lung Peng",
    //   designation: "Prof., National Dong Hua University, Taiwan",
    // },
    // {
    //   name: "Dr. Ahmed Elngar",
    //   designation: "Assistant Professor, Egypt",
    // },
  ];
  const nationalAdvisoryCommittee = [
    {
      name : "Dr. Karan Nathwani",
      designation: "Asst. Professor, IIT Jammu, India",
    },
    {
      name : "Dr. Felix Orlando",
      designation: "Assoc. Professor, IIT Rorkee, India",
    },
    {
      name : "Dr. Yamuna Prasad",
      designation: "Asst. Professor, IIT Jammu, India",
    },
    {
      name : "Dr. Sudeshna Chakraborty",
      designation: "Professor, Galgotias University, Greater Noida, India",
    },
    {
      name : "Dr. Vinod Singh Yadav",
      designation: "Asst. Professor, NIT Uttarakhand, India",
    },
    {
      name: " Dr. Gaurav Kumar Bharti",
      designation: "Assistant Professor, Electronics and Communication Engineering, IIIT Bhopal",
    },
    // {
    //   name: "Dr. Rajat Rastogi",
    //   designation: "Professor, IIT Roorkee",
    // },
    // {
    //   name: "Dr. C. Periswamy",
    //   designation: "MNIT, Jaipur",
    // },
    // {
    //   name: "Dr. Paresh Vallabhbhai Virparia",
    //   designation: "Professor, SPU",
    // },
    // {
    //   name: "Dr. Rajesh Kumar",
    //   designation: "MNIT, Jaipur",
    // },
    // {
    //   name: "Dr. Arun Kumar Verma",
    //   designation: "MNIT, Jaipur",
    // },
    // {
    //   name: "Dr. Rajendra K Asthana",
    //   designation: "Ex - Director, SDS Softpro (P) Ltd, NOIDA",
    // },
    // {
    //   name: "Dr. Amit Srivastava",
    //   designation: "Jaypee University, Greater Noida",
    // },
    // {
    //   name: "Prof. Anu Gupta",
    //   designation: "BITS, Pilani",
    // },
    // {
    //   name: "Dr. Vinod Kumar Chaubey",
    //   designation: "BITS, Pilani",
    // },
    // {
    //   name: "Dr. Ravinder Agarwal",
    //   designation: "Thapar University, Patiala",
    // },
    // {
    //   name: "Dr. Namita Mittal",
    //   designation: "MNIT, Jaipur",
    // },
    // {
    //   name: "Dr. Trilok Mathur",
    //   designation: "BITS, Pilani",
    // },
    // {
    //   name: "Dr. A.K. Dwivedi",
    //   designation: "RTU, Kota",
    // },
    // {
    //   name: "Dr. Anil K Mathur",
    //   designation: "RTU, Kota",
    // },
    // {
    //   name: "Dr. C.P. Gupta",
    //   designation: "RTU, Kota",
    // },
    // {
    //   name: "Dr. Balamurugan Shanmugam",
    //   designation: "Director R & D, QUANTS IS & CS, Tamil Nadu",
    // },
  ];
  const organizingSecretary = [
    {
      name : "Dr. Rekha Rani Agrawal",
      designation: "Department of Applied Sciences, PIET, Jaipur, India",
    },
  ];
  const convenor = [
    {
      name : "Dr. Bhanu Pratap",
      designation: "Department of Applied Sciences, PIET, Jaipur, India",
    },
  ];


  const organizingCommittee = [
    {
      name: "Dr. Amit Shrivastava",
      designation: "Professor, Electrical Engineering",
    },
    {
      name: "Dr. Mukesh Chandra",
      designation: "Professor, Engineering Physics",
    },
    {
      name: "Dr. Nitin Mukesh Mathur",
      designation: "Assoc. Professor, Machenical Engineering",
    },
    {
      name: "Dr. Rajender Singh",
      designation: "Assoc. Professor, Electrical Engineering",
    },
    {
      name: "Dr. Aisha Rafi",
      designation: "Assoc. Professor, Engineering Mathematics",
    },
    {
      name: "Dr. Nupur Jain",
      designation: "Assoc. Professor, Engineering Chemistry",
    },
    {
      name: "Dr. Ashish Laddha",
      designation: "Assoc. Professor, Electrical Engineering",
    },
    {
      name: "Dr. Krati Sharma",
      designation: "Professor, Humanities",
    },
    {
      name: "Dr. Sonia Kaur Bansal",
      designation: "Professor, Humanities",
    },
    {
      name: "Dr. Prince Dawar",
      designation: "Assoc. Professor, Humanities",
    },
  ];

  const localAdvisoryCommite = [
    // {
    //   name : "Dr. Gautam Singh",
    //   designation : "Registrar, PIET, Jaipur, India",
    // },
    {
      name : "Dr. Balwan",
      designation : "Registrar, PIET, Jaipur, India",
    },
    {
      name : "Dr. Anil Kumar",
      designation : "HOD, CSE, PIET, Jaipur, India",
    },
    {
      name : "Dr. Budesh Kunwar",
      designation : "HOD, AI&DS, PIET, Jaipur, India",
    },
    {
      name : "Dr. Payal Bansal",
      designation : "HOD, IOT, PIET Jaipur, India",
    },
  ]

  return (
    <>
      <Head>
        <title>
          Committees - ICIDLHV- International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <Schedule />
      <br />

      <main className="bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6 lg:px-8 pt-7">
        {/* Honorary Patron Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Honorary Patron</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {honaryPateron.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Chair Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Conference Chair</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {honarayChair.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Chair Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Organizing Chair</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {organizingChair.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Convenor Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Convenor</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {convenor.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Secretary Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Organizing Secretary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {organizingSecretary.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Commitee */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Organizing Commitee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {organizingCommittee.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* International Steering Committee Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">International Steering Committee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {internationalAdvisoryCommittee.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* National Steering Committee Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">National Steering Committee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {nationalAdvisoryCommittee.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Local Advisory Committee Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Local Advisory Committee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {localAdvisoryCommite.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
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
