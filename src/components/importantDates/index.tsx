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
    title: "Full Paper Submission Date",
    date: "Sep 15, 2024",
    subtitle: "Full Paper Submission Date",

    isImportant: false,
    enabled: true,
  },
  {
    title: "Extended Date",
    date: "Nov 10, 2024",
    subtitle: "Extended Date",

    isImportant: true,
    enabled: true,
  },
  {
    title: "Notification of Acceptance",
    date: "Nov 15, 2024",
    subtitle: "Notification of Acceptance",

    isImportant: true,
    enabled: true,
  },
  {
    title: "Revised paper Submission",
    subtitle: "Nov 20, 2024",
    date: "Revised paper Submission",

    isImportant: false,
    enabled: true,
  },
  {
    title: "Early Bird Registration",
    date: "Nov 20, 2024",
    subtitle: "Early Bird Registration",

    isImportant: false,
    enabled: true,
  },
  {
    title: "Late Registration",
    date: "Nov 30, 2024",
    subtitle: "Late Registration",
    isImportant: false,
    enabled: true,
  },
  {
    title: "Conference Dates",
    date: "Dec 14-16, 2024",
    subtitle: "Conference Dates",
    isImportant: false,
    enabled: true,
  },
];

export default function ImportantDates() {
  return (
    <div className={"mx-auto w-full"}>
      <div
        className={
          "lg:min-w-lg mt-5 w-full rounded-t-md border-l-4 border-primary-500 bg-secondary-200 p-4 lg:max-w-sm"
        }
      >
        <p className={"text-lg font-semibold text-text-primary"}>Important Dates</p>
      </div>
      <div
        className={
          "w-full overflow-x-auto rounded-b-md bg-secondary-100 p-4 scrollbar-thin scrollbar-track-secondary-200 scrollbar-thumb-secondary-400 scrollbar-thumb-rounded-md lg:max-h-80 lg:max-w-sm lg:overflow-y-auto"
        }
      >
        {impDateData.map((item, index) => {
          return (
            <div key={index} className={``}>
              <div
                className={`flex items-start space-x-2 ${item.isImportant ? "-mx-4 -my-5 bg-accent-100 p-4" : ""
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
                  <div className={"flex items-center justify-center space-x-2"}>
                    <div
                      className={
                        "mt-1 rounded-full bg-primary-600 bg-opacity-20 font-semibold"
                      }
                    >
                      <p className={"px-2 py-0.5 text-xs text-primary-700"}>
                        Important
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {index !== impDateData.length - 1 && (
                <hr
                  className={`my-5 h-px border-0 bg-secondary-300 dark:bg-secondary-400 ${item.isImportant && impDateData[index + 1].isImportant
                    ? "bg-accent-300"
                    : ""
                    }`}
                />
              )}
            </div>
          );
        })}
        {impDateData.length == 0 && (
          <>
            <h3>No Dates Announced Yet</h3>
          </>
        )}
      </div>
    </div>
  );
}
