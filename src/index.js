import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutes, seconds){
    state.minutes
    state.seconds
    console.log(minutes,seconds)

    events.registerControls()

    timer.updateDisplay()
}