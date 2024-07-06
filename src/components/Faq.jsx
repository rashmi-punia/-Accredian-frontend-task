import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FaChevronDown } from "react-icons/fa";
import { PiHeadsetFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";



const data = [
  {
    id: "1",
    Subdata: [
      {
        ques: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        ans: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        ques: "What is the minimum system configuration required?",
        ans: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        ques: "What is the minimum system configuration required?",

        ans: "Creating an array with categories and their subcategories involves defining an array of objects where each object represents a category and contains a nested array for its subcategories",
      },
    ],
  },
  {
    id: "2",
    Subdata: [
      {
        ques: "What is the minimum system configuration required?",
        ans: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        ques: "What is the minimum system configuration required?",

        ans: "Creating an array with categories and their subcategories involves defining an array of objects where each object represents a category and contains a nested array for its subcategories",
      },
    ],
  },
  {
    id: "3",
    Subdata: [
      {
        ques: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        ans: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        ques: "What is the minimum system configuration required?",
        ans: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
    ],
  },
];

const Accordian = ({ data }) => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (i) => (event, isExpanded) => {
    setExpanded(isExpanded ? i : false);
  };

  return (
    <>
      {data.Subdata.map((doubt, index) => (
        <Accordion
          defaultExpanded={index === 0}
          expanded={expanded === index}
          onChange={handleChange(index)}
          key={index}
          className="-space-y-1"
        >
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <p className={expanded === index ? "text-secondaryText" : ""}>
              {doubt.ques}{" "}
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>{doubt.ans}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState("1");
  console.log(activeTab);

  const handleTab = (e) => {
    e.preventDefault();

    setActiveTab(e.target.name);
  };

  return (
    <div>
      <h1 className=" font-semibold text-lg text-center">
        What are the{" "}
        <span className="text-secondaryBlue">referral benefits?</span>
      </h1>

      <div className="flex justify-between gap-5 min-w-md w-[70vw] mx-auto">
        <div className="flex flex-col gap-5 *:text-nowrap  *:rounded *:px-4 *:py-2 *:capitalize">
          <button
            name="1"
            onClick={handleTab}
            className={` ${
              activeTab === "1"
                ? "bg-white shadow-md text-secondaryText "
                : "border border-textColor"
            }  `}
          >
            eligibility
          </button>
          <button
            name="2"
            onClick={handleTab}
            className={` ${
              activeTab === "2"
                ? "bg-white shadow-md text-secondaryText "
                : "border border-textColor"
            }  `}
          >
            How to use?
          </button>
          <button
            name="3"
            onClick={handleTab}
            className={` ${
              activeTab === "3"
                ? "bg-white shadow-md text-secondaryText "
                : "border border-textColor"
            }  `}
          >
            Terms & conditions
          </button>
        </div>

        <div className="space-y-2">
          {activeTab === "1" && <Accordian data={data[0]} />}
          {activeTab === "2" && <Accordian data={data[1]} />}
          {activeTab === "3" && <Accordian data={data[2]} />}
        </div>
      </div>

        <div className="flex justify-center items-start gap-5 rounded-xl mx-auto max-w-5xl bg-secondaryText mt-10 p-8 text-white">
          <div className="p-3 rounded-xl  border-4 border-secondaryText/45 w-fit bg-white text-secondaryText">
            <PiHeadsetFill className="size-10" />
          </div>
          <div className="flex-1">
            <p className="text-2xl font-semibold">Want to delve deeper into the program?</p>
            <p className="text-sm">
              Share your details to receive expert insights from our program
              team!
            </p>
          </div>
          <div className="mx-auto capitalize text-secondaryText bg-white px-8 tracking-wider py-2 rounded">
            get in touch
            <IoIosArrowForward className="inline-flex ml-1 " />
          </div>
        </div>
      </div>
  );
};

export default Faq;
