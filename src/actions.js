import state from './state.js';
import * as timer from './timer.js'
import * as el from './elements.js'

export function toggleRunning(){
     state.isRunning = document.documentElement.classList.toggle('running')

     timer.countdown()
     console.log('toggle Running')
}


export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updateDisplay()
}

export function turnUp(){
    if(state.isRunning) {
        state.isRunning = false
        state.isRunning = document.documentElement.classList.remove('running')  
    }
    state.minutes += 5   
    if(state.minutes > 60) {
        state.minutes = 60
    }
    timer.updateDisplay()

}

export function turnDown(){
    if(state.minutes >= 5){
        state.minutes -= 5

    } else {
        state.minutes = 0;
        state.seconds = 0

    }
    timer.updateDisplay()
}