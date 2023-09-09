// import React from 'react';
import { FaHtml5, FaCss3, FaJs,  FaReact, FaSass, FaGithub, FaNodeJs, FaGit, FaNpm } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiMongodb, SiNetlify, SiVisualstudiocode } from 'react-icons/si';

const skillsData = [
  {
    name: 'HTML',
    description: 'Markup language for creating web pages.',
    icon: <FaHtml5 size={60} color='#e44d26' />,
  },
  {
    name: 'CSS',
    description: 'Stylesheet language for web page design.',
    icon: <FaCss3 size={60} color='#264de4' />,
  },
  {
    name: 'JavaScript',
    description: 'Programming language for web development.',
    icon: <FaJs size={60} color='#f7df1e' />,
  },
  {
    name: 'MySQL',
    description: 'Relational database management system.',
    icon: <SiMysql size={60} color='#4479A1' />,
  },
  {
    name: 'React JS',
    description: 'JavaScript library for building user interfaces.',
    icon: <FaReact size={60} color='#61DAFB' />,
  },
  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for web development.',
    icon: <SiTailwindcss size={60} color='#38B2AC' />,
  },
  {
    name: 'SCSS',
    description: 'CSS preprocessor for more powerful stylesheets.',
    icon: <FaSass size={60} color='#CD6799' />,
  },
  {
    name: 'Mongo DB',
    description: 'NoSQL database for modern applications.',
    icon: <SiMongodb size={60} color='#47A248' />,
  },
  {
    name: 'Git',
    description: 'Version control system for tracking changes in code.',
    icon: <FaGit size={60} color='#F05032' />,
  },
  {
    name: 'GitHub',
    description: 'Web-based platform for version control and collaboration.',
    icon: <FaGithub size={60} color='#181717' />,
  },
  {
    name: 'VS Code',
    description: 'A popular code editor developed by Microsoft.',
    icon: <SiVisualstudiocode size={60} color='#007ACC' />,
  },
  {
    name: 'Netlify',
    description: 'A platform for hosting and deploying web projects.',
    icon: <SiNetlify size={60} color='#00C7B7' />,
  },
  {
    name: 'Node.js',
    description: 'JavaScript runtime for server-side development.',
    icon: <FaNodeJs size={60} color='#339933' />,
  },
  {
    name: 'NPM',
    description: 'Node Package Manager for managing JavaScript packages.',
    icon: <FaNpm size={60} color='#CB3837' />,
  },
];

const Skills = () => {
  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center justify-center">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mt-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;



