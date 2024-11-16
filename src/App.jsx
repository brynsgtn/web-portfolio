
import './App.css'
import NavBar from './components/NavBar'
import { TypeAnimation } from 'react-type-animation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';





function App() {

  return (
    <>
      <NavBar/>
      <div className='main'>
        <aside className='left'>
          <ul>
            <a href="https://github.com/brynsgtn" aria-label="GitHub" target="_blank" rel="noreferrer">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" fill="#8892b0"></path>
                </svg>
              </li>
            </a>
            
            <a href="https://www.instagram.com/brynsgtn/" aria-label="Instagram" target="_blank" rel="noreferrer">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" fill="#8892b0"></path>
                </svg>
              </li>
            </a>
            
            <a href="https://www.facebook.com/bryanharold.suguitan" aria-label="Facebook" target="_blank" rel="noreferrer">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                  <path d="M 24 3 C 12.413593 3 3 12.413593 3 24 C 3 34.518693 10.751318 43.250215 20.859375 44.767578 A 1.0001 1.0001 0 0 0 22.007812 43.777344 L 21.998047 29.257812 A 1.0001 1.0001 0 0 0 20.998047 28.257812 L 17.050781 28.257812 L 17.050781 25 L 21 25 A 1.0001 1.0001 0 0 0 22 24.001953 L 22.009766 20.548828 A 1.0001 1.0001 0 0 0 22.009766 20.546875 C 22.009766 17.813283 22.664153 16.021513 23.742188 14.900391 C 24.820221 13.779268 26.413546 13.212891 28.644531 13.212891 C 30.407432 13.212891 31.082344 13.318081 31.746094 13.398438 L 31.746094 16.048828 L 29.464844 16.048828 C 28.127305 16.048828 27.020734 16.798902 26.451172 17.792969 C 25.88161 18.787035 25.707031 19.968948 25.707031 21.169922 L 25.697266 23.996094 A 1.0001 1.0001 0 0 0 26.697266 25 L 31.521484 25 L 31.017578 28.257812 L 26.697266 28.257812 A 1.0001 1.0001 0 0 0 25.697266 29.257812 L 25.705078 39.820312 A 1.0001 1.0001 0 1 0 27.705078 39.818359 L 27.697266 30.257812 L 31.873047 30.257812 A 1.0001 1.0001 0 0 0 32.861328 29.410156 L 33.675781 24.152344 A 1.0001 1.0001 0 0 0 32.6875 23 L 27.701172 23 L 27.707031 21.173828 A 1.0001 1.0001 0 0 0 27.707031 21.169922 C 27.707031 20.186896 27.889312 19.307543 28.1875 18.787109 C 28.485688 18.266676 28.759382 18.048828 29.464844 18.048828 L 32.746094 18.048828 A 1.0001 1.0001 0 0 0 33.746094 17.048828 L 33.746094 12.460938 A 1.0001 1.0001 0 0 0 32.880859 11.46875 C 32.309569 11.39152 30.9987 11.212891 28.644531 11.212891 C 26.061517 11.212891 23.837247 11.915795 22.300781 13.513672 C 20.764316 15.111549 20.009766 17.488467 20.009766 20.546875 L 20.001953 23 L 16.050781 23 A 1.0001 1.0001 0 0 0 15.050781 24 L 15.050781 29.257812 A 1.0001 1.0001 0 0 0 16.050781 30.257812 L 20 30.257812 L 20.007812 42.507812 C 11.444474 40.66482 5 33.124885 5 24 C 5 13.494407 13.494407 5 24 5 C 34.505593 5 43 13.494407 43 24 C 43 33.632476 35.849872 41.573188 26.572266 42.828125 A 1.0001994 1.0001994 0 1 0 26.839844 44.810547 C 37.094237 43.423484 45 34.623524 45 24 C 45 12.413593 35.586407 3 24 3 z" fill="#8892b0"></path>
                </svg>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/bryan-suguitan/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 64 64">
                <path d="M 32.25 7.9980469 C 21.908809 7.8910468 12.27906 14.533283 9.0703125 24.912109 C 5.1616271 37.554915 12.048483 51.042129 24.705078 54.955078 A 1.0001 1.0001 0 0 0 26 54 L 26 46 L 34 46 A 1.0001 1.0001 0 0 0 35 45 L 35 33.5 C 35 32.659188 35.659188 32 36.5 32 C 37.340812 32 38 32.659188 38 33.5 L 38 45 A 1.0001 1.0001 0 0 0 39 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 30.65625 C 46 26.991704 43.008296 24 39.34375 24 C 37.727316 24 36.209515 24.648991 35 25.707031 L 35 25 A 1.0001 1.0001 0 0 0 34 24 L 29 24 A 1.0001 1.0001 0 0 0 28 25 L 28 40.978516 A 1.0001 1.0001 0 1 0 30 40.978516 L 30 26 L 33 26 L 33 28 A 1.0001 1.0001 0 0 0 34.707031 28.707031 L 36.050781 27.363281 C 36.924508 26.489555 38.108639 26 39.34375 26 C 41.927204 26 44 28.072796 44 30.65625 L 44 44 L 40 44 L 40 33.5 C 40 31.578812 38.421188 30 36.5 30 C 34.578812 30 33 31.578812 33 33.5 L 33 44 L 26 44 L 26 25 A 1.0001 1.0001 0 0 0 25.447266 24.105469 C 25.822119 23.460229 26 22.726309 26 22 C 26 21.027778 25.681319 20.042118 24.998047 19.273438 C 24.314774 18.504756 23.25 18 22 18 C 20.75 18 19.685226 18.504756 19.001953 19.273438 C 18.318681 20.042119 18 21.027778 18 22 C 18 22.726889 18.177267 23.461809 18.552734 24.107422 A 1.0001 1.0001 0 0 0 18 25 L 18 45 A 1.0001 1.0001 0 0 0 19 46 L 24 46 L 24 52.496094 C 13.253966 48.398553 7.5271562 36.671835 10.980469 25.501953 C 14.572853 13.882237 26.878383 7.3881005 38.498047 10.980469 C 50.117763 14.572853 56.611899 26.878383 53.019531 38.498047 C 50.030347 48.164545 41.000706 54.278166 31.369141 53.996094 A 1.0004291 1.0004291 0 1 0 31.310547 55.996094 C 41.824977 56.304022 51.674871 49.613393 54.929688 39.087891 C 58.84132 26.435554 51.740175 12.981928 39.087891 9.0703125 C 37.506349 8.5813585 35.912557 8.2648684 34.326172 8.109375 C 33.632128 8.0413466 32.939413 8.0051802 32.25 7.9980469 z M 22 20 C 22.749999 20 23.185226 20.245244 23.501953 20.601562 C 23.81868 20.957881 24 21.472222 24 22 C 24 22.527778 23.81868 23.042118 23.501953 23.398438 C 23.185226 23.754756 22.749999 24 22 24 C 21.250001 24 20.814774 23.754756 20.498047 23.398438 C 20.18132 23.042119 20 22.527778 20 22 C 20 21.472222 20.18132 20.957882 20.498047 20.601562 C 20.814774 20.245244 21.250001 20 22 20 z M 20 26 L 22 26 L 24 26 L 24 44 L 20 44 L 20 26 z" fill="#8892b0"></path>
              </svg>
              </li>
            </a>
          </ul>
          <div className='left-border'></div>
        </aside>
        <main>
          <section className='hero'>
            <h5 className='has-text-primary my-name'>Hi, my name is</h5>
            <h1 className='name'>Bryan Suguitan.</h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I build web applications.',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'I craft digital experiences.',
                1000,
                'I breathe life into code.',
                1000
              ]}
              speed={50}
              className='description'
              repeat={Infinity}
            />
            <p className='caption'>I specialize in full-stack development with MongoDB, Express, React, and Node, and am committed to staying up-to-date with emerging trends and best practices in web development.</p>
            <button className='mt-6 p-5 button is-primary is-outlined learn'>Learn More About Me</button>
          </section>
          <section className='about-me'>
            <div className='about-header'>
              <h2 className='about'>About Me</h2>
              <div className='about-line'></div>
            </div>
            <div className='about-inner'>
              <div>
                <p className='about-paragraph'>Hello! My name is Bryan, and I'm passionate about building web applications. I started my journey into web development in May 2023 by enrolling in <a href='https://zuitt.co/programdetails/' target='_blank' className='has-text-primary text-link'>Zuitt Coding Bootcamp's Tech Career Program</a>. Upon completing the program and earning my <a href='http://share.zertify.zuitt.co/certificate/6fbc6310-b435-4106-a559-65a6aefde5a4' target='_blank' className='has-text-primary text-link'>certification</a>, I've gained the skills and knowledge to create innovative and engaging web experiences.</p>
                <p className='about-paragraph'>Fast-forward to today, and I’ve had the opportunity to dive deep into coding, practicing and working on <a href='' target='_blank' className='has-text-primary text-link'>personal projects</a>. These experiences have allowed me to refine my skills. My current focus is on building accessible, inclusive web applications, always striving to create meaningful digital experiences for users.</p>
                <p className='about-paragraph'>I also recently earned certifications in <a href='' target='_blank' className='has-text-primary text-link'>AWS Fundamentals</a>, <a href='' target='_blank' className='has-text-primary text-link'>AWS Serverless</a>, and <a href='' target='_blank' className='has-text-primary text-link'>AWS Managed Services</a> in September 2024, upskilling my knowledge in cloud technologies.</p>
                <p className='about-paragraph'>Here are a few technologies I’ve been working with recently:</p>
                <ul className='skills'>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>TypeScript</li>
                  <li>AWS Fundamentals</li>
                  <li>AWS Serverless</li>
                  <li>AWS Managed Services</li>
                </ul>
              </div>
              <div className='pic-wrapper'>
                <img src='./pic.jpg' className='pic mb-5'></img>
                <div className="mt-5">
                      <a className="button is-primary is-outlined" href="#">
                          <strong>Resume</strong>
                      </a>
                </div>
              </div>
            </div>
            

          </section>
          <Projects/>
          <Contact/>
          <Footer/>
        </main>
        <aside className='right'>
        <a className='email' href="mailto:bryansuguitan17@gmail.com">bryansuguitan17@gmail.com</a>
          <div className='right-border'></div>
        </aside>
      </div>

    </>
      

  )
}

export default App
