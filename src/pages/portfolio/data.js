// Combined mock data variable
const portfolioData = {
  hero: {
    title: "Welcome to My Portfolio",
    subtitle: "A showcase of my work and skills",
    description: "I am a React developer passionate about building efficient and scalable applications.",
  },
  images: [
    {
      id: 1,
      type: "image",
      src: "https://via.placeholder.com/100",
      title: "Skill 1",
    },
    {
      id: 2,
      type: "image",
      src: "https://via.placeholder.com/100",
      title: "Skill 2",
    },
    {
      id: 3,
      type: "image",
      src: "https://via.placeholder.com/100",
      title: "Skill 3",
    },
    {
      id: 4,
      type: "image",
      src: "https://via.placeholder.com/100",
      title: "Project 1",
    },
    {
      id: 5,
      type: "image",
      src: "https://via.placeholder.com/100",
      title: "Project 2",
    },
    {
      id: 6,
      type: "image",
      src: "https://via.placeholder.com/100",
      title: "Project 3",
    },
    {
      id: 7,
      type: "image",
      src: "https://via.placeholder.com/100",
      title: "Project 4",
    },
  ],
  skills: [
    {
      id: 1,
      name: "React",
      level: "Advanced",
    },
    {
      id: 2,
      name: "JavaScript",
      level: "Advanced",
    },
    {
      id: 3,
      name: "HTML & CSS",
      level: "Intermediate",
    },
    {
      id: 4,
      name: "Node.js",
      level: "Intermediate",
    },
  ],
  projects: [
    {
      id: 1,
      name: "Project One",
      description: "A web application built with React and Node.js.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Project Two",
      description: "A portfolio website showcasing my work and skills.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Project Three",
      description: "An e-commerce platform built with React and Firebase.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Project Four",
      description: "A blog platform built with React, GraphQL, and Node.js.",
      image: "https://via.placeholder.com/300",
    },
  ],
  contact: {
    email: "example@example.com",
    phone: "+123 456 7890",
    linkedIn: "https://www.linkedin.com/in/example",
    github: "https://github.com/example",
  },
};
export const fetchPortfolioData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(portfolioData);
    }, 2000);
  });
};
