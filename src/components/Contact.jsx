

export default function () {

    return(
        <section className="contact animate__animated animate__zoomInDown" id='contact'>
            <div className="contact-header">
                <h1 className="contact-me">Contact Me</h1>
                <div className='contact-line '></div>
            </div>
            <div className='contact-content-container'>
                <div className="is-flex-direction-row is-justify-content-center is-align-content-center contact-content">
                    <h2 className='whats-next-header has-text-primary'>What's Next?</h2>
                    <h1 className='get-in-touch-header'>Get In Touch</h1>
                    <p className='mb-5 has-text-grey-light'>I’m currently focused on building my skills, but I’m open to internships or learning opportunities. Don’t hesitate to reach out if you have something to share!</p>
                    <button className='button is-primary is-outlined is-medium is-responsive mt-5 p-4'> <a className='has-text-primary' href="mailto:bryansuguitan17@gmail.com">Let's Connect</a></button>
                </div>
            </div>
        </section>
    )
}