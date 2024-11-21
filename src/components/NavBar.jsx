import { useState, useEffect } from "react";
import 'animate.css';
import PDF from '/Suguitan-Bryan-CV.pdf'

export default function NavBar() {
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollPos, setLastScrollPos] = useState(0);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Determine if the navbar should be visible
            if (currentScrollPos < lastScrollPos || currentScrollPos <= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            setLastScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollPos]);

    return (
        <>
            {/* Blur background when menu is active */}
            <div
                className={`blur-overlay ${isActive ? "is-active" : ""}`}
                onClick={() => setIsActive(false)} // Close menu on click outside
            >
            </div>

            <nav
                className={`navbar is-transparent animate__animated animate__fadeInDown animate__faster ${
                    isVisible ? "is-visible" : "is-hidden"
                }`}
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <p className="is-family-code has-text-weight-bold is-size-4 has-text-primary logo">
                            &lt;brynsgtn/&gt;
                        </p>
                    </a>
                    <a
                        role="button"
                        className={`navbar-burger has-text-primary ${
                            isActive ? "is-active" : ""
                        }`}
                        aria-label="menu"
                        aria-expanded={isActive}
                        onClick={toggleMenu}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div
                    id="navbarBasicExample"
                    className={`navbar-menu ${
                        isActive ? "is-active menu-slide" : ""
                    }`}
                >
                    <div className="navbar-end">
                        <a className="navbar-item" href="#about">
                            About
                        </a>
                        <a className="navbar-item" href="#projects">
                            Projects
                        </a>
                        <a className="navbar-item" href="#contact">
                            Contact
                        </a>
                    </div>

                    <div
                        className={`${
                            isActive ? "is-flex is-justify-content-center" : ""
                        }`}
                    >
                        <div className="navbar-item">
                            <div className="buttons">
                                <a
                                    className="button is-primary is-outlined"
                                    href={PDF} target="_blank"
                                >
                                    <strong>Resume</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
