export default function modalcharacters(object){
  const modalback = document.createElement('div');
  modalback.classList.add('modal-back');

  const modal = document.createElement('div');
  modal.classList.add('modal-character');

  const divphoto = document.createElement('div');
  divphoto.classList.add('modal-photo');

  const img = document.createElement('img');
  img.src = object.image;
  divphoto.appendChild(img);

  const divcontent = document.createElement('div');
  divcontent.classList.add('modal-content');

  const h3 = document.createElement('h3');
  h3.innerText = object.name;
  divcontent.appendChild(h3);

  let p = document.createElement('p');
  p.innerText = `Espécie: ${object.species}`;
  divcontent.appendChild(p);

  p = document.createElement('p');
  p.innerText = `Sexo: ${object.gender}`;
  divcontent.appendChild(p);

  p = document.createElement('p');
  p.innerText = `Origem: ${object.origin.name}`;
  divcontent.appendChild(p);

  p = document.createElement('p');
  p.innerText = `Lodal: ${object.location.name}`;
  divcontent.appendChild(p);

  p = document.createElement('p');
  p.innerText = `Status: ${object.status}`;
  divcontent.appendChild(p);

  const btn = document.createElement('button');
  btn.innerText = ' X ';
  modal.appendChild(btn);

  modal.appendChild(divphoto);
  modal.appendChild(divcontent);

  modalback.appendChild(modal);

  return modalback;
}

// * gender : "Male"
// * image : "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
// * location : {name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3'}
// * name : "Rick Sanchez"
// * origin : {name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1'}
// * species : "Human"
// * status : "Alive"
