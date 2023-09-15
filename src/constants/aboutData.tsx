import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import {
  SiFlutter,
  SiDart,
  SiNextdotjs,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
} from 'react-icons/si';

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={'html'} />,
          <FaCss3Alt key={'css'} />,
          <FaJsSquare key={'js'} />,
          <FaReact key={'react'} />,
          <SiNextdotjs key={'next'} />,
          <SiTypescript key={'ts'} />,
          <SiBootstrap key={'bs'} />,
          <SiTailwindcss key={'tw'} />,
          <SiMui key={'mui'} />,
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
        title: 'Technical Consultant - CNDN Sigorta',
        stage: 'September 2018 - June 2023',
      },
      {
        title: 'Frontend Developer Intern - Clarusway',
        stage: 'April 2023 - September 2023',
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
