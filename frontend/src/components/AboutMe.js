// File: src/components/AboutMe.js
import React, { useState } from 'react';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faSitemap, faTools } from '@fortawesome/free-solid-svg-icons'; // solid icons
import { faGoogle, faNodeJs, faReact, faAws, faDocker, faGitAlt,
faPython, faJenkins, faGithub, faSlack, faBitbucket, faJira } from '@fortawesome/free-brands-svg-icons'; // brand icons

function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  {/* 2024 */}
  const timelineData1 = [
    {
      milestones: [
        {
          name: 'Software Engineer Intern - Rapid7',
          text: 'Designed and implemented automated solutions as part of the Automations & Productivity team, focusing on streamlining processes and IT integrations for operational efficiency. Notable project: [Enterprise Automation using Okta Workflows and Workato]',
        }
      ]
    },
    {
      milestones: [
        {
          name: 'Print & Marketing Solutions Advisor - Staples',
          text: 'Assisted customers with shipping needs and promoted marketing solutions to small businesses, achieving high client retention.',
        }
      ]
    },
    {
      milestones: [
        {
          name: 'MERN Stack Developer - Hack.Diversity',
          text: 'Developed the backend of a medical CRUD application. Notable project: [Back End Development of a medical CRUD application using the MERN stack]',
        }
      ]
    }
  ];

  {/* 2023 */}
  const timelineData2 = [
    {
      milestones: [
        {
          name: 'Construction Supervisor - G.P. Carpentry & Remodeling LLC',
          text: 'Led remodeling projects and a carpentry team, improving project completion rates through effective scheduling and resource management',
        }
      ]
    }
  ];

  {/* 2022 */}
  const timelineData3 = [
    {
      milestones: [
        {
          name: 'Research Assistant - Washington State University',
          text: 'Automated phenotyping data collection through image analysis for object recognition. Notable project: [Plant Phenotyping: Image Analysis of Pear Rootstocks using PlantCV]',
        }
      ]
    }
  ];

  {/* 2021 */}
  const timelineData4 = [
    {
      milestones: [
        {
          name: "High School Tutor - East Boston Ecumenical Community Council (EBECC)",
          text: "Provided tutoring to students at East Boston High School for Math and Computer programming basics",
        }
      ]
    }
  ];

  {/* 2020 */}
  {/* 2029 */}

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
      <div className="timelines-container">
        {/* First timeline */}
        <div className="vertical-timeline">
          <div className="timeline-start">
            <div className="year-label">2024</div>
          </div>
          {timelineData1.map((yearData, index) => (
            <div className="milestones" key={index}>
              {yearData.milestones.map((milestone, idx) => (
                <div key={idx} className="milestone-dot">
                  <h3>{milestone.name}</h3>
                  <p>{milestone.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Spacer between timelines */}
        <div className="timeline-spacer-pro">
          <button 
            className="read-more-btn" 
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Second timeline */}
        <div className={`vertical-timeline ${showMore ? 'visible' : 'hidden'}`}>
          <div className="timeline-start">
            <div className="year-label">2023</div>
          </div>
          {timelineData2.map((yearData, index) => (
            <div className="milestones" key={index}>
              {yearData.milestones.map((milestone, idx) => (
                <div key={idx} className="milestone-dot">
                  <h3>{milestone.name}</h3>
                  <p>{milestone.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Spacer between timelines */}
        <div className="timeline-spacer"></div>

        {/* Third timeline */}
        <div className={`vertical-timeline ${showMore ? 'visible' : 'hidden'}`}>
          <div className="timeline-start">
            <div className="year-label">2022</div>
          </div>
          {timelineData3.map((yearData, index) => (
            <div className="milestones" key={index}>
              {yearData.milestones.map((milestone, idx) => (
                <div key={idx} className="milestone-dot">
                  <h3>{milestone.name}</h3>
                  <p>{milestone.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Spacer between timelines */}
        <div className="timeline-spacer"></div>

        {/* Fourth timeline */}
        <div className={`vertical-timeline ${showMore ? 'visible' : 'hidden'}`}>
          <div className="timeline-start">
            <div className="year-label">2021</div>
          </div>
          {timelineData4.map((yearData, index) => (
            <div className="milestones" key={index}>
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
    </div>
  );
}

export default AboutMe;
