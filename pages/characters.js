import spinner from "../modules/spinner.js";
import cardcharacters from "../modules/cardcharacters.js";
import modalcharacters from "../modules/modalcharacters.js";

export default function characters() {
  const section = document.createElement('section');
  section.classList.add('background-pink');
  section.classList.add('characters');

  const loading = spinner();
  section.appendChild(loading);

  const btnMostrar = document.createElement('button');
  btnMostrar.innerText = 'Mostrar Mais';
  btnMostrar.classList.add('btn-see-more');
  btnMostrar.addEventListener('click', endpage);

  let pagination = 1;
  let maxPages; //armazena um número de páginas da response da api

  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      maxPages = data.info.pages;

      section.removeChild(loading);
      for (const item of data.results) {

        const modal = modalcharacters(item);
        const createdItem = cardcharacters(item.name, item.image);

        createdItem.addEventListener('click', ()=>{
          modal.querySelector('button').addEventListener('click', function closemodal(){
            this.removeEventListener('click', closemodal);
            section.removeChild(modal);
          });

          section.appendChild(modal);
        });

        section.appendChild(createdItem);
      };

      section.appendChild(btnMostrar);
      pagination++;
    });

  function endpage() {
    section.appendChild(loading);
    section.removeChild(btnMostrar);

    setTimeout(() => {
      fetch('https://rickandmortyapi.com/api/character/?page=' + pagination)
        .then(response => response.json())
        .then(data => {
          section.removeChild(loading);
          let curItem;
          for (const item of data.results) {
            curItem = item;

            const modal = modalcharacters(curItem);

            const createdItem = cardcharacters(item.name, item.image);
            createdItem.addEventListener('click', ()=>{
              modal.querySelector('button').addEventListener('click', function closemodal(){
                this.removeEventListener('click', closemodal);
                section.removeChild(modal);
              })
              section.appendChild(modal);
            });
            section.appendChild(createdItem);
          };
          section.appendChild(btnMostrar);
          pagination++;
        })
    }, 1000);
  }
  return section;
}