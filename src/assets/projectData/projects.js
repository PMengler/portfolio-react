import Barcelona from '../images/Barcelona.jpeg';
// import MeetIO from '../images/MeetIO.png';
import River from '../images/RiverRunner.jpeg';
// import Workday from '../images/WorkdayScheduler.jpeg';
import Blog from '../images/Blog.jpeg';
// import Texter from '../images/Texter.jpeg';
import Glazed from '../images/GlazedandConfused.jpeg';

export const projects = [
  {
    id: 0,
    title: 'Glazed and Confused',
    subtitle: 'Technologies...',
    description:
      'This project is a MERN full stack application that I created alongside 4 other team members in 9 days for our final project during bootcamp. Powered by React.',
    image: Glazed,
    link: 'https://glazed-and-confused.herokuapp.com/',
  },
  // {
  //   title: 'MeetIO',
  //   subtitle: 'Technologies...',
  //   description: 'Calendar App',
  //   image: MeetIO,
  //   link: 'https://meet-io-project2-group5.herokuapp.com/',
  // },
  {
    id: 1,
    title: 'River Runner',
    subtitle: 'Technologies...',
    description:
      'My first group project during bootcamp created alongside 3 other team members. Created using basic HTML handlebars and bootstrap. This application utilizes the Google Maps API and a USGS watershed API.',
    image: River,
    link: 'https://pmengler.github.io/river_runner/',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    subtitle: 'API Queries and Javascript',
    description:
      'A basic weather forecast app that utilizes the OpenWeather API. This project was created solo using API Queries and vanilla JavaScript.',
    image: Barcelona,
    link: 'https://pmengler.github.io/Weather-Dashboard-App/',
  },
  // {
  //   title: 'Workday Scheduler',
  //   subtitle: 'Technologies...',
  //   description: 'Plan your day',
  //   image: Workday,
  //   link: 'https://pmengler.github.io/My-Workday-Scheduler/',
  // },
  {
    id: 3,
    title: 'Tech Nerd Blog',
    subtitle: 'Technologies...',
    description:
      'A full stack application that allows users to create, edit, and delete blog posts.',
    image: Blog,
    link: 'https://tech-nerd-blog.herokuapp.com/',
  },
  // {
  //   title: 'Just Another Text Editor',
  //   subtitle: 'JATE PWA',
  //   description: 'JATE',
  //   image: Texter,
  //   link: 'https://texter-pwa.herokuapp.com/',
  // },
];
