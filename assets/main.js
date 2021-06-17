import 'ress'
import './main.css'
import 'plyr/dist/plyr.css'
import Plyr from 'plyr'


const playerEl = document.querySelector('#player')

const player = new Plyr(playerEl, {
  youtube: {controls: 0}
});
