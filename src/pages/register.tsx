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
      {/* <Schedule /> */}
      <br />

      <main className="bg-gradient-to-b from-background-primary to-white px-4 sm:px-6 lg:px-8 pt-7">
        {/* Registration Details Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-text-primary">
            Registration Details
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary mb-6 sm:mb-8">
            For Conference Registration the Author can pay the corresponding fees in the following Bank Account:
          </p>

          {/* Registration Fees Table */}
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full text-xs sm:text-sm lg:text-base">
              <thead className="text-white uppercase bg-primary-600">
                <tr>
                  <th scope="col" className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">Delegate REGISTRATION FEE</th>
                  <th scope="col" className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4">Regular Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    category: "Expert from Industry/PHD Scholar",
                    fee: "4000"
                  },
                  {
                    category: "Authors from Academic Institutions/PG student",
                    fee: "3000"
                  },
                  {
                    category: "UG Student Author",
                    fee: "1000"
                  },
                  {
                    category: "Attendee",
                    fee: "500"
                  },
                  {
                    category: "Foreign Participants",
                    fee: "500"
                  }
                ].map((row, index) => (
                  <tr key={index} className="bg-white border-b hover:bg-secondary-50">
                    <th scope="row" className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 font-medium text-text-primary">
                      {row.category}
                    </th>
                    {row.category == "Foreign Participants" ? <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-text-secondary">USD {row.fee}</td> : <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-text-secondary">INR {row.fee}</td>}
                    
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
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-text-primary">Account Details</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              { label: "Account Name", value: "POORNIMA INSTITUTE PART TWO" },
              { label: "Account Number", value: "50200067728688" },
              { label: "Bank", value: "HDFC BANK LTD. F-129 RIICO INDUSTRIAL AREA SITAPURA, JAIPUR" },
              { label: "IFSC Code", value: "HDFC0003873" },
            ].map((detail, index) => (
              <div key={index} className="flex flex-col space-y-1 p-3 sm:p-4 border-b last:border-b-0">
                <span className="text-xs sm:text-sm lg:text-base font-semibold text-text-secondary">{detail.label}</span>
                <span className="text-sm sm:text-base lg:text-lg text-text-primary">{detail.value}</span>
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
