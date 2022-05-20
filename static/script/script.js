// when required isn't supported this function will prevent the user from submitting the form without filling in all
// the input fields
var inputs = document.querySelectorAll("input");
var form = document.querySelector("form");
var btn = document.querySelector("button");
// var rrr = document.querySelector('')

function checkInputs() {
  form.addEventListener("submit", function (event) {
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.length == 0) {
        event.preventDefault();
        alert("Nog niet alle velden zijn ingevuld, vul verder in");
      }
    }
  });
}

checkInputs();

// save to localstorage
window.onbeforeunload = function () {
  const inputs = document.querySelectorAll('input[type="text"]');
  const inputNumber = document.querySelectorAll('input[type="number"]');
  const inputRadio = document.querySelectorAll("input[type=radio]:checked");

  // save radio buttons
  inputRadio.forEach((input) => {
    localStorage.setItem(input.name, input.id);
  });

  // save text fields
  inputs.forEach((input) => {
    localStorage.setItem(input.name, input.value);
  });

  // save number fields
  inputNumber.forEach((input) => {
    localStorage.setItem(input.name, input.value);
  });
};

//matchMedia mediaquery css support
const query = "(prefers-reduced-data)";
const resolvedMediaQuery = window.matchMedia(query).media;

const isSupported = query === resolvedMediaQuery;
