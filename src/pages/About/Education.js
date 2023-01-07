import React from "react";

const Education = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-red-500">Education :</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-2 mt-8 ">
        <div
          data-aos="zoom-in"
          className="border  bg-zinc-800 border-purple-300 rounded-md text-white p-4"
        >
          <h2 className="text-lg">BGC Trust University Bangladesh</h2>
          <p>B.Sc In CSE</p>
          <p>
            <small>2017-2021</small>
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="border  bg-zinc-800 border-purple-300 p-4 rounded-md text-white"
        >
          <h2 className="text-lg">Islamia University College</h2>
          <p>Higher Secondary School</p>
          <p>
            <small>2013-2015</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
