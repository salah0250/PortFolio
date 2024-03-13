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
        icon: bac, // Remplacez par l'icône appropriée
        iconBg: "#accbe1", // Remplacez par la couleur de fond appropriée pour le lycée
        date: "Septembre 2019 - Août 2020",
        points: [
            "Obtention du baccalauréat en science mathématique, préparation aux études supérieures en technologies de l'information et en ingénierie logicielle.",
        ],
    },
    {
        title: "Diplôme Universitaire de Technologie en Génie Informatique Option Génie Logiciel",
        company_name: "Ecole Supérieure de technologie Meknès, Maroc",
        icon: estm, // Remplacez par l'icône appropriée
        iconBg: "#accbe1", // Remplacez par la couleur de fond appropriée pour l'ESTM
        date: "Septembre 2020 - Août 2022",
        points: [
            "Formation technique et pratique en génie informatique, spécialisation en génie logiciel.",
        ],
    },
    {
        title: "Stage d'Initiation",
        company_name: "Centre provincial du système Informatique Meknès, Maroc",
        icon: maroc, // Remplacez par l'icône appropriée
        iconBg: "#accbe1", // Remplacez par la couleur de fond appropriée pour CPSI
        date: "Juillet 2021 - Août 2021",
        points: [
            "Étude des applications web utilisées par le CPSI.",
        ],
    },
    {
        title: "Stage Fin d'Études",
        company_name: "Centre provincial du Système Informatique Meknès, Maroc",
        icon: maroc, // Remplacez par l'icône appropriée
        iconBg: "#accbe1", // Remplacez par la couleur de fond appropriée pour CPSI
        date: "Avril 2022 - Juin 2022",
        points: [
            "Création d'une application de bureau pour la gestion des formations avec suivi du chef du CPSI.",
        ],
    },
    {
        title: "Licence en Informatique",
        company_name: "Université Côte D'Azur Nice",
        icon: uca, // Remplacez par l'icône appropriée
        iconBg: "#accbe1", // Remplacez par la couleur de fond appropriée pour l'université
        date: "Septembre 2022 - Août 2023",
        points: [
            "Cursus universitaire axé sur l'informatique, l'apprentissage des langages de programmation et des concepts de développement logiciel.",
        ],
    },
    {
        title: "Master 1 Méthodes Informatiques Appliquées à la Gestion Des Entreprises",
        company_name: "Université Côte D'Azur Biot",
        icon: uca, // Remplacez par l'icône appropriée
        iconBg: "#accbe1", // Remplacez par la couleur de fond appropriée pour l'université
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];