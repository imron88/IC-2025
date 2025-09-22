import React from "react";

function ImportantDetails() {
  return (
    <div className="mt-10 bg-white ">
      <h2 className="mb-4 text-xl font-bold">
        Starting January 2024, ACM has implemented a new Open Access (OA)
        publishing model for ICPS conferences. Here is a simple summary of the
        new model:
      </h2>

      <p className="mb-2 font-semibold">
        Authors can opt for either of the below options for publication, after
        presenting the paper in the Conference:
      </p>

      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold">
          Free Publishing (Corresponding or 2nd Author has to be from either of
          the below given category)
        </h3>

        <ul className="prose mx-4 my-2 list-disc">
          <li>
            <span className="font-semibold">
              ACM Open Program Institutions:
            </span>{" "}
            If the main author’s institution is part of ACM’s ACM Open program
            (which includes over 800 institutions), the paper will be published
            for free.{" "}
            <a
              href="https://libraries.acm.org/open/open-participants"
              className="text-blue-600 underline"
            >
              List of Institutions
            </a>
          </li>
          <li>
            <span className="font-semibold">Low-Income Countries:</span> Papers
            from institutions in low-income countries or covered by ACM
            agreements will also be published for free.{" "}
            <a
              href="https://www.acm.org/publications/policies/full-waiver-countries"
              className="text-blue-600 underline"
            >
              List of Countries
            </a>
          </li>
        </ul>

        <p className="mt-4">
          <span className="font-semibold">Note:</span> Discounted Conference
          Fees: Get a 20% discount on conference registration if you are in any
          of the above mentioned categories.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold">
          APC Paid Publication Rates
        </h3>

        <ul className="prose mx-4 my-2 list-disc">
          <li>
            $350: For lower-middle-income countries (e.g., India) with at least
            one ACM member author. (Authors can apply for 50% waiver as per
            guidelines available at{" "}
            <a
              href="https://www.acm.org/publications/policies/policy-on-open-access-apc-waivers-and-discounts"
              className="text-blue-600 underline"
            >
              ACM waivers and discounts
            </a>
            )
          </li>
          <li>
            $500: For lower-middle-income countries with no ACM member authors.
            (Authors can apply for 50% waiver as per guidelines available at{" "}
            <a
              href="https://www.acm.org/publications/policies/policy-on-open-access-apc-waivers-and-discounts"
              className="text-blue-600 underline"
            >
              ACM waivers and discounts
            </a>
            )
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ImportantDetails;
