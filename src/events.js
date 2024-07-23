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


/* bg button */

const allElements = [el.forest, el.raining, el.shopCoffe, el.fireplace];

const bgBtnEvent = (element, allElements) => {
   element.addEventListener('click', (event) =>{

    allElements.forEach(el => el.classList.remove('btnON'))

    element.classList.toggle('btnON')

  })
}

allElements.forEach(element => bgBtnEvent(element, allElements));



/*
#     ---         #
 el.forest.addEventListener('click', (event) => {
    el.forest.classList.toggle('btnON')
  })

  el.raining.addEventListener('click', (event) => {
    el.raining.classList.toggle('btnON')
  })
  
  el.shopCoffe.addEventListener('click', (event) => {
    el.shopCoffe.classList.toggle('btnON')
  })

  el.fireplace.addEventListener('click', (event) => {
    el.fireplace.classList.toggle('btnON')
  })*/