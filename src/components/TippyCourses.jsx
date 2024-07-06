import React from 'react'
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import { FaChevronDown } from "react-icons/fa";






const TippyCourses = () => {
    const content =
        <div className='bg-white w-fit shadow capitalize border text-start text-textColor  *:p-2  rounded '>
            <p className='hover:text-secondaryText hover:bg-secondaryText/15 '>Frontend</p>
            <p className='hover:text-secondaryText hover:bg-secondaryText/15 '>Backend</p>
            <p className='hover:text-secondaryText hover:bg-secondaryText/15 '>web development</p>
            <p className='hover:text-secondaryText hover:bg-secondaryText/15 '>Full satck</p>
        </div>
    

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
