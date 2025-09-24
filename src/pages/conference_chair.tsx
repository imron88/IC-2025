import Image from "next/image";
import Link from "next/link";
import React from "react";

function Profile() {
  return (
    <div className="w-fuull mx-4">
      <div className="mt-10 w-full rounded-lg bg-white p-5 shadow-lg">
        {/* Profile Image */}
        <div className="flex items-center space-x-4">
          <Image
            className="h-24 w-24 rounded-full"
            src="/profile.png"
            alt="Profile Image"
            width={192}
            height={192}
          />
          <div>
            <h1 className="text-2xl font-semibold">Dr. Dinesh Goyal</h1>
            <p className="text-gray-600">
              Professor, Computer Science & Engineering
            </p>
          </div>
        </div>
        {/* Profile Description */}
        <div className="mt-4">
          <p className="text-gray-700">
            Dr. Dinesh Goyal is Professor of Computer Science & Engineering with
            B.E, M.Tech and Ph.D. from reputed institutes across India, have
            acquired experience of more than 24 years in Teaching, Research and
            Administration, currently working as Principal & Director, Poornima
            Institute of Engineering & Technology and Provost (I/C) Poornima
            University, is having keen interest in research area relating
            Information & Network Security, Image Processing, Data Analytics and
            Cloud Computing.
          </p>
        </div>
        {/* Achievements */}
        <p className="my-4 px-4 font-bold md:px-0">
          Major Achievements of my career are:
        </p>
        <ul className="mx-4 my-4 list-disc">
          <li className="my-2">
            Empanel NAAC Assessor Since 2021 by NAAC, UGC
          </li>
          <li className="my-2">Steer NAAC Peer Team as Chairman</li>
          <li className="my-2">
            Member Board of Studies, Rajasthan Technical University, Kota
          </li>
          <li className="my-2">
            Recognized as Mentor by NITTT-All India Council of Technical
            Education (AICTE) for Faculty Quality Training
          </li>
          <li className="my-2">
            Handling Project of INR 1.26 Crore for establishing IDEA Lab, Only
            Institution in Rajasthan, with Grant in Aid of INR 50.39 Lakh from
            All India Council of Technical Education (AICTE), Ministry of
            Education, Government of India
          </li>
          <li className="my-2">
            Established Deep Learning & Neural Network Lab, under AICTE MODROBS
            with INR 12.84 Lac as Grant in Aid from All India Council of
            Technical Education (AICTE), Ministry of Education, Government of
            India
          </li>
          <li className="my-2">
            Hosted Smart India Hackathon 2023, under Ministry of Education,
            Government of India with grant in aid of INR 11.50 lac
          </li>
          <li className="my-2">
            Hosted IDE Bootcamp for school Students and teachers, 2024 under
            Ministry of Education, Government of India with grant in aid of INR
            12.69 lac
          </li>
          <li className="my-2">
            Data Analytics expert with certification on Power-BI & Advanced
            Excel
          </li>
          <li className="my-2">
            Certified in Machine Learning from IIT Kanpur
          </li>
          <li className="my-2">
            Achieved, CMI Level 5 Award in “Management and Leadership”, under
            AICTE-UKIERI Technical Leadership Development Program (Cohort 6) in
            association with Dudley College of Technology, United Kingdom
          </li>
          <li className="my-2">
            Coordinator NAAC Steering Committee (Obtained NAAC ‘A’ for SGVU)
          </li>
          <li className="my-2">
            Achieved NAAC Accreditation for Poornima Institute of Engineering &
            Technology
          </li>
          <li className="my-2">
            Achieved NBA Accreditation of B.Tech CSE & B.Tech Civil Engineering
            at Poornima Institute of Engineering & Technology
          </li>
          <li className="my-2">
            Advisor for NAAC Accreditation for 3 Universities and 2 Institutes
          </li>
          <li className="my-2">
            Received Research & grant from various Agencies like AICTE, ISTE,
            TEQIP etc, worth more than INR 81 Lakh
          </li>
          <li className="my-2">
            Awarded “Elets Excellence Award 2017” at Higher Education & Human
            Resource Conclave organized by Higher Education Department of
            Government of Rajasthan on 21 & 22 Dec, 2017
          </li>
          <li className="my-2">
            Under Industry Academia Interface, entrusted Center of Excellence
            with Microsoft, Google & Amazon
          </li>
          <li className="my-2">
            Ninety Eight (98) SCI/Scopus/Web of Science Indexed Publications in
            Journals & Conferences
          </li>
          <li className="my-2">
            Published 9 Books as Editor, 5 Published Conference Proceedings,
            also published 5 book chapters in edited book
          </li>
          <li className="my-2">
            Edited and published 13 Special Issues for SCI/Scopus Indexed
            Journals
          </li>
          <li className="my-2">
            More than 150 Publications, 36 of them in UGC Care List (Citation
            888, h-index 16, i10- index- 25)
          </li>
          <li className="my-2">
            Granted 01 Patent and Published 30 Full Patent and One Copyright
          </li>
          <li className="my-2">
            Organised more than 15 Conferences In association with Springer,
            ACM, IoP, Taru Publications etc. as Publication partners
          </li>
          <li className="my-2">
            Attended and presented papers in 25 International/ National
            Conferences
          </li>
          <li className="my-2">
            Evaluated 10 Thesis from various Government Universities and Reputed
            Private Universities
          </li>
          <li className="my-2">
            Guided & Awarded 9 PhD as Supervisor and 11 as Co-Supervisor, also
            guided 30+ PG scholars
          </li>
          <li className="my-2">
            Invited Speakers of more than 30 Institutions and Academic Bodies
          </li>
          <li className="my-2">
            Member TPC, Reviewer, Editor of more than 25 International
            Conferences/ Journals
          </li>
          <li className="my-2">
            Member of Premier Bodies like ISTE (Life Member), CSI (Life Member),
            IEEE, ISC, ACM
          </li>
        </ul>
        {/* Links to Profiles */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Find me on</h2>
          <div className="mt-2 flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/dr-dinesh-goyal-bab9048/"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.scopus.com/authid/detail.uri?authorId=57211719867"
              className="text-blue-500 hover:underline"
            >
              Scopus ID
            </Link>
            <Link
              href=" https://orcid.org/0000-0001-5442-5870"
              className="text-blue-500 hover:underline"
            >
              ORC ID
            </Link>
            <Link
              href="https://www.webofscience.com/wos/author/record/AAJ-2237-2020"
              className="text-blue-500 hover:underline"
            >
              Researcher ID
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
