import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className="flex flex-col items-center 
      justify-center h-screen
      bg-yellow-100"
      >
        <span className="text-5xl font-bold text-yellow-700 mb-4">
          WelCum to My JintapornCalculator
        </span>
        <br />
        <div className="flex">
          <Link
            to="/sum-number"
            className="bg-yellow-300 text-yellow-700 px-4 py-2 rounded-lg mr-2 transition duration-300 hover:bg-yellow-500 hover:scale-105"
          >
            Sum Number
          </Link>

          <Link
            to="/bmi-calculator"
            className="bg-yellow-300 text-yellow-700 px-4 py-2 rounded-lg ml-2 transition duration-300 hover:bg-yellow-500 hover:scale-105"
          >
            Bmi Calculator
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
