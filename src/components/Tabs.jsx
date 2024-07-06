import React from 'react'

const Tabs = () => {
  return (
    <div className="capitalize mt-24 mx-auto w-fit">
      <ul className="flex gap-14 px-12 bg-secondaryBlue bg-opacity-15 p-3 rounded-full">
        <li>
          refer
          <p className="mt-1 mx-auto w-[6px] bg-secondaryText h-[6px] rounded-full"></p>
        </li>
        <li>
          benefits
          <p className="mt-1 mx-auto w-[6px] bg-secondaryText h-[6px] rounded-full"></p>
        </li>
        <li>
          FAQs
          <p className="mt-1 mx-auto w-[6px] bg-secondaryText h-[6px] rounded-full"></p>
        </li>
        <li>
          support
          <p className="mt-1 mx-auto w-[6px] bg-secondaryText h-[6px] rounded-full"></p>
        </li>
      </ul>
    </div>
  );
}

export default Tabs
