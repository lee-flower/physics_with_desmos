/// <reference path="../../desmos.d.ts"/>
const calcContainer = document.getElementById("calculator");

const calc = Desmos.GraphingCalculator(calcContainer, {
    keypad: false,
    showGrid: false,
    showXAxis: false,
    showYAxis: false,
    expressions: true,
    settingsMenu: false,
});

calc.setExpressions([
    {
        type: "table",
        columns: [
            {
                latex: "x_{1}",
                values: ["2^{3}", "f\\left(3^{2.14}\\right)", "\\frac{1}{3}", "\\cos\\left(1.12\\right)"],
            },
            {
                latex: "y_{1}",
                values: ["3.14^{\\frac{1}{2}}", "f\\left(1.421\\right)", "f\\left(\\frac{1}{3}\\right)", "\\tan\\left(1.12\\right)"],
                color: "#d93e4f",
                points: true,
                lines: true,
                lineStyle: Desmos.Styles.DASHED,
                pointStyle: Desmos.Styles.CROSS
            },
        ]
    },
    {
        type: "expression",
        latex: "f\\left(x\\right)=\\sin\\left(x^{3}\\right)",
        hidden: true,
    }
]);