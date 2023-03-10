let card = document.querySelector(".card");
let card_text = document.querySelector(".card-text");
let ozon_inputs = document.querySelector(".ozon-inputs");
let button = document.querySelector('.button');

let is_clicked = false;


document.querySelector('.yandex').style.display = 'none';
document.querySelector('.google').style.display = 'none';

card.classList.toggle("ozon-like-btn")

card.addEventListener("click", function (event) {
    name = event.target.tagName
    if (!is_clicked & name === "DIV" || name === "P") {
        card_text.style.display = "none";
        ozon_inputs.style.display = 'inline-block';
        document.querySelector('.yandex').style.display = 'inline-block';
        document.querySelector('.google').style.display = 'inline-block';
        // document.querySelector('.instruction').style.display = 'none';
        document.querySelector('.ozon-token').focus();
        card.classList.toggle("ozon")
        button.style.display = "inline-block";
        is_clicked = true;

    } else if (is_clicked && name === "DIV") {
        card_text.style.display = "inline-block";
        ozon_inputs.style.display = 'none';
        document.querySelector('.yandex').style.display = 'none';
        document.querySelector('.google').style.display = 'none';
        document.querySelector('.instruction').style.display = '';
        card.classList.toggle("ozon")
        button.style.display = "none";
        is_clicked = false;
    } else {
        return;
    }
});

function get_clouds() {
    const http = new XMLHttpRequest()
    let selectElement = document.querySelector('.clouds');

    const isEmpty = str => !str.trim().length;

    if (isEmpty(document.querySelector(".yandex-func-token").value)) {
        selectElement.style.display = "none";
    } else {
        let access_token = document.querySelector('.yandex-func-token').value
        let url = "\n" + "\n" +
            "https://functions.yandexcloud.net/d4epsh7k5e367l6f2ij8?access_token=" + access_token

        http.open("GET", url)

        http.responseType = "json"

        http.onload = () => show_clouds(http.response)

        http.send()
    }
}

button.addEventListener('click', function () {
    let selectElement = document.querySelector('.clouds');

    alert(selectElement.options[selectElement.selectedIndex].text)
});