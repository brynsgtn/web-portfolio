import '../App.css'
import { useState } from 'react'

export default function About(){

    const [activeTab, setActiveTab] = useState('Education');

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };

    const educations = [
        {
            school: "Mapua University",
            course: "BS Information Technology",
            year: "2022-Present"
        },
        {
            school: "Philippine School of Business Administration",
            course: "Master's in Business Administration",
            year: "2020-2022"
        },
        {
            school: "Wesleyan University-Philippines",
            course: "BSBA Major in Financial Management",
            year: "2012-2016"
        }
    ]

    const skills = [
        { 
            skill: 'HTML',
             level: 80 
        },
        { 
            skill: 'CSS',
             level: 80 
        },
        { 
            skill: 'JavaScript',
             level: 75 
        },
        { 
            skill: 'TypeScript',
             level: 65 
        },
        { 
            skill: 'ReactJS',
             level: 80 
        },
        { 
            skill: 'NodeJS',
             level: 73 
        },
        { 
            skill: 'ExpressJS',
             level: 72 
        },
        { 
            skill: 'MongoDB',
             level: 75 
        }
    ]


    const experience = [
        {
          position: "Revenue Officer",
          company: "Bureau of Internal Revenue",
          type: "Full-time",
          location: "Quezon City, Philippines",
          duration: "2021 - 2022",
          responsibilities: [
            "Managed revenue-related tasks and compliance within the agency",
            "Supported tax administration processes and ensured adherence to government regulations"
          ]
        },
        {
          position: "Legal Assistant",
          company: "UCPB Leasing and Finance Corporation",
          type: "Full-time",
          location: "Makati City, Philippines",
          duration: "2018 - 2021",
          responsibilities: [
            "Coordinated with courts and government agencies for legal actions and case development",
            "Drafted and dispatched legal documents, including demand and cancellation letters",
            "Maintained and updated case files with monthly progress reports"
          ]
        },
        {
          position: "Loans Operation Specialist",
          company: "United Coconut Planters Bank (UCPB)",
          type: "Full-time",
          location: "Makati City,Philippines",
          duration: "2017 - 2018",
          responsibilities: [
            "Ensured safekeeping and systematic filing of loan documents and borrower collaterals",
            "Managed collateral release requests in compliance with bank policies",
            "Conducted quarterly inventory and monthly reconciliation of loan and collateral records"
          ]
        }
      ];

      const certifications = [
        {
            title: "Full-stack Web Development",
            organization: 'Zuitt - Coding Bootcamp',
            date: 'Aug 2023',
            image: './Full-stack Development.jpeg',
            link: 'https://share.zertify.zuitt.co/certificate/6fbc6310-b435-4106-a559-65a6aefde5a4/'
          },
        {
          title: 'AWS Fundamentals',
          organization: 'Zuitt - Coding Bootcamp',
          date: 'Sep 2024',
          image: './AWS Fundamentals.jpeg',
          link: 'https://share.zertify.zuitt.co/certificate/0e05044e-8995-4243-93f9-6253d44c17cb/'
        },
        {
          title: 'AWS Serverless',
          organization: 'Zuitt - Coding Bootcamp',
          date: 'Sep 2024',
          image: './AWS Serverless.jpeg',
          link: 'https://share.zertify.zuitt.co/certificate/fe897952-328c-4539-af8e-c6889e8c0a62/'
        },
        {
            title: 'AWS Managed Services',
            organization: 'Zuitt - Coding Bootcamp',
            date: 'Sep 2024',
            image: './AWS Managed Services.jpeg',
            link: 'https://share.zertify.zuitt.co/certificate/ba6c40aa-d06c-44ba-a998-648e85198c69/'
          }
      ];
      
    return(
        <>
            <section className='about-me'>
                <div className='about-header'>
                <h2 className='about'>About Me</h2>
                <div className='about-line'></div>
                </div>
                <div className='about-inner'>
                <div className="about-description">
                    <p className='about-paragraph'>Hello! My name is Bryan, and I'm passionate about building web applications. I started my journey into web development in May 2023 by enrolling in <a href='https://zuitt.co/programdetails/' target='_blank' className='has-text-primary text-link'>Zuitt Coding Bootcamp's Tech Career Program</a>. Upon completing the program and earning my certification, I've gained the skills and knowledge to create innovative and engaging web experiences.</p>
                    <p className='about-paragraph'>Fast-forward to today, and I’ve had the opportunity to dive deep into coding, practicing and working on personal projects. These experiences have allowed me to refine my skills. My current focus is on building accessible, inclusive web applications, always striving to create meaningful digital experiences for users.</p>
                    <p className='about-paragraph'>I also recently earned certifications in <a href='' target='_blank' className='has-text-primary text-link'>AWS Fundamentals</a>, <a href='' target='_blank' className='has-text-primary text-link'>AWS Serverless</a>, and <a href='' target='_blank' className='has-text-primary text-link'>AWS Managed Services</a> in September 2024, upskilling my knowledge in cloud technologies.</p>
                </div>
                <div className='pic-wrapper'>
                    <img src='./pic.jpg' className='pic mb-5'></img>
                    <div className="my-5">
                        <a className="button is-primary is-outlined" href="#">
                            <strong>Download Resume</strong>
                        </a>
                    </div>
                </div>
                </div>
            </section>


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
                        <div className="">
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
                        <div className="skills">
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
                        <div className="container">
                        <h1 className="title is-3 has-text-primary">My Certifications</h1>

                        <div className="columns is-multiline">
                            {certifications.map((certificate, index) => (
                                <div className="column is-half" key={index}>
            <div className="card card-bg equal-height-card p-2">
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
                <button class="button is-primary is-outlined mt-5"><a
                    href={certificate.link}
                    target="_blank"
                    className='has-text-primary'
                  >
                    View Certificate
                  </a></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
                    )}

                    {activeTab === 'Experience' && (
                        <div className="">
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
            
        </>

    )
}