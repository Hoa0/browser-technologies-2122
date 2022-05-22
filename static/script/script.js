// // when required isn't supported this function will prevent the user from submitting the form without filling in all
// // the input fields
// var inputs = document.querySelectorAll("input");
// var form = document.querySelector("form");
// var btn = document.querySelector("button");
// // var rrr = document.querySelector('')

// function checkInputs() {
//   form.addEventListener("submit", function (event) {
//     for (var i = 0; i < inputs.length; i++) {
//       if (inputs[i].value.length == 0) {
//         event.preventDefault();
//         alert("Nog niet alle velden zijn ingevuld, vul verder in");
//       }
//     }
//   });
// }

// checkInputs();

// // save to localstorage
// window.onbeforeunload = function () {
//   const inputs = document.querySelectorAll('input[type="text"]');
//   const inputNumber = document.querySelectorAll('input[type="number"]');
//   const inputRadio = document.querySelectorAll("input[type=radio]:checked");

//   // save radio buttons
//   inputRadio.forEach((input) => {
//     localStorage.setItem(input.name, input.id);
//   });

//   // save text fields
//   inputs.forEach((input) => {
//     localStorage.setItem(input.name, input.value);
//   });

//   // save number fields
//   inputNumber.forEach((input) => {
//     localStorage.setItem(input.name, input.value);
//   });
// };

// //matchMedia mediaquery css support
// const query = "(prefers-reduced-data)";
// const resolvedMediaQuery = window.matchMedia(query).media;

// const isSupported = query === resolvedMediaQuery;


// if the user wants to change a answer, this brings them to the page they chose to change the answers of
let option_edit_page = document.getElementById('select_edit');
let edit_enquete = document.getElementById('btn_edit');

if (option_edit_page) {
    edit_enquete.setAttribute('href', option_edit_page.value);

    option_edit_page.addEventListener('change', function () {
        edit_enquete.setAttribute('href', option_edit_page.value);
    });
    // check if classlist is supported or not
    if (document.body.classList) {
        option_edit_page.classList.add('show'); //only show the select when javascript works
    } else {
        option_edit_page.style.display = 'block';
    }
}
