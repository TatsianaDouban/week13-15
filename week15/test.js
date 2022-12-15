let form = document.querySelector("form");
let error = document.querySelector(".error");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkTextInput(`input[name="username"]`);
    checkTextInput('input[name="email"]');
    
});

function checkTextInput(selector) {
    let input = document.querySelector(selector);
    
    if (input.value.length > 0) {
    
    } else {
        error.textContent = "заподните имя"

    }

}

