import React, { useEffect, useState } from 'react'
import {motion } from "framer-motion"
import { Button } from '@mui/material'

const ReferNow = ({divRef, handleClose}) => {

    const [success,setSuccess] = useState(false)

    useEffect(()=>{
        document.addEventListener('mousedown', handleClose)
        return () => {
            document.removeEventListener('mousedown' , handleClose)
        }
    },[])

  return (
    <div className="fixed top-0 z-50 w-full h-full bg-black/45 flex justify-center items-center">
      <motion.div initial={{
        y:-100,opacity:0
      }} animate={{y:0,opacity:1 , transition:{
        type:'spring',
        damping: 19,
        duration:0.3
      }}} ref={divRef} className="bg-white absolute p-6 z-50">

      {!setSuccess ? (
        <form>
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

          <Button variant='contained' className='w-full'>Send mail</Button>
        </form>

      ) : (
        <>
            
        </>
      )}
      </motion.div>
    </div>
  );
}

export default ReferNow
