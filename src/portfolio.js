/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Njål Wiik",
  logo_name: "NjaalWiik",
  nickname: "NW",
  subTitle:
    "Innovative and performance-driven Entrepreneur with a passion for technology and business.",
  resumeLink: "https://1drv.ms/b/s!Aon_IUIXmEkng8NYO59MW_7FzNdnPQ?e=Ys8aX7",
  portfolio_repository: "https://github.com/NjaalWiik/portfolio-njaalwiik",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/njaalwiik",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/njaal-wiik/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:njaal.wiik@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/NjalWiik",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/Njaal.Wiik",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/njaal.wiik/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing applications using microservices ",
        "⚡ Creating application backend in Node and Express",
        "⚡ Hosting and maintaining websites along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        `⚡ Developed machine learning models for one of Norway's largest retail brands`,
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "vscode-icons:file-type-numpy",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Setting up Docker and Kubernetes clusters",
        "⚡ Creating deep learning models on cloud",
        "⚡ Experienced with SQL and NoSQL",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "vscode-icons:file-type-graphql",
          style: {
            color: "#E635AB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Finance & Business",
      fileName: "FinanceImg",
      skills: [
        "⚡ 4+ years of experience in most aspects of business, development, operations, finance and analytics.",
        "⚡ Bachelor of Finance and a MSc in Business Analytics",
        "⚡ Fun fact: I co-founded a profitable tech startup with more than 8.000 customers. (Alura.io)",
      ],
      softwareSkills: [
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel2",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "PowerPoint",
          fontAwesomeClassname: "vscode-icons:file-type-powerpoint",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "logos:google-analytics",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Teams",
          fontAwesomeClassname: "mdi:DataCamp-teams",
          style: {
            color: "#767FE2",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: 'HackerRank',
    //   iconifyClassname: 'simple-icons:udemy',
    //   style: {
    //     color: '#2EC866'
    //   },
    //   profileLink: 'https://www.hackerrank.com/layman_brother'
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "BI Norwegian Business School",
      subtitle: "Master of Science in Business Analytics",
      logo_path: "bi.png",
      alt_name: "BI Norwegian Business School",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ A future-oriented program combining the field of data science, development and business.",
        "⚡ Focus areas were python, SQL, statistics, mathematical optimization and machine learning.",
        "⚡ I was selected for the deans list and received the grade A on my master thesis about using machine learning for Customer Lifetime Value.",
      ],
      website_link:
        "https://www.bi.edu/programmes-and-individual-courses/master-programmes/business-analytics/",
    },
    {
      title: "BI Norwegian Business School",
      subtitle: "Bachelor of Finance",
      logo_path: "bi.png",
      alt_name: "BI Norwegian Business School",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ Prepared me to plan, manage, and analyze the financial performance of business enterprises, startups, or projects.",
        "⚡ Studied how to understand and analyze financial data, make business assessments and make profitable and responsible decisions that are in the best interests of the company and society.",
        "⚡ Learn how to handle and analyze large amounts of data using Excel, coding, Bloomberg software, and statistical methods.",
      ],
      website_link: "https://www.bi.no/studier-og-kurs/bachelorstudier/finans/",
    },
    {
      title: "Officer Candidate School",
      subtitle: "Leadership & Instructor",
      logo_path: "forsvaret.png",
      alt_name: "BI Norwegian Business School",
      duration: "2014",
      descriptions: [
        "⚡ Practical experience planning, manage, and present for teams. Responsible for 50 military recruits in their military training.",
        "⚡ Experience with stress management and the leadership role in a challenging and high-intensity environment.",
        '⚡ My troop won the prizes: "Best Overall Troop" and "Best Shooters".',
      ],
      website_link: "https://forsvaret.no",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python for Everybody Specialization",
      subtitle: "- Charles Russell Severance",
      logo_path: "umich2.jpeg",
      certificate_link:
        "https://coursera.org/share/8175456c2e9a2ca43f0167ca8110ae41",
      alt_name: "University of Michigan",
      color_code: "#03467B",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/c374484fc64a689a0ca040f5ed6d8008",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Machine Learning with TensorFlow on Google Cloud Platform",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/23d5d0b1612edd61a3840f8091783527",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Full Stack JavaScript",
      subtitle: "- Team Treehouse",
      logo_path: "treehouse.png",
      certificate_link:
        "https://teamtreehouse.com/tracks/full-stack-javascript",
      alt_name: "Treehouse",
      color_code: "#f9fafa",
    },
    {
      title: "Google Analytics for Beginners",
      subtitle: "- Google Analytics",
      logo_path: "google_logo.png",
      certificate_link:
        "https://analytics.google.com/analytics/academy/certificate/vx-OT3h-TB2Z5tLlMuPLlg",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      subtitle: "- Susan H. Rodger",
      logo_path: "duke.jpeg",
      certificate_link:
        "https://coursera.org/share/5f1598dab58d2a87c77eea142a67b546",
      alt_name: "GCP",
      color_code: "#02529B",
    },
    {
      title: "Introduction to Deep Learning in Python",
      subtitle: "- DataCamp Team",
      logo_path: "datacamp.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/bc98500fcd396beee19176a7b554c142628aa5ba",
      alt_name: "DataCamp",
      color_code: "#f9fafa",
    },
    {
      title: "Machine Learning for Time Series Data in Python",
      subtitle: "- DataCamp Team",
      logo_path: "datacamp.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/66c3eae1546d1580487396a8b714c9faa7c89767",
      alt_name: "DataCamp",
      color_code: "#f9fafa",
    },
    {
      title: "Supervised Learning with scikit-learn",
      subtitle: "- DataCamp Team",
      logo_path: "datacamp.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/a1ba2c9e6026e3c2dcdd385eac63474888f4d997",
      alt_name: "DataCamp",
      color_code: "#f9fafa",
    },
    {
      title: "Unsupervised Learning in Python",
      subtitle: "- DataCamp Team",
      logo_path: "datacamp.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/d49c12f4a385271b67b47bd07c832c6d2f02d85d",
      alt_name: "DataCamp",
      color_code: "#f9fafa",
    },
    {
      title: "Web Scraping in Python",
      subtitle: "- DataCamp Team",
      logo_path: "datacamp.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/d90bae5225fece62a19ad1a10d8464fef35404fe",
      alt_name: "DataCamp",
      color_code: "#f9fafa",
    },
    {
      title: "Customer Segmentation in Python",
      subtitle: "- DataCamp Team",
      logo_path: "datacamp.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/81e37426fd15cfbf973ae8436ca4af4dd603a2c4",
      alt_name: "DataCamp",
      color_code: "#f9fafa",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Innovative and performance-driven Entrepreneur with a passion for technology and business. 4+ years of experience in most aspects of business, development, operations, finance, and analytics.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full Stack Developer Consultant",
          company: "Applied Technology",
          company_url: "https://salt.dev/",
          logo_path: "salt.png",
          duration: "Apr 2020 - PRESENT",
          location: "Oslo, Norway",
          description:
            "Intensive three month training program for full stack web development, before I started working as a full stack developer consultant. ",
          color: "#222425",
        },
        {
          title: "Co-Founder",
          company: "Alura.io",
          company_url: "https://www.alura.io/",
          logo_path: "alura.png",
          duration: "Sep 2019 - PRESENT",
          location: "Oslo, Norway",
          description:
            "Build a profitable SaaS company with a co-student, during our studies. The service optimize e-commerce sellers listings and products using machine learning. 8.000+ customers to date.",
          color: "#3C61E2",
        },
        {
          title: "Digital Business Developer",
          company: "Kommunalbanken",
          company_url: "https://www.kbn.com/",
          logo_path: "kbn.png",
          duration: "Aug 2017 - May 2020",
          location: "Oslo, Norway",
          description:
            "Collaborate with business owners to define the business strategy and collaborate with the Agile development team for its implementation. E.g. implementation of business Intelligence, automation of financial  reports, created risk models and customer analysis.",
          color: "#043D5C",
        },
        {
          title: "PR Representative",
          company: "BI Norwegian Business School",
          company_url: "https://www.bi.no/",
          logo_path: "bi.png",
          duration: "Aug 2017 - May 2020",
          location: "Oslo, Norway",
          description:
            "Collaborate with business owners to define the business strategy and collaborate with the Agile development team for its implementation. E.g. implementation of business Intelligence, automation of financial  reports, created risk models and customer analysis.",
          color: "#056CB4",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Analyst Internship",
          company: "Malling & Co",
          company_url: "https://www.delhivery.com/",
          logo_path: "malling.png",
          duration: "Aug 2017 - Nov 2017",
          location: "Oslo, Norway",
          description:
            "Collected data and developed a model of the Norwegian commercial property transaction market.",
          color: "#766341",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Class President",
          company: "Class of 2018, M.Sc. in Business Analytics",
          company_url: "https://about.google/",
          logo_path: "bi.png",
          duration: "Aug 2018 - Jun 2020",
          location: "Oslo, Norway",
          description:
            "In charge of improving the visibility of the program and commitment of BA students. Furthermore, creating a platform for networking and knowledge exchange opportunities between students and businesses.",
          color: "#056CB4",
        },
        {
          title: "CFO",
          company: "Happy Norwegian",
          company_url: "https://happynorwegian.no/",
          logo_path: "hn.png",
          duration: "Des 2017 - Aug 2019",
          location: "Oslo, Norway",
          description:
            "My tasks include financial planning, management of financial risks, record-keeping, and financial reporting.",
          color: "#E97F43",
        },
        {
          title: "President, Student Union",
          company: "Kollektivet",
          company_url: "https://www.mozilla.org/",
          logo_path: "kollektivet.png",
          duration: "Mar 2017 - Apr 2018",
          location: "Oslo, Norway",
          description:
            "My responsibility for this program was to create and hold eight larger events per year, leading a team of six people.",
          color: "#000000",
        },
        {
          title: "Volunteer Staff",
          company: "Samfunnet Bislet, Oslo Mets",
          company_url: "https://www.samfunnetbislet.no/",
          logo_path: "samf.png",
          duration: "Des 2016 - Jun 2018",
          location: "Oslo, Norway",
          description:
            "Samfunnet Bislet offers concerts, Wednesday quizzes, stand-up, StorySLAM, karaoke, game night, improshov, big band karaoke and much more.",
          color: "#A7262A",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. In my opinion, coding and analytics are the most empowering skills you can learn. Because it provides the ability to create anything that comes to mind with only a computer.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "njw.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Full Stack Development, Business, Finance, ML and AI.",
  },
  // blogSection: {
  //   title: 'Blogs',
  //   subtitle:
  //     'For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.',
  //   link: 'https://ashutoshhathidara.wordpress.com',
  //   avatar_image_path: 'blogs_image.svg'
  // },
  addressSection: {
    title: "Contact",
    subtitle: "Njaal.Wiik@gmail.com",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.no/maps/place/Oslo/@59.8939021,10.5049442,10z/data=!3m1!4b1!4m5!3m4!1s0x46416e61f267f039:0x7e92605fd3231e9a!8m2!3d59.9138688!4d10.7522454",
  },
  // phoneSection: {
  //   title: 'Phone Number',
  //   subtitle: '+91 8320758513'
  // }
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
