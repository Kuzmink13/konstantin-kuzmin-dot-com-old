/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const query = graphql`
  query {
    contentfulPageContent(slug: { eq: "resume" }) {
      pageTitle
      pageDescription {
        pageDescription
      }
    }
  }
`;

export default function Resume() {
  const { contentfulPageContent } = useStaticQuery(query);
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <PageHeader
          title={contentfulPageContent.pageTitle}
          description={contentfulPageContent.pageDescription.pageDescription}
        />
        <div className="flex flex-col max-w-xs md:max-w-sm mx-auto">
          <StaticImage
            className="shadow-xl border mt-2 md:mt-3 lg:mt-4
            transform hover:scale-105
            transition duration-700"
            src="../assets/res.JPG"
            width={384}
            alt="resume screenshot"
            placeholder="none"
            formats={['auto', 'webp']}
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
      <button type="button" className="btn">
        <p
          className="font-kanit text-base md:text-lg lg:text-lg
          uppercase text-gray-100 font-medium tracking-widest"
        >
          download pdf
        </p>
      </button>
    </div>
  );
}
