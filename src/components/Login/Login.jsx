import React from "react";
import Hero from "./assets/peakpx.jpg";

const Login = () => {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden bg-[#E8EDE6]">
        <div className="flex-grow bg-[#D0D5CF] w-[90%] border-2 border-white rounded-3xl mx-auto my-8  h-full">
          <div className="md:grid grid-cols-2 h-full">
          <div className="flex items-center justify-center">
              <figure className="w-full h-full p-4 ">
                <img
                  className="w-full h-full object-cover rounded-3xl"
                  src={Hero}
                  alt="image description"
                />
              </figure>
            </div>
            <div className="flex flex-col mt-16">
              <p className="w-[45%] font-serif text-sm ml-auto">Not a member? Register Here</p>

              <h1 className="font-serif font-bold text-center mt-8 p-4 text-3xl">
                Hello Again!
              </h1>
              <p className="text-center">Welcome back, you have been missed!</p>

              <div className="w-[60%] mx-auto p-2 mt-4">
                <input
                  type="text"
                  id="first_name"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                  placeholder="John"
                  required
                />
              </div>
              <div className="w-[60%] mx-auto p-2">
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div className="w-[60%] mx-auto p-2">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 w-full border-b-4 border-blue-700 hover:border-blue-500 rounded-lg">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
