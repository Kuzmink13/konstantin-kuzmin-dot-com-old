/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React, { useContext, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/head';

const query = graphql`
  query {
    contentfulPageContent(slug: { eq: "contact" }) {
      pageTitle
      pageDescription {
        pageDescription
      }
    }
  }
`;

export default function Contact() {
  const { contentfulPageContent } = useStaticQuery(query);
  return (
    <Layout>
      <Head
        title={contentfulPageContent.pageTitle}
        desc={contentfulPageContent.pageDescription.pageDescription}
      />
      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-5">
        <ContactHeader content={contentfulPageContent} />
        <ContactForm />
      </div>
    </Layout>
  );
}

function ContactHeader({ content }) {
  return (
    <hgroup
      className="flex flex-col lg:col-span-2 justify-center items-center
      p-4 md:py-5 lg:py-6 lg:mb-20"
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl
        text-gray-700 font-semibold tracking-wider"
      >
        {content.pageTitle}
      </h2>
      <p
        className="text-md md:text-lg lg:text-xl
        text-gray-800 leading-tight md:leading-tight lg:leading-snug
        py-2 md:py-3 lg:py-4
        max-w-xs md:max-w-sm"
      >
        {content.pageDescription.pageDescription}
      </p>
    </hgroup>
  );
}

const FormContext = React.createContext();

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="lg:col-span-3
      px-4 lg:px-12
      py-4 md:py-5 lg:py-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div
        className="flex flex-wrap mx-auto
        max-w-sm md:max-w-md lg:max-w-lg"
      >
        <FormContext.Provider value={{ formState, handleChange }}>
          <Field title="Name" />
          <Field title="Email" />
          <Field title="Subject" />
          <BigField title="Message" />
        </FormContext.Provider>
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
      <ContactInput title={title.toLowerCase()} />
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
      <ContactTextArea title={title.toLowerCase()} />
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
  const { formState, handleChange } = useContext(FormContext);
  return (
    <input
      className="flex-grow focus-ring border shadow-sm rounded-lg p-2
      text-gray-800 md:text-lg lg:text-xl
      w-64 md:w-72 lg:w-80"
      type={title === 'email' ? 'email' : 'text'}
      name={title}
      value={formState[title]}
      onChange={handleChange}
      placeholder={`your ${title}...`}
    />
  );
}

function ContactTextArea({ title }) {
  const { formState, handleChange } = useContext(FormContext);
  return (
    <div className="flex flex-grow">
      <textarea
        className="flex-grow focus-ring border shadow-sm rounded-lg
        text-gray-800 md:text-lg lg:text-xl
        w-64 md:w-72 lg:w-80
        p-2 resize-none overflow-auto"
        name={title}
        value={formState[title]}
        onChange={handleChange}
        placeholder={`your ${title}...`}
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
