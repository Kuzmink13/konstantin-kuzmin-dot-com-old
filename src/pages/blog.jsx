/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

const query = graphql`
  query {
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
  return (
    <Layout>
      <div className="max-w-screen-sm mx-auto">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl 
          text-gray-700 font-semibold tracking-wider px-2"
        >
          Blog
        </h2>
        <BlogPostList />
      </div>
    </Layout>
  );
}

function BlogPostList() {
  const { allContentfulBlogPost } = useStaticQuery(query);
  return (
    <div
      className="flex flex-col
      space-y-2 md:space-y-4 lg:space-y-6 
      py-2 md:py-4 lg:py-6"
    >
      {allContentfulBlogPost.edges.map((el) => (
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
        text-gray-700 font-semibold tracking-wider leading-none"
      >
        {post.title}
      </h3>
      <h4 className="lg:text-lg text-gray-500">{post.publicationDate}</h4>
      <p
        className="lg:text-lg text-gray-800
        pt-1 lg:pt-2"
      >
        {post.description.internal.content}
      </p>
    </Link>
  );
}
