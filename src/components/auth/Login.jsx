import { Button } from "@mui/material";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Login = ({ setFormModel, setSignupModel }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: "-100vw",
    },
  };

  return (
    <div className="fixed h-full w-full flex justify-center items-center z-50">
      <AnimatePresence mode="wait">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{
            type: "spring",
            duration: 1,
            ease: "easeInOut",
          }}
          key="Login"
          className="bg-white shadow-xl w-96 p-8"
        >
          <div className="flex mb-5 items-baseline justify-between">
            <h1 className="text-3xl font-bold">Log In</h1>
            <Button
              onClick={() => setFormModel(false)}
              className=" text-sm text-red-400"
            >
              close
            </Button>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <Button
              variant="contained"
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Login
            </Button>

            <p className="mt-3 text-sm">
              Don't have an account?{" "}
              <span
                onClick={() => {
                  setSignupModel(true);
                  setFormModel(false);
                }}
                className="text-secondaryText cursor-pointer uppercase"
              >
                Register here
              </span>
            </p>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Login;
