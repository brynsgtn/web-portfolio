import '../App.css';
import projects from '../data/projects.json';
import { FiExternalLink } from "react-icons/fi";
import React, { useState } from 'react';
import otherProjects from '../data/otherProjects.json'

export default function Projects() {

  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? otherProjects : otherProjects.slice(0, 3);

  const handleSeeMore = () => {
    setShowAll(!showAll);
  };
    
    return(
        <section className='projects'>
            <div className='projects-header'>
                <h2 className='some'>Some things I've built</h2>
                <div className='projects-line'></div>
            </div>
            <h3 className='featured-projects-header has-text-primary has-text-centered'>Featured Projects <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" fill='#00d1b2'/></svg>
            </h3>


                <div className='featured-projects'>
                {projects.map((project, index) => (
                <div className="columns is-desktop featured-projects-column" key={index}>
                    <div className="column">
                        <img
                            src={project.image}
                            alt="Placeholder"
                            className='image is-4by3 featured-img'
                        />
                    </div>
                    <div className="column media-column ">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-3">{project.title}</p>
                                <div className="tags">
                                {project.tags.map((tag,i) => (
                                    <span className="tag has-text-primary" style={{ backgroundColor: '#112240' }} key={i}>
                                        {tag}
                                    </span>
                                ))}
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            {project.description}
                            <div className="my-3">
                                <button
                                className="button github-button mr-3"
                                onClick={() => window.open(project.githubLink, "_blank", "noopener noreferrer")}
                                    > <span className='mr-3'>Github Code</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" fill="#EBECF0"></path>
                                    </svg>
                                </button>
                                <button
                                className="button live-button"
                                onClick={() => window.open(project.liveDemoLink, "_blank", "noopener noreferrer")}
                                >
                                    <span className='mr-3'>Live Demo</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                                        <circle cx="24" cy="24" r="6" fill="#EBECF0"></circle>
                                        <path fill="#EBECF0" d="M17,17l-2.769-2.889C11.573,16.659,10,20.027,10,24s1.573,7.341,4.231,9.889L17,31 c-1.9-1.822-3-4.167-3-7S15.1,18.821,17,17z"></path>
                                        <path fill="#EBECF0" d="M33.769,14.111L31,17c1.9,1.822,3,4.167,3,7s-1.1,5.178-3,7l2.769,2.889 C36.427,31.341,38,27.973,38,24S36.427,16.659,33.769,14.111z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
           
            ))}
            </div>
            <h2 className='featured-projects-header has-text-primary has-text-centered additional-projects-header'>Additional Projects to Explore</h2>
            <div className="columns is-multiline">
          {displayedProjects.map((project, index) => (
            <div
            key={index}
            className={`column is-one-third fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
             >
              <div className="card card-bg equal-height-card p-2">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                    <div className="align-right">
                      <span className="icon mr-5">
                      <button
                            className=" githublogo-button"
                            onClick={() => window.open(project.githubLink, "_blank", "noopener noreferrer")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="2em" height="2em" viewBox="0 0 24 24">
                                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" fill="#00d1b2"></path>
                            </svg>
                        </button>

                      </span>
                      <button
                            className=" livelogo-button"
                            onClick={() => window.open(project.liveDemoLink, "_blank", "noopener noreferrer")}
                        >
                        <span className="icon is-medium has-text-primary">
                        <FiExternalLink size="1.8em" />
                      </span>
                        </button>

                    </div>
                      <p className="title is-5 has-text-white">{project.title}</p>
                    </div>
                  </div>
                  <div className="content has-text-grey-light">{project.description}</div>
                  <div className="tags are-small">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag has-text-primary" style={{ backgroundColor: '#112240' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleSeeMore} className="button is-primary is-outlined see-more-button">
        {showAll ? 'Show Less' : 'Show More'}
        </button>
      </section>
    )
}