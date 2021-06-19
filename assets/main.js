import 'mvp.css'
import './main.css'

import 'vlitejs/dist/vlite.css';
import Vlitejs from 'vlitejs';
import VlitejsYoutube from 'vlitejs/dist/providers/youtube';

Vlitejs.registerProvider('youtube', VlitejsYoutube);

const player = new Vlitejs('#player',{
  options: {
    playPause: false,
    time: false,
    volume: false,
    fullscreen: false,
    poster: false,
    loop: true,
    providerParams: {start: 1, end: 2}
  },
  provider: 'youtube',
  onReady: async (player) => {
    // setTimeout(() => player.play(), 1000)
    // setTimeout(() => player.seekTo(5), 2000)
  }
});
