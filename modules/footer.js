export default function footer(){
  const footer = document.createElement('footer');
  let p = document.createElement('p');
  p.innerHTML = `Developed by Adrian Roger <span>|</span> <span><a href="
  https://www.linkedin.com/in/adrianroger" target="linkedin">Linkedin</a></span> <span><a href="https://github.com/AdrianRoger" target="github">GitHub</a></span>`;
  footer.appendChild(p);

  p = document.createElement('p');
  p.classList.add('cop')
  p.innerText = `© Alpha EdTech`;
  footer.appendChild(p);

  return footer;
}
