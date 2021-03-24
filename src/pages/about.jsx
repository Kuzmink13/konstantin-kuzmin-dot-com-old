/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

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
  }
`;

export default function About() {
  const { contentfulPageContent } = useStaticQuery(query);
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
          <StaticImage
            src="../assets/square.jpg"
            alt="Konstantin on a backpacking trip"
            className="w-40 rounded-full border shadow-lg"
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
            max-w-sm sm:max-w-md md:max-w-full
            space-y-3 lg:space-y-4
            lg:text-lg xl:text-xl"
          >
            <p>
              Hey, I’m Konstantin. I’m a software engineer from Minneapolis,
              Minnesota. I got started in software engineering by auditing free
              MIT courses during the covid-19 pandemic. Since then, It’s been my
              goal to build beautiful and performant programs for humans. I want
              to create software that can enhance productivity, creativity, and
              personal well-being. I believe in technology's capacity to draw
              out the best you and I have to offer.
            </p>
            <p>
              My formal training is in mechanical engineering; I have three
              years of experience working in the medical device industry. I
              decided to make a shift to software when I discovered my passion
              for programming. I was drawn to tech by the community and its love
              for continuous learning and self-improvement. Throughout my life,
              I have always been computer-adjacent, but it wasn’t until I
              finally took the time to dig deeper into it that I realized it’s
              what I should have been doing all along. You can read more about
              my journey in this blog post.
            </p>
            <p>
              Auctor neque vitae tempus quam pellentesque nec. Id diam maecenas
              ultricies mi eget. Dictum non consectetur a erat nam at lectus
              urna duis. Pellentesque nec nam aliquam sem et. Amet consectetur
              adipiscing elit duis tristique sollicitudin nibh sit. Pretium
              viverra suspendisse potenti nullam ac tortor vitae purus faucibus.
              Sed turpis tincidunt id aliquet risus feugiat. Magna sit amet
              purus gravida quis blandit turpis cursus. Sed viverra ipsum nunc
              aliquet. Fermentum dui faucibus in ornare.
            </p>
          </div>
          <div className="hidden md:flex flex-col xl:col-span-2">
            <StaticImage
              src="../assets/vertical.jpg"
              alt="Konstantin on a backpacking trip"
              height={500}
              quality={100}
              className="flex-grow border shadow-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
