const started = false;
const box = document.getElementById("box");

const startTest = () => {
  box.style.backgroundColor = "red";
  box.innerText = "Wait for green to click!";
  setTimeout(() => {
    box.style.backgroundColor = "green";
    box.innerText = "Click now!";
  }, getRandomDelay(1000, 4000));
};

const getRandomDelay = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const resetTest = () => {
  box.style.backgroundColor = rgb(75, 75, 255);
};

box.addEventListener("click", () => {
  if (started) {
  } else {
    startTest();
  }
});
