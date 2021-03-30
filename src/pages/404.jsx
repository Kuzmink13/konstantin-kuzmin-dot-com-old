/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/head';

export default function NotFoundPage() {
  return (
    <Layout>
      <Head title="404" desc="Page Not Found" />
      <div className="max-w-screen-sm mx-auto">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl
          text-gray-700 font-semibold tracking-wider
          leading-none md:leading-none mb-12
          py-2 md:py-3 lg:py-4 px-2"
        >
          Page Not Found
        </h2>
        <Link
          className="hover-shadow focus-ring px-2 py-1
          font-kanit font-medium text-gray-700 md:text-lg lg:text-xl"
          to="/"
        >
          Back to Site
        </Link>
      </div>
    </Layout>
  );
}
