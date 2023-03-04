import React, { useState } from "react";
import login from "../img/log.jpg";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-[80%] object-cover" src={login} alt="" />
      </div>
      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4 "  onSubmit={signUp}>
          <h2 className="text-4xl font-bold text-center py-6">Create an acccount</h2>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              className="border p-2"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2"
              type="password"
              placeholder="Enter your passsword "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-400 text-white ">
            Sign Up
          </button>
          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </p>
            <Link t0="/login">Sign In </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;