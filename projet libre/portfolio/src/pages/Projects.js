import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Projects.css';

import medipathScreenShot from '../assets/projects/medipath.png';
import BRAPScreenShot from '../assets/projects/BRAP.png';
import SmartCartScreenShot from '../assets/projects/SmartCart.png';
import kebabScreenShot from '../assets/projects/kebab.png';
import LiSIScreenShot from '../assets/projects/LiSI.png';
import virusScreenshot from '../assets/projects/virus.png';
import rapportScreenshot from '../assets/projects/rapport.png';
import gestcompScreenShot from '../assets/projects/gestcomp.png';

import javaLogo from '../assets/technos/java.png';
import phpLogo from '../assets/technos/php.png';
import cssLogo from '../assets/technos/css.png';
import javascriptLogo from '../assets/technos/javascript.png';
import pythonLogo from '../assets/technos/python.png';
import mysqlLogo from '../assets/technos/mysql.png';
import symfonyLogo from '../assets/technos/symfony.png';
import gitLogo from '../assets/technos/git.png';
import githubLogo from '../assets/technos/github.png';
import htmlLogo from '../assets/technos/html.png';
import tailwindLogo from '../assets/technos/tailwind.png';
import cLogo from '../assets/technos/c.png';
import figmaLogo from '../assets/technos/figma.png';
import powerBiLogo from '../assets/technos/powerbi.png';
import reactLogo from '../assets/technos/react.png';
import springbootLogo from '../assets/technos/springboot.png';
import swaggerLogo from '../assets/technos/swagger.png';
import postgresqlLogo from '../assets/technos/postgresql.png';
import postmanLogo from '../assets/technos/postman.png';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projets</h2>
            <div id="projects">
                <div className="project-card">
                    <Link to="/projects/medipath" className="project-link">
                        <img src={medipathScreenShot} alt="MediPath Screenshot" className="project-screenshot"/>
                        <div className="project-details">
                            <h3>MediPath</h3>
                            <div className="project-languages">
                                <img src={javaLogo} alt="Java Logo" className="language-logo"/>
                            </div>
                            <a href="https://github.com/yacebni/MediPath" className="github-link"
                               onClick={(e) => e.stopPropagation()}>
                                <img src={githubLogo} alt="GitHub Logo" className="github-icon"
                                     title="Voir sur GitHub"/>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="project-card">
                    <Link to="/projects/brapeducation" className="project-link">
                        <img src={BRAPScreenShot} alt="BRAP Éducation Screenshot" className="project-screenshot"/>
                        <div className="project-details">
                            <h3>BRAP Éducation</h3>
                            <div className="project-languages">
                                <img src={phpLogo} alt="PHP Logo" className="language-logo"/>
                                <img src={cssLogo} alt="CSS Logo" className="language-logo"/>
                                <img src={javascriptLogo} alt="JavaScript Logo" className="language-logo"/>
                                <img src={pythonLogo} alt="Python Logo" className="language-logo"/>
                                <img src={mysqlLogo} alt="MySQL Logo" className="language-logo"/>
                                <img src={gitLogo} alt="GIT Logo" className="language-logo"/>
                            </div>
                            <a href="https://github.com/yacebni/brap" className="github-link"
                               onClick={(e) => e.stopPropagation()}>
                                <img src={githubLogo} alt="GitHub Logo" className="github-icon"
                                     title="Voir sur GitHub"/>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="project-card">
                    <Link to="/projects/gestcomp" className="project-link">
                        <img src={gestcompScreenShot} alt="GestComp Screenshot" className="project-screenshot"/>
                        <div className="project-details">
                            <h3>GestComp</h3>
                            <div className="project-languages">
                                <img src={springbootLogo} alt="Spring Boot Logo" className="language-logo"/>
                                <img src={reactLogo} alt="React Logo" className="language-logo"/>
                                <img src={postgresqlLogo} alt="PostGreSQL Logo" className="language-logo"/>
                                <img src={postmanLogo} alt="Postman Logo" className="language-logo"/>
                                <img src={figmaLogo} alt="Figma Logo" className="language-logo"/>
                                <img src={swaggerLogo} alt="Swagger Logo" className="language-logo"/>
                                <img src={gitLogo} alt="GIT Logo" className="language-logo"/>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="project-card">
                    <Link to="/projects/smartcart" className="project-link">
                        <img src={SmartCartScreenShot} alt="SmartCart Screenshot" className="project-screenshot"/>
                        <div className="project-details">
                            <h3>Smart Cart</h3>
                            <div className="project-languages">
                                <img src={symfonyLogo} alt="Symfony Logo" className="language-logo"/>
                                <img src={mysqlLogo} alt="MySQL Logo" className="language-logo"/>
                                <img src={tailwindLogo} alt="Tailwind Logo" className="language-logo"/>
                                <img src={gitLogo} alt="GIT Logo" className="language-logo"/>
                            </div>
                            <a href="https://github.com/yacebni/smartcart" className="github-link"
                               onClick={(e) => e.stopPropagation()}>
                                <img src={githubLogo} alt="GitHub Logo" className="github-icon"
                                     title="Voir sur GitHub"/>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="project-card">
                    <Link to="/projects/kebab" className="project-link">
                        <img src={kebabScreenShot} alt="Kebab Screenshot" className="project-screenshot"/>
                        <div className="project-details">
                            <h3>Kebab</h3>
                            <div className="project-languages">
                                <img src={htmlLogo} alt="HTML Logo" className="language-logo"/>
                                <img src={cssLogo} alt="CSS Logo" className="language-logo"/>
                                <img src={gitLogo} alt="GIT Logo" className="language-logo"/>
                            </div>
                            <a href="https://github.com/yacebni/kebab" className="github-link"
                               onClick={(e) => e.stopPropagation()}>
                                <img src={githubLogo} alt="GitHub Logo" className="github-icon"
                                     title="Voir sur GitHub"/>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="project-card">
                    <Link to="/projects/lisi" className="project-link">
                        <img src={LiSIScreenShot} alt="LiSI Screenshot" className="project-screenshot"/>
                        <div className="project-details">
                            <h3>LiSI</h3>
                            <div className="project-languages">
                                <img src={cLogo} alt="C Logo" className="language-logo"/>
                                <img src={gitLogo} alt="GIT Logo" className="language-logo"/>
                            </div>
                            <a href="https://github.com/yacebni/LiSI" className="github-link"
                               onClick={(e) => e.stopPropagation()}>
                                <img src={githubLogo} alt="GitHub Logo" className="github-icon"
                                     title="Voir sur GitHub"/>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="project-card">
                    <Link to="/projects/virusinformatique" className="project-link">
                        <img src={virusScreenshot} alt="virus Screenshot" className="project-screenshot"/>
                        <div className="project-details">
                            <h3>Virus Informatique</h3>
                            <div className="project-languages">
                                <img src={figmaLogo} alt="Figma Logo" className="language-logo"/>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="project-card">
                    <Link to="/projects/rapportpowerbi" className="project-link">
                        <img src={rapportScreenshot} alt="rapport Screenshot" className="project-screenshot"/>
                        <div className="project-details">
                            <h3>Rapport Power BI</h3>
                            <div className="project-languages">
                                <img src={powerBiLogo} alt="Power Bi Logo" className="language-logo"/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
