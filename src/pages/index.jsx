/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Head from '../components/head';

export default function Home() {
  return (
    <Layout>
      <Head />
      <div
        className="max-w-screen-lg mx-auto
        my-6 md:my-8 lg:my-10"
      >
        <div
          className="flex flex-col md:flex-row justify-center items-center
          md:space-x-10 lg:space-x-20 space-y-6 md:space-y-0"
        >
          <StaticImage
            src="../assets/backpack.jpg"
            alt="Konstantin on a backpacking trip"
            width={480}
            className="border shadow-lg max-w-sm sm:max-w-full"
          />
          <div className="flex justify-center items-center">
            <IntroBox />
          </div>
        </div>
        <ContentPanel />
        <ContactMe />
      </div>
    </Layout>
  );
}

function IntroBox() {
  return (
    <div className="sm:grid grid-cols-5 md:block">
      <div className="mr-10 col-span-3">
        <p
          className="md:text-lg lg:text-xl font-kanit
         text-gray-500 font-medium tracking-wider"
        >
          Hey, I'm
        </p>
        <p
          className="text-4xl md:text-5xl lg:text-6xl font-kanit
          text-gray-700 font-semibold tracking-wider"
        >
          Konstantin
        </p>
        <p
          className="md:text-lg lg:text-xl text-gray-800
          leading-tight md:leading-tight lg:leading-tight pt-1"
        >
          I'm a Software Engineer from
          <br />
          Minneapolis, Minnesota
        </p>
      </div>
      <div className="col-span-2 flex sm:justify-end md:justify-start items-center">
        <Link
          className="mt-4 sm:mt-0 md:mt-4 lg:mt-6 inline-block btn"
          to="/about"
        >
          <p
            className="font-kanit text-base md:text-lg lg:text-xl
            uppercase text-gray-100 font-medium tracking-widest"
          >
            About Me
          </p>
        </Link>
      </div>
    </div>
  );
}

const PanelContent = [
  {
    title: 'See my work',
    subtitle:
      "I'm excited about building beautiful and performant programs for humans. I believe in technology's capacity to draw out the best you and I have to offer.",
    button: 'View Projects',
    payload: '/projects',
  },
  {
    title: 'Vist my blog',
    subtitle:
      'Where I write about programming, life, music, and more. Thematic consistency is not guaranteed. Updates monthly.',
    button: 'Read Now',
    payload: '/blog',
  },
];

function ContentPanel() {
  return (
    <div
      className="flex flex-col border-t
      py-14 md:py-16 lg:py-20
      my-10 md:my-16 lg:my-20
      space-y-16 md:space-y-20 lg:space-y-28"
    >
      {PanelContent.map((el, i) => (
        <PanelItem key={i} el={el} />
      ))}
    </div>
  );
}

function PanelItem({ el }) {
  return (
    <div
      className="sm:grid grid-cols-5 m-4 w-full mx-auto
      max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl"
    >
      <div className="col-span-3 pr-6">
        <h2
          className="text-xl md:text-2xl lg:text-3xl
          text-gray-700 font-semibold tracking-wider"
        >
          {el.title}
        </h2>
        <p
          className="md:text-lg lg:text-xl text-gray-800
          leading-tight md:leading-tight lg:leading-tight pt-1"
        >
          {el.subtitle}
        </p>
      </div>
      <div
        className="col-span-2 flex items-center sm:justify-end
        mt-3 sm:mt-0"
      >
        <Link className="inline-block btn" to={el.payload}>
          <p
            className="font-kanit text-base md:text-lg lg:text-xl
            uppercase text-gray-100 font-medium tracking-widest"
          >
            {el.button}
          </p>
        </Link>
      </div>
    </div>
  );
}

function ContactMe() {
  return (
    <div
      className="mx-auto flex flex-col items-center 
      space-y-2 md:space-y-3 lg:space-y-4
      py-2 md:py-4 lg:py-6"
    >
      <h2
        className="text-xl md:text-2xl lg:text-3xl
        text-gray-700 font-semibold tracking-wider"
      >
        Have something to say?
      </h2>
      <Link className="inline-block btn" to="/contact">
        <p
          className="font-kanit text-base md:text-lg lg:text-xl
          uppercase text-gray-100 font-medium tracking-widest"
        >
          Contact Me
        </p>
      </Link>
    </div>
  );
}
