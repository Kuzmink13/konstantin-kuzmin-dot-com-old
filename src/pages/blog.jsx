/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publicationDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publicationDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`;

export default function Blog() {
  return (
    <Layout>
      blog
      <BlogPostList />
    </Layout>
  );
}

function BlogPostList() {
  const { allContentfulBlogPost } = useStaticQuery(query);
  return (
    <div>
      {allContentfulBlogPost.edges.map((el) => (
        <BlogPost key={el.node.slug} post={el.node} />
      ))}
    </div>
  );
}

function BlogPost({ post }) {
  return (
    <div>
      {post.title}
      {post.slug}
      {post.publicationDate}
    </div>
  );
}
