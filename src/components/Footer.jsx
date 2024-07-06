import React from 'react'
import logo2 from "../assets/images/logo2.png"

const Footer = () => {
  return (
    <div className="h-[796px] w-full bg-textColor text-white">
      <div className="m-20 py-10 ">
        <div className="flex justify-between">
          <img src={logo2} className="w-[125px] h-[36px] " />
          <div className="text-center">
            <p className="mx-auto capitalize bg-secondaryText border text-white px-6 py-2 rounded">
              Schedule 1-on-1 Call Now
            </p>
            <span className="text-sm">Speak with our Learning Advisor</span>
          </div>
        </div>

        <div>
          <div>
            <h1>Programs</h1>
            [...Array(10,"f")].map(
                <p></p>
            )
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
