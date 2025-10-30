export const LANGUAGES = {
  en: "English",
  es: "Español",
};

const browserLanguage = navigator.language.split("-")[0];
export const DEFAULT_LANGUAGE = Object.keys(LANGUAGES).includes(browserLanguage) ? browserLanguage as keyof typeof LANGUAGES : "en"

export const DICTIONARY = {
  en: {
    "toast.copy.error": "Error during copy",
    "header.subtitle": "FullStack Developer",
    "header.work": "Work",
    "header.about-me": "About Me",
    "header.contact": "Contact",
    "header.technologies": "Technologies",
    "footer.updated-on": "Updated on",
    "footer.github.aria-label": "Ezetorc's Github",
    "footer.discord.aria-label": "Ezetorc's Discord",
    "hero.subtitle": "FullStack Developer",
    "hero.description": "From Argentina with 2 years of experience.",
    "hero.view-all-work": "View work",
    "hero.read-about-me": "Read about me",
    "work.title": "Work",
    "work.subtitle": "Some of my featured projects.",
    "work.view-code": "View Code",
    "work.visit-site": "Visit site",
    "work.overview.title": "Overview",

    "work.notievan.title": "Notievan",
    "work.notievan.description": "My school's official newspaper website with articles made for others students.",
    "work.notievan.detailed-description": "A real-world FullStack web app developed for my school's newspaper, designed to share news, stories, and events with the school community.",
    "work.notievan.overview.paragraph.1": "Notievan is a complete web platform for managing and reading school news, built with a minimalist interface inspired by my school's colors.",
    "work.notievan.overview.paragraph.2": "The system allows authorized users to create, edit, and delete articles, while a role-based permission system ensures proper access control for editors and administrators.",
    "work.notievan.overview.paragraph.3": "Developed from scratch in just two weeks, this was a real commissioned project requested by a senior student — a genuine opportunity to bring someone's idea to life.",
    "work.notievan.overview.image.alt": "Notievan Articles Page",
    "work.notievan.process.paragraph.1": "This project marked my first experience delivering a real-world web app under time pressure. I had to handle everything — from UI design to backend logic and deployment.",
    "work.notievan.process.paragraph.2": "During development, I implemented authentication, role management, and CRUD operations for articles using a Node.js backend and a React frontend.",
    "work.notievan.process.paragraph.3": "Completing Notievan in just two weeks taught me how to plan, prioritize, and adapt to real client needs — turning an idea into a polished and functional product.",
    "work.notievan.process.image.alt": "Notievan Article Page",

    "work.vibe-network.title": "Vibe Network",
    "work.vibe-network.description":
      "Social network to connect with other people and have a lot fun!",
    "work.vibe-network.detailed-description": `A social network project where users can create profiles, share posts,
      connect with others, and interact in real time.`,
    "work.vibe-network.overview.paragraph.1": `Full-stack social network showcasing skills in authentication, user management, and interactive features.`,
    "work.vibe-network.overview.paragraph.2": `Implemented secure login with JWT and password encryption, profile creation, posting, commenting, and following system, simulating a real-world social media environment.`,
    "work.vibe-network.overview.paragraph.3": `This was my first FullStack project.`,
    "work.vibe-network.overview.image.alt": "Vibe Network Register Page",
    "work.vibe-network.process.image.alt": "Vibe Network Posts Page",
    "work.vibe-network.process.paragraph.1": `Gained first experience implementing authentication in a
    production-level project.`,
    "work.vibe-network.process.paragraph.2": `Developed skills in JWT, password encryption, and session handling
    while addressing scalability challenges.`,
    "work.vibe-network.process.paragraph.3": `Strengthened ability to design complex systems and translate
    theoretical knowledge into practical solutions.`,
    "work.bolsillo-feliz.title": "Bolsillo Feliz",
    "work.bolsillo-feliz.description":
      "Web Application for managing your incomes and expenses.",
    "work.bolsillo-feliz.detailed-description": `A FullStack web application where I built the backend side, designed to manage users, transactions, and analytics for a personal finance management system. Developed in a collaborative international team.`,
    "work.bolsillo-feliz.overview.paragraph.1": `This was my first collaborative project, working with developers from different countries including Chile. I took a technical lead role, guiding the team and making key architectural decisions.`,
    "work.bolsillo-feliz.overview.paragraph.2": `Through this project, I deepened my knowledge in NodeJS, Express, Prisma, and MySQL, while implementing JWT authentication for secure user management.`,
    "work.bolsillo-feliz.overview.paragraph.3": `The backend includes full expense management, analytics, and reporting features, allowing users to track and analyze their spending effectively.`,
    "work.bolsillo-feliz.overview.image.alt":
      "Bolsillo Feliz API Architecture Diagram",
    "work.bolsillo-feliz.process.image.alt":
      "Bolsillo Feliz Backend Endpoints Documentation",
    "work.bolsillo-feliz.process.paragraph.1": `Implemented a modular and maintainable architecture with Node.js and Express, connecting Prisma ORM to a MySQL database for reliable data management.`,
    "work.bolsillo-feliz.process.paragraph.2": `Configured JWT authentication to manage user authorization securely.`,
    "work.bolsillo-feliz.process.paragraph.3": `Developed expenses and incomes (transactions) management.`,
    "work.cinetro-backend.title": "Cinetro Backend",
    "work.cinetro-backend.description":
      "Backend application for cinema management.",
    "work.cinetro-backend.detailed-description":
      "Scalable backend built with NestJS, Prisma, and MySQL, designed to manage a cinema CRUD system — including cinemas, seats, movies, screenings, tickets and more. It features an ABAC system, JWT authentication, Redis caching, and Swagger documentation, all containerized with Docker.",
    "work.cinetro-backend.overview.paragraph.1":
      "Developing this backend strengthened my understanding of scalable architectures, database modeling, and backend design patterns.",
    "work.cinetro-backend.overview.paragraph.2":
      "I learned to integrate tools like Swagger for API documentation, Redis for caching, and Docker for consistent development environments.",
    "work.cinetro-backend.overview.paragraph.3":
      "Building a flexible ABAC-based role system deepened my knowledge of security and access control in real-world applications.",
    "work.cinetro-backend.process.paragraph.1":
      "I implemented a modular architecture in NestJS, connecting Prisma ORM with MySQL for reliable data management.",
    "work.cinetro-backend.process.paragraph.2":
      "I configured JWT authentication and a custom ABAC role system to manage detailed permissions across different user types.",
    "work.cinetro-backend.process.paragraph.3":
      "I integrated Redis for caching and performance optimization, with the entire application containerized in Docker for easy deployment.",
    "work.frontend": "Frontend",
    "work.backend": "Backend",
    "work.process": "Process",
    "work.go-back": "Go Back",
    "about-me.title": "About Me",
    "about-me.paragraph.1":
      "<strong>Full-stack</strong> developer from Argentina with <strong>2 years of experience</strong>.",
    "about-me.paragraph.2":
      "Skilled in <strong>React and NodeJS</strong>, with hands-on expertise in building scalable applications and collaborating in team projects.",
    "about-me.paragraph.3":
      "Currently contributing to Biblioteca Code Cafe, an online library application, enhancing skills in <strong>teamwork</strong>, problem-solving, and delivering functional solutions.",
    "about-me.paragraph.4":
      "Studying <strong>English at a B2 level</strong>, strengthening communication skills for international collaboration.",
    "about-me.face-image.alt": "My Face",
    "about-me.argentine-flag-image.alt": "Argentine Flag",
    "technologies.title": "Technologies",
    "technologies.subtitle":
      "Tools and technologies I rely on to build and grow my projects.",
    "technology.html.description": "Markup Language",
    "technology.css.description": "Style Sheet Language",
    "technology.javascript.description": "Programming Language",
    "technology.typescript.description": "Programming Language",
    "technology.github.description": "Code Hosting",
    "technology.react.description": "UI Library",
    "technology.tailwind.description": "Utility Library",
    "technology.astro.description": "Frontend Framework",
    "technology.mysql.description": "Relational Database",
    "technology.nodejs.description": "Runtime Environment",
    "technology.express.description": "Framework",
    "technology.nestjs.description": "Backend Framework",
    "technology.git.description": "Version Control",
    "technology.docker.description": "Container Platform",
    "technology.redis.description": "In-memory cache",
    "technology.prisma.description": "Database ORM",
    "technology.cloudinary.description": "Image Hosting",
    "technology.postgresql.description": "Relational Database",
    "technology.zod.description": "Data Validation",
    "contact-me.title": "Contact Me",
    "contact-me.subtitle":
      "Let's connect and create innovative solutions together.",
    "contact-me.instructions":
      "Complete the form to send me a message via email or contact me directly by my Discord.",
    "contact-me.copy-email": "Copy Email",
    "contact-me.copy-discord": "Copy Discord",
    "contact-me.email-placeholder": "jhon-doe@email.com",
    "contact-me.message-placeholder":
      "Hi! I'm Jhon Doe and I've an idea for a project...",
    "contact-me.send-message": "Send Message",
  },
  es: {
    "toast.copy.error": "Error al copiar",
    "header.subtitle": "Desarrollador FullStack",
    "header.work": "Trabajo",
    "header.about-me": "Sobre Mí",
    "header.contact": "Contacto",
    "header.technologies": "Tecnologías",
    "footer.updated-on": "Actualizado el",
    "footer.github.aria-label": "Github de Ezetorc",
    "footer.discord.aria-label": "Discord de Ezetorc",
    "hero.subtitle": "Desarrollador FullStack",
    "hero.description": "De Argentina con 2 años de experiencia.",
    "hero.view-all-work": "Ver proyectos",
    "hero.read-about-me": "Leer sobre mí",
    "work.title": "Trabajo",
    "work.subtitle": "Algunos de mis proyectos destacados.",
    "work.visit-site": "Visitar sitio",

    "work.notievan.title": "Notievan",
    "work.notievan.description": "El sitio web oficial del diario de mi escuela con artículos hechos por otros estudiantes.",
    "work.notievan.detailed-description": "Una aplicación web FullStack desarrollada para el diario de mi escuela, creada para compartir noticias, historias y eventos con toda la comunidad escolar.",
    "work.notievan.overview.paragraph.1": "Notievan es una plataforma completa para gestionar y leer noticias escolares, con un diseño minimalista inspirado en los colores de mi escuela.",
    "work.notievan.overview.paragraph.2": "El sistema permite a los usuarios autorizados crear, editar y eliminar artículos, mientras que un sistema de roles garantiza el control de acceso adecuado para editores y administradores.",
    "work.notievan.overview.paragraph.3": "Desarrollado desde cero en solo dos semanas, fue un proyecto real encargado por una estudiante de sexto año — una oportunidad genuina de transformar una idea en un producto funcional.",
    "work.notievan.overview.image.alt": "Página de artículos de Notievan",
    "work.notievan.process.paragraph.1": "Este proyecto marcó mi primera experiencia entregando una aplicación web real bajo presión de tiempo. Tuve que encargarme de todo — desde el diseño de la interfaz hasta la lógica del backend y el despliegue.",
    "work.notievan.process.paragraph.2": "Durante el desarrollo implementé autenticación, gestión de roles y operaciones CRUD para los artículos, utilizando un backend en Node.js y un frontend en React.",
    "work.notievan.process.paragraph.3": "Completar Notievan en solo dos semanas me enseñó a planificar, priorizar y adaptarme a las necesidades reales de un cliente — convirtiendo una idea en un producto completo y pulido.",
    "work.notievan.process.image.alt": "Página de artículo de Notievan",

    "work.vibe-network.title": "Vibe Network",
    "work.vibe-network.description":
      "Red social para conectar con otros y divertirse mucho!",
    "work.vibe-network.detailed-description":
      "Un proyecto de red social donde los usuarios pueden crear perfiles, compartir publicaciones, conectarse con otros e interactuar en tiempo real.",
    "work.view-code": "Ver Código",
    "work.overview.title": "Resúmen",
    "work.vibe-network.overview.paragraph.1":
      "Red social FullStack que muestra habilidades en autenticación, gestión de usuarios y funciones interactivas.",
    "work.vibe-network.overview.paragraph.2":
      "Implementación de inicio de sesión seguro con JWT y cifrado de contraseñas, creación de perfiles, publicaciones, comentarios y sistema de seguimiento, simulando un entorno real de red social.",
    "work.vibe-network.overview.image.alt":
      "Página de registro de Vibe Network",
    "work.vibe-network.process.image.alt":
      "Página de publicaciones de Vibe Network",
    "work.frontend": "Frontend",
    "work.backend": "Backend",
    "work.process": "Proceso",
    "work.vibe-network.process.paragraph.1":
      "Adquirí experiencia implementando autenticación en un proyecto a nivel de producción.",
    "work.vibe-network.process.paragraph.2":
      "Desarrollé habilidades en JWT, cifrado de contraseñas y manejo de sesiones mientras abordaba desafíos de escalabilidad.",
    "work.vibe-network.process.paragraph.3":
      "Fortalecí la capacidad de diseñar sistemas complejos y traducir conocimientos teóricos en soluciones prácticas.",
    "work.vibe-network.overview.paragraph.3":
      "Este fue mi primer proyecto FullStack.",
    "work.go-back": "Volver",
    "work.cinetro-backend.title": "Cinetro Backend",
    "work.cinetro-backend.description":
      "Aplicación backend para la gestión de cines.",
    "work.cinetro-backend.detailed-description": `Backend escalable construido con NestJS, Prisma y MySQL, diseñado para gestionar todos los aspectos clave de un sistema de cine — incluyendo cines, salas, asientos, películas, funciones y tickets. Cuenta con un sistema de control de acceso basado en roles ABAC, autenticación JWT, cache con Redis y documentación con Swagger, todo containerizado con Docker para facilitar el mantenimiento y el despliegue eficiente.`,
    "work.cinetro-backend.overview.paragraph.1": `Desarrollar este backend fortaleció mi comprensión de arquitecturas escalables, modelado de bases de datos y patrones de diseño backend.`,
    "work.cinetro-backend.overview.paragraph.2": `Aprendí a integrar herramientas como Swagger para documentación de APIs, Redis para cache y Docker para entornos de desarrollo consistentes.`,
    "work.cinetro-backend.overview.paragraph.3": `Construir un sistema de roles flexible basado en ABAC profundizó mi conocimiento sobre seguridad y control de acceso en aplicaciones reales.`,
    "work.cinetro-backend.overview.image.alt":
      "Diagrama de arquitectura de la API de Cinetro",
    "work.cinetro-backend.process.image.alt":
      "Documentación Swagger del backend de Cinetro",
    "work.cinetro-backend.process.paragraph.1": `Implementé una arquitectura modular en NestJS, conectando Prisma ORM con MySQL para una gestión confiable de datos.`,
    "work.cinetro-backend.process.paragraph.2": `Configuré autenticación JWT y un sistema de roles ABAC personalizado para gestionar permisos detallados entre diferentes tipos de usuarios.`,
    "work.cinetro-backend.process.paragraph.3": `Integré Redis para caching y optimización de rendimiento, con toda la aplicación containerizada en Docker para un despliegue sencillo.`,
    "work.bolsillo-feliz.title": "Bolsillo Feliz",
    "work.bolsillo-feliz.description":
      "Aplicación web para gestionar tus ingresos y gastos.",
    "work.bolsillo-feliz.detailed-description": `Aplicación web FullStack donde desarrollé el backend, diseñada para gestionar usuarios, transacciones y análisis dentro de un sistema de gestión de finanzas personales. Desarrollada en un equipo colaborativo internacional.`,
    "work.bolsillo-feliz.overview.paragraph.1": `Este fue mi primer proyecto colaborativo, trabajando con desarrolladores de distintos países, incluyendo Chile. Asumí un rol de liderazgo técnico, guiando al equipo y tomando decisiones clave de arquitectura.`,
    "work.bolsillo-feliz.overview.paragraph.2": `A través de este proyecto profundicé mis conocimientos en Node.js, Express, Prisma y MySQL, implementando autenticación JWT para una gestión segura de usuarios.`,
    "work.bolsillo-feliz.overview.paragraph.3": `El backend incluye gestión completa de gastos, análisis y generación de reportes, permitiendo a los usuarios hacer seguimiento y analizar sus finanzas de manera efectiva.`,
    "work.bolsillo-feliz.overview.image.alt":
      "Diagrama de arquitectura de la API de Bolsillo Feliz",
    "work.bolsillo-feliz.process.image.alt":
      "Documentación de endpoints del backend de Bolsillo Feliz",
    "work.bolsillo-feliz.process.paragraph.1": `Implementé una arquitectura modular y mantenible con Node.js y Express, conectando Prisma ORM a una base de datos MySQL para una gestión confiable de los datos.`,
    "work.bolsillo-feliz.process.paragraph.2": `Configuré autenticación JWT para gestionar la autorización de los usuarios de manera segura.`,
    "work.bolsillo-feliz.process.paragraph.3": `Desarrollé la gestión de gastos e ingresos (transacciones).`,
    "about-me.title": "Sobre mí",
    "about-me.paragraph.1":
      "Desarrollador <strong>FullStack</strong> de Argentina con <strong>2 años de experiencia</strong>.",
    "about-me.paragraph.2":
      "Experto en <strong>React y NodeJS</strong>, con práctica en apps escalables y trabajo en equipo.",
    "about-me.paragraph.3":
      "Actualmente trabajando en Biblioteca Code Cafe, plataforma de biblioteca online, mejorando habilidades en <strong>equipo</strong>, resolución de problemas y entrega de soluciones.",
    "about-me.paragraph.4":
      "Estudio <strong>inglés en nivel B2</strong>, reforzando la comunicación para colaborar internacionalmente.",
    "about-me.face-image.alt": "Mi cara",
    "about-me.argentine-flag-image.alt": "Bandera de Argentina",
    "technologies.title": "Tecnologías",
    "technologies.subtitle":
      "Herramientas y tecnologías que uso para crear y hacer crecer mis proyectos.",
    "technology.html.description": "Lenguaje de marcado",
    "technology.css.description": "Lenguaje de estilado",
    "technology.javascript.description": "Lenguaje de programación",
    "technology.typescript.description": "Lenguaje de programación",
    "technology.github.description": "Alojamiento de código",
    "technology.react.description": "Librería de interfaces",
    "technology.tailwind.description": "Librería de utilidades",
    "technology.astro.description": "Framework de frontend",
    "technology.mysql.description": "Base de datos relacional",
    "technology.nodejs.description": "Entorno de ejecución",
    "technology.express.description": "Framework",
    "technology.nestjs.description": "Framework de backend",
    "technology.git.description": "Control de versiones",
    "technology.docker.description": "Plataforma de contenedores",
    "technology.redis.description": "Cache en memoria",
    "technology.prisma.description": "ORM para bases de datos",
    "technology.cloudinary.description": "Plataforma de hosting de imágenes",
    "technology.postgresql.description": "Base de datos relacional",
    "technology.zod.description": "Validación de datos",
    "contact-me.title": "Contáctame",
    "contact-me.subtitle":
      "Conectemos y creemos soluciones innovadoras juntos.",
    "contact-me.instructions":
      "Completa el formulario para enviarme un mensaje por correo o contáctame directo por Discord.",
    "contact-me.copy-email": "Copiar Email",
    "contact-me.copy-discord": "Copiar Discord",
    "contact-me.email-placeholder": "juan-perez@email.com",
    "contact-me.message-placeholder":
      "¡Hola! Soy Juan Pérez y tengo una idea para un proyecto...",
    "contact-me.send-message": "Enviar Mensaje",
  },
};
