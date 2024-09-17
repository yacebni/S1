// src/pages/Home.js
import React from 'react';
import '../components/Home.css';
import profil from '../assets/profil.jpeg';
import yacine from '../assets/yacine.JPG'

import javaLogo from '../assets/technos/java.png';
import htmlLogo from '../assets/technos/html.png';
import cssLogo from '../assets/technos/css.png';
import phpLogo from '../assets/technos/php.png';
import cLogo from '../assets/technos/c.png';
import javascriptLogo from '../assets/technos/javascript.png';
import pythonLogo from '../assets/technos/python.png';
import mysqlLogo from '../assets/technos/mysql.png';
import mongodbLogo from '../assets/technos/mongodb.png';
import figmaLogo from '../assets/technos/figma.png';
import officeLogo from '../assets/technos/office.png';
import symfonyLogo from '../assets/technos/symfony.png';
import reactLogo from '../assets/technos/react.png';
import vueLogo from '../assets/technos/vue.png';
import gitLogo from '../assets/technos/git.png';
import springbootLogo from '../assets/technos/springboot.png';
import postgreSqlLogo from '../assets/technos/postgresql.png';
import postmanLogo from '../assets/technos/postman.png';
import swaggerLogo from '../assets/technos/swagger.png';
import powerDesignerLogo from '../assets/technos/powerDesigner.png';
import kotlinLogo from '../assets/technos/kotlin.png';
import jetbrainsLogo from '../assets/technos/jetbrains.png';
import powerbiLogo from '../assets/technos/powerbi.png';
import tailwindLogo from '../assets/technos/tailwind.png';
import angularLogo from '../assets/technos/angular.png';

import cvPdf from '../assets/CV_Yacine_Bouanani.pdf';

const Home = () => {
    return (
        <section id="home">
            <div className="intro">
                <div className="profile-pic">
                    <img src={yacinec} alt="Profile" />
                </div>
                <div className="presentation">
                    <h2>Bienvenue sur mon Portfolio</h2>
                    <p>
                        Moi c'est Yacine ! Étudiant en BUT Informatique, passionné par les technologies web et le
                        développement logiciel, j'aspire à devenir un ingénieur en informatique compétent et polyvalent.
                    </p>
                    <div className="cv-link">
                        <a href={cvPdf} download="CV_Yacine_Bouanani.pdf">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
            <div className="about-me">
                <h3>À propos de moi</h3>
                <p>
                    Passionné par l'informatique depuis mon plus jeune âge, je trouve toujours fascinant de résoudre des problèmes complexes et de créer des solutions innovantes. En dehors de l'informatique, j'aime aussi pratiquer la natation, une activité qui me permet de me détendre et de rester en forme.
                </p>
            </div>
            <div className="skills">
                <h3>Technologies</h3>
                <div className="skill-group">
                    <h4>Développement</h4>
                    <ul>
                        <li>
                            <div className="skill">
                                <a href="https://www.java.com" target="_blank" rel="noopener noreferrer">
                                    <img src={javaLogo} alt="Java Logo"/>
                                    <span>Java</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                                    <img src={htmlLogo} alt="HTML Logo"/>
                                    <span>HTML</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                                    <img src={cssLogo} alt="CSS Logo"/>
                                    <span>CSS</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                                    <img src={javascriptLogo} alt="JavaScript Logo"/>
                                    <span>JavaScript</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer">
                                    <img src={cLogo} alt="C Logo"/>
                                    <span>C</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">
                                    <img src={pythonLogo} alt="Python Logo"/>
                                    <span>Python</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://www.php.net" target="_blank" rel="noopener noreferrer">
                                    <img src={phpLogo} alt="PHP Logo"/>
                                    <span>PHP</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://kotlinlang.org" target="_blank" rel="noopener noreferrer">
                                    <img src={kotlinLogo} alt="Kotlin Logo"/>
                                    <span>Kotlin</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
                                    <img src={gitLogo} alt="Git Logo"/>
                                    <span>Git</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="skill-group">
                    <h4>Framework</h4>
                    <ul>
                        <li>
                            <div className="skill">
                                <a href="https://symfony.com" target="_blank" rel="noopener noreferrer">
                                    <img src={symfonyLogo} alt="Symfony Logo"/>
                                    <span>Symfony</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                                    <img src={reactLogo} alt="React Logo"/>
                                    <span>React</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://angular.dev" target="_blank" rel="noopener noreferrer">
                                    <img src={angularLogo} alt="Angular Logo"/>
                                    <span>Angular</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
                                    <img src={vueLogo} alt="Vue Logo"/>
                                    <span>Vue</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
                                    <img src={springbootLogo} alt="Spring Boot Logo"/>
                                    <span>Spring Boot</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                                    <img src={tailwindLogo} alt="Tailwind Logo"/>
                                    <span>Tailwind</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="skill-group">
                    <h4>Base de données</h4>
                    <ul>
                        <li>
                            <div className="skill">
                                <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">
                                    <img src={mysqlLogo} alt="SQL Logo"/>
                                    <span>MySQL</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
                                    <img src={mongodbLogo} alt="MongoDB Logo"/>
                                    <span>MongoDB</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer">
                                    <img src={postgreSqlLogo} alt="PostGreSql Logo"/>
                                    <span>PostGre SQL</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="skill-group">
                    <h4>Logiciels</h4>
                    <ul>
                        <li>
                            <div className="skill">
                                <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
                                    <img src={figmaLogo} alt="Figma Logo"/>
                                    <span>Figma</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://www.microsoft.com/en-us/microsoft-365" target="_blank" rel="noopener noreferrer">
                                    <img src={officeLogo} alt="Office Logo"/>
                                    <span>Suite Office</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://www.jetbrains.com" target="_blank" rel="noopener noreferrer">
                                    <img src={jetbrainsLogo} alt="JetBrains Logo"/>
                                    <span>Suite JetBrains</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://www.postman.com" target="_blank" rel="noopener noreferrer">
                                    <img src={postmanLogo} alt="Postman Logo"/>
                                    <span>PostMan</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://swagger.io" target="_blank" rel="noopener noreferrer">
                                    <img src={swaggerLogo} alt="Swagger Logo"/>
                                    <span>Swagger</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://www.powerdesigner.biz/FR/powerdesigner/" target="_blank" rel="noopener noreferrer">
                                    <img src={powerDesignerLogo} alt="Power Designer Logo"/>
                                    <span>Power Designer</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="skill">
                                <a href="https://powerbi.microsoft.com" target="_blank" rel="noopener noreferrer">
                                    <img src={powerbiLogo} alt="PowerBi Logo"/>
                                    <span>Power BI</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Home;
