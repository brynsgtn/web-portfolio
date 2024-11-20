import '../App.css'
import { useState } from 'react'
import educations from '../data/educations.json'
import skills from '../data/skills.json'
import experience from '../data/experience.json'
import certifications from '../data/certifications.json'
import 'animate.css';

export default function About(){

    const [activeTab, setActiveTab] = useState('Education');
    const [showMore, setShowMore] = useState(false);

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };

    const toggleshowMore = () => {
        setShowMore(!showMore);
    };


 
      
    return(
        <>
            <section className='about-me animate__animated animate__zoomIn' id='about'>
                <div className='about-header'>
                <h2 className='about'>About Me</h2>
                <div className='about-line'></div>
                </div>
                <div className='about-inner'>
                <div className="about-description">
                    <p className='about-paragraph'>Hello! My name is Bryan, and I'm passionate about building web applications. I started my journey into web development in May 2023 by enrolling in <a href='https://zuitt.co/programdetails/' target='_blank' className='has-text-primary text-link'>Zuitt Coding Bootcamp's Tech Career Program</a>. Upon completing the program and earning my certification, I've gained the skills and knowledge to create innovative and engaging web experiences.</p>
                    <p className='about-paragraph'>Fast-forward to today, and I’ve had the opportunity to dive deep into coding, practicing and working on personal projects. These experiences have allowed me to refine my skills. My current focus is on building accessible, inclusive web applications, always striving to create meaningful digital experiences for users.</p>
                    <p className='about-paragraph'>I also recently earned certifications in <a href='' target='_blank' className='has-text-primary text-link'>AWS Fundamentals</a>, <a href='' target='_blank' className='has-text-primary text-link'>AWS Serverless</a>, and <a href='' target='_blank' className='has-text-primary text-link'>AWS Managed Services</a> in September 2024, upskilling my knowledge in cloud technologies.</p>
                    <p className="has-text-primary pt-5 pl-5 more" onClick={toggleshowMore}>{showMore ? 'Hide Details' : 'Show More Details'}</p> 
                        
                </div>
                <div className='pic-wrapper'>
                    <img src='./pic.jpg' className='pic mb-5'></img>
                    <div className="my-5">
                            <a className="has-text-primary has-text-weight-bold" href="#">
                                <button className="button is-primary is-outlined mt-6 p-4 download">
                                    <strong>Download Resume</strong>
                                </button>
                            </a>
                    </div>
                </div>
                </div>
     
            </section>


            {showMore && (
                <section className="education-skills-container">
                <div className="tabs is-centered is-boxed is-fullwidth">
                    <ul>
                        <li className={activeTab === 'Education' ? 'is-active' : ''}>
                            <a onClick={() => handleTabClick('Education')}>
                                <span>Education</span>
                            </a>
                        </li>
                        <li className={activeTab === 'Skills' ? 'is-active' : ''}>
                            <a onClick={() => handleTabClick('Skills')}>
                                <span>Skills</span>
                            </a>
                        </li>
                        <li className={activeTab === 'Certifications' ? 'is-active' : ''}>
                            <a onClick={() => handleTabClick('Certifications')}>
                                <span>Certifications</span>
                            </a>
                        </li>
                        <li className={activeTab === 'Experience' ? 'is-active' : ''}>
                            <a onClick={() => handleTabClick('Experience')}>
                                <span>Experience</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="education-skills">
                    {activeTab === 'Education' && (
                        <div className="animate__animated animate__fadeInRight"> 
                            <h3 className="title is-3 has-text-primary">My Education</h3>
                            <div className="content">
                                <div className="timeline education-content">
                                    {educations.map((education, index) => (
                                        <div className="timeline-item" key={index}>
                                            <span className="timeline-circle"></span>
                                            <div className="timeline-content">
                                                <h4 className="subtitle is-5 has-text-white school">{education.school}</h4>
                                                <p className="has-text-grey-light mt-2 mb-2">{education.course}</p>
                                                <p className="has-text-grey">{education.year}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Skills' && (
                        <div className="skills animate__animated animate__fadeInRight">
                            <div className='skills-width'>
                            <h3 className="title is-3 has-text-primary">My Skills</h3>
                            <div className="content skills-content">
                                {skills.map((item, index) => (
                                    <div key={index} className="mb-4">
                                        <p className="is-flex is-justify-content-space-between">
                                            <span>{item.skill}</span>
                                            <span>{item.level}%</span>
                                        </p>
                                        <progress
                                            className="progress is-primary"
                                            value={item.level}
                                            max="100"
                                            style={{ height: '8px' }}
                                        >
                                            {item.level}%
                                        </progress>
                                    </div>
                                ))}
                            </div>
                            </div>
                           
                        </div>
                    )}

                    {activeTab === 'Certifications' && (
                        <div className="container ">
                        <h1 className="title is-3 has-text-primary">My Certifications</h1>

                        <div className="columns is-multiline">
                            {certifications.map((certificate, index) => (
                                <div className="column is-half fade-in" key={index}  style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="card card-bg equal-height-card p-2 ">
              {/* Card Image */}
              <div className="">
                <figure className="image is-4by3">
                  <img
                    src={certificate.image}
                    alt="Placeholder"
                  />
                </figure>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <p className="title is-4">{certificate.title}</p>
                <p className="subtitle is-6 mt-2">{certificate.organization}</p>
                <p className="has-text-grey mt-2">{certificate.date}</p>

                {/* Button linking to the certificate link */}
                <div className="content">
                <a
                    href={certificate.link}
                    target="_blank"
                    className='has-text-primary'
                  ><button class="button is-primary is-outlined mt-5">
                    View Certificate
                  </button></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
                    )}

                    {activeTab === 'Experience' && (
                        <div className="animate__animated animate__animated animate__fadeInRight">
                        <h3 className="title is-3 has-text-primary">My Experience</h3>
                        <div className="content">
                            <div className="timeline experience-content">
                            {experience.map((job, index) => (
                                <div className="timeline-item" key={index}>
                                <span className="timeline-circle"></span>
                                <div className="timeline-content">
                                    <h4 className="subtitle is-5 has-text-white position">{job.position}</h4>
                                    <p className="has-text-grey-light company my-2">{job.company} · {job.location}</p>
                                    <p className="has-text-grey duration">{job.duration}</p>
                                    <ul className="responsibilities mt-3 tasks">
                                    {job.responsibilities.map((task, i) => (
                                        <li key={i} className="has-text-grey-light">{task}</li>
                                    ))}
                                    </ul>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>

                    )}
                </div>
            </section>
            )}
            
        </>

    )
}