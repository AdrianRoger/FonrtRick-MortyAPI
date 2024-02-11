import spinner from "../modules/spinner.js";
import bar from "../modules/sidebar.js";

const sidebar = bar('Episode', 'Characters');

export default function episodes(){
  const section = document.createElement('section');
  section.classList.add('main-container');
  section.classList.add('background-orange');

  section.appendChild(sidebar);

  return section;
}