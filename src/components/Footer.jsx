import React from "react";
import logo2 from "../assets/images/logo2.png";
import Accordian from "./Accordian";
import { FaSquareFacebook } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { list } from "postcss";

const Footer = () => {
  return (
    <div className="h-[598px] w-full flex flex-col justify-center items-center bg-textColor text-white">
      <div className="w-[1200px] divide-y-2 mx-auto h-[540px]">
        <div className="flex justify-between h-[59px]">
          <img src={logo2} className="w-[125px] h-[36px] " />
          <div className="text-center">
            <p className="mx-auto capitalize bg-secondaryText border text-white px-6 py-2 rounded">
              Schedule 1-on-1 Call Now
            </p>
            <span className="text-sm">Speak with our Learning Advisor</span>
          </div>
        </div>

        <div className="flex gap-16 mt-10 pt-[32px]">
          <Accordian />
          <ContactUs />
          <Links />
        </div>
      </div>
      <p className="text-xs">
        © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
        Reserved
      </p>
    </div>
  );
};

export default Footer;

export const ContactUs = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">Contact Us</h1>
      <ul className="text-sm space-y-1">
        <li>
          <a href="admissions@accredian.com">
            Email us (For Data Science Queries): admissions@accredian.com
          </a>
        </li>
        <li>
          <a href="pm@accredian.com">
            Email us (For Product Management Queries):pm@accredian.com
          </a>
        </li>
        <li>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</li>
        <li>Product Management Admission Helpline:+91 9625811095</li>
        <li>Enrolled Student Helpline: +91 7969322507</li>
        <li>
          Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
          Gurugram, Haryana 122015
        </li>
        <li>
          <a href="https://accredian.com/whyaccredian">Why Accredian</a>
        </li>
      </ul>
      <h4 className="text-lg font-semibold mt-4">Follow Us</h4>
      <div className="flex gap-2">
        <a href="https://www.facebook.com/insaidlearn">
          <FaSquareFacebook className="size-5" />
        </a>
        <a href="https://www.linkedin.com/school/insaid/">
          <ImLinkedin className="size-5" />
        </a>
        <a
          href="https://twitter.com/insaidlearn">
          <FaTwitter className="size-5" />
        </a>
        <a href="https://www.instagram.com/insaid.learn/">
          <FaInstagramSquare  className="size-5"/>
        </a>
        <a href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA">
          <IoLogoYoutube className="size-5" />
        </a>
      </div>
    </div>
  );
};


export const Links = () => {
  const links = [
    {
      tag: "about",
      href: "https://home.accredian.com/About",
    },
    {
      tag: "career",
      href: "https://home.accredian.com/Career",
    },
    {
      tag: "Blog",
      href: "https://blog.accredian.com/",
    },
    {
      tag: "admission policy",
      href: "https://home.accredian.com/policies/accredian-policy",
    },
    {
      tag: "referral policy",
      href: "https://home.accredian.com/terms/referral",
    },
    {
      tag: "privacy policy",
      href: "https://home.accredian.com/terms/privacy",
    },
    {
      tag: "terms of service",
      href: "https://home.accredian.com/terms",
    },
    {
      tag: "master FAQs",
      href: "https://home.accredian.com/Faq",
    },
  ];
  return (
    <div>
      <h1 className="text-lg font-semibold">Accerdian</h1>
      <ul className="text-sm space-y-1 capitalize">
        {links.map((link) => (
          <li>
            <a href={link.href}>{link.tag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
