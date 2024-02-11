import spinner from "../modules/spinner.js";
import bar from "../modules/sidebar.js";

const sidebar = bar('Location', 'Residents');

export default function locations(){
  const section = document.createElement('section');
  section.classList.add('main-container');
  section.classList.add('background-yellow');

  //sidebar control all page flow
  section.appendChild(sidebar);

  return section;
}