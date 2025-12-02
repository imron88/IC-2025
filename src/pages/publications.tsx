import ImportantDetails from "@/components/importantDetails";
import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Publications() {
  return (
    <>
      <Head>
        <title>
          Publications - ICIDLHV- International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      {/* <Schedule /> */}
      <br />

      <main className="bg-gradient-to-b from-background-primary to-white px-8 pt-7">
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-text-primary">All selected papers will be published in :</h1>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "WoS COLLNET Journal",
                  "SCOPUS Indexed PETER LANG Academic Publication",
                  "UGC Care listed ISTE Journal"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="mt-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary-500 flex-shrink-0" />
                    <p className="text-sm sm:text-base lg:text-lg text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Publication Opportunities Section */}
        <div className="bg-background-primary rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">Publication Opportunities</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              {[
                "All submitted papers will undergo double-blind peer review.",
                "Selected, high-quality papers will be considered for publication in Scopus-indexed book Proceedings by reputed publisher.",
                "Other accepted papers will be published in an ISTE Journal.",
                "Maximum 3-4 authors will be considered in a single paper. First author will be corresponding author."
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                  <div className="mt-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary-500 flex-shrink-0" />
                  <p className="text-sm sm:text-base lg:text-lg text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Sponsored />
      </main>
    </>
  );
}

export default Publications;
