// File: src/components/ProjectsPage.js
import React from 'react';
import './ProjectPage.css';

function ProjectPage() {
  const projects = [
    {
      title: "Enterprise Automation using Okta Workflows and Workato",
      period: "Jun 2024 - Aug 2024",
      organization: "Rapid7",
      image: "./images/enterprise-automation.jpg",
      summary: "Automated user account provisioning and deprovisioning across global offices, freeing up staff hours and reducing errors.",
      githubUrl: "https://edwinp503.github.io/Enterprise-Automation/"
    },
    {
      title: "Back End Development of a Medical CRUD Application",
      period: "Feb 2024 - Apr 2024",
      organization: "Hack.Diversity",
      image: "./images/mern-app.jpg",
      summary: "Developed back-end of a CRUD web application for medical records using the MERN stack, handling over 1000+ records.",
      githubUrl: "https://edwinp503.github.io/MERN-CRUD-Application/"
    },
    {
      title: "Plant Phenotyping: Image Analysis of Pear Rootstocks",
      period: "Jun 2022 - Jul 2022",
      organization: "Washington State University",
      image: "./images/plantcv-1.jpg",
      summary: "Increased phenotyping data collection efficiency by 60%, achieving 97% data accuracy for architectural traits in pear rootstocks.",
      githubUrl: "https://edwinp503.github.io/Plant-Phenotyping-Pear-Rootstocks/"
    },
    {
      title: "Phenotyping Analysis: Pearl Millet Panicles",
      period: "Nov 2021 - Feb 2022",
      organization: "University of Massachusetts Boston",
      image: "./images/plantcv-2.jpg",
      summary: "Automated measurement extraction from Pearl millet panicle images using the PlantCV library, increasing monitoring efficiency by 80%.",
      githubUrl: "https://edwinp503.github.io/Pearl-Millet-Panicles/"
    },
    /*{
      title: "Phenotypic Data Analysis with PlantCV",
      period: "Oct 2020 - Nov 2021",
      organization: "University of Massachusetts Boston",
      image: "./images/plantcv-3.jpg",
      summary: "Developed a Python script using PlantCV to detect cranberries affected by fruit rot, helping improve breeding programs.",
      githubUrl: "https://edwinp503.github.io/Phenotypic-Data-Analysis-PlantCV/"
    }*/
  ];

  return (
    <div className="projects-container">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="project-card"
          onClick={() => window.open(project.githubUrl, "_blank")}
        >
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <h4>{project.organization}</h4>
          <p>{project.period}</p>
          <div className="overlay">
            <h4>{project.organization}</h4>
            <p>{project.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectPage;
