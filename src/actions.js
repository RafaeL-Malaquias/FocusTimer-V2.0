import state from './state.js';


export function toggleRunning(){
     state.isRunning = document.documentElement.classList.toggle('running')
}


export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
}

export function turnUp(){
    console.log('turn up music')
}