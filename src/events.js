import { controls } from "./elements.js";

export function registerControls() {
    controls.addEventListener('click', (event) => {
        alert('ho')
        console.log(event.target)
    })
}