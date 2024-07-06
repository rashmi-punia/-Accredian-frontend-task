import React, { useEffect, useState } from 'react'
import {motion } from "framer-motion"
import { Button } from '@mui/material'
import animationGif from "../../assets/images/success.gif"
import axios from 'axios';

const ReferNow = ({ divRef, handleClose, setOpenReferal }) => {
  const [success, setSuccess] = useState(false);
  const [code,setCode] = useState()

  useEffect(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  useEffect(() => {
    let timer;

    if (success) {
      timer = setTimeout(() => {
        setOpenReferal(false);
        setSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [success]);

  const handleCodeRequest = async()=>{
    try {
        

        const data = await axios.get(
          "https://accerdian-backend-task-ccjx.onrender.com/api/refer/create"
        );
        console.log(data);
        setCode(data)

    } catch (error) {
        
        console.log(error.msg);
        console.error(error)

    }
  }

  return (
    <div className="fixed top-0 z-50 w-full h-full bg-black/45 flex justify-center items-center">
      {!success ? (
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              damping: 19,
              duration: 0.3,
            },
          }}
          ref={divRef}
          className="bg-white absolute p-6 z-50"
        >
          <form>
          <div>

            <input
              type="text"
              readOnly
              value={code}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            <Button onClick={handleCodeRequest} variant='outline'>Generate code</Button>
          </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                //   value={loginData.email}
                //   onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <Button variant="contained" className="w-full">
              Send mail
            </Button>
          </form>
        </motion.div>
      ) : (
        <>
          <img
            src={animationGif}
            alt="Loading animation"
            className="w-[25vw]"
          />
        </>
      )}
    </div>
  );
};

export default ReferNow
