import aulamejor from "./assets/portfolio-aulamejor-aws.png";
import kpi from "./assets/portfolio-kpi-mvp.png";
import forpo from "./assets/portfolio-forpo-orfeo.png";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.svg";
import sass from "./assets/sass.svg";
import typ from "./assets/typ.svg";
import astro from "./assets/astro.svg";
import portafolio from "./assets/portfolio-upn-orfeogob.png";

const cards = [
  {
    id: 13,
    name: "UPN",
    image: [portafolio],
    tecno: [react, typ, css, tailwind],
    descrip:
      "Mantenimiento, optimización y mejoras del sistema de gestión documental OrfeoGob.",
    url: "http://www.pedagogica.edu.co/",
    
  },
  {
    id: 11,
    name: "FORPO",
    image: [forpo],
    tecno: [astro, tailwind],
    descrip:
      "Mantenimiento, optimización y mejoras del sistema de gestión documental OrfeoGob.",
    url: "https://www.forpo.gov.co/es/",
  },
  {
    id: 1,
    name: "Aula Mejor",
    image: [aulamejor],
    tecno: [react, js, css],
    descrip:
      "Optimización de cargas de trabajo en AWS.",
    url: "https://www.aulamejor.com/",
  },
  
  {
    id: 2,
    name: "Universidad de Antioquia",
    image: [ant],
    tecno: [astro, typ, tailwind],
    descrip: "Implementación y optimización de cargas de trabajo en AWS. AWS",
    url: "https://udearroba.udea.edu.co/",
  },

 

];

export default cards;
