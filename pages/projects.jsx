/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

// import Image from 'next/image';
import * as svg from '../public/svg.json';

const myProjects = [
  {
    title: "Composer's Reference",
    description:
      'An interactive music theory resource designed as a companion to the songwriting process. Built with React and TailwindCSS. Music engraving by VexFlow.js.',
    img: {
      src: '/compref_grayscale.png',
      alt: "composer's reference landing page",
      // width: 724,
      // height: 458,
    },
    links: [
      {
        title: "composer's reference link",
        text: 'Visit Project',
        icon: svg.link,
        url: 'https://www.composersreference.com',
      },
      {
        title: "composer's reference github link",
        text: 'Visit on Github',
        icon: svg.github,
        url: 'https://www.github.com/Kuzmink13/Composers-Reference',
      },
    ],
  },
  {
    title: 'KonstantinKuzmin.com',
    description:
      'A simple, responsive website that serves as my home on the internet. Built with React, Next.js and TailwindCSS.',
    img: {
      src: '/kkdotcom.png',
      alt: 'konstantinkuzmin.com landing page',
      // width: 972,
      // height: 574,
    },
    links: [
      {
        title: 'konstantinkuzmin.com github link',
        text: 'Visit on Github',
        icon: svg.github,
        url: 'https://www.github.com/Kuzmink13/konstantin-kuzmin-dot-com',
      },
    ],
  },
];

function Project({ project, flip = false }) {
  return (
    <div
      className={`flex flex-col ${
        flip ? 'md:flex-row-reverse' : 'md:flex-row'
      } justify-between pb-8 md:pb-0`}
    >
      <div className="flex flex-col justify-center w-80 mx-auto md:w-full p-2 md:p-4">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="flex flex-row justify-center space-x-8 mt-3">
          {project.links.map((link) => (
            <li key={link.title}>
              <a
                href={link.url}
                target="_"
                className="flex flex-row space-x-2 items-center"
              >
                <svg viewBox={link.icon.viewbox} className="w-4 h-4">
                  <title>{link.title}</title>
                  <path d={link.icon.path} />
                </svg>
                <div className="font-kanit align-middle">{link.text}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="w-80 flex-shrink-0 m-2 md:m-4 mx-auto border"> */}
      <img
        className="w-80 flex-shrink-0 m-2 md:m-4 mx-auto border"
        alt={project.img.alt}
        src={project.img.src}
        // width={project.img.width}
        // height={project.img.height}
        // quality={50}
      ></img>
      {/* </div> */}
    </div>
  );
}

export default function projects() {
  return (
    <div className="w-full max-w-screen-md mx-auto">
      {/* <h2 className="px-2 md:px-4 mx-auto w-80 md:w-full">Projects</h2> */}
      {myProjects.map((project, i) => (
        <Project key={project.title} {...{ project }} flip={i % 2} />
      ))}
    </div>
  );
}
