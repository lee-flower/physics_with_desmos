/// <reference path="../../desmos.d.ts"/>
/// <reference path="../../js/vector.d.ts"/>
const calcContainer = document.getElementsByClassName("calculator");

const config = {
    keypad: false,
    showGrid: false,
    showXAxis: false,
    showYAxis: false,
    expressions: false,
    settingsMenu: false,
    authorFeatures: true,
};

const calcs = Desmos.GraphingCalculator(calcContainer[0], config);

const cube = [
    new vector3(1, 1, 0.5),
    new vector3(-1, 1, -0.5),
    new vector3(1, -1, 1),
    new vector3(-1, -0.5, 1),
];

let r = 0.1;

function animate() {
    const screen = cube.map((v, _i, _a) => rotateZ(v, r).project(10));
    for (let i = 0; i < screen.length; i++) {
        calcs.setExpression({
            id: `point_${i}`,
            latex: `A_${i}=${screen[i].toString()}`,
            color: Desmos.Colors.BLACK,
            dragMode: Desmos.DragModes.NONE,
        })
    }

    calcs.setExpressions([
        {
            id: "face1",
            latex: "\\operatorname{polygon}\\left(A_{0},A_{1},A_{2}\\right)",
            color: Desmos.Colors.RED,
            fillOpacity: 0,
        },
        {
            id: "face2",
            latex: "\\operatorname{polygon}\\left(A_{1},A_{2},A_{3}\\right)",
            color: Desmos.Colors.RED,
            fillOpacity: 0,
        },
        {
            id: "face3",
            latex: "\\operatorname{polygon}\\left(A_{2},A_{3},A_{0}\\right)",
            color: Desmos.Colors.RED,
            fillOpacity: 0,
        },
        {
            id: "face4",
            latex: "\\operatorname{polygon}\\left(A_{0},A_{1},A_{3}\\right)",
            color: Desmos.Colors.RED,
            fillOpacity: 0,
        },
    ]);

    r += 0.01;
    requestAnimationFrame(animate);
}

animate();