/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="max-w-screen-sm mx-auto">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl
          text-gray-700 font-semibold tracking-wider
          leading-none md:leading-none 
          py-2 md:py-3 lg:py-4 px-2"
        >
          Page Not Found
        </h2>
        <Link
          className="hover-shadow focus-ring px-2 py-1 
          font-kanit text-gray-700 md:text-lg lg:text-xl"
          to="/"
        >
          Go Home
        </Link>
      </div>
    </Layout>
  );
}
