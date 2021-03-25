/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Head from '../components/head';

const query = graphql`
  query {
    contentfulPageContent(slug: { eq: "blog" }) {
      pageTitle
      pageDescription {
        pageDescription
      }
    }
    allContentfulBlogPost(sort: { fields: publicationDate, order: DESC }) {
      edges {
        node {
          title
          slug
          description {
            internal {
              content
            }
          }
          publicationDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`;

export default function Blog() {
  const { contentfulPageContent, allContentfulBlogPost } = useStaticQuery(
    query
  );
  return (
    <Layout>
      <Head
        title={contentfulPageContent.pageTitle}
        desc={contentfulPageContent.pageDescription.pageDescription}
      />
      <div className="max-w-screen-sm mx-auto">
        <PageHeader
          title={contentfulPageContent.pageTitle}
          description={contentfulPageContent.pageDescription.pageDescription}
        />
        <BlogPostList blogs={allContentfulBlogPost} />
      </div>
    </Layout>
  );
}

function BlogPostList({ blogs }) {
  return (
    <div
      className="flex flex-col
      space-y-2 md:space-y-4 lg:space-y-6 
      py-2 md:py-4 lg:py-6"
    >
      {blogs.edges.map((el) => (
        <BlogPostLink key={el.node.slug} post={el.node} />
      ))}
    </div>
  );
}

function BlogPostLink({ post }) {
  return (
    <Link className="hover-shadow focus-ring p-2" to={`/blog/${post.slug}`}>
      <h3
        className="text-xl md:text-2xl lg:text-3xl
        text-gray-700 font-semibold tracking-wider
        leading-none md:leading-none"
      >
        {post.title}
      </h3>
      <p className="lg:text-lg font-kanit text-gray-500">
        {post.publicationDate}
      </p>
      <p
        className="lg:text-lg text-gray-800
        leading-tight lg:leading-snug
        pt-1 lg:pt-2"
      >
        {post.description.internal.content}
      </p>
    </Link>
  );
}
