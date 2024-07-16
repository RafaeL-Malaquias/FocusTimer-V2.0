import state from './state.js'
import * as events from './events.js'

export function start(minutes, seconds){
    state.minutes
    state.seconds
    console.log(minutes,seconds)

    events.registerControls()
}