import * as el from "./elements.js";
import * as actions from './actions.js'
import * as sounds from './sounds.js'

export function registerControls() {
    controls.addEventListener('click', (event) => {
      const action = event.target.dataset.action

        if( typeof actions[action] != 'function'){
            return
        }
        actions[action]()
       console.log('teste')
    })
}

el.forest.addEventListener('click', actions.forestAudio);
el.raining.addEventListener('click', actions.cloudRainAudio);
el.shopCoffe.addEventListener('click', actions.shopAudio);
el.fireplace.addEventListener('click', actions.fireSom);


/* */


const bttnON = document.getElementById('botaON')

 el.forest.addEventListener('click', (event) => {
    el.forest.classList.toggle('btnON')
  })
  
