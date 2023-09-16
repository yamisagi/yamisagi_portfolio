// Import React & Flutter Icons URL icon
import { SiReact, SiFlutter } from 'react-icons/si';

interface ProjectData {
  icon: JSX.Element;
  title: string;
  description: string;
  url: string;
}

export const projectData: ProjectData[] = [
  {
    icon: <SiReact />,
    title: 'Nextflix App',
    description:
      'In this project, I built a Netflix clone using Next.js, TypeScript, React, and Tailwind CSS.',
    url: 'https://nextflix-ts-app.vercel.app/',
  },
  {
    icon: <SiReact />,
    title: 'Movie App',
    description:
      "In this project I'm using React, React Router, Firebase, and The Movie Database API. I'm also using React Hooks, React Context API & Firebase Authentication to build this project.",
    url: 'https://movie-app-react-yamisagi.vercel.app/',
  },
  {
    icon: <SiFlutter />,
    title: 'Fashion App',
    description:
      'In this project I built a Fashion App using Flutter, Dart. I also use Context for Theme Management.',
    url: 'https://github.com/yamisagi/Fashion-App-Clone',
  },
  {
    icon: <SiFlutter />,
    title: 'Recipe App',
    description:
      "In this project I'm using Flutter, Dart. I'm also Modals, and Hero Animations to build this project",
    url: 'https://github.com/yamisagi/recipe_app',
  },
  {
    icon: <SiFlutter />,
    title: "TooD'em",
    description:
      'In this project I built a Todo App using Flutter, Dart, and Hive. I also used Riverpod for state management. It is my first project published on Google Play Store.',
    url: 'https://github.com/yamisagi/tood_em',
  },
  {
    icon: <SiFlutter />,
    title: 'Reddit Clone',
    description:
      'In this project I built a Reddit clone using Flutter, Dart, and Firebase. I also used Flutter Riverpod for state management.',
    url: 'https://github.com/yamisagi/reddit_clone',
  },
  {
    icon: <SiFlutter />,
    title: 'News App',
    description:
      'In this project I built a News App using Flutter, Dart, and News API. I also used Query for Search Functionality.',
    url: 'https://github.com/yamisagi/news_app',
  },
];

interface WorkSlides {
  slides: WorkSlide[];
}
interface WorkSlide {
  images: Image[];
}
interface Image {
  title: string;
  path: string;
  url: string;
}

export const workSlides: WorkSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/recipeapp.png',
          url: 'https://github.com/yamisagi/recipe_app',
        },
        {
          title: 'title',
          path: '/toodem.png',
          url: 'https://github.com/yamisagi/tood_em',
        },
        {
          title: 'title',
          path: '/fashionapp.png',
          url: 'https://github.com/yamisagi/Fashion-App-Clone',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/movieapp.png',
          url: 'https://movie-app-react-yamisagi.vercel.app/',
        },
        {
          title: 'title',
          path: '/netflixapp.png',
          url: 'https://nextflix-ts-app.vercel.app/',
        },
      ],
    },
  ],
};
