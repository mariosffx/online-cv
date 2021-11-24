const sidePartData = {
  firstName: 'Marios',
  lastName: 'Toparopoulos',
  profession: 'Software Engineer',
  contactDetails: [
    {
      icon: 'location',
      text: 'Athens, Greece',
    },
    {
      icon: 'phone',
      type: 'link',
      text: '+306947158688',
      link: 'tel:+306947158688',
    },
    {
      icon: 'linkedin',
      type: 'link',
      text: 'linkedin/in/mariosffx',
      link: 'https://www.linkedin.com/in/mariosffx',
    },
    {
      icon: 'email',
      type: 'link',
      text: 'marios@web-coders.net',
      link: 'mailto:marios@web-coders.net',
    },
  ],

  languages: [
    {
      icon: 'greek',
      text: 'Greek',
      details: 'Native',
    },
    {
      icon: 'english',
      text: 'English',
      details: 'Fluent - C2 - Proficiency',
    },
    // {
    //   icon: 'russian',
    //   text: 'Russian',
    //   details: 'Elementary',
    // },
  ],
  skills: [
    {
      icon: 'react',
      text: 'Front-End',
      details: 'React.JS, Redux, Axios, Jest', // Next.JS, Gatsby.JS,
    },
    {
      icon: 'design',
      text: 'UI/UX Libraries',
      details: 'Material-UI, CSS Modules', // Chakra-UI, Styled-Components
    },
    {
      icon: 'server',
      text: 'Back-End',
      details: 'NodeJS with Express',
    },
    {
      icon: 'code',
      text: 'Programming Languages',
      details: 'TypeScript, JavaScript', // Python
    },
    // {
    //   icon: 'db',
    //   text: 'Databases',
    //   details: 'PostgreSQL, MySQL, MongoDB, Firebase, GraphQL',
    // },
    {
      icon: 'tools',
      text: 'Tools',
      details: 'Git, DBeaver, Postman, VSCode', // Docker, Agile, Confluence, Swagger, WebStorm
    },
    {
      icon: 'os',
      text: 'Operating Systems',
      details: 'Linux, Windows',
    },
    {
      icon: 'miscComp',
      text: 'Misc.',
      details: 'HTML5, CSS3',
    },
  ],
  miscSkills: [
    {
      icon: 'drive',
      text: `Driver's License`,
      details: 'A, B',
    },
    {
      icon: 'languages',
      text: 'Languages',
      details: 'English (Proficient), Greek (Native)', // Russian
    },
  ],
};

export default sidePartData;
