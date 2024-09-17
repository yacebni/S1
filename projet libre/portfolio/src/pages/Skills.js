import React, { useEffect, useState } from 'react';
import '../components/Skills.css';
import {Link, useLocation} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import projectData from '../data';

const Skills = () => {
    const location = useLocation();
    // eslint-disable-next-line
    const [currentLevels, setCurrentLevels] = useState({
        realiser: 2,
        optimiser: 2,
        administrer: 2,
        gerer: 2,
        conduire: 2,
        collaborer: 2
    });
    console.log(projectData);

    useEffect(() => {
        if (location.hash) {
            const elementId = location.hash.slice(1);
            if (elementId !== "réaliser") {
                const element = document.getElementById(elementId);
                if (element) {
                    const offset = -100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition + offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }, [location]);

    const getLevelClassName = (competence, level) => {
        if (currentLevels[competence] === level) {
            return 'level-current';
        }
        return '';
    };

    const normalizeCompetency = (competency) => {
        return competency.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const getProjectsByCompetency = (competency) => {
        const normalizedCompetency = normalizeCompetency(competency);
        return Object.values(projectData).filter(project => {
            const projectCompetencies = Object.keys(project.competencies);
            return projectCompetencies.includes(competency) || projectCompetencies.some(comp => normalizeCompetency(comp) === normalizedCompetency);
        });
    };

    return (
        <section id="competences">
            <h2>Compétences</h2>

            <div className="competence" id="realiser">
                <h3>Réaliser</h3>
                <p>Développer, c’est-à-dire concevoir, coder, tester et intégrer une solution informatique pour un
                    client.</p>
                <div className={`level-box ${getLevelClassName('realiser', 1)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 1</div>
                        <div className="description">Développer des applications informatiques simples.</div>
                    </div>
                </div>
                <div className={`level-box ${getLevelClassName('realiser', 2)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 2</div>
                        <div className="description">Partir des exigences et aller jusqu’à une application complète.
                        </div>
                    </div>
                </div>
                <div className={`level-box ${getLevelClassName('realiser', 3)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 3</div>
                        <div className="description">Adapter des applications sur un
                            ensemble de supports (embarqué,
                            web, mobile, IoT...).
                        </div>
                    </div>
                </div>
                <h4>Exemples de compétences associées :</h4>
                <ul className="examples">
                    <li>Élaborer des conceptions simples.</li>
                    <li>Adopter de bonnes pratiques de conception et de programmation.</li>
                    <li>Intégrer des solutions dans un environnement de production.</li>
                </ul>
                <h4>Projets liés :</h4>
                <ul className="related-projects">
                    {getProjectsByCompetency('Réaliser').map(project => (
                        <li key={project.title}>
                            <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '')}`}>
                                {project.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="competence" id="optimiser">
                <h3>Optimiser</h3>
                <p>Optimiser les applications informatiques en fonction de critères spécifiques : temps d’exécution,
                    précision, consommation de ressources...</p>
                <div className={`level-box ${getLevelClassName('optimiser', 1)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 1</div>
                        <div className="description">Appréhender et construire des algorithmes.</div>
                    </div>
                </div>
                <div className={`level-box ${getLevelClassName('optimiser', 2)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 2</div>
                        <div className="description">Sélectionner les algorithmes adéquats pour répondre à un problème
                            donné.
                        </div>
                    </div>
                </div>
                <div className={`level-box ${getLevelClassName('optimiser', 3)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 3</div>
                        <div className="description">Analyser et optimiser des applications.</div>
                    </div>
                </div>
                <h4>Exemples de compétences associées :</h4>
                <ul className="examples">
                    <li>Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...).</li>
                    <li>Choisir des structures de données complexes adaptées au problème.</li>
                    <li>Profiler, analyser et justifier le comportement d’un code existant.</li>
                </ul>
                <h4>Projets liés :</h4>
                <ul className="related-projects">
                    {getProjectsByCompetency('Optimiser').map(project => (
                        <li key={project.title}>
                            <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '')}`}>
                                {project.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="competence" id="administrer">
                <h3>Administrer</h3>
                <p>Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des
                    infrastructures, des services et des réseaux et optimiser le système informatique d’une
                    organisation.</p>
                <div className={`level-box ${getLevelClassName('administrer', 1)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 1</div>
                        <div className="description">Installer et configurer un poste de travail.</div>
                    </div>
                </div>
                <div className={`level-box ${getLevelClassName('administrer', 2)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 2</div>
                        <div className="description">Déployer des services dans une architecture réseau.</div>
                    </div>
                </div>
                <h4>Exemples de compétences associées :</h4>
                <ul className="examples">
                    <li>Installer et configurer un système d’exploitation et des outils de développement.</li>
                    <li>Concevoir et développer des applications communicantes.</li>
                    <li>Sécuriser les services et données d’un système.</li>
                </ul>
                <h4>Projets liés :</h4>
                <ul className="related-projects">
                    {getProjectsByCompetency('Administrer').map(project => (
                        <li key={project.title}>
                            <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '')}`}>
                                {project.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="competence" id="gerer">
                <h3>Gérer</h3>
                <p>Concevoir, gérer, administrer et exploiter les données de l’entreprise et mettre à disposition toutes
                    les informations pour un bon pilotage de l’entreprise.</p>
                <div className={`level-box ${getLevelClassName('gerer', 1)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 1</div>
                        <div className="description">Concevoir et mettre en place une base de données à partir d’un
                            cahier des charges client.
                        </div>
                    </div>
                </div>
                <div className={`level-box ${getLevelClassName('gerer', 2)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 2</div>
                        <div className="description">Optimiser une base de données, interagir avec une application et
                            mettre en œuvre la sécurité.
                        </div>
                    </div>
                </div>
                <h4>Exemples de compétences associées :</h4>
                <ul className="examples">
                    <li>Concevoir une base de données relationnelle à partir d’un cahier des charges.</li>
                    <li>Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers
                        une application).
                    </li>
                    <li>Organiser la restitution de données à travers la programmation et la visualisation.</li>
                </ul>
                <h4>Projets liés :</h4>
                <ul className="related-projects">
                    {getProjectsByCompetency('Gérer').map(project => (
                        <li key={project.title}>
                            <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '')}`}>
                                {project.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="competence" id="conduire">
                <h3>Conduire</h3>
                <p>Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et
                    piloter un projet informatique avec des méthodes classiques ou agiles.</p>
                <div className={`level-box ${getLevelClassName('conduire', 1)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 1</div>
                        <div className="description">Identifier les besoins métiers des clients et des utilisateurs.
                        </div>
                    </div>
                </div>
                <div className={`level-box ${getLevelClassName('conduire', 2)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 2</div>
                        <div className="description">Appliquer une démarche de suivi de projet en fonction des besoins
                            métiers des clients et des utilisateurs.
                        </div>
                    </div>
                </div>
                <h4>Exemples de compétences associées :</h4>
                <ul className="examples">
                    <li>Identifier les acteurs et les différentes phases d’un cycle de développement.</li>
                    <li>Identifier les critères de faisabilité d’un projet informatique.</li>
                    <li>Définir et mettre en œuvre une démarche de suivi de projet.</li>
                </ul>
                <h4>Projets liés :</h4>
                <ul className="related-projects">
                    {getProjectsByCompetency('Conduire').map(project => (
                        <li key={project.title}>
                            <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '')}`}>
                                {project.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="competence" id="collaborer">
                <h3>Collaborer</h3>
                <p>Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une
                    équipe informatique.</p>
                <div className={`level-box ${getLevelClassName('collaborer', 1)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 1</div>
                        <div className="description">Identifier ses aptitudes pour travailler dans une équipe.</div>
                    </div>
                </div>
                <div className={`level-box ${getLevelClassName('collaborer', 2)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 2</div>
                        <div className="description">Situer son rôle et ses missions au sein d’une équipe
                            informatique.
                        </div>
                    </div>
                </div>
                <div className={`level-box ${getLevelClassName('collaborer', 3)}`}>
                    <div className="level-icon">
                        <FontAwesomeIcon icon={faLevelUpAlt}/>
                    </div>
                    <div className="level-info">
                        <div className="level-title">Niveau 3</div>
                        <div className="description">Manager une équipe informatique.</div>
                    </div>
                </div>
                <h4>Exemples de compétences associées :</h4>
                <ul className="examples">
                    <li>Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe
                        pluridisciplinaire.
                    </li>
                    <li>Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique.</li>
                    <li>Accompagner le management de projet informatique.</li>
                </ul>
                <h4>Projets liés :</h4>
                <ul className="related-projects">
                    {getProjectsByCompetency('Collaborer').map(project => (
                        <li key={project.title}>
                            <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '')}`}>
                                {project.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
