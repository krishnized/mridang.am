import 'ress'
import 'plyr/dist/plyr.css'
import './main.css'
import Plyr from 'plyr'


const playerEl = document.querySelector('#player')


const player = new Plyr(playerEl, {
  controls: ['play', 'progress'],
  fullscreen: {enabled: false},
  youtube: {noCookie: true, showinfo: 0, controls: 0},
});

// stub current time to work
// FIXME: remove when https://github.com/sampotts/plyr/issues/1979#issuecomment-739055953 is fixed
Object.defineProperty(Object.getPrototypeOf(player), "currentTime", {
  set(input) {
      // Bail if media duration isn't available yet
      if (!this.duration) { return }
      // Validate input
      input = input-0
      const inputIsValid = (input == input) && input >= 0
      if (inputIsValid) {
          // Set
          this.media.currentTime = Math.min(input, this.duration)
          let location = (input / this.duration) * 100
          setTimeout(() => {
              this.elements.inputs.seek.setAttribute("value", location)
              this.elements.inputs.seek.setAttribute("aria-valuenow", location)
              this.elements.inputs.seek.style.setProperty("--value", `${location}%`)
          }, 0)
      }
      // Logging
      this.debug.log(`Seeking to ${this.currentTime} seconds`)
  }
})

// immediately adjust appearance for youtube
player.poster = null

player.on('ready', p => {
  player.currentTime = 0.1

  // trick youtubes to hide title/info
  // see https://github.com/sampotts/plyr/issues/976#issuecomment-862810641
  player.on('timeupdate', p => {
    player.elements.container.classList.add('plyr--ready')
  })
})



// wait until event
const event = (target, evt) => new Promise(r => (target.addEventListener || target.on)(evt, function fn(){
  (target.removeEventListener || target.off)(evt, fn),r()
}))

// wait until condition
const until = (cond) => new Promise(r => {
  const check = () => cond() ? r() : requestAnimationFrame(check)
  check()
})
