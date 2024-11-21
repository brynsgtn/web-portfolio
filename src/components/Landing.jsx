import { TypeAnimation } from "react-type-animation"
import '../App.css'

export default function Landing(){
    return(
        <>
            <section className='hero animate__animated animate__zoomIn'>        
                <h5 className='has-text-primary my-name'>Hi, my name is</h5>
                <h1 className='name'>Bryan Suguitan.</h1>
                    <TypeAnimation
                    sequence={[
                        'I build web applications.',
                        1000,
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
                <a href="#about" className="has-text-primary has-text-weight-bold">
                    <button className='mt-6 p-4 button is-primary is-outlined learn'>
                        <strong>Learn More</strong>
                    </button>
                </a>
            </section>
        </>
 
    )
}