/// <reference path="../../desmos.d.ts"/>
const calcContainer = document.getElementsByClassName("calculator");

const config = {
    keypad: false,
    showGrid: false,
    showXAxis: false,
    showYAxis: false,
    expressions: true,
    settingsMenu: false,
    authorFeatures: true,
};

const calcs = new Array();

for (i of calcContainer) {
    calcs.push(Desmos.GraphingCalculator(i, config));
}

calcs[0].setExpressions([
    {
        id: "l0",
        latex: "\\left(1,1\\right),\\left(0,0\\right)",
        color: Desmos.Colors.BLUE,
    },
]);
