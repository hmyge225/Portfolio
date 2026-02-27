export const portfolioData = {
  hero: {
    name: "Mangoua serge",
    title: "Développeur Fullstack",
    tagline: "Je transforme vos idées en applications web performantes et scalables",
  },
  about: {
    description: "Développeur fullstack passionné avec plus de 2 ans d'expérience dans la création d'applications web modernes. Je me spécialise dans la conception d'interfaces utilisateur intuitives et de systèmes backend . Mon objectif est de livrer des solutions techniques qui apportent une réelle valeur ajoutée tout en respectant les meilleures pratiques du développement web.",
  },
  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Vue.js",
    ],
    backend: [
      "Node.js",
      "Express",
      "Python/Django",
      "php/Laravel",
      "MySQL",
      "MongoDB",
      "REST API"
    ],
    tools: [
      "Git",
      "Docker",
      "VPS/Hebergeur web",
      "Postman",
    ]
  },
  projects: [
    { 
      id: 1,
      name: "Système de gestion du flux de clients dans les supermarchés",
      description: [
        "Intégration de l'API de paiement Kkiapay",
        "Gestion des sessions, authentification et groupes d'utilisateurs",
        "Génération de QR codes uniques pour chaque transaction",
        "Gestion des requêtes en temps réel avec Ajax et Django"
      ],
      stack: ["Django", "Ajax", "MySQL", "Kkiapay"],
      github: "https://github.com/hmyge225/Smartcaddi",
    },
    {
      id: 2,
      name: "Plateforme de gestion des stocks",
      description: [
        "Application de gestion de projets avec collaboration en temps réel",
        "Adoptée par plus de 500 utilisateurs en 3 mois"
      ],
      stack: ["Php", "Mysql", "MERISE", "Html/Css/Js"],
      github: "https://github.com/hmyge225",
    }
  ],
  experiences: [
    {
      id: 1,
      title: "Fullstack Developer",
      company: "EDANE",
      period: "2025-2026",
      description: [
        "Conception de l'Interface du Back Office d'une Application Mobile de prêt à usage Sanitaire",
        "Gestion des utilisateurs, rôles et permissions",
        "Suivi des transactions",
        "Génération de factures",
        "Notifications par email",
        "Vérification KYC"
      ],
    },
    {
      id: 2,
      title: "Fullstack Developer",
      company: "BSTEC",
      period: "2024-2025",
      description: [
        "Design et déploiement d'un site web administratif",
        "Intégration d'Odoo 18 Community",
        "Conception de Modules Odoo en XML / Python",
        "Intégration de L'API FNE pour la certification des factures (vente/Crédit)",
        "Gestion du serveur (Web/DNS/Mail via Bash et cPanel) sur un VPS Hostinger"
      ],
    },
    {
      id: 3,
      title: "Technicien Réseau",
      company: "Open Moise",
      period: "2023-2024",
      description: [
        "Déploiement et configuration des réseaux LAN"
      ]
    }
  ],
  hobbies: [
    { name: "Piano", icon: "keyboard" },
    { name: "Gaming", icon: "gamepad" }
  ],
  contact: {
    email: "contact@alexandremartin.dev",
    github: "https://github.com/alexandremartin",
    linkedin: "https://linkedin.com/in/alexandremartin"
  }
};
