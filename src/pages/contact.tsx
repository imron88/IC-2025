import Schedule from "@/components/schedule";
import Sponsored2 from "@/components/sponser2";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import React from "react";

function Partners() {
  return (
    <>
      <Head>
        <title>Contact Us - ICIDLHV - International Conference on Sustainable &amp;Intelligent Computing in Science and Technology</title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      {/* <Schedule /> */}
      <br />

      <main className="bg-gradient-to-b from-background-primary to-white px-8 pt-7 rounded-lg">
        {/* Coming Soon Section */}
        <div className="bg-background-primary rounded-xl shadow-md p-8 mb-8">
          <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
            <div className="bg-secondary-100 rounded-full p-8 mb-6">
              <svg
                className="w-16 h-16 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Email : icidlhv2023@poornima.org <br />
              Phone: +91 9950809459, +91 8305750628, +91 8440964941
            </p>
          </div>
          <div className="mt-8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.2424729285285!2d75.8484933148641!3d26.76853977272645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc91e898380fd%3A0xeee859ae1f1b64b0!2sPoornima+Institute+of+Engineering+and+Technology!5e0!3m2!1sen!2sin!4v1520493557018" width="100%" height="350" style={{ border: 0 }} allowFullScreen></iframe>
          </div>
        </div>

        {/* Placeholder for Future Content */}
        <div className="bg-background-primary rounded-xl shadow-md p-8 mb-8 hidden">
          <h2 className="text-2xl font-bold mb-6 text-text-primary">Conference Partners</h2>
          <p className="text-text-secondary mb-8">
            &ldquo;This groundbreaking event marks a new era of innovation, collaboration, and knowledge exchange.
            Join us as we unveil a remarkable conference experience that will shape the future of technology and academia.&rdquo;
          </p>
        </div>

        <Sponsored />
      </main>
    </>
  );
}

export default Partners;
