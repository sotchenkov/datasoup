let card = document.querySelector(".card");
let card_text = document.querySelector(".card-text");
let ozon_inputs = document.querySelector(".ozon-inputs");
let button = document.querySelector('.button');
let inputs = document.querySelectorAll("input");

let is_clicked = false;
const isEmpty = str => !str.trim().length;

card.classList.toggle("ozon-like-btn")

function request(url, callback) {
    const http = new XMLHttpRequest()

    http.open("GET", url)

    http.responseType = "json"

    http.onload = () => {
        let response = http.response
        callback(response)
    }

    http.send()
}

function сhecking_all_fields_are_filled() {
    for (i = 0; i < inputs.length; ++i) {
        if (isEmpty(inputs[i].value)) {
            return false
        }
    }
    return true
}

function hide_all_cards() {
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.button').style.display = 'none';
}

function focusNext(event, nextElementId) {
    // if "enter"
    if (event.keyCode === 13) {
        // focus next "input"
        document.querySelector(nextElementId).focus();
        document.querySelector(nextElementId).click();

    }
}

// Showing / hiding Yandex and Google cards
card.addEventListener("click", function (event) {
    name = event.target.tagName

    if (!is_clicked & name === "DIV" || name === "P") {
        document.querySelector('.yandex').style.display = 'inline-block';
        document.querySelector('.google').style.display = 'inline-block';
        card_text.style.display = "none";
        ozon_inputs.style.display = 'inline-block';

        card.classList.toggle("ozon")

        document.querySelector('.ozon-token').focus();

        is_clicked = true;

    } else if (is_clicked && name === "DIV") {
        document.querySelector('.yandex').style.display = 'none';
        document.querySelector('.google').style.display = 'none';
        document.querySelector('.instruction-link').style.display = '';
        card_text.style.display = "inline-block";
        ozon_inputs.style.display = 'none';

        card.classList.toggle("ozon")
        button.style.display = "none";

        is_clicked = false;
    } else {
        return;
    }
});

// Displaying the button only if all fields are filled in
inputs.forEach(function (elem) {
    elem.addEventListener("input", function () {
        if (сhecking_all_fields_are_filled()) {
            button.style.display = "inline-block"
        }
    });
});

// Deploy after pressing the button
button.addEventListener('click', function () {
    hide_all_cards();
    make_deploy();
    document.querySelector('.deploying').style.display = 'block'
});
