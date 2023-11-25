import image from '../images/Screenshot 2023-11-23 001133.png'
import i from '../images/Screenshot 2023-11-23 185214.png'
import img1 from '../images/img.jpg'
import express from '../images/express.png'
import codegnan from '../images/codegnan.png'
import cbit from '../images/cbit.jpeg'
import sri from '../images/sri.jpeg'


export const Bio = {
  name: "Abhishek Erugadindla",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/AbhishekErugadindla",
  resume:
    "https://drive.google.com/file/d/1dMDr5aX2bDBpbTXOABimqSaWqVAIEOFk/view?usp=drivesdk",
  linkedin: "https://www.linkedin.com/in/abhishek-erugadindla/",
  insta: "https://www.instagram.com/nameisabhiiii/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
    
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    
      
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          express,
      },
      
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
   
    ],
  },

  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
   
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
     
    
    ],
  },
];

export const experiences = [
 
  {
    id: 4,
    img: codegnan,
    role: "Mern stack developer Intern",
    company: "codegnan IT solutions",
    date: "June 2023 - Aug 2023",
    desc: "Worked on News Aggregator web application where it shows all trending news in India with Authentication",
    skills: [
      "React.js",
      "Node.js",
      "express.js",
      "Mongodb",
      "AWS",
      "EC2",
      
    ],
    doc: img1,
  },
];

export const education = [
  {
    id: 0,
    img:cbit,
    school: "Chaitanya Bharathi Institute Of Technology,Hyderabad",
    date: "Oct 2021 - Sep 2025",
    grade: "9.48 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Information Technology at Chaitanya Bharathi Institute Of Technology,Hyderabad. I have completed 4 semesters and have a CGPA of 9.48. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor in Engineering - BE,Information Technology",
  },
  {
    id: 1,
    img: sri,
    school: "Sri Chaitanya Junior College, Hyderabad",
    date: "Apr 2019 - Apr 2021",
    grade: "98.2%",
    desc: "I completed my Intermediate at Sri Chaitanya Junior College,Hyderabad, where I studied MPC(Maths,Physics,Chemistry).",
    degree: "TSBIE(XII), MPC",
  },
  
];

export const projects = [
  {
    id: 9,
    title: "News Aggregator",
    date: "Jun 2023 - Aug 2023",
    description:
      "The application offers a curated collection of news articles from diverse categories, ensuring users have access to awide range of up-to-date information, all in one place.Integrated social media sharing functionality",
    image:i,
    tags: [
      
      
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
      "Nodemailer",
      "AWS",
      "Ec2"
    ],
    category: "web app",
    github: "https://github.com/AbhishekErugadindla/newsaggregatorWeb",
    webapp: "https://github.com/AbhishekErugadindla/newsaggregatorWeb",
  },
 





  {
    id: 8,
    title: "CovoGenius",
    date: "Jan 2021",
    description:
      "Developed an Intelligent Chatbot with OpenAI API, Langchain, Gradio, and HuggingFace Integration for nlp Through these integrated technologies, the chatbot excels in understanding and generating human-like text, ensuring a seamless and engaging user experience.",
    image:image,
    tags: ["Python", "OpenAI API", "Langchain", "Gradio", "HuggingFace", "javascript"],
    category: "machine learning",
    github: "https://github.com/AbhishekErugadindla/ConvoGenius_mychatbot",
    webapp: "https://abhichat.ccbp.tech/",
  },
];


