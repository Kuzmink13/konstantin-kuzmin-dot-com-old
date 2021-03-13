/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';

import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-5">
        <ContactHeader />
        <ContactForm />
      </div>
    </Layout>
  );
}

function ContactHeader() {
  return (
    <hgroup
      className="flex flex-col lg:col-span-2 justify-center items-center
      p-4 md:py-5 lg:py-6 lg:mb-20"
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl
        text-gray-700 font-semibold tracking-wider"
      >
        Contact
      </h2>
      <p
        className="text-md md:text-lg lg:text-xl
        text-gray-800 leading-tight
        py-2 md:py-3 lg:py-4
        max-w-xs md:max-w-sm"
      >
        Hey! Feel free to reach out to me with your questions, thoughts,
        concerns, complaints or anything else you think I should be aware of.
        I'm always open to starting a conversation!
      </p>
    </hgroup>
  );
}

function ContactForm() {
  return (
    <form
      className="lg:col-span-3
      px-4 lg:px-12
      py-4 md:py-5 lg:py-6"
    >
      <div
        className="flex flex-wrap mx-auto
        max-w-sm md:max-w-md lg:max-w-lg"
      >
        <Field title="Name" />
        <Field title="Email" />
        <Field title="Subject" />
        <BigField title="Message" />
      </div>
      <SubmitButton />
    </form>
  );
}

function Field({ title }) {
  return (
    <div
      className="flex flex-grow flex-wrap items-center
      py-1 md:py-2 lg:py-3"
    >
      <ContactLabel title={title} />
      <ContactInput title={title} />
    </div>
  );
}

function BigField({ title }) {
  return (
    <div
      className="flex-grow flex flex-col
      h-40 md:h-44 lg:h-48
      md:space-y-1
      py-3 md:py-4 lg:py-5"
    >
      <ContactLabel title={title} />
      <ContactTextArea title={title} />
    </div>
  );
}

function ContactLabel({ title }) {
  return (
    <label
      className="font-kanit text-gray-700 font-semibold
      text-lg md:text-xl lg:text-2xl
      w-20 md:w-24 lg:w-28"
      htmlFor={title}
    >
      {title}
    </label>
  );
}

function ContactInput({ title }) {
  return (
    <input
      className="flex-grow focus-ring border shadow-sm rounded-lg p-2
      text-gray-800 md:text-lg lg:text-xl
      w-64 md:w-72 lg:w-80"
      type="text"
      name={title}
      placeholder={`your ${title.toLowerCase()}...`}
    />
  );
}

function ContactTextArea({ title }) {
  return (
    <div className="flex flex-grow">
      <textarea
        className="flex-grow focus-ring border shadow-sm rounded-lg
        text-gray-800 md:text-lg lg:text-xl
        w-64 md:w-72 lg:w-80
        p-2 resize-none overflow-auto"
        subject={title}
        placeholder={`your ${title.toLowerCase()}...`}
      />
    </div>
  );
}

function SubmitButton() {
  return (
    <div
      className="flex justify-center
      py-3"
    >
      <button className="btn" type="submit" value="submit">
        <p
          className="font-kanit text-base md:text-lg lg:text-xl
          uppercase text-gray-100 font-medium tracking-widest"
        >
          submit
        </p>
      </button>
    </div>
  );
}
