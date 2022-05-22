// Als localStorage beschikbaar is en voordat ik de pagina verlaat sla de data op in localStorage
if ("localStorage" in window) {
    // save to localstorage
    window.onbeforeunload = function () {
      const inputs = document.querySelectorAll('input[type="text"]');
      const inputRadio = document.querySelectorAll("input[type=radio]:checked");
  
      // save radio buttons
      inputRadio.forEach((input) => {
        localStorage.setItem(input.name, input.id);
      });
  
      // save text fields
      inputs.forEach((input) => {
        localStorage.setItem(input.name, input.value);
      });
    };
  }


//matchMedia mediaquery css support
const query = "(prefers-reduced-data)";
const resolvedMediaQuery = window.matchMedia(query).media;

const isSupported = query === resolvedMediaQuery;
  
// select option, redirect page for edit
let option_edit_page = document.getElementById('select_edit');
let edit_enquete = document.getElementById('btn_edit');

if (option_edit_page) {
    edit_enquete.setAttribute('href', option_edit_page.value);

    option_edit_page.addEventListener('change', function () {
        edit_enquete.setAttribute('href', option_edit_page.value);
    });
    
    // check of classlist support
    if (document.body.classList) {
        option_edit_page.classList.add('show'); 
    } else {
        option_edit_page.style.display = 'block';
    }
}


/**
 * source
 * media-query -> https://kilianvalkhof.com/2021/web/detecting-media-query-support-in-css-and-javascript/
 */