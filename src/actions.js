import state from './state.js';
import * as timer from './timer.js'

export function toggleRunning(){
     state.isRunning = document.documentElement.classList.toggle('running')


     timer.countdown()

     console.log('toggle Running')
}


export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
}

export function turnUp(){
    console.log('turn up music')
}