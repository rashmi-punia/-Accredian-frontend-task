import React from 'react'
import circleimg from "../assets/images/circle.png"
import { TiUserAdd } from "react-icons/ti";
import { BiSolidCalendarEdit } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";




const Refer = () => {
  return (
    <div className="bg-secondaryText p-3 h-fit bg-opacity-15 mt-10 text-center">
      <h1 className="capitalize text-lg font-semibold">
        How do i <span className="text-secondaryText"> refer?</span>
      </h1>
      <div className="w-[1340px] h-[510px] relative object-center object-cover overflow-hidden -mt-16 mx-20">
        <img src={circleimg} className="-mt-24 relative" />

        <div className="absolute flex justify-between gap-48 space-x-3 -fit inset-[215px]  z-20">
          <div className='space-y-4'>
            <TiUserAdd className="size-20 mx-auto text-secondaryText" />
            <p>Submit referrals easily via our website’s referral section.</p>
          </div>
          <div className='space-y-4'>
            <BiSolidCalendarEdit className="size-20 mx-auto text-secondaryText" />
            <p>Earn rewards once your referral joins an Accredian program.</p>
          </div>
          <div className='space-y-4'>
            <GiWallet className="size-20 mx-auto text-secondaryText" />
            <p>
              Both parties receive a bonus 30 days after program enrollment.
            </p>
          </div>
        </div>
      </div>
      <button className="bg-secondaryText mt-12 text-white px-10 py-3 rounded">
        Refer Now
      </button>
    </div>
  );
}

export default Refer
