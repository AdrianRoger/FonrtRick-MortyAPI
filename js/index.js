import header from '../modules/header.js';
import footer from '../modules/footer.js';
import createRouter from './router.js';


const cRouter = createRouter();

const root = document.getElementById('root');
const main = document.createElement('main');
root.appendChild(header());
root.appendChild(main);

window.addEventListener('onstatechange', (e)=>{
  main.innerHTML = '';
  const path = e.detail.path;
  history.pushState({}, '', path);
  const page = cRouter.getPage(path);
  main.appendChild(page);
})
const page = cRouter.getPage('/');
history.pushState({}, '', '/');

main.appendChild(page);

window.addEventListener('popstate', ()=>{
  const path = window.location.pathname;
  main.innerHTML = '';
  main.appendChild(cRouter.getPage(path));
})

root.appendChild(footer());




