/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import Layout from '../components/Layout';
import { Bold, Heading1, Text } from '../components/Markdown';

export default function BlogPost({ data }) {
  return (
    <Layout>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publicationDate}</p>
      <BlogContent content={data.contentfulBlogPost.content} />
    </Layout>
  );
}

function BlogContent({ content }) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };
  return <article>{renderRichText(content, options)}</article>;
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publicationDate(formatString: "MMMM Do, YYYY")
      content {
        raw
      }
    }
  }
`;
