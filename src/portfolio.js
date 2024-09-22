/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pratiksha",
  title: "Hi all, I'm Pratiksha",
  subTitle: emoji(
    "I am a passionate Software Engineer and Data Engineer with a strong focus on building scalable, efficient solutions. With hands-on experience in cloud computing, big data technologies, and full-stack development, I enjoy solving complex problems in both data engineering and software development. I am always keen to explore new technologies and contribute to impactful projects that merge my expertise in both fields."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XpFmY0GC-epYP8bYj9FoD2digc4DLAjK/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pratikshadeo24",
  linkedin: "https://www.linkedin.com/in/pratikshadeo24/", 
  gmail: "pratikshadeo24@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE SOFTWARE & DATA ENGINEER EXPLORING CLOUD AND BIG DATA TECHNOLOGIES",
  skills: [
    emoji("⚡ Build and optimize scalable data pipelines for processing large datasets using AWS and GCP"),
    emoji("⚡ Develop efficient backend systems and interactive front-end user interfaces with React, Django, and Flask"),
    emoji("⚡ Expertise in cloud platforms like AWS, GCP, and big data technologies such as Apache Spark, Hadoop, and Kafka"),
    emoji("⚡ Automate infrastructure management with Terraform, Docker, and Kubernetes for seamless deployments"),
    emoji("⚡ Integration of third-party services and cloud-native technologies for enhanced functionality"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "ReactJS",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Django",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "Flask",
    fontAwesomeClassname: "fas fa-flask"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Google Cloud Platform",
    fontAwesomeClassname: "fab fa-google"
  },
  {
    skillName: "Apache Spark",
    fontAwesomeClassname: "fas fa-bolt"
  },
  {
    skillName: "Hadoop",
    fontAwesomeClassname: "fas fa-hdd"
  },
  {
    skillName: "Kafka",
    fontAwesomeClassname: "fas fa-stream"
  },
  {
    skillName: "Terraform",
    fontAwesomeClassname: "fab fa-terraform"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Kubernetes",
    fontAwesomeClassname: "fas fa-network-wired"
  },
  {
    skillName: "Jenkins",
    fontAwesomeClassname: "fas fa-cogs"
  },
],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Florida",
      logo: require("./assets/images/UFLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "GPA: 3.94/4",
      descBullets: [
        "Active member of the Indian Student Association",
        "Part of the WICSE (Women in Computer Science & Engineering) Design Team",
        "Engaged in various technical and cultural activities on campus"
      ]
    },
    {
      schoolName: "Medi-Caps University",
      logo: require("./assets/images/MedicapsLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2016 - May 2020",
      desc: "GPA: 3.69/4",
      descBullets: [
        "Active member of the annual fest organizing committee",
        "Organized several technical events on campus",
        "Part of an NGO focused on providing education to underprivileged children",
        "Recognized as a Scholar of the college for academic excellence"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "60%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Technologies (AWS, GCP)",
      progressPercentage: "85%"
    },
    {
      Stack: "Big Data Technologies (Hadoop, Spark, Kafka)",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "85%"
    },
    {
      Stack: "Database Management (SQL, BigQuery, MySQL)",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps (Terraform, Docker, Kubernetes)",
      progressPercentage: "75%"
    }    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Technical Consultant",
      company: "Perficient India Pvt. Ltd.",
      companylogo: require("./assets/images/PerficientLogo.png"),
      date: "February 2023 – July 2023",
      desc: "I developed and optimized Apache Spark jobs for processing healthcare data on an EMR cluster, storing outputs in Amazon S3 for analysis. I automated data cataloging using AWS Glue Crawler, triggered by AWS Lambda, to keep the Glue Data Catalog updated. I designed and deployed a complete data pipeline using AWS Step Functions, integrating Sqoop ingestion, Spark processing, and Glue cataloging. Additionally, I managed AWS infrastructure components like Glue, Lambda, and Step Functions with Terraform, ensuring consistent deployments and automated the daily pipeline execution using EventBridge rules."
    },
    {
      role: "Software Engineer",
      company: "Infogain India Pvt. Ltd.",
      companylogo: require("./assets/images/InfogainLogo.webp"),
      date: "March 2022 – December 2022",
      desc: "I developed Sqoop jobs to ingest over 5 million records from relational databases into HDFS for the airline GDS. I created Hive queries to process and analyze data related to bookings, cancellations, flights, and passengers. I collaborated on automating the data pipeline using Airflow to ensure scheduled processing and reduce manual intervention. Additionally, I helped streamline data workflows by integrating Spark and Hive, improving overall processing efficiency."
    },
    {
      role: "Software Engineer",
      company: "Unthinkable Solutions LLP",
      companylogo: require("./assets/images/UnthinkableLogo.jpeg"),
      date: "January 2020 – February 2022",
      desc: "I developed stored procedures in BigQuery to efficiently handle API calls from Salesforce, enabling data retrieval based on filter parameters within GCP. I built ETL pipelines in Cloud Data Fusion, processing 1TB of data weekly from legacy systems into BigQuery. Additionally, I managed over 20 Composer DAGs to streamline workflows from multiple sources and optimized more than 20 complex SQL queries, reducing query execution time by 50% and driving significant cost savings."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Excited to collaborate and explore new opportunities",
  number: "+1(352)740-5716",
  email_address: "pratikshadeo24@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
