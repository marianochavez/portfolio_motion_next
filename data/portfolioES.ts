export type PortfolioType = {
  sections: {title: string; to: string}[];
  about: {
    firstName: string;
    lastName: string;
    img: string;
    bio: string;
    skills?: string[];
    hobbies?: string[];
  };
  projects: {
    name: string;
    img: string;
    tools: string[];
    url?: string;
    github: string;
    description: string;
  }[];
};

export const portfolioES: PortfolioType = {
  sections: [
    {title: "Acerca", to: "about"},
    {title: "Proyectos", to: "projects"},
    {title: "Contacto", to: "contact"},
  ],
  about: {
    firstName: "Mariano",
    lastName: "Chavez",
    img: "https://res.cloudinary.com/chavedo/image/upload/v1660949890/portfolio/profile.webp",
    hobbies: ["Bater铆a 馃", "Leer 馃摍", "Gimnasio 馃弸", "Cerveza 馃嵑"],
    bio: `
Soy estudiante avanzado de Ingenier铆a en Sistemas de Informaci贸n y amante de la programaci贸n.

Actualmente me encuentro enfocado en la aplicaci贸n de microservicios utilizando Next.js como herramienta principal. Tengo conocimientos tanto en Backend desarrollando aplicaciones en Node.js, Django y Ruby on Rails; como en Frontend desarrollando aplicaciones web, generalmente con JavaScript/React/Next.js.

Siempre me ha gustado aprender tecnolog铆as nuevas, considero necesario y de gran valor tener conocimientos en distintas 谩reas por m谩s que sean ajenas a nuestra especializaci贸n.
`,
    skills: ["Python", "Django", "JavaScript", "TypeScript", "Node.js", "React", "Next.js"],
  },
  projects: [
    {
      name: "Tesla Shop",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661522748/portfolio/tesla-shop.webp",
      tools: ["NextJS", "TypeScript", "MongoDB", "ChakraUI", "NextAuth", "Paypal"],
      url: "https://tesla-shop-nextjs.vercel.app/",
      github: "https://github.com/marianochavez/tesla_shop_nextjs",
      description: `Tienda para venta de ropa con gesti贸n de usuario, ordenes, compras y pago. Contiene una parte administrativa para estad铆sticas, usuarios y productos.`,
    },
    {
      name: "UPS Clone",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1666536699/portfolio/react_native.png",
      tools: ["React Native", "TypeScript", "Stepzen", "Tailwind", "RNElements", "Expo"],
      github: "https://github.com/marianochavez/ups_react_native",
      description: `Aplicaci贸n para seguimiento de paquetes y busqueda de usuarios.`,
    },
    {
      name: "Amazon Scraper",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1678727891/portfolio/amazon-scraper.png",
      tools: ["NextJS", "TypeScript","BrightData",  "Firebase", "WebHook", "Tailwind"],
      github: "https://github.com/marianochavez/amazon_scraper",
      url: "https://amazon-scraper-frontend.vercel.app/",
      description: "Aplicaci贸n para scrapear productos de Amazon, implementando cloud functions para realizar tareas as铆ncronas.",
    },
    {
      name: "Jaguarete Kaa",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661525134/portfolio/jaguarete-kaa.webp",
      tools: ["Django", "SQL", "CrispyForms", "Bootstrap"],
      url: "https://www.youtube.com/watch?v=KVkEf167GME",
      github: "https://github.com/marianochavez/jaguarete_ecommerce_django",
      description: `Ecommerce para venta de productos tecnol贸gicos. Tiene gesti贸n de usuarios, productos, categor铆as, recuperaci贸n de cuenta y p谩gina administrativa.`,
    },
    {
      name: "Ebay Thirdweb",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1668881622/portfolio/ebay-thirdweb.webp",
      tools: ["NextJS", "TypeScript", "Thirdweb", "Tailwind", "Ethers"],
      url: "https://ebay-thirdweb-five.vercel.app/",
      github: "https://github.com/marianochavez/ebay_thirdweb",
      description: `P谩gina para venta de NFTs de mi colecci贸n con subasta incluida.`,
    },
    {
      name: "Repositorio FRM",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1678729128/portfolio/repository-frm.png",
      tools: ["NextJS", "TypeScript", "ChakraUI", "React-Query", "MongoDB", "NextAuth"],
      url: "https://repository-frm.vercel.app/",
      github: "https://github.com/marianochavez/repository_frm",
      description: "Aplicaci贸n para gesti贸n de repositorios de materias de la facultad. Solo los alumnos pertenecientes a la facultad podr谩n acceder a sus repositorios.",
    },
    {
      name: "Calendario",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661524268/portfolio/calendar-app.webp",
      tools: ["React", "Node", "Redux", "PWA", "MongoDB", "Enzyme"],
      url: "https://react-calendar-app-frontend.vercel.app/",
      github: "https://github.com/marianochavez/react_calendarApp_frontend",
      description: `Calendario con distintas vistas que permite agregar eventos por fecha y horario. Utiliza backend realizado en Node.js.`,
    },
    {
      name: "Tateti",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661525803/portfolio/tateti-app.webp",
      tools: ["React", "Rails", "TypeScript", "PostgreSQL", "NESS.css"],
      url: "https://tateti-react-rails.vercel.app/",
      github: "https://github.com/marianochavez/tateti_frontend_react",
      description: `Juego tateti con registro de usuario, 1 vs 1 en tiempo real, utiliza backend realizado en Rails.`,
    },
    {
      name: "Mapa box",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1661526366/portfolio/mapbox-app.webp",
      tools: ["React", "TypeScript", "Mapbox", "Axios"],
      url: "https://mapbox-react-mc.netlify.app/",
      github: "https://github.com/marianochavez/react_mapbox",
      description: `Pagina para buscar direcciones y marcar su trayectoria utilizando mapbox.`,
    },
    {
      name: "Arg News",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1666538359/portfolio/node_news.png",
      tools: ["Node.js", "Express", "Docker", "EJS", "Axios"],
      github: "https://github.com/marianochavez/openjira_nextjs",
      description: `P谩gina dockerizada para la obtenci贸n de noticias, clima, cambio dolar y estadisticas covid.`,
    },
    {
      name: "Porfolio",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1678729309/portfolio/portfolio.png",
      tools: ["NextJS", "TypeScript", "ChakraUI", "React-Scroll", "Framer-Motion"],
      github: "https://github.com/marianochavez/portfolio_motion_next",
      url: "https://marianochavez.vercel.app/",
      description: "P谩gina para proyectos personales y contacto.",
    },
    {
      name: "+50 Proyectos",
      img: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_512/v1666538824/portfolio/github.webp",
      tools: ["GitHub"],
      github: "https://github.com/marianochavez",
      description: `Estos son solo algunos de mis proyectos, puedes ver m谩s en mi repositorio de GitHub.`,
    },
  ],
};
