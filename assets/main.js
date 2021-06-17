import 'mvp.css'
import 'video.js/dist/video-js.min.css'
import '@videojs/themes/dist/forest/index.css'
import './main.css'
import videojs from 'video.js'
import 'videojs-youtube'

const playerEl = document.querySelector('#player')

const player = videojs(playerEl, {
  responsive: true,
  techOrder: ["youtube"],
  poster: null,
  sources: [{ "type": "video/youtube", "src": playerEl.dataset.src}],
  controlBar: false
})

player.on('ready', async () => {
  console.log(player)
  // player.on('timeupdate', async () => {
  //   console.log('timeupdate')
  // })
})
