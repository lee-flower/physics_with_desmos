/// <reference path="../../desmos.d.ts"/>
const calcContainer = document.getElementById("calculator");

const calc = Desmos.GraphingCalculator(calcContainer, {
    keypad: false,
    showGrid: false,
    showXAxis: false,
    showYAxis: false,
    expressions: false,
    lockViewport: true,
    settingsMenu: false
});

console.log(calc.settings);

