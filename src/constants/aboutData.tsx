import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
} from 'react-icons/fa';
import {
  SiFlutter,
  SiDart,
  SiNextdotjs,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
  SiRedux,
} from 'react-icons/si';

interface AboutData {
  title: string;
  info: {
    title: string;
    icons?: JSX.Element[];
    stage?: string;
  }[];
}

export const aboutData: Array<AboutData> = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={'html'} />,
          <FaCss3Alt key={'css'} />,
          <FaJsSquare key={'js'} />,
          <SiRedux key={'redux'} />,
          <FaReact key={'react'} />,
          <SiNextdotjs key={'next'} />,
          <SiTypescript key={'ts'} />,
          <SiBootstrap key={'bs'} />,
          <SiTailwindcss key={'tw'} />,
        ],
      },
      {
        title: 'Mobile Development',
        icons: [
          <SiFlutter key={'flutter'} />,
          <SiDart key={'dart'} />,
          <SiMui key={'mui'} />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Frontend Developer Intern - Clarusway',
        stage: 'April 2023 - September 2023',
      },
      {
        title: 'Technical Consultant - CNDN Sigorta',
        stage: 'September 2018 - June 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development Diploma - Clarusway',
        stage: '2023',
      },
      {
        title: 'Web Development With React - Clarusway',
        stage: '2023',
      },
      {
        title: 'GDG London Development With Flutter - Google Flutter Team',
        stage: '2022',
      },
      {
        title: 'Application Development With Flutter - Google',
        stage: '2022',
      },
    ],
  },
];
