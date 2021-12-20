const projects = [
  {
    image: '/image/booking.png',
    type: 'MERN-Stack',
    name: 'Booking App',
    features: 'Javascript, React, Redux, Node.js, Express, Mongoose',
    rating: '5',
    category: 'Landing and ecommerce',
    supported: '1 year of free updates 6 months technical support, 100% money-back guarantee*',
    numReviews: '4.5',
    live: 'https://booking-mernstack.herokuapp.com',
    source: 'https://github.com/abdurrahmanakaid/Booking',
    description:
      'Feature an Hotel Booking platform with React, Redux, Node, Express & MongoDB.Full featured Booking cart with PayPal & credit/debit payments.An actual real-world project built in a linear and progressive manner.Admin area to manage customers, room & orders. Room rating & review system, Room search, carousel, pagination & more.',
  },
  {
    image: '/image/gadgetworld.png',
    type: 'MERN-Stack',
    name: 'MERN ECommerce',
    features: 'Javascript, React, Redux, Node.js, Express, Mongoose',
    rating: '5',
    category: 'Landing and ECommerce',
    supported: '1 year of free updates 6 months technical support, 100% money-back guarantee*',
    numReviews: '5',
    live: 'https://gadgetworldsdp.herokuapp.com',
    source: 'https://github.com/abdurrahmanakaid',
    description:
      'Feature an eCommerce platform with React, Redux, Node, Express & MongoDB.Full featured shopping cart with PayPal & credit/debit payments.An actual real-world project built in a linear and progressive manner. Admin area to manage customers, products & orders.Product rating & review system , Product search, carousel, pagination & more.',
  },
  {
    image: '/image/notebook.png',
    type: 'MERN-Stack',
    name: 'Notebook MERN-Stack',
    features: 'Javascript, React, Redux, Node.js, Express, Mongoose',
    rating: '3.5',

    category: 'Landing & Infomation',
    supported: '1 year of free updates 6 months technical support, 100% money-back guarantee*',
    numReviews: '4.5',
    live: 'https://notebook-mernstack.herokuapp.com/',
    source: 'https://github.com/abdurrahmanakaid/Notebook',
    description:
      'Feature Notebook app platform with React, Redux, Node, Express & MongoDB. An actual real-world project built in a linear and progressive manner. Note Crud Operations with authenticaion and image uploading use Cloudinary. Deploy to production using Heroku.',
  },
  {
    image: '/image/disco.png',
    type: 'Frontend & Backend',
    name: 'Disco App',
    features: 'Javascript, Nextjs, Frontend, Strapi CMS, Backend',
    rating: '5',
    category: 'Landing & Corporate',
    supported: '1 year of free updates 6 months technical support, 100% money-back guarantee*',
    numReviews: '4',

    live: 'https://disco-akaid.vercel.app',
    source: 'https://github.com/abdurrahmanakaid/disco',
    description:
      'Build a Disco event application from start to finish. fundamentals of NextJS.Create a backend using Strapi CMS,JWT Authentication / HttpOnly Cookie Storage.Pagination, search, image uploading with Cloudinary',
  },
  {
    image: '/image/estartup.png',
    type: 'Frontend',
    name: 'eStartup',
    features: 'Javascript, React',
    rating: '4.5',
    category: 'Landing & Corporate',
    supported: '1 year of free updates 6 months technical support, 100% money-back guarantee*',
    numReviews: '5',
    live: 'https://estartup-react.netlify.app/',
    source: 'https://github.com/abdurrahmanakaid/eStartup',
    description:
      'Welcome to eStartup A startup or start-up is a company or project undertaken by an entrepreneur to seek, develop, and validate a scalable business model. & more',
  },
  {
    image: '/image/theevent.png',
    type: 'Frontend',
    name: 'the event',
    features: 'Javascript, React',
    rating: '4',
    category: 'Landing & Corporate',
    supported: '1 year of free updates 6 months technical support, 100% money-back guarantee*',
    numReviews: '5',
    live: 'https://theevent-react.netlify.app/',
    source: 'https://github.com/abdurrahmanakaid/TheEvent',
    description:
      'About The Event Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut accusantium et. Non odit consequatur repudiandae sequi ea odio molestiae. Enim possimus sunt inventore in est ut optio sequi under',
  },
  {
    image: '/image/hostguru.png',
    type: 'MERN-Stack',
    name: 'Hostguru Web Hosting Provider',
    features: 'Javascript, React, Express, Mongoose',
    rating: '3',
    category: 'Landing & Corporate',
    supported: '1 year of free updates 6 months technical support, 100% money-back guarantee*',
    numReviews: '4.5',
    live: 'https://hostguru.netlify.app/',
    source: 'https://github.com/abdurrahman200/Host-Guru-Frontend',
    description:
      'There are many reasons why individuals or companies want to change to a new web hosting company. It could be as simple as not enough storage space or bandwidth, or it could be due to its customer service, or lack thereof. Easier said than done? Changing to a new web hosting company may sound like a daunting task, but it doesnt have to be that complex - there are just a few things to keep in mind',
  },
  {
    image: '/image/stack.png',
    type: 'Frontend',
    name: 'Stack CLI Hosting Provider',
    features: 'Javascript, React',
    rating: '4',
    category: 'Landing & Corporate',
    supported: '1 year of free updates 6 months technical support, 100% money-back guarantee*',
    numReviews: '5',
    live: 'https://stack-react.netlify.app/',
    source: 'https://github.com/abdurrahmanakaid/StackPractice',

    description:
      'Welcome to the best platform for building applications of all types with modern architecture and scaling.Easier Deployment Deploy web apps of all kinds, from large scale enterprise APIs to static websites for individuals. Fill out the form to try a demo of our platform.',
  },
  {
    image: '/image/Travel.png',
    type: 'Frontend',
    name: 'Travel App',
    features: 'Javascript, SASS, Context API, React',
    rating: '4',
    category: 'Landing & Corporate',
    supported: '1 year of free updates 6 months technical support, 100% money-back guarantee*',
    numReviews: '4.5',
    live: 'https://world-travelers.netlify.app/',
    source: 'https://github.com/abdurrahman200/Travel',
    description:
      'CSS Flexbox Sass or Scss, React JS library Context API React RoutingVanilla javascript scroll animations.Accordion with pure React js ,Image lazy loading with React js.SEO optimized React pages with Helmet',
  },
  {
    image: '/image/doctor.png',
    type: 'Frontend',
    name: 'Health Care Doctor App',
    features: 'Javascript, React, Context API, Firebase',
    rating: '3',
    category: 'Landing & Corporate',
    supported: '1 year of free updates 6 months technical support, 100% money-back guarantee*',
    numReviews: '4',
    live: 'https://doctor-chai.netlify.app',
    source: 'https://github.com/abdurrahmanakaid/Doctor',
    description:
      'A patient portal is a website for your personal health care. The online tool helps you to keep track of your health care provider visits, test results, billing, prescriptions, and so on. You can also e-mail your provider questions through the portal. Many providers now offer patient portals.,CSS Flexbox Sass or Scss, React JS library Context API React RoutingVanilla javascript scroll animations.Accordion with pure React js ,Image lazy loading with React js.SEO optimized React pages with Helmet',
  },
  {
    image: '/image/day.png',
    type: 'Frontend',
    name: 'DAY',
    features: 'Javascript, React,',
    rating: '4',
    category: 'Landing & Corporate',
    supported: '1 year of free updates 6 months technical support, 100% money-back guarantee*',
    numReviews: '5',
    live: 'https://day-react.netlify.app/',
    source: 'https://github.com/abdurrahmanakaid/Day',
    description:
      'WELCOME TO DAY We are team of talented designers making websites with Bootstrap.Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
  },
]

export default projects