import React from "react";
import Image from "next/image";

function Sponsored() {
  const sponsors = [
    {
      image: "/iste.jpg",
      name: "Indian Society for Technical Education",
      alt: "ISTE Logo"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-secondary-100 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mt-2 mb-3 sm:mb-4">
            Technically Co-Sponsored by
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center aling-center gap-6 sm:gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="group relative bg-background-primary rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-3 sm:mb-4">
                <div className="absolute inset-0 bg-secondary-100 rounded-full group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative h-full w-full p-3 sm:p-4">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.alt}
                    fill
                    className="object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 8rem, (max-width: 1024px) 10rem, 12rem"
                  />
                </div>
              </div>
              
              <div className="text-center px-2">
                <h3 className="font-semibold text-text-primary group-hover:text-primary-600 transition-colors duration-300 text-sm sm:text-base lg:text-lg">
                  {sponsor.name}
                </h3>
              </div>

              <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-secondary-100 rounded-full opacity-0 group-hover:opacity-10 transform translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-secondary-100 rounded-full opacity-0 group-hover:opacity-10 transform -translate-x-1/2 translate-y-1/2 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="relative mt-8 sm:mt-12">
          <div className="hidden lg:block absolute top-0 right-0 w-48 h-48 xl:w-64 xl:h-64 bg-secondary-100 rounded-full opacity-5 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="hidden lg:block absolute bottom-0 left-0 w-32 h-32 xl:w-48 xl:h-48 bg-secondary-100 rounded-full opacity-5 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .group:active {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </div>
  );
}

export default Sponsored;
