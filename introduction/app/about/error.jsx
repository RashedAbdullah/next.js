"use client";

import React from "react";

const AboutError = ({ error, reset }) => {
  return (
    <div>
      <p>This is Error in {error.message}</p>
      <button onClick={() => reset()} className="bg-red-500  py-2 px-3">
        Try again
      </button>
    </div>
  );
};

export default AboutError;
