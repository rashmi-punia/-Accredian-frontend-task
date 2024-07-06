import { Button } from "@mui/material";
import { AnimatePresence, motion} from "framer-motion";
import React, { useState } from "react";

const Register = ({setFormModel,setSignupModel}) => {
  const [errors, setErrors] = useState({});
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [submitting,setSubmitting] = useState(null);

  

console.log(signupData);

  const validUsername = (username) => {
    const regex = /^[a-zA-Z0-9]{3,}$/;
    return regex.test(String(username));
  };

  const validPassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(String(password));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allError = {};

    console.log(allError);

    if (!validUsername(signupData.username)) {
      allError.username =
        "Username must be at least 3 characters long and contain only letters and numbers.";
    }


    if (!validPassword(signupData.password)) {
      allError.password =
        "Password must be at least 8 characters long and contain at least one letter and one number.";
    }

    if (Object.keys(allError).length > 0) {
      setErrors(allError);
    } else {
    
      // Submit the form or handle login logic
      console.log("Form submitted successfully");
      setErrors({});
    }
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
          key="Signup"
          className="bg-white shadow-xl w-96 p-8"
        >
          <div className="flex mb-5 items-baseline justify-between">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <Button
              onClick={() => setSignupModel(false)}
              className=" text-sm text-red-400"
            >
              close
            </Button>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={signupData.username}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={signupData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={signupData.password}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <Button
              variant="contained"
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Register
            </Button>

            <p className="mt-3 text-sm">
              Have an account?{" "}
              <span
                onClick={() => {
                  setFormModel(true);
                  setSignupModel(false);
                }}
                className="text-secondaryText cursor-pointer uppercase"
              >
                LOGIN
              </span>
            </p>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Register;
