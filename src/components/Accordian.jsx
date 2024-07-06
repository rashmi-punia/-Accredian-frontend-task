import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoMdAdd } from "react-icons/io";

const programs = [
  {
    id: 1,
    program: "Data Science & AI",
    list: [
      "E&ICT Academy IIT Guwahati - Executive Program in Data Science and Product Management",
      "E&ICT Academy IIT Guwahati - Executive Program in Data Science and Digital Transformation",
      "E&ICT Academy IIT Guwahati - Professional Certificate Program in Data Science",
    ],
  },
  {
    id: 2,
    program: "Data Science & AI",
    list: [
      "E&ICT Academy IIT Guwahati - Executive Program in Data Science and Product Management",
      "E&ICT Academy IIT Guwahati - Executive Program in Data Science and Digital Transformation",
      "E&ICT Academy IIT Guwahati - Professional Certificate Program in Data Science",
    ],
  },
  {
    id: 3,
    program: "Data Science & AI",
    list: [
      "E&ICT Academy IIT Guwahati - Executive Program in Data Science and Product Management",
      "E&ICT Academy IIT Guwahati - Executive Program in Data Science and Digital Transformation",
      "E&ICT Academy IIT Guwahati - Professional Certificate Program in Data Science",
    ],
  },
  {
    id: 4,
    program: "Data Science & AI",
    list: [
      "E&ICT Academy IIT Guwahati - Executive Program in Data Science and Product Management",
      "E&ICT Academy IIT Guwahati - Executive Program in Data Science and Digital Transformation",
      "E&ICT Academy IIT Guwahati - Professional Certificate Program in Data Science",
    ],
  },
];

const Accordian = () => {
  const [activeTab, setActiveTab] = useState();

  return (
    <div className="w-1/3">
      <h1 className="text-lg font-semibold">Programs</h1>
      <div className="">
        {programs.map((show, index) => (
          <div key={index}>
            <p
              onClick={() => setActiveTab(activeTab === index ? null : index)}
              className=" py-2"
            >
              {show.program}{" "}
              <IoMdAdd
                className={`inline-flex size-5 float-end ${
                  activeTab === index && "rotate-45"
                }`}
              />
            </p>
            <p className={activeTab === index ? "block" : "hidden"}>
              <ul className=" text-sm *:py-1.5">
                {show.list.map((item, i) => (
                  <li key={i} className="bg-textColor">
                    {item}
                  </li>
                ))}
              </ul>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
