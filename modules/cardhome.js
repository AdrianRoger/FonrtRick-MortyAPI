import goto from "./goto.js";

export default function cardhome(name, page, link){
  const card = document.createElement('div');
  card.classList.add('card-home');

  card.addEventListener('click', ()=>{
    window.dispatchEvent(goto(page));
  })
  
  const div = document.createElement('div');
  div.classList.add('card-img');

  const img = document.createElement('img');
  img.src = link;

  const h3 = document.createElement('h3');
  h3.innerText = name;

  div.appendChild(img);
  card.appendChild(div);
  card.appendChild(h3);

  return card;
}