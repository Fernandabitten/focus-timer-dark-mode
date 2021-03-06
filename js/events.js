import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonMinus,
  buttonForest,
  buttonRainSound,
  buttonCoffeeShopSound,
  buttonFireplaceShopSound,
  minutesDisplay,
  buttonSun,
  buttonMoon,
  $html,
} from "./elements.js";

export default function ({ controls, timer, sound }) {
  let minutes = Number(minutesDisplay.textContent);

  function cleanButtonsSounds() {
    sound.buttonForestSound.pause();
    sound.buttonRainSound.pause();
    sound.buttonCoffeeShopSound.pause();
    sound.buttonFireplaceShopSound.pause();
    buttonForest.classList.remove("selected");
    buttonRainSound.classList.remove("selected");
    buttonCoffeeShopSound.classList.remove("selected");
    buttonFireplaceShopSound.classList.remove("selected");
  }

  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", function () {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", function () {
    controls.reset();
    timer.reset();
    sound.pressButton();
    document.location.reload(true);
  });

  buttonAdd.addEventListener("click", function () {
    timer.updateDisplay(String((minutes += 5)), 0);
  });

  buttonMinus.addEventListener("click", function () {
    timer.updateDisplay(String((minutes -= 5)), 0);
  });

  buttonForest.addEventListener("click", function () {
    cleanButtonsSounds();
    controls.pausePlay(buttonForest, sound.buttonForestSound);
  });

  buttonRainSound.addEventListener("click", function () {
    cleanButtonsSounds();
    controls.pausePlay(buttonRainSound, sound.buttonRainSound);
  });

  buttonCoffeeShopSound.addEventListener("click", function () {
    cleanButtonsSounds();
    controls.pausePlay(buttonCoffeeShopSound, sound.buttonCoffeeShopSound);
  });

  buttonFireplaceShopSound.addEventListener("click", function () {
    cleanButtonsSounds();
    controls.pausePlay(
      buttonFireplaceShopSound,
      sound.buttonFireplaceShopSound
    );
  });

  buttonSun.addEventListener("click", function () {
    buttonSun.classList.add("hide");
    buttonMoon.classList.remove("hide");
    $html.classList.add("dark-mode");
  });

  buttonMoon.addEventListener("click", function () {
    buttonSun.classList.remove("hide");
    buttonMoon.classList.add("hide");
    $html.classList.remove("dark-mode");
  });
}
