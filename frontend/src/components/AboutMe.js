// File: src/components/AboutMe.js
import React from 'react';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faSitemap, faTools } from '@fortawesome/free-solid-svg-icons'; // solid icons
import { faGoogle, faNodeJs, faReact, faAws, faDocker, faGitAlt,
  faPython, faJenkins, faGithub, faSlack, faBitbucket, faJira } from '@fortawesome/free-brands-svg-icons'; // brand icons

function AboutMe() {
  const timelineData = [
    {
      milestones: [
        {
          name: "Software Engineer Intern - Rapid7",
          text: "Designed and implemented automated solutions as part of the Automations & Productivity team, focusing on streamlining processes and IT integrations for operational efficiency. Notable project: [Enterprise Automation using Okta Workflows and Workato]",
        }
      ]
    },
    {
      milestones: [
        {
          name: "Print & Marketing Solutions Advisor - Staples",
          text: "Assisted customers with shipping needs and promoted marketing solutions to small businesses, achieving high client retention.",
        }
      ]
    },
    {
      milestones: [
        {
          name: "MERN Stack Developer - Hack.Diversity",
          text: "Developed the backend of a medical CRUD application. Notable project: [Back End Development of a medical CRUD application using the MERN stack]",
        }
        
      ]
    },
    {
      milestones: [
        {
          name: "Construction Supervisor - G.P. Carpentry & Remodeling LLC",
          text: "Led remodeling projects and a carpentry team, improving project completion rates through effective scheduling and resource management",
        }
        
      ]
    },
    {
      milestones: [
        {
          name: "Research Assistant - Washington State University",
          text: "Automated phenotyping data collection through image analysis for object recognition. Notable project: [Plant Phenotyping: Image Analysis of Pear Rootstocks using PlantCV]",
        }
      ]
    },
    {
      milestones: [
        {
          name: "High School Tutor - East Boston Ecumenical Community Council (EBECC)",
          text: "Provided tutoring to students at East Boston High School for Math and Computer programming basics",
        }
      ]
    },
    {
      milestones: [
        {
          name: "Community Volunteer - Vecindarios Unidos/United Neighborhoods",
          text: "Assisted low-income families in applying for rent assistance during COVID-19",
        }
      ]
    },
    {
      milestones: [
        {
          name: "Research Assistant - UMass Boston",
          text: "Analyzed cranberries for disease detection using image processing as well as automate the collection of object measurement through object recognition. Notable project: [Phenotypic Data Analysis Through Image Processing with PlantCV]",
        }
      ]
    },
    {
      milestones: [
        {
          name: "Operations Administrator - FedEx Ground",
          text: "Managed communication with customers and supported warehouse operations by optimizing data entry processes for enhanced efficiency",
        }
      ]
    }
  ];

  const skills = [
    { icon: faNodeJs, label: 'Node.js' },
    { icon: faReact, label: 'React.js' },
    { icon: faPython, label: 'Python' },
    { icon: faGitAlt, label: 'Git' },
    { icon: faTools, label: 'Automation' },
    { icon: faServer, label: 'System Administration' },
    { icon: faSitemap, label: 'Project Management' },
    { icon: faSlack, label: 'Slack' },
    { icon: faGoogle, label: 'Google Suite' },
  ];

  return (
    <div className="about-me-container">
      {/* Skillset icons container */}
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <div className="skill-item" key={idx}>
            <div className="icon-container">
              <FontAwesomeIcon icon={skill.icon} />
              <p className="skill-label">{skill.label}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Experience Timeline</h2>
      {/* Vertical timeline */}
      <div className="vertical-timeline">
        {timelineData.map((yearData, index) => (
          <div className="milestones">
            {yearData.milestones.map((milestone, idx) => (
              <div key={idx} className="milestone-dot">
                <h3>{milestone.name}</h3>
                <p>{milestone.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;