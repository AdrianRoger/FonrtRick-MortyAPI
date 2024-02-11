import createcards from "./createcards.js";

export default function sidebar(target, title) {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  sidebar.id = 'sidebar';
  const h3 = document.createElement('h3');
  h3.innerText = `${target}s`;
  sidebar.appendChild(h3);

  const ul = document.createElement('ul');
  ul.classList.add('sidebar-list');

  createupdatelist(ul, target.toLowerCase(), title);

  sidebar.appendChild(ul);

  return sidebar;
}

let nextPage = null;
async function createupdatelist(parentElement, target, title) {
  const baseurl = `https://rickandmortyapi.com/api/${target}`

  const ul = parentElement;

  await fetch(nextPage ? nextPage : baseurl)
    .then(response => response.json())
    .then(data => {
      nextPage = data.info.next;
      for (const item of data.results) {


        const li = document.createElement('li');
        li.innerText = item.name;
        //create tooltip span
        let span = document.createElement('span');
        span.classList.add('tooltiptext');
        span.innerText = li.innerText;
        span.dataset.tooltip = '';
        li.appendChild(span);
        //event to change position of tooltip from fixed style to mouse position relative
        li.addEventListener('mousemove', function mousetooltip(e){
          const tooltip = li.querySelector('[data-tooltip]');
          tooltip.style.top = `${e.pageY -20}px`;
          tooltip.style.left = `${e.pageX +10}px`;
        });

        const lidata = document.createElement('li');
        lidata.dataset.sublist = '';

        const ulsec = document.createElement('ul');
        ulsec.classList.add('seclist-item');

        let lisec = document.createElement('li');
        lisec.innerText = `${target === 'location' ? 'Type' : 'Air Date'}: ${target === 'location' ? item.type : item.air_date}`;
        ulsec.appendChild(lisec);

        lisec = document.createElement('li');
        lisec.innerText = `${target === 'location' ? 'Dimension' : 'Episode'}: ${target === 'location' ? item.dimension : item.episode}`;
        ulsec.appendChild(lisec);

        //here we have a list item to click and show residents or characters on right container
        lisec = document.createElement('li');
        lisec.innerText = `Show ${title}`;
        //event to show residents or characters in container
        lisec.addEventListener('click', function showresidents(){
          //charactersIds function is at the bottom of this page
          createcards(charactersIds(item, target), item.name, title);
        })

        ulsec.appendChild(lisec);

        lidata.appendChild(ulsec);

        ul.appendChild(li);
        ul.appendChild(lidata);

        li.addEventListener('click', function showsublist() {
          const sublist = this.nextElementSibling;
          sublist.classList.toggle('show-sublist');
        })

      }

      // Remove "See More" button if already exists
      const ulfather = ul.parentElement;
      if (ulfather.lastChild.innerText.trim() === 'See More') {
        ulfather.removeChild(ulfather.lastChild);
      }

      if(nextPage){
        const showmore = document.createElement('button');
        showmore.innerText = 'See More';
        showmore.classList.add('btn-see-more');
        showmore.addEventListener('click', function seemore() {
          showmore.removeEventListener('click', seemore);
          createupdatelist(ul);
        })
        ul.parentElement.appendChild(showmore);
        return
      }

    });

}

//takes all Links of residents and turn links from array of link to array of ids;
function charactersIds(object, attribute){
  let links = [];
  if(attribute === 'location'){
    for(const resident of object.residents ){
      links.push(resident.replace("https://rickandmortyapi.com/api/character/", ""));
    }
  }else{
    for(const resident of object.characters ){
      links.push(resident.replace("https://rickandmortyapi.com/api/character/", ""));
    }
  }
  return links.join(",");
}
