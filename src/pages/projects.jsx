/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';

import ProjectLinkIcon from '../svg/link.svg';
import GithubLInkIcon from '../svg/github.svg';

const query = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          title
          projectLink
          githubLink
          description {
            description
          }
          image {
            title
            gatsbyImageData(aspectRatio: 1.77777, formats: [AUTO, WEBP])
          }
          technologies {
            title
            description
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl
          text-gray-700 font-semibold tracking-wider px-2"
        >
          Projects
        </h2>
        <ProjectList />
      </div>
    </Layout>
  );
}

function ProjectList() {
  const { allContentfulProject } = useStaticQuery(query);
  return (
    <div
      className="flex flex-row justify-evenly flex-wrap
      py-1 md:py-3 lg:py-5"
    >
      {allContentfulProject.edges.map((project) => (
        <ProjectCard key={project.node.title} data={project.node} />
      ))}
    </div>
  );
}

function ProjectCard({ data }) {
  const image = getImage(data.image);
  return (
    <div
      className="flex flex-col overflow-hidden
      w-96 md:w-80 lg:w-96 mx-3 my-6
      border rounded-lg shadow-lg"
    >
      <GatsbyImage image={image} alt={data.image.title} />
      <div
        className="relative flex flex-col flex-grow items-center
        pt-5 pb-2 px-2"
      >
        <h3
          className="absolute -top-5 px-2
          bg-white border shadow-md rounded-lg
          text-gray-700 text-2xl font-semibold tracking-wider"
        >
          {data.title}
        </h3>
        <p
          className="flex-grow overflow-auto my-1 
          text-gray-800 lg:text-lg max-h-24 lg:max-h-28"
        >
          {data.description.description}
        </p>
        <TechnologyList technologies={data.technologies} />
        <ProjectLinks data={data} />
      </div>
    </div>
  );
}

function ProjectLinks({ data }) {
  return (
    <div className="flex flex-row justify-evenly font-kanit w-full">
      <Link link={data.projectLink} text="Visit Project">
        <ProjectLinkIcon className="w-4 h-4 mr-2" />
      </Link>
      <Link link={data.githubLink} text="Visit on Github">
        <GithubLInkIcon className="w-4 h-4 mr-2" />
      </Link>
    </div>
  );
}

function Link({ link, children, text }) {
  return (
    <a
      className="focus-ring hover-shadow
      flex flex-row items-center
      text-gray-700
      px-2 py-1"
      href={link}
      target="_"
    >
      {children}
      <p className="font-kanit">{text}</p>
    </a>
  );
}

function TechnologyList({ technologies }) {
  return (
    <div className="flex flex-row justify-center space-x-5 py-3">
      {technologies.map((el) => (
        <img
          className="h-8"
          key={el.title}
          src={el.file.url}
          alt={el.description}
          title={el.description}
        />
      ))}
    </div>
  );
}
