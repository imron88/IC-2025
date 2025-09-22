import React from "react";
import { speakers } from "@/data/speakers";
import Head from "next/head";
import Schedule from "@/components/schedule";
import Image from "next/image";

const Speakers = () => {
  return (
    <>
      <Head>
        <title>Keynote Speakers - ICSICST</title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <Schedule />
      <br />

      <main className="bg-gradient-to-b from-background-primary to-white px-4 sm:px-6 lg:px-8 min-h-screen pt-7">
        <div className="max-w-7xl mx-auto">
          <div className="bg-background-primary rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-text-primary">
             Proposed Keynote Speakers
              <div className="h-1 w-16 sm:w-20 lg:w-24 bg-primary-500 mx-auto mt-2 sm:mt-3 lg:mt-4 rounded-full"></div>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {speakers.map((speaker, index) => (
                <div 
                  key={index}
                  className="group bg-background-primary rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] bg-gray-100">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain p-2 sm:p-3 lg:p-4"
                      priority={index < 3}
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 transform translate-y-4 transition-all duration-300">
                      {!speaker.national ? (
                        <div className="inline-block bg-secondary-200 bg-opacity-90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-2">
                          <p className="text-xs sm:text-sm font-medium text-primary-700">
                            International Speaker
                          </p>
                        </div>
                      ) : (
                        <div className="inline-block bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-2">
                          <p className="text-xs sm:text-sm font-medium text-primary-600">
                            National Speaker
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1 sm:mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary line-clamp-3">
                      {speaker.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {speakers.length === 0 && (
              <div className="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] text-center">
                <div className="bg-secondary-100 rounded-full p-6 sm:p-7 lg:p-8 mb-4 sm:mb-5 lg:mb-6">
                  <svg 
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2 sm:mb-3 lg:mb-4">
                  Speakers Coming Soon
                </h2>
                <p className="text-base sm:text-lg text-text-secondary max-w-xl sm:max-w-2xl px-4">
                  We are currently finalizing our lineup of distinguished speakers. 
                  Check back soon to learn about the experts who will be sharing their insights.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Speakers;