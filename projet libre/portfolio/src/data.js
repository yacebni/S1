import javaLogo from './assets/technos/java.png';
import phpLogo from './assets/technos/php.png';
import cssLogo from './assets/technos/css.png';
import javascriptLogo from './assets/technos/javascript.png';
import pythonLogo from './assets/technos/python.png';
import mysqlLogo from './assets/technos/mysql.png';
import symfonyLogo from './assets/technos/symfony.png';
import htmlLogo from './assets/technos/html.png';
import tailwindLogo from './assets/technos/tailwind.png';
import cLogo from './assets/technos/c.png';
import figmaLogo from './assets/technos/figma.png';
import powerbiLogo from './assets/technos/powerbi.png';
import reactLogo from './assets/technos/react.png';
import springbootLogo from './assets/technos/springboot.png';
import swaggerLogo from './assets/technos/swagger.png';
import postgresqlLogo from './assets/technos/postgresql.png';
import postmanLogo from './assets/technos/postman.png';
import gitLogo from './assets/technos/git.png';

const projectData = {
    medipath: {
        title: 'MediPath',
        description: 'MediPath est une application Java permettant de trouver le meilleur chemin entre deux dispensaires.',
        languages: [
            { name: 'Java', logo: javaLogo },
            { name: 'GIT', logo: gitLogo}
        ],
        competencies: {
            'Réaliser': [
                'Appliquer des principes d’accessibilité et d’ergonomie',
                'Vérifier et valider la qualité de l’application par les tests'
            ],
            'Optimiser': [
                'Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)',
                'Formaliser et mettre en œuvre des outils mathématiques pour l’informatique',
                'Choisir des structures de données complexes adaptées au problème'
            ],
            'Conduire': [
                'Formaliser les besoins du client et de l\'utilisateur',
                'Définir et mettre en œuvre une démarche de suivi de projet'
            ],
            'Collaborer': [
                'Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire',
                'Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique'
            ]
        },
        github: 'https://github.com/yacebni/MediPath',
        screenshot: require('./assets/projects/medipath.png'),
    },
    brapeducation: {
        title: 'BRAP Education',
        description: 'BRAP Éducation est une application web permettant de gérer les différents évènements liés à l\'éducation (emploi du temps, absences, notes...)',
        languages: [
            { name: 'PHP', logo: phpLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'GIT', logo: gitLogo}
        ],
        competencies: {
            'Réaliser': [
                'Développer des interfaces utilisateurs',
                'Adopter de bonnes pratiques de conception et de programmation'
            ],
            'Optimiser': [
                'Formaliser et mettre en œuvre des outils mathématiques pour l’informatique'
            ],
            'Administrer': [
              'Concevoir et développer des applications communicantes'
            ],
            'Gérer': [
                'Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)',
                'Concevoir une base de données relationnelle à partir d’un cahier des charges'
            ],
            'Conduire': [
                'Mettre en place les outils de gestion de projet',
                'Identifier les critères de faisabilité d’un projet informatique'
            ],
            'Collaborer': [
                'Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire',
                'Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique',
                'Accompagner le management de projet informatique'
            ]
        },
        github: 'https://github.com/yacebni/brap',
        screenshot: require('./assets/projects/BRAP.png'),
    },
    gestcomp: {
        title: 'GestComp',
        description: 'GestComp est un projet que j\'ai réalisé dans le cadre de mon stage au sein de Cleva, cette application permet de gérer les compétences au sein de l\'entreprise.',
        languages: [
            { name: 'Spring Boot', logo: springbootLogo },
            { name: 'React', logo: reactLogo },
            { name: 'PostGre SQL', logo: postgresqlLogo },
            { name: 'PostMan', logo: postmanLogo },
            { name: 'Swagger', logo: swaggerLogo },
            { name: 'Figma', logo: figmaLogo },
            { name: 'GIT', logo: gitLogo}
        ],
        competencies: {
            'Réaliser': [
                'Développer des interfaces utilisateurs',
                'Adopter de bonnes pratiques de conception et de programmation'
            ],
            'Optimiser': [
                'Formaliser et mettre en œuvre des outils mathématiques pour l’informatique',
                'Comprendre les enjeux et moyens de sécurisation des données et du code'
            ],
            'Administrer': [
              'Concevoir et développer des applications communicantes'
            ],
            'Gérer': [
                'Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)',
                'Concevoir une base de données relationnelle à partir d’un cahier des charges'
            ],
            'Conduire': [
                'Mettre en place les outils de gestion de projet',
                'Identifier les critères de faisabilité d’un projet informatique'
            ]
        },
        screenshot: require('./assets/projects/gestcomp.png'),
    },
    smartcart: {
        title: 'Smart Cart',
        description: 'Une application de panier d\'achat vous permettant de stockers vos différentes listes de courses et leurs statistiques.',
        languages: [
            { name: 'Symfony', logo: symfonyLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'Tailwind', logo: tailwindLogo },
            { name: 'GIT', logo: gitLogo}
        ],
        competencies: {
            'Réaliser': [
                'Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences',
                'Appliquer des principes d’accessibilité et d’ergonomie',
                'Adopter de bonnes pratiques de conception et de programmation'
            ],
            'Gérer': [
                'Concevoir une base de données relationnelle à partir d’un cahier des charges',
                'Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)',
                'Organiser la restitution de données à travers la programmation et la visualisation'
            ],
            'Collaborer': [
                'Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire',
                'Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique'
            ]
        },
        github: 'https://github.com/yacebni/smartcart',
        screenshot: require('./assets/projects/SmartCart.png'),
    },
    kebab: {
        title: 'Kebab',
        description: 'Une application permettant de commander des kebabs en ligne.',
        languages: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'GIT', logo: gitLogo}
        ],
        competencies: {
            'Réaliser': ['Développer des\n' +
            'applications\n' +
            'informatiques simples', 'Partir des exigences\n' +
            'et aller jusqu’à une\n' +
            'application complète'],
            'Conduire': ['Identifier les besoins métiers des clients et des utilisateurs'],
            'Collaborer': ['Identifier ses aptitudes pour travailler dans une équipe', 'Situer son rôle et ses missions au sein d’une équipe informatique']
        },
        github: 'https://github.com/yacebni/kebab',
        screenshot: require('./assets/projects/kebab.png'),
    },
    lisi: {
        title: 'LiSI',
        description: 'LiSI est une application réalisée dans le cadre de ma première année de BUT. ' +
            'Fonctionnant en ligne de commande, elle permet de réaliser différentes actions sur un annuaire donné au format csv.',
        languages: [
            { name: 'C', logo: cLogo },
            { name: 'GIT', logo: gitLogo}
        ],
        competencies: {
            'Réaliser': ['Développer des\n' +
            'applications\n' +
            'informatiques simples', 'Partir des exigences\n' +
            'et aller jusqu’à une\n' +
            'application complète'],
            'Collaborer': ['Identifier ses aptitudes pour travailler dans une équipe', 'Situer son rôle et ses missions au sein d’une équipe informatique']
        },
        github: 'https://github.com/yacebni/LiSI',
        screenshot: require('./assets/projects/LiSI.png'),
    },
    rapportpowerbi: {
        title: 'Rapport Power BI',
        description: 'Ce rapport a été réalisé dans le cadre de la première année de BUT Informatique, il permet la demonstration de données fournies grâce à différents graphiques.',
        languages: [
            { name: 'Power BI', logo: powerbiLogo },
        ],
        competencies: {
            'Optimiser': ['Formaliser et mettre en œuvre des outils mathématiques pour l’informatique']
        },
        screenshot: require('./assets/projects/rapport.png'),
    },
    virusinformatique: {
        title: 'Virus Informatique ',
        description: 'Ceci est une affiche de sensibilisation aux virus informatiques réalisée dans le cadre du cours de communication.',
        languages: [
            { name: 'Figma', logo: figmaLogo },
        ],
        competencies: {
            'Collaborer': [
                'Appréhender l’écosystème numérique',
                'Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation'
            ]
        },
        screenshot: require('./assets/projects/virus.png'),
    },
};

export default projectData;