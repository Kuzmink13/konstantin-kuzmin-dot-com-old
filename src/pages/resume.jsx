/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import resumeFile from '../assets/konstantinkuzmin_resume.pdf';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Head from '../components/head';

const query = graphql`
  query {
    contentfulPageContent(slug: { eq: "resume" }) {
      pageTitle
      pageDescription {
        pageDescription
      }
    }
    resume: contentfulAsset(contentful_id: { eq: "4HK2qyaO3gnqAbaZ5KUp87" }) {
      description
      gatsbyImageData(
        width: 384
        quality: 100
        formats: [AUTO, WEBP]
        placeholder: DOMINANT_COLOR
      )
    }
  }
`;

export default function Resume() {
  const { contentfulPageContent, resume } = useStaticQuery(query);
  return (
    <Layout>
      <Head
        title={contentfulPageContent.pageTitle}
        desc={contentfulPageContent.pageDescription.pageDescription}
      />
      <div className="max-w-screen-xl mx-auto">
        <PageHeader
          title={contentfulPageContent.pageTitle}
          description={contentfulPageContent.pageDescription.pageDescription}
        />
        <div className="flex flex-col max-w-xs md:max-w-sm mx-auto">
          <GatsbyImage
            className="shadow-xl border mt-2 md:mt-3 lg:mt-4
            transform hover:scale-105
            transition duration-700"
            image={getImage(resume)}
            alt={resume.description}
            loading="eager"
          />
          <Download />
        </div>
      </div>
    </Layout>
  );
}

function Download() {
  return (
    <div className="flex justify-center my-10 md:my-12 lg:my-16">
      <a href={resumeFile} download className="btn">
        <p
          className="font-kanit text-base md:text-lg lg:text-lg
          uppercase text-gray-100 font-medium tracking-widest"
        >
          download pdf
        </p>
      </a>
    </div>
  );
}
