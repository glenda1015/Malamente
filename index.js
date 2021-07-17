// Detecting Button Press
var numberOfButtons = document.querySelectorAll(".music").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".music")[i].addEventListener("click", handleClick);

  function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
}

//Detecting Keyboard
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
      var iyo = new Audio("sounds/iyo.mp3");
      iyo.play();
      break;

    case "a":
      var malamente = new Audio("sounds/malamente.mp3");
      malamente.play();
      break;

    case "s":
      var mira = new Audio("sounds/mira.mp3");
      mira.play();
      break;

    case "d":
      var ommhh = new Audio("sounds/ommhh.mp3");
      ommhh.play();
      break;

    case "j":
      var principio = new Audio("sounds/principio.mp3");
      principio.play();
      break;

    case "k":
      var tratra = new Audio("sounds/tra-tra_mal-muy-mal.mp3");
      tratra.play();
      break;

    case "l":
      var uhh = new Audio("sounds/uhh.mp3");
      uhh.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

// Function that reacts with an animation depending on the letter clicled or pressed
function buttonAnimation(currrentKey) {
  var activeButton = document.querySelector("." + currrentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
