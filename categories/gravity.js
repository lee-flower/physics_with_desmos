const elt = document.getElementById("calc-container");
const data_inspector = document.getElementById("data");

const calcSettings = {
  expressions: false, 
  invertedColors: false,
  showYAxis: false,
}

const calc = Desmos.GraphingCalculator(elt, calcSettings)

const controls = document.getElementById("controls-container").children;

// gravitational acceleration 
const g = 9.8;

let particle = { x: 5.0, y: 25.0, vy: 0.0 };

calc.setExpressions([
  {
    id: "particle",
    latex: `\\left(${particle.x}, ${particle.y}\\right)`,
    label: "Point",
    showLabel: true,
  }
]);

// x y coordinate input bar
controls[0].addEventListener("change", (ev) => {
  particle.x = parseFloat(ev.target.value);
  calc.setExpression({ id: "particle", latex: `\\left(${particle.x}, ${particle.y}\\right)`, label: "质点", showLabel: true});
});

controls[1].addEventListener("change", (ev) => {
  particle.y = parseFloat(ev.target.value);
  data_inspector.children[0].children[0].innerText = `${ev.target.value} m`;
  calc.setExpression({ id: "particle", latex: `\\left(${particle.x}, ${particle.y}\\right)`, label: "质点", showLabel: true});
});

const dt = 0.001;

let start = false;
let timer;

controls[2].addEventListener("click", (ev) => {
  if (!start) {
    start = true;
    ev.target.setAttribute("value", "停止");
    timer = setInterval(() => {
      if (particle.y > 0) {
        particle.vy += g * dt;
        particle.y -= (particle.vy * dt + 0.5 * g * dt * dt);
        data_inspector.children[0].children[0].innerText = `${particle.y.toFixed(3)} m`;
        data_inspector.children[0].children[3].innerText = `${(0.5 * particle.vy ** 2).toFixed(3)} J`;
        data_inspector.children[0].children[6].innerText = `${(g * particle.y).toFixed(3)} J`;
        calc.setExpression({ 
          id: "particle", 
          latex: `\\left(${particle.x}, ${particle.y.toFixed(3)}\\right)`, 
          label: "质点", 
          showLabel: true
        });
      } else {
        particle.y = 0;
        particle.vy = 0;
        calc.setExpression({ 
          id: "particle", 
          latex: `\\left(${particle.x}, ${particle.y}\\right)`, 
          label: "质点", 
          showLabel: true
        });
      }
    }, 10);
  } else {
    start = false;
    ev.target.setAttribute("value", "开始");
    clearInterval(timer);
  }
});

