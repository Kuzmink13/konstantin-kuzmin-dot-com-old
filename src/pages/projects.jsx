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
      py-2 md:py-4 lg:py-6"
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
    <div className="w-96 md:w-80 lg:w-96 m-3 border rounded-lg overflow-hidden shadow-lg">
      <GatsbyImage image={image} alt={data.image.title} />
      <div className="relative flex flex-col items-center pt-5 pb-2 px-2">
        <h3
          className="absolute -top-6 text-2xl bg-white border shadow-md rounded-lg
        text-gray-700 font-semibold tracking-wider px-2"
        >
          {data.title}
        </h3>
        <p className="my-1 text-gray-800 lg:text-lg h-24 lg:h-28 overflow-auto">
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
    <div className="w-full flex flex-row justify-evenly font-kanit">
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
    <div className="flex flex-row justify-center space-x-4 py-2">
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
