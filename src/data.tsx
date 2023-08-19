import mundodev from "./assets/mundodev.webp";
import barberia from "./assets/barberia.webp";
import books from "./assets/books.webp";
import dominios from "./assets/Dominios.webp";
import tudestino from "./assets/img7.webp";
import jamy from "./assets/Jamy.webp";
import kfc from "./assets/kfc.webp";
import mui from "./assets/mui.png";
import porta2 from "./assets/porta2.webp";
import portafolio3 from "./assets/portafolio_da.webp";
import portatailwind from "./assets/tailwind.webp";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.svg";
import sass from "./assets/sass.svg";

const cards = [
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
    id: 2,
    name: "TuDestino",
    image: [tudestino],
    tecno: [html, css, js],
    descrip: "TuDestino lives your dream vacations at the best prices.",
    url: "https://minotauro18.github.io/TuDestino/",
    urlGithub: "https://github.com/MINOTAURO18/TuDestino",
  },

  {
    id: 3,
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
    id: 4,
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
    id: 5,
    name: "Books",
    image: [books],
    tecno: [react, tailwind, css],
    descrip: "Practice with React, State Management, Filters and Dark Mode.",
    url: "https://books-eight-phi.vercel.app/",
    urlGithub: "https://github.com/MINOTAURO18/Books",
  },

  {
    id: 6,
    name: "Template-Portafolio",
    image: [portatailwind],
    tecno: [react, tailwind, css],
    descrip: "Practice with React, State Management, Filters and Dark Mode.",
    url: "#",
    urlGithub: "https://github.com/MINOTAURO18/porta-tailwind",
  },

  {
    id: 7,
    name: "DominiosYa",
    image: [dominios],
    tecno: [html, css, js],
    descrip: "Practice with React, State Management, Filters and Dark Mode.",
    url: "https://minotauro18.github.io/DominiosYa/",
    urlGithub: "https://github.com/MINOTAURO18/DominiosYa",
  },

  {
    id: 8,
    name: "Template-KFC",
    image: [kfc],
    tecno: [html, css],
    descrip: "Practice with React, State Management, Filters and Dark Mode.",
    url: "https://minotauro18.github.io/KFC/",
    urlGithub: "https://github.com/MINOTAURO18/KFC",
  },

  {
    id: 9,
    name: "Template-Portafolio",
    image: [porta2],
    tecno: [html, css,js],
    descrip:
      "Portfolio created by JAMY, so you have a place to show your projects to the world.",
    url: "https://minotauro18.github.io/pagina-2/",
    urlGithub: "https://github.com/MINOTAURO18/pagina-2",
  },
];

export default cards;
