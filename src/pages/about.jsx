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
      <div className="max-w-screen-xl mx-auto">
        <PageHeader
          title={contentfulPageContent.pageTitle}
          description={contentfulPageContent.pageDescription.pageDescription}
        />
        <StaticImage
          src="../assets/square.jpg"
          alt="Konstantin on a backpacking trip"
          className="block md:hidden mt-4 w-40 mx-auto rounded-full border shadow-lg"
        />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
              justo eget magna fermentum iaculis. Amet consectetur adipiscing
              elit duis tristique. Senectus et netus et malesuada fames ac.
              Ipsum dolor sit amet consectetur adipiscing. Dui accumsan sit amet
              nulla facilisi morbi. Elit eget gravida cum sociis natoque
              penatibus et magnis.
            </p>
            <p>
              Semper risus in hendrerit gravida rutrum quisque non tellus. Ipsum
              faucibus vitae aliquet nec ullamcorper sit. Tincidunt arcu non
              sodales neque sodales. Scelerisque viverra mauris in aliquam sem
              fringilla. Urna duis convallis convallis tellus. Lectus nulla at
              volutpat diam ut venenatis. Interdum velit laoreet id donec
              ultrices tincidunt arcu non. Quis enim lobortis scelerisque
              fermentum dui faucibus in. Venenatis cras sed felis eget velit
              aliquet sagittis id.
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
