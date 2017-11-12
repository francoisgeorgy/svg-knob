import knob from '../src/svg-knob.js';

document.addEventListener("DOMContentLoaded", function(event) {
    let k = new knob(document.getElementById('knob1'), {});
    k.enableDebug();
});
