import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";


const ProgramsLsit = ["Product Management"]
const result = [...Array(10)].map(() => ProgramsLsit[0]);

const ProgramDetail = [{
    certificate_name : "Professional Certificate in Product Management",
    referrer_bonus: "7,000",
    refree_bonus: 3000
}]

const result2 = [...Array(30)].map(() => ProgramDetail[0]);



const Benefits = () => {
  return (
    <div className="text-center capitalize">
      <h1 className=" font-semibold text-lg">
        What are the{" "}
        <span className="text-secondaryBlue">referral benefits?</span>
      </h1>

      <div className="mx-auto min-w-md  max-w-5xl">
        <div className="flex mt-12 gap-6 justify-center items-start">
          <div className=" *:px-3  *:py-2 divide-y text-start w-fit shadow-lg border rounded-lg overflow-hidden">
            <p className="bg-secondaryText font-semibold text-white">
              All Programs
              <IoIosArrowForward className="inline-flex float-end" />
            </p>
            {result.map((program) => (
              <div className="flex gap-8 items-center justify-between">
                <p>{program}</p>
                <IoIosArrowForward className="inline-flex" />
              </div>
            ))}
          </div>

          <div className=" flex-1 w-fit rounded-lg overflow-hidden">
            <table className="w-full border shadow-lg text-left *:border-b ">
              <thead className="bg-secondaryText bg-opacity-15 text-secondaryBlue">
                <tr className=" *:py-2 *:px-3">
                  <th className="">Programs</th>
                  <th className="">Referre bonus</th>
                  <th className="">refree bonus</th>
                </tr>
              </thead>
              <tbody>
                {result2.slice(0, 10).map((item) => (
                  <tr
                    key={item.id}
                    className=" *:px-3 divide-x-2 *:py-2 *:border-b"
                  >
                    <td className=" ">
                      <TbCertificate className="inline-flex size-5 mr-1 text-secondaryBlue" />
                      {item.certificate_name}
                    </td>
                    <td className="">{item.referrer_bonus}</td>
                    <td className="">{item.refree_bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button className="border w-fit mt-2 text-right py-2 float-end rounded-xl px-4">
          Show more
          <FaChevronDown className="inline-flex mx-2 p-0.5" />
        </button>

        <button className="mx-auto bg-secondaryText mt-12 text-white px-10 py-3 rounded">
          Refer Now
        </button>
      </div>
    </div>
  );
}

export default Benefits
