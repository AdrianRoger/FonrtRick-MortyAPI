import cardcharacters from "./cardcharacters.js";
import modalcharacters from "./modalcharacters.js";

//this function will be without return
export default async function createcards(residentsIds, local = '', title) {
  const mainContainer = document.querySelector('.main-container');
  if (mainContainer.lastChild.id !== 'sidebar') {
    mainContainer.removeChild(mainContainer.lastChild);
  }
  const container = document.createElement('div');
  container.classList.add('inside-container')

  const hidesidebar = document.createElement('div');
  hidesidebar.classList.add('btn-hide-sidebar');
  hidesidebar.addEventListener('click', ()=>{
    document.getElementById('sidebar').classList.toggle('hide-sidebar');
    hidesidebar.classList.toggle('active');
  })
  container.appendChild(hidesidebar);

  const h2 = document.createElement('h2');
  h2.innerHTML = `${title === 'Residents' ? title + ' from' : title + ' of' } <span>${local}</span>`;
  container.appendChild(h2);

  const div = document.createElement('div');
  div.classList.add('inside-card-container')
  container.appendChild(div);

  await fetch(`https://rickandmortyapi.com/api/character/${residentsIds}`)
    .then(response => response.json())
    .then(data => {
      if (!data.results && data.length > 1) {
        for (const item of data) {
          const card = cardcharacters(item.name, item.image);
          const modal = modalcharacters(item);
          card.addEventListener('click', () => {
            modal.querySelector('button').addEventListener('click', function closemodal() {
              this.removeEventListener('click', closemodal);
              div.removeChild(modal);
            });

            div.appendChild(modal);
          })
          div.appendChild(card);
        }
      } else if (!data.results) {
        const card = cardcharacters(data.name, data.image);
        const modal = modalcharacters(data);
        card.addEventListener('click', () => {
          modal.querySelector('button').addEventListener('click', function closemodal() {
            this.removeEventListener('click', closemodal);
            div.removeChild(modal);
          });

          div.appendChild(modal);
        })
        div.appendChild(card);
      } else {
        h2.innerText = `No Residents to show for ${local}`
      }
    })
  mainContainer.appendChild(container);
}

