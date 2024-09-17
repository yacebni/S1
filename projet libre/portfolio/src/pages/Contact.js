// src/pages/Contact.js
import React from 'react';
import '../components/Contact.css';
import emailIcon from '../assets/email.png';
import emailWhiteIcon from '../assets/emailwhite.png';
import linkedinIcon from '../assets/linkedin.webp';
import githubIcon from '../assets/technos/github.png';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <form>
                <label>
                    Nom :
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email :
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message :
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Envoyer</button>
            </form>
            <div className="contact-buttons">
                <button
                    onClick={() => window.location.href = 'mailto:ya.bouanani@laposte.net'}
                    className="button"
                >
                    <div className="icon-container">
                        <img src={emailIcon} alt="Email Icon" className="icon default-icon"/>
                        <img src={emailWhiteIcon} alt="Email Icon White" className="icon hover-icon"/>
                    </div>
                    <span>Envoyer un Email</span>
                </button>
                <button onClick={() => window.open('https://www.linkedin.com/in/yacine-bouanani/', '_blank')}>
                    <div className="icon-container">
                        <img src={linkedinIcon} alt="LinkedIn Icon" className="icon"/>
                    </div>
                    <span>Mon LinkedIn</span>
                </button>
                <button onClick={() => window.open('https://github.com/yacebni', '_blank')}>
                    <div className="icon-container">
                        <img src={githubIcon} alt="GitHub Icon" className="icon"/>
                    </div>
                    <span>Mon GitHub</span>
                </button>
            </div>
        </section>
    );
};

export default Contact;
