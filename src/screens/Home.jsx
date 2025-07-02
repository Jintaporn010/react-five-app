import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className="flex flex-col items-center 
      justify-center h-screen
      bg-blue-100"
      >
        <span className="text-5xl font-bold text-pink-400 mb-4">
          WelCum to My Calculator
        </span>
        <br />
        <div className="flex">
          <Link
            to="/sum-number"
            className="bg-pink-300 text-white px-4 py-2 rounded-lg mr-2 transition duration-300 hover:bg-pink-400 hover:scale-105"
          >
            Sum Number
          </Link>

          <Link
            to="/bmi-calculator"
            className="bg-pink-300 text-white px-4 py-2 rounded-lg ml-2 transition duration-300 hover:bg-pink-400 hover:scale-105"
          >
            Bmi Calculator
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
