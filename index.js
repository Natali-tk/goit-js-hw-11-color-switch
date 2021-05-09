'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
}

refs.btnStart.addEventListener('click', onClickBtnStart);
refs.btnStart.classList.add('isActive');
refs.btnStop.addEventListener('click', onclickBtnStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function chooseColor() {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.style.backgroundColor = color;
}

let intervalId = null;

function onClickBtnStart() {
  intervalId = setInterval(() => {
    chooseColor()
  }, 1000);
  refs.btnStart.classList.remove('isActive');
  refs.btnStop.classList.add('isActive');
}
      
function onclickBtnStop() {
  clearInterval(intervalId);
  refs.btnStop.classList.remove('isActive');
  refs.btnStart.classList.add('isActive');
}

