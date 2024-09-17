import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../components/ProjectDetails.css';
import projectData from "../data";
import githubLogo from '../assets/technos/github.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";


const normalizeCompetency = (competency) => {
    return competency.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projectData[projectId];

    if (!project) {
        return <div>Projet non trouvé</div>;
    }

    return (
        <div className="project-details-page">
            <div className="back-skills-button">
                <Link to="/skills" className="back-link">
                    Retour aux compétences
                    <FontAwesomeIcon icon={faArrowRight} className="back-right-icon"/>
                </Link>
            </div>
            <div className="back-button">
                <Link to="/projects" className="back-link">
                    <FontAwesomeIcon icon={faArrowLeft} className="back-left-icon"/>
                    Retour aux projets
                </Link>
            </div>
            <h2>{project.title}</h2>
            <img src={project.screenshot} alt={`${project.title} Screenshot`} className="project-screenshot-details"/>
            <p>{project.description}</p>
            <h3>Technologies utilisées</h3>
            <ul className="languages-list">
                {project.languages.map(language => (
                    <li key={language.name}>
                        <img src={language.logo} alt={`${language.name} Logo`} className="language-logo"/>
                        <span>{language.name}</span>
                    </li>
                ))}
            </ul>
            <h3>Compétences mises en œuvre</h3>
            <ul className="competency-list">
                {Object.keys(project.competencies).map(competency => (
                    <li key={competency} className="competency-item">
                        <Link to={`/skills#${normalizeCompetency(competency)}`} className="competency-link">
                            {competency}
                        </Link>
                        <ul className="sub-competencies-list">
                            {project.competencies[competency].map(subCompetency => (
                                <li key={subCompetency} className="sub-competency-item">
                                    {subCompetency}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            {project.github && (
                <a href={project.github} className="github-link">
                    <img src={githubLogo} alt="GitHub Logo" className="github-icon" title="Voir sur GitHub"/>
                </a>
            )}
        </div>
    );
};

export default ProjectDetails;
