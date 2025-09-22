import Button from "@/components/button";
import ImportantDetails from "@/components/importantDetails";
import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import React from "react";

const Register = () => {
  return (
    <>
      <Head>
        <title>
          Register - ICIDLHV- International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <Schedule />
      <br />

      <main className="bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6 lg:px-8 pt-7">
        {/* Registration Details Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Registration Details
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            For Conference Registration the Author can pay the corresponding fees in the following Bank Account:
          </p>

          {/* Registration Fees Table */}
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full text-xs sm:text-sm lg:text-base">
              <thead className="text-white uppercase bg-[#034EA2]">
                <tr>
                  <th scope="col" className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">Category</th>
                  <th scope="col" className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">On or Before April 30, 2026</th>
                  <th scope="col" className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">After May 05, 2026</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    category: "Faculty Member (International Professional Membership)",
                    early: "INR 11,000",
                    late: "INR 11,500"
                  },
                  {
                    category: "Faculty Member (International Professional Non-Membership)",
                    early: "INR 12,000",
                    late: "INR 12,500"
                  },
                  {
                    category: "Faculty With International Author",
                    early: "INR 11,000",
                    late: "INR 11,500"
                  },
                  {
                    category: "International Author (International Professional Membership)",
                    early: "$180",
                    late: "$190"
                  },
                  {
                    category: "Phd. Scholar (International Professional Membership)",
                    early: "INR 10,000",
                    late: "INR 10,500"
                  },
                  {
                    category: "Phd. Scholar (International Professional Non-Membership)",
                    early: "INR 12,000",
                    late: "INR 12,500"
                  },
                  {
                    category: "Phd. Scholar With International Author",
                    early: "INR 10,000",
                    late: "INR 10,500"
                  },
                  {
                    category: "PG Student (Non Membership)",
                    early: "INR 8,000",
                    late: "INR 8,500"
                  },
                  {
                    category: "PG Student (Membership)",
                    early: "INR 7,000",
                    late: "INR 7,500"
                  },
                  {
                    category: "PG Student With International Author",
                    early: "INR 7,000",
                    late: "INR 7,500"
                  },
                  {
                    category: "UG Student (Non Membership)",
                    early: "INR 7,000",
                    late: "INR 7,500"
                  },
                  {
                    category: "UG Student (Membership)",
                    early: "INR 6,000",
                    late: "INR 6,500"
                  },
                  {
                    category: "UG Student With International Author",
                    early: "INR 6,000",
                    late: "INR 6,500"
                  },
                  {
                    category: "Attendee",
                    early: "INR 1000",
                    late: "INR 2000"
                  }
                ].map((row, index) => (
                  <tr key={index} className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 font-medium text-gray-900">
                      {row.category}
                    </th>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-gray-700">{row.early}</td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-gray-700">{row.late}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <div className="bg-blue-50 rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
            <p className="text-sm sm:text-base lg:text-lg text-gray-800 font-bold">
              NO PAPER TO HAVE MORE THAN SIX AUTHORS AND SIX PAGES.
            </p>
          </div> */}
        </div>

        {/* Account Details Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Account Details</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              { label: "Account Name", value: "POORNIMA INSTITUTE PART TWO" },
              { label: "Account Number", value: "50200067728688" },
              { label: "Bank", value: "HDFC BANK LTD. F-129 RIICO INDUSTRIAL AREA SITAPURA, JAIPUR" },
              { label: "IFSC Code", value: "HDFC0003873" },
              { label: "SWIFT Code", value: "HDFCINBBXXX" }
            ].map((detail, index) => (
              <div key={index} className="flex flex-col space-y-1 p-3 sm:p-4 border-b last:border-b-0">
                <span className="text-xs sm:text-sm lg:text-base font-semibold text-gray-600">{detail.label}</span>
                <span className="text-sm sm:text-base lg:text-lg text-gray-800">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        <Sponsored />
      </main>
    </>
  );
};

export default Register;
