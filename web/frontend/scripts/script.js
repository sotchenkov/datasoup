let card = document.querySelector(".card");
let card_text = document.querySelector(".card-text");
let ozon_inputs = document.querySelector(".ozon-inputs");
let button = document.querySelector('.button');

let is_clicked = false;

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

card.addEventListener("click", function (event) {
    name = event.target.tagName

    if (!is_clicked & name === "DIV" || name === "P") {
        document.querySelector('.yandex').style.display = 'inline-block';
        document.querySelector('.google').style.display = 'inline-block';
        document.querySelector('.ozon-token').focus();
        card_text.style.display = "none";
        ozon_inputs.style.display = 'inline-block';

        card.classList.toggle("ozon")
        button.style.display = "inline-block";

        is_clicked = true;

    } else if (is_clicked && name === "DIV") {
        document.querySelector('.yandex').style.display = 'none';
        document.querySelector('.google').style.display = 'none';
        document.querySelector('.instruction').style.display = '';
        card_text.style.display = "inline-block";
        ozon_inputs.style.display = 'none';

        card.classList.toggle("ozon")
        button.style.display = "none";

        is_clicked = false;
    } else {
        return;
    }
});

button.addEventListener('click', function () {
    make_deploy();
});