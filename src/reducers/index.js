function randomColor() {
  var letters = "3456789ABC";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function randomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

function reloadCalling() {
  callingText.innerText = randomPhrase();
  document.body.setAttribute("style", "background-color:" + randomColor());
  callingIcon.setAttribute("style", animalNumber());
}

function animalNumber() {
  return;
  // return [
  //   "background-image: url(images/animals/",
  //   Math.floor(Math.random() * 13),
  //   ".svg);"
  // ].join("");
}

var buttonReload = document.getElementById("buttonReload");
var el = document.getElementById("nameCallingContainer");
var callingText = document.getElementById("callingText");
var callingIcon = document.getElementById("callingIcon");

buttonReload.addEventListener("click", reloadCalling(el));

function reducer(state = [randomBodyParts, randomObjectives, randomWorlds]) {
  console.log(state);
  return state;
}

export default reducer;
