import React from 'react'
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import { FaChevronDown } from "react-icons/fa";






const TippyCourses = () => {
    const content =(
        <div className='bg-white py-2 px-3 w-fit shadow border text-start text-textColor  *:py-1  rounded-sm'>
            <p className='hover:text-secondaryText hover:underline'>Frontend</p>
            <p className='hover:text-secondaryText hover:underline'>Backend</p>
            <p className='hover:text-secondaryText hover:underline'>web development</p>
            <p className='hover:text-secondaryText hover:underline'>Full satck</p>
        </div>
    )

  return (
    <Tippy
      content={content}
      interactive={true}
      animation="scale"
      theme="custom-tooltip"
      arrow={false}
      placement='bottom-start'
    >
      <button>Courses
<FaChevronDown className='inline-flex ml-1 size-3' />
      </button>
    </Tippy>
  );
}

export default TippyCourses
