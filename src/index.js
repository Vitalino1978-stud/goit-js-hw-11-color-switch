const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]')
}
let timerId = null;
refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

function onStart() {

  timerId = setInterval(() => {
    const currentColorIndex = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[currentColorIndex]
  }, 1000);
  refs.startBtn.disabled = true;
  
};

function onStop() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
};

function randomIntegerFromInterval (min, max)  {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
