/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { Fragment } from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        className="max-h-96 mx-auto my-3"
        alt="Konstantin Smiling"
        src="./backpack_grayscale_sm.jpg"
      ></img>
      <div className="sm:leading-relaxed max-w-lg mx-auto p-6 mb-8">
        <p className="pb-3">
          <strong>Hey, I’m Konstantin.</strong> I got started in software
          development by auditing free MIT courses while quarantining during the
          covid-19 pandemic. Since then, I’ve finished my first major web
          project and am now looking to get into the industry so I can continue
          to build my skill set and meet my personal and professional goals.
        </p>
        <p className="pb-3">
          My formal training is in mechanical engineering, but I decided to make
          a change after spending three years working in the medical device
          industry. I was drawn to tech by the community and its love for
          continuous learning, self-improvement, and skill-mastery. Throughout
          my life, I have always been computer-adjacent, but it wasn’t until I
          finally took the time to dig deeper into it that I realized it’s what
          I should have been doing all along.
        </p>
        <p className="">
          My career interests include music education and general productivity
          tools. I believe there is massive potential in using technology to
          help make people into the best version of themselves. We are just
          scratching the surface of what tech can do in the fields of
          interpersonal business, communication, and self-actualization.
        </p>
      </div>
    </Fragment>
  );
}
