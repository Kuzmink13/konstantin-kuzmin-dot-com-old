/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Head from '../components/head';

const query = graphql`
  query {
    contentfulPageContent(slug: { eq: "about" }) {
      pageTitle
      pageDescription {
        pageDescription
      }
    }
    contentfulAboutContent(slug: { eq: "aboutMe" }) {
      aboutMeText {
        raw
      }
    }
    square: contentfulAsset(contentful_id: { eq: "6qSCVzvjVdHYQ8iqIgUzPF" }) {
      description
      gatsbyImageData(
        width: 160
        quality: 100
        formats: [AUTO, WEBP]
        placeholder: DOMINANT_COLOR
      )
    }
    full: contentfulAsset(contentful_id: { eq: "2W0FJJuzjgSEWPDPPyuz73" }) {
      description
      gatsbyImageData(
        height: 500
        quality: 100
        formats: [AUTO, WEBP]
        placeholder: DOMINANT_COLOR
      )
    }
  }
`;

export default function About() {
  const {
    contentfulPageContent,
    contentfulAboutContent,
    square,
    full,
  } = useStaticQuery(query);
  return (
    <Layout>
      <Head
        title={contentfulPageContent.pageTitle}
        desc={contentfulPageContent.pageDescription.pageDescription}
      />
      <div className="max-w-screen-xl xl:px-6 mx-auto">
        <PageHeader
          title={contentfulPageContent.pageTitle}
          description={contentfulPageContent.pageDescription.pageDescription}
        />
        <div className="md:hidden mt-4 flex justify-center">
          <GatsbyImage
            image={getImage(square)}
            alt={square.description}
            loading="eager"
            className="w-40 rounded-full border shadow-lg"
            imgStyle={{ borderRadius: 9999 }}
          />
        </div>
        <div
          className="grid 
          md:grid-cols-2 xl:grid-cols-5 
          gap-6 lg:gap-8
          py-8 sm:py-10 lg:py-12 xl:py-14"
        >
          <div
            className="flex flex-col mx-auto xl:col-span-3
            max-w-sm sm:max-w-md md:max-w-full text-gray-800
            space-y-3 lg:space-y-4
            lg:text-lg xl:text-xl"
          >
            {renderRichText(contentfulAboutContent.aboutMeText)}
          </div>
          <div className="hidden md:flex flex-col xl:col-span-2">
            <GatsbyImage
              image={getImage(full)}
              alt={full.description}
              loading="eager"
              className="flex-grow border shadow-lg"
              objectPosition="50% 15%"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
