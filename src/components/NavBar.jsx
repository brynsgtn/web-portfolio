import { useState } from "react";


export default function NavBar() {

    const [isActive, setIsActive] = useState(false);  // State to track navbar toggle

    const toggleMenu = () => {
        setIsActive(!isActive);  // Toggle the menu's active state
    };
    return (
        <>
        <nav className="navbar is-transparent py-5 mx-6 is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                <p className="is-family-code has-text-weight-bold is-size-4 has-text-primary">&lt;brynsgtn.dev/&gt;</p>
                </a>
                <a
                    role="button"
                    className={`navbar-burger  has-text-primary ${isActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded={isActive}
                    onClick={toggleMenu}  // Call toggleMenu on click
                >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active has-text-centered light-navy' : ''} `}>
                <div className="navbar-end">
                <a className="navbar-item" href="#">
                    About
                </a>
                <a className="navbar-item" href="#">
                    Certifications
                </a>

                <a className="navbar-item" href="#">
                    Projects
                </a>

                <a className="navbar-item" href="#">
                    Contact
                </a>


                </div>

                <div className={`${isActive ? 'is-flex is-justify-content-center' : '' }`}>
                <div className="navbar-item">
                    <div className="buttons">
                    <a className="button is-primary is-outlined" href="#">
                        <strong>Resume</strong>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>

        </>
    )
}