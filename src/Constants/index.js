import { estm, meta, shopify, starbucks,bac,maroc, tesla, uca } from "../assets/images";
import {
    C,
    Python,
    Java,
    Php,
    angular,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    MySql,
    Oracle,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: Php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: Java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: C,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: Python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: MySql,
        name: "MySQL",
        type: "Database",
    },
    {
        
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: Oracle,
        name: "Oracle",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [

   {
        title: "Baccalauréat Science Mathématique",
        company_name: "Lycée Moulay Ismail Meknès, Maroc",
        icon: bac,
        iconBg: "#accbe1",
        date: "Septembre 2019 - Août 2020",
        points: [
            "Obtention du baccalauréat en science mathématique, préparation aux études supérieures en technologies de l'information et en ingénierie logicielle.",
        ],
    },
    {
        title: "Diplôme Universitaire de Technologie en Génie Informatique Option Génie Logiciel",
        company_name: "Ecole Supérieure de technologie Meknès, Maroc",
        icon: estm, 
        iconBg: "#accbe1", 
        date: "Septembre 2020 - Août 2022",
        points: [
            "Formation technique et pratique en génie informatique, spécialisation en génie logiciel.",
        ],
    },
    {
        title: "Stage d'Initiation",
        company_name: "Centre provincial du système Informatique Meknès, Maroc",
        icon: maroc, 
        iconBg: "#accbe1", 
        date: "Juillet 2021 - Août 2021",
        points: [
            "Étude des applications web utilisées par le CPSI.",
        ],
    },
    {
        title: "Stage Fin d'Études",
        company_name: "Centre provincial du Système Informatique Meknès, Maroc",
        icon: maroc,
        iconBg: "#accbe1",
        date: "Avril 2022 - Juin 2022",
        points: [
            "Création d'une application de bureau pour la gestion des formations avec suivi du chef du CPSI.",
        ],
    },
    {
        title: "Licence en Informatique",
        company_name: "Université Côte D'Azur Nice",
        icon: uca, 
        iconBg: "#accbe1", 
        date: "Septembre 2022 - Août 2023",
        points: [
            "Cursus universitaire axé sur l'informatique, l'apprentissage des langages de programmation et des concepts de développement logiciel.",
        ],
    },
    {
        title: "Master 1 Méthodes Informatiques Appliquées à la Gestion Des Entreprises",
        company_name: "Université Côte D'Azur Biot",
        icon: uca, 
        iconBg: "#accbe1", 
        date: "Depuis septembre 2023",
        points: [
            "Formation spécialisée dans l'application des méthodes informatiques à la gestion d'entreprise, offrant une compétence à l'interface entre la gestion et l'informatique.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/salah0250',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Jarvis Chatbot',
        description: "Ce projet est un chatbot nommé Jarvis qui permet aux utilisateurs de dialoguer avec une intelligence artificielle pour gérer un jeu.  Voici un résumé des principales fonctionnalités \n : "
        + " Reconnaissance Vocale avec API Whisper de OpenIa. \n"
        + " Communication avec ChatGpt. \n"
        + " Reponse Vocale avec API SpeechSynthesis de Javascript. \n",
        link: 'https://github.com/salah0250/Projet_MIAGE',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Angular TaskManager',
        description: "Ce projet Angular constitue un gestionnaire d`Assignments, permettant à l`utilisateur de créer, éditer, supprimer et afficher des devoirs. Le code est structuré en plusieurs composants qui offrent une interface utilisateur intuitive et interactive.\n"
        + " Technologies Utilisées : Angular (Frontend). Node.js et Express.js (Backend).  MongoDB (Base de données).  HTTP pour la communication entre le Frontend et le Backend.       ",
        link: 'https://front-end-assignments.onrender.com/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Application web de gestion des formations',
        description: 'Cette application vise à faciliter le processus d`organisation des cours de formation et d`envoi des invitations aux bénéficiaires, afin de déduire des statistiques qui permet de savoir l’efficacité et la qualité de la formation',
        link: 'https://github.com/salah0250/GestionFormations',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Système d`apprentissage et de reconnaissance de formes',
        description: 'Le but de ce projet est de développer une Web Application qui permet la reconnaissance et la détection d`un objet dans le flux donné via webcam également connu sous le nom de Object détections, basé sur l`intelligence artificielle notamment l`apprentissage automatique,',
        link: 'https://github.com/salah0250',
    }
];