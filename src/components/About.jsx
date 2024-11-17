import '../App.css'

export default function About(){

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
            <section className='education-skills'>
                <div className="education-skills-container">
                    <div className="columns is-variable is-8 education-skills-column">
                    {/* Education Section */}
                    <div className="column">
                        <h3 className="title is-3 has-text-primary">My Education</h3>
                        <div className="content">
                        <div className="timeline education-content">
                        {educations.map((education) => (
                            <div className="timeline-item">
                            <span className="timeline-circle"></span>
                            <div className="timeline-content">
                                <h4 className="subtitle is-5 has-text-white school">{education.school}</h4>
                                <p className="has-text-grey-light">{education.course}</p>
                                <p className="has-text-grey">{education.year}</p>
                            </div>
                            </div>
                        ))}
                        </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="column">
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
                </div>
            </section>
        </>

    )
}