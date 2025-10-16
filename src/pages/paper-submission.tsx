/* eslint-disable react/no-unescaped-entities */
import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

function PaperSubmission() {
  return (
    <>
      <Head>
        <title>
          Paper Submission - ICIDLHV- International Conference on Sustainable &amp; Intelligent Computing in Science and Technology
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      {/* <Schedule /> */}
      <br />

      <main className="bg-gradient-to-b from-background-primary to-white px-4 sm:px-6 lg:px-8 pt-7">
        {/* Downloads Section */}
        
        {/* <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 flex flex-col items-center text-center max-w-lg mx-auto">

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-text-primary">Downloads</h2>
          <div className="flex flex-col space-y-3 sm:space-y-4">
            {[
              { text: "Paper Template For AIPCP Conference Proceedings", href: "https://docs.google.com/document/d/17t9-gdQPzWw5SWyTmQuX-ewVFIqkscJi/edit?usp=drive_link&ouid=104022846042193403930&rtpof=true&sd=true" },
              { text: "Paper Template For Taylor & Francis CRC Press Book Series", href: "https://docs.google.com/document/d/1Ddg9oytIUo9ivSM2vDHCAW4tW4VM3En_/edit?usp=drive_link&ouid=104022846042193403930&rtpof=true&sd=true" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-primary-600 text-white text-sm sm:text-base rounded-lg hover:bg-primary-700 transition-colors duration-300 w-fit"
              >
                <svg
                  className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                {item.text}
              </Link>
            ))}
          </div>
        </div> */}

        {/* Guidelines Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-text-primary">Paper Submission Guidelines </h1>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-text-primary">Instructions:</h2>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "The papers must be submitted in accordance with the specified formats: The paper's word count must fall between the range of 3000 to 5000 words. It is required that all papers be typed using Microsoft Word, utilizing the Times New Roman font with a font size of 12 pt.",
                  "The recommended paper size is A4, in portrait orientation, measuring 8.5 inches by 11 inches. The document should have a line spacing of 1.5 with margins of 1 inch on the top, bottom, and right sides, and 1.5 inches on the left side.",
                  "Headings and subheadings should be formatted in strong font, aligned to the left margin, and numbered based on their hierarchical level as follows: 1. Heading at the first level, 1.1 Subheading, 1.1.1 Heading at the third level.",
                  "The report should include appropriately numbered and described figures, charts, pictures, and tables.",
                  "The main title should be immediately followed by the writers' names, affiliations, addresses, and email IDs.",
                  "The abstract must not exceed 200 words and should be written in italics.",
                  "A minimum of five keywords must be included following the abstract, highlighted in bold.",
                  "Each paper submission must include a single passport-sized color photograph of the author(s) along with a concise curriculum vitae.",
                  "The references or bibliographies should be cited according to the APA format recommended by the American Psychological Association.",
                  "Fabrication of data is an egregious departure from the expected norms of scientific conduct, as is the selective reporting of data with the intent to mislead or deceive, as well as the theft of data or research results from others.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="mt-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary-500 flex-shrink-0" />
                    <p className="text-sm sm:text-base lg:text-lg text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary-100 rounded-lg p-4 sm:p-6">
              <p className="text-sm sm:text-base lg:text-lg text-text-secondary">
                <span className="font-bold">Note: </span>
                At least one author must register for the paper to be included in the conference. Only registered &amp; presented authors will be allowed to present papers and will be given the conference certificates. Only presented papers will be recommended for publication. Nobody will be allowed to make more than two presentations during the conference. This is done to ensure diversity and inclusivity of more active participants in the conference.
                <span className="font-bold"> NO PAPER TO HAVE MORE THAN SIX AUTHORS.</span>
                <span className="font-bold"> THE PAPER SHALL NOT BE LESS THAN FOUR PAGES AND MORE THAN 10 PAGES.</span>
              </p>
            </div>
          </div>
          <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10 flex flex-col items-center text-center max-w-lg mx-auto mt-10">

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-text-primary">
            Ready to Submit Your Paper?
          </h2>
          <div className="flex flex-col space-y-4 sm:space-y-5">
            <Link
              href="https://cmt3.research.microsoft.com/ICIDLHV2026"
              className="inline-flex items-center px-5 sm:px-7 py-3 sm:py-4 bg-primary-600 text-white text-sm sm:text-base font-medium rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg w-fit"
            >
              <svg
                className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Submit Paper Now
            </Link>
          </div>
        </div>
        </div>

        {/* Submission Process Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-text-primary">How to submit a manuscript?</h2>
          <div className="space-y-2 sm:space-y-3">
            {[
              "Perspective authors shall submit the full-length manuscripts via given submission link",
              "Authors will receive notification from the conference once the Technical Program Committee has reviewed the manuscript. The committee accepts only full-length papers for review not the abstracts.",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                <div className="mt-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary-500 flex-shrink-0" />
                <p className="text-sm sm:text-base lg:text-lg text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Review Process Section */}
        <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-text-primary">Review Process & Oral Presentation</h2>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary mb-3 sm:mb-4">
            All papers with a similarity score of less than 10% will undergo a double-blind review. The technical committee of the conference will review the papers, and the authors will be notified of the paper's status, which can be one of the following:
          </p>
          <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
            {[
              "Accepted for oral presentation",
              "Accepted with minor corrections for Oral Presentation",
              "Rejected",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                <div className="mt-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary-500 flex-shrink-0" />
                <p className="text-sm sm:text-base lg:text-lg text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary">
            Papers recommended by double blind review process on basis of originality, novelty and relevance of work will be considered.
          </p>
        </div>



        <Sponsored />
      </main>
    </>
  );
}

export default dynamic(() => Promise.resolve(PaperSubmission), { ssr: false });

