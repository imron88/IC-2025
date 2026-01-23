import React from "react";

interface ImportantDate {
  title: string;
  subtitle: string;
  date: string;
  isImportant: boolean;
  enabled: boolean;
}

const impDateData: ImportantDate[] = [
  {
    title: "Paper Submission Deadline",
    date: "31 January 2026",
    subtitle: "Paper Submission Deadline",
    isImportant: true,
    enabled: true,
  },
  {
    title: "Notification of Acceptance",
    date: "05 February 2026",
    subtitle: "Notification of Acceptance",
    isImportant: true,
    enabled: true,
  },
  {
    title: "Camera-Ready Paper Submission",
    subtitle: "Camera-Ready Paper Submission",
    date: "15 February 2026",
    isImportant: true,
    enabled: true,
  },
];

export default function ImportantDates() {
  return (
    <div className={"mx-auto w-full"}>
      <div
        className={
          "mt-5 w-full rounded-t-md border-l-4 border-primary-500 bg-secondary-200 p-4"
        }
      >
        <p className={"text-lg font-semibold text-text-primary"}>Important Dates</p>
      </div>
      <div
        className={
          "w-full rounded-b-md bg-secondary-100 p-4"
        }
      >
        {/* Responsive layout for important dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {impDateData.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <div
                className={`flex flex-col items-start space-y-2 h-full ${item.isImportant ? "bg-accent-100 p-4 rounded-md" : "p-4"
                  }`}
              >
                <div>
                  <p
                    className={`font-medium ${item.isImportant ? "text-primary-600" : "text-text-primary"
                      }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`text-sm font-light ${item.isImportant ? "text-primary-600" : "text-text-secondary"
                      }`}
                  >
                    {item?.subtitle}
                  </p>
                  <p
                    className={`text-sm ${item.isImportant ? "text-primary-600" : "text-text-secondary"
                      }`}
                  >
                    {item.date}
                  </p>
                </div>

                <div className="mt-auto pt-2 flex space-x-2">
                  {index === 0 && (
                    <div
                      className={
                        "rounded-full bg-accent-500 bg-opacity-20 font-semibold"
                      }
                    >
                      <p className={"px-2 py-0.5 text-xs text-accent-700"}>New</p>
                    </div>
                  )}
                  {item.isImportant && (
                    <div className={"flex items-center justify-center"}>
                      <div
                        className={
                          "rounded-full bg-primary-600 bg-opacity-20 font-semibold"
                        }
                      >
                        <p className={"px-2 py-0.5 text-xs text-primary-700"}>
                          Important
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {impDateData.length == 0 && (
          <>
            <h3>No Dates Announced Yet</h3>
          </>
        )}
      </div>
    </div>
  );
}