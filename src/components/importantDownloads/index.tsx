import React from "react";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

interface Downloads {
    title: string,
    link: string,
    isImportant: boolean,
    enabled: boolean
}

const impDownloadData: Downloads[] = [
    // {
    //     title: "Final Presntation Schedule ICAC3N-2024 (.pdf)",
    //     link: "/documents/Final Presentation Schedule ICAC3N-2024.pdf",
    //     isImportant: true,
    //     enabled: true,
    // },
    // {
    //     title: "Zoom Link for Presentation ICAC3N-2024 (.pdf)",
    //     link: "/documents/Zoom Link for Presentation ICAC3N-2024.pdf",
    //     isImportant: true,
    //     enabled: true,
    // },
    // {
    //     title: "ICAC3N-2024 Brochure (.pdf)",
    //     link: "/documents/ICAC3N-2024 Brochure.pdf",
    //     isImportant: false,
    //     enabled: true,
    // },
    // {
    //     title: "Paper Format (.docx)",
    //     link: "/documents/PAPER_ID_ICAC3N23.docx",
    //     isImportant: false,
    //     enabled: true,
    // },
    // {
    //     title: "Paper Format (.pdf)",
    //     link: "/documents/PAPER_ID_ICAC3N23.pdf",
    //     isImportant: false,
    //     enabled: true,
    // }, {
    //     title: "Sample PPT (.pptx)",
    //     link: "/documents/SamplePPTICAC3N-2024.pptx",
    //     isImportant: false,
    //     enabled: true,
    // },
]

export default function ImportantDownloads() {

    return (
        <div className={"w-full lg:w-min-sm"}>
            <div className={"mt-5 p-4 rounded-t-md bg-secondary-200 border-l-4 border-primary-500 w-full lg:max-w-sm"}>
                <p className={"font-semibold text-lg text-text-primary"}>Important Downloads</p>
            </div>
            <div className={"space-y-3 p-4 rounded-b-md bg-secondary-100 w-full lg:max-w-sm lg:max-h-52 lg:overflow-y-auto scrollbar-thin scrollbar-thumb-secondary-400 scrollbar-thumb-rounded-md scrollbar-track-secondary-200"}>
                {
                    impDownloadData.map((item, index) => {
                        return (
                            <Link key={index} href={item.link} className={"cursor-pointer"}>
                                <div className={"flex items-start justify-between"}>
                                    <div className={"flex space-x-2 items-start"}>
                                        <div>
                                            <p className={"font-medium text-text-primary"}>{item.title}</p>
                                        </div>
                                        {index === 0 &&
                                            <div className={"rounded-full bg-accent-500 my-1 bg-opacity-20"}>
                                                <p className={"px-2 py-0.2 text-sm text-accent-700"}>New</p>
                                            </div>
                                        }
                                        {
                                            item.isImportant &&
                                            <div className={"rounded-full bg-primary-600 bg-opacity-20"}>
                                                <p className={"px-2 py-0.5 text-sm text-primary-700"}>Important</p>
                                            </div>
                                        }
                                    </div>
                                    <BsChevronRight className={"my-1 text-lg text-text-secondary"} />


                                </div>
                                {index !== impDownloadData.length - 1 &&
                                    <hr className="h-px my-5 bg-secondary-300 border-0 dark:bg-secondary-400" />
                                }
                            </Link>
                        )
                    })
                }

                {
                    impDownloadData.length == 0 &&
                    <>
                        <h3>Nothing to Download Yet</h3>
                    </>
                }

            </div>
        </div>
    )
}