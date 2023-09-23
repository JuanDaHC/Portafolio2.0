import mundodev from "./assets/mundodev.webp";
import books from "./assets/books.webp";
import dominios from "./assets/Dominios.webp";
import tudestino from "./assets/img7.webp";
import kfc from "./assets/kfc.webp";
import mui from "./assets/mui.png";
import porta2 from "./assets/porta2.webp";
import portafolio3 from "./assets/portafolio_da.webp";
import portatailwind from "./assets/tailwind.webp";
import guiajamy from "./assets/guia-jamy.png";
import jamypage from "./assets/jamypage.png";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.svg";
import sass from "./assets/sass.svg";

const cards = [
  {
    id: 11,
    name: "JAMYPAGE",
    image: [jamypage],
    tecno: [react, css, tailwind],
    descrip:
      "in MundoDev you can find resources and articles about programming and technologies.",
    url: "https://jamy-page.vercel.app/",
    urlGithub: "https://github.com/MINOTAURO18/JamyPage",
  },
  {
    id: 1,
    name: "MundoDev",
    image: [mundodev],
    tecno: [react, css, tailwind],
    descrip:
      "in MundoDev you can find resources and articles about programming and technologies.",
    url: "https://minotauro18.github.io/MundoDev/",
    urlGithub: "https://github.com/MINOTAURO18/MundoDev",
  },


  {
    id: 7,
    name: "Copia_MUI",
    image: [mui],
    tecno: [react, sass, css],
    descrip: "copy of the MUI home page",
    url: "https://minotauro18.github.io/Copia-MUI/",
    urlGithub: "https://github.com/MINOTAURO18/Copia-MUI",
    youtube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=YYG6sy8t-t8&t=6346s",
  },
  {
    id: 2,
    name: "GUIA-JAMY",
    image: [guiajamy],
    tecno: [html, css, js],
    descrip: "TuDestino lives your dream vacations at the best prices.",
    url: "https://blog-minotauro18.vercel.app/",
    urlGithub: "https://github.com/MINOTAURO18/blog",
  },

  {
    id: 3,
    name: "TuDestino",
    image: [tudestino],
    tecno: [html, css, js],
    descrip: "TuDestino lives your dream vacations at the best prices.",
    url: "https://minotauro18.github.io/TuDestino/",
    urlGithub: "https://github.com/MINOTAURO18/TuDestino",
  },
  {
    id: 4,
    name: "Template-Portafolio",
    image: [portatailwind],
    tecno: [react, tailwind, css],
    descrip: "Practice with React, State Management, Filters and Dark Mode.",
    url: "#",
    urlGithub: "https://github.com/MINOTAURO18/porta-tailwind",
    youtube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=VmWCzcA5rrs&t=40s",
  },

  
  {
    id: 5,
    name: "Template-Portafolio",
    image: [portafolio3],
    tecno: [html, css, js],
    descrip:
      "Portfolio created by JAMY, so you have a place to show your projects to the world.",
    url: "https://minotauro18.github.io/Portafolio_Plantilla/",
    urlGithub: "https://github.com/MINOTAURO18/Portafolio_Plantilla",
    youtube: true,
    youtubeUrl: "https://www.youtube.com/watch?v=rA6wBu1rEHM&t=8016s",
  },

  {
    id: 6,
    name: "Books",
    image: [books],
    tecno: [react, tailwind, css],
    descrip: "Practice with React, State Management, Filters and Dark Mode.",
    url: "https://books-eight-phi.vercel.app/",
    urlGithub: "https://github.com/MINOTAURO18/Books",
  },


  {
    id: 8,
    name: "DominiosYa",
    image: [dominios],
    tecno: [html, css, js],
    descrip: "Practice with React, State Management, Filters and Dark Mode.",
    url: "https://minotauro18.github.io/DominiosYa/",
    urlGithub: "https://github.com/MINOTAURO18/DominiosYa",
  },

  {
    id: 9,
    name: "Template-KFC",
    image: [kfc],
    tecno: [html, css],
    descrip: "Practice with React, State Management, Filters and Dark Mode.",
    url: "https://minotauro18.github.io/KFC/",
    urlGithub: "https://github.com/MINOTAURO18/KFC",
  },

  {
    id: 10,
    name: "Template-Portafolio",
    image: [porta2],
    tecno: [html, css, js],
    descrip:
      "Portfolio created by JAMY, so you have a place to show your projects to the world.",
    url: "https://minotauro18.github.io/pagina-2/",
    urlGithub: "https://github.com/MINOTAURO18/pagina-2",
  },
];

export default cards;
