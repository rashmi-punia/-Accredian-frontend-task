import React from 'react'

const Tabs = ({scrollToRef,referRef,benefitRef,faqRef}) => {
  return (
    <div className="capitalize  mt-7 mx-auto w-fit">
      <ul className="flex *:cursor-pointer gap-14 px-12 bg-secondaryBlue bg-opacity-15 p-3 rounded-full">
        <li onClick={()=> scrollToRef(referRef)}>
          refer
          <p className="mt-1 mx-auto w-[6px] bg-secondaryText h-[6px] rounded-full"></p>
        </li>
        <li onClick={() => scrollToRef(benefitRef)}>
          benefits
          <p className="mt-1 mx-auto w-[6px] bg-secondaryText h-[6px] rounded-full"></p>
        </li>
        <li onClick={() => scrollToRef(faqRef)}>
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
