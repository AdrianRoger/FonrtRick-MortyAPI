import spinner from "../modules/spinner.js";
import cardhome from "../modules/cardhome.js";
import characters from "./characters.js";

export default function home() {
  const imgLinks = [
    {
      name : 'Characters',
      page : '/characters',
      link : 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
      name : 'Locations',
      page : '/locations',
      link : 'https://i.pinimg.com/originals/c2/44/b0/c244b05890abde59de0d43d5cb1358ba.jpg'
    },
    {
      name : 'Episodes',
      page : '/episodes',
      link : 'https://resizing.flixster.com/Be18WWkZ9JFkF6lpsTaHIdXpNPQ=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22767730_b_v13_aa.jpg'
    }
  ];

  const section = document.createElement('section');
  section.classList.add('background-green');
  section.classList.add('home');

  for(const card of imgLinks){
    section.appendChild(cardhome(card.name, card.page, card.link));
  }


  return section;
}