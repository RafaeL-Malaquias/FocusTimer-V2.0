import state from './state.js';
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
     state.isRunning = document.documentElement.classList.toggle('running')

     timer.countdown()
     console.log('toggle Running')
     
     
     sounds.buttonPressAudio.play()
}


export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function turnUp(){
    if(state.isRunning) {
        state.isRunning = false
         document.documentElement.classList.remove('running')
    }

      /* operadr ternario */
    state.minutes = (state.minutes + 5 > 60) ? 60 :  state.minutes + 5;
    timer.updateDisplay()
    sounds.buttonPressAudio.play()

}

export function turnDown(){
    if(state.minutes >= 5){
        state.minutes -= 5

    } else {
        state.minutes = 0;
        state.seconds = 0

    }
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function playFlorestaAudio(){
    sounds.florerestaAudio.play()
}