import home from '../pages/home.js';
import characters from '../pages/characters.js';
import locations from '../pages/locations.js';
import episodes from '../pages/episodes.js';

export default function createRouter(){
  const router = {
      '/' : home,
      '/characters' : characters,
      '/locations' : locations,
      '/episodes' : episodes,
      getPage : (path) => router[path]()
  }

  return router;
}
