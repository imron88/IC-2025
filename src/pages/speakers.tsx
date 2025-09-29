import React from "react";
import { speakers } from "@/data/speakers";
import Head from "next/head";
import Schedule from "@/components/schedule";
import Image from "next/image";

const Speakers = () => {
  return (
    <>
      <Head>
        <title>Speakers - ICSICST</title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      {/* <Schedule /> */}
      <br />

      <main className="bg-gradient-to-br from-background-primary via-white to-secondary-50 px-4 sm:px-6 lg:px-8 min-h-screen pt-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-100 p-8 lg:p-12 mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
                Speakers
              </h1>
              <div className="flex items-center justify-center mb-4">
                <div className="h-1 w-12 bg-primary-300 rounded-full"></div>
                <div className="h-1.5 w-16 bg-primary-500 rounded-full mx-2"></div>
                <div className="h-1 w-12 bg-primary-300 rounded-full"></div>
              </div>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Distinguished experts and thought leaders sharing their insights and expertise
              </p>
            </div>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-primary-100 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Speaker Image Container */}
                <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent"></div>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain p-4 lg:p-6 transition-transform duration-500 group-hover:scale-105"
                    priority={index < 3}
                    quality={95}
                  />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Speaker Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    {!speaker.national ? (
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                        <div className="flex items-center space-x-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs font-medium">International</span>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                        <div className="flex items-center space-x-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs font-medium">National</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>


                {/* Speaker Details */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {speaker.name.trim()}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                      {speaker.designation}
                    </p>
                  </div>

                  {/* Hover action */}
                  {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-primary-500 text-sm font-medium">
                      <span>View Profile</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {speakers.length === 0 && (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full p-8 mb-6 shadow-lg">
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
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Speakers Coming Soon
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl px-4 leading-relaxed">
                We are currently finalizing our lineup of distinguished speakers.
                Check back soon to learn about the experts who will be sharing their insights.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Speakers;