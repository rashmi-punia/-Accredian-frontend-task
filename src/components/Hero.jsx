import React from 'react'
import heroimg from "../assets/images/hero.png"
import earnimg from "../assets/images/earn.png"

const Hero = () => {
  return (
    <div className="mx-auto relative mt-4 w-[75vw] overflow-hidden h-[60vh] flex justify-between bg-secondaryText bg-opacity-15 rounded-2xl shadow-xl">
      <div className="mx-10 my-auto">
        <div className="flex-col items-start gap-8 flex">
          <img
            src={earnimg}
            className="absolute -top-6  -left-12 w-[157px] h-[90px]"
          />
          <h1 className="text-6xl font-bold">Let’s Learn & Earn</h1>
          <p className="text-3xl">
            Get a chance to win up-to
            <span className="text-secondaryText font-bold text-4xl">
              {" "}
              Rs. 15,000
            </span>
          </p>
          <button className="bg-secondaryText text-white px-4 py-3 rounded">
            Refer now
          </button>
        </div>
      </div>

      <div className="flex w-[814px] h-[725px] -mt-40 relative ">
        <img
          src={earnimg}
          className="absolute top-40 rotate-180 left-36 w-[150px] h-[90px]"
        />
        <img
          src={earnimg}
          className="w-[157px] absolute top-1/2 h-[90px] right-2 rotate-9"
        />
        <img
          src={earnimg}
          className="w-[145px] absolute bottom-40 h-[90px] left-0 -rotate-45 z-10"
        />
        <img
          src={earnimg}
          className="w-[145px] absolute top-32 h-[90px] right-2 rotate-180"
        />
        <img src={heroimg} className="object-cover object-center relative" />
      </div>
    </div>
  );
}

export default Hero
