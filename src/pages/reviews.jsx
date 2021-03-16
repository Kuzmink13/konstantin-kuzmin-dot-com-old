/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

import { reviewIcons } from '../data/reviewIcons';

const query = graphql`
  query {
    contentfulPageContent(slug: { eq: "reviews" }) {
      pageTitle
      pageDescription {
        pageDescription
      }
    }
    allContentfulReview(sort: { fields: publicationDate, order: DESC }) {
      edges {
        node {
          title
          type
          publicationDate(formatString: "MMMM Do, YYYY")
          score
          reviewBody {
            internal {
              content
            }
          }
        }
      }
    }
  }
`;

export default function Reviews() {
  const { contentfulPageContent, allContentfulReview } = useStaticQuery(query);
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <PageHeader
          title={contentfulPageContent.pageTitle}
          description={contentfulPageContent.pageDescription.pageDescription}
        />
        <ReviewList reviews={allContentfulReview} />
      </div>
    </Layout>
  );
}

function ReviewList({ reviews }) {
  return (
    <div className="flex flex-row flex-wrap justify-evenly">
      {reviews.edges.map((review) => (
        <ReviewCard key={review.node.title} review={review.node} />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div
      className="flex flex-col items-center
      w-96 md:w-80 lg:w-96 p-2
      md:mx-3 lg:mx-4
      my-3 md:my-4 lg:my-5
      border rounded-lg shadow-lg"
    >
      <h3
        className="text-2xl lg:text-3xl 
        text-gray-700 font-semibold tracking-wider"
      >
        {review.title}
      </h3>
      <p className="lg:text-lg font-kanit text-gray-500">
        {review.publicationDate} &middot; {review.type}
      </p>
      <p
        className="flex-grow overflow-auto
        lg:text-lg text-gray-800 leading-tight lg:leading-tight
        h-20 md:h-24 lg:h-28 m-2"
      >
        {review.reviewBody.internal.content}
      </p>
      <Ratings rating={review.score} />
    </div>
  );
}

function Ratings({ rating }) {
  return (
    <div className="flex flex-row m-2 space-x-3">
      {reviewIcons.map((el, i) => (
        <Icon key={i} svg={el.svg} color={el.color} isActive={rating === i} />
      ))}
    </div>
  );
}

function Icon({ svg, color, isActive }) {
  return (
    <div
      className={`${
        isActive ? color : 'text-gray-500'
      } h-12 w-12 stroke-current`}
    >
      {svg}
    </div>
  );
}
