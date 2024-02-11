import goto from "./goto.js";

export default function header() {
  const menu = [
    {
      name : 'Home',
      path : '/'
    },
    {
      name : 'Characters',
      path : '/characters'
    },
    {
      name : 'Locations',
      path : '/locations'
    },
    {
      name : 'Episodes',
      path : '/episodes'
    }];

  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const h2 = document.createElement('h2');
  const ul = document.createElement('ul');

  h2.innerText = 'Rick and Morty';
  

  for (const item of menu) {
    const li = document.createElement('li');
    li.innerHTML = item.name;
    li.addEventListener('click', ()=>{
      window.dispatchEvent(goto(item.path));
    })
    ul.appendChild(li);
  }

  nav.appendChild(h2);
  nav.appendChild(ul);
  header.appendChild(nav);

  return header;
}
