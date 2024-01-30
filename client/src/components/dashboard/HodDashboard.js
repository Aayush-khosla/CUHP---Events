import React from "react";
import BookingsHod from "../bookings/hod/BookingsHod"

const HodDashboard = () => {
  return (
    <>
      <div className="mt-6 min-h-screen">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-center text-gray-800 font-black leading-7 ml-3 md:leading-10">
          HOD <span className="text-indigo-700">Dashboard</span>{" "}
        </h1>

        <div className="">
          <BookingsHod/>
        </div>
      </div>
    </>
  );
};

export default HodDashboard;
