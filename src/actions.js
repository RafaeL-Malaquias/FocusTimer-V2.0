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


let currentSom = null;

export function forestAudio(){
    
    if(currentSom === 'forest'){
        sounds.forestAudio.pause();
        currentSom = null;
        console.log('som pausado')
    } else {
        stopSounds()
        sounds.forestAudio.play()
        sounds.forestAudio.loop = true
        currentSom = 'forest'
        console.log('start song florest')
    }

}

export function cloudRainAudio(){
    if(currentSom === 'raining'){
        sounds.cloudRainAudio.pause()
        currentSom = null
        console.log('stop rain')
    } else {
        stopSounds()
        sounds.cloudRainAudio.play()
        sounds.cloudRainAudio.loop = true
        currentSom = 'raining'
        console.log('start song rain')
    }
}



export function shopAudio(){
    if (currentSom === 'shopCoffe') {
        sounds.shopAudio.pause();
        currentSom = null;
        console.log('stop song shop-Coffe');
    } else {
        stopSounds();
        sounds.shopAudio.play();
        sounds.shopAudio.loop = true;
        currentSom = 'shopCoffe';
        console.log('start song shop-Coffe');
    }
}

export function fireSom(){
    if(currentSom === 'fireplace'){
        sounds.fireSom.pause()
        currentSom = null
        console.log('start song fire')
    } else {
        stopSounds()
        sounds.fireSom.play()
        sounds.fireSom.loop = true
        currentSom = 'fireplace'
        console.log('stop song fire')
    }

}

function stopSounds() {
    for (let sound in sounds ) {
        if(sounds[sound] instanceof Audio) {
            sounds[sound].pause()
            sounds[sound].currentTime = 0;
        }
    }
    currentSom = null
}

