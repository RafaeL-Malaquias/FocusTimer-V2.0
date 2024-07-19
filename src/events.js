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
