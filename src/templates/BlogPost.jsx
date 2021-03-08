/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { graphql, Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import Layout from '../components/Layout';
import {
  Break,
  Heading3,
  Heading4,
  HyperLInk,
  Text,
} from '../components/Markdown';

import Arrow from '../svg/arrow-thin-left.svg';

export default function BlogPost({ data }) {
  return (
    <Layout>
      <div className="max-w-screen-sm mx-auto px-2">
        <ReturnButton />
        <BlogHeader
          title={data.contentfulBlogPost.title}
          date={data.contentfulBlogPost.publicationDate}
        />
        <BlogContent content={data.contentfulBlogPost.content} />
      </div>
    </Layout>
  );
}

function ReturnButton() {
  return (
    <div className="flex justify-end">
      <Link
        className="flex items-center flex-shrink
        hover-shadow focus-ring whitespace-nowrap
        text-gray-500 px-2 py-1"
        to="/blog"
      >
        <Arrow className="w-3 h-3 mr-2" />
        <p className="font-kanit md:text-lg flex-shrink">Back</p>
      </Link>
    </div>
  );
}

function BlogHeader({ title, date }) {
  return (
    <>
      <h2
        className="text-2xl md:text-3xl lg:text-4xl 
        text-gray-700 font-semibold tracking-wider"
      >
        {title}
      </h2>
      <p
        className="md:text-lg lg:text-xl
        font-kanit text-gray-500 leading-none"
      >
        {date}
      </p>
    </>
  );
}

function BlogContent({ content }) {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.HEADING_4]: (node, children) => <Heading4>{children}</Heading4>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HR]: () => <Break />,
      [INLINES.HYPERLINK]: (node, children) => (
        <HyperLInk data={node.data}>{children}</HyperLInk>
      ),
    },
  };
  return (
    <article className="py-4 lg:py-6">
      {renderRichText(content, options)}
    </article>
  );
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
