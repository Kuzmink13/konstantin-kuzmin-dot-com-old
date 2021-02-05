/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';

function Project({ flip = false }) {
  return (
    <div
      className={`flex flex-col ${
        flip ? 'md:flex-row-reverse' : 'md:flex-row'
      } justify-between pb-8 md:pb-0`}
    >
      <div className="flex flex-col justify-center w-80 mx-auto md:w-full p-2 md:p-4">
        <h3>Project Title</h3>
        <p className="leading-snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
      </div>
      <img
        className="w-80 p-2 md:p-4 mx-auto"
        alt="Konstantin Smiling"
        src="./pryes_grayscale.jpg"
      ></img>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="w-full max-w-screen-md mx-auto">
      {/* <h2 className="px-2 md:px-4 mx-auto w-80 md:w-full">Projects</h2> */}
      <Project />
      <Project flip={true} />
    </div>
  );
}
