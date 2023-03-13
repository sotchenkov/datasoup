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

let clouds = '';

function get_clouds() {
    const http = new XMLHttpRequest()
    let selectElement = document.querySelector('.clouds');

    const isEmpty = str => !str.trim().length;

    if (isEmpty(document.querySelector(".yandex-func-token").value)) {
        selectElement.style.display = "none";
    } else {
        let access_token = document.querySelector('.yandex-func-token').value;
        let url = "https://functions.yandexcloud.net/d4epsh7k5e367l6f2ij8?oauth_token=" + access_token;

        http.open("GET", url);

        http.responseType = "json";

        http.onload = () => show_clouds(http.response);

        http.send();
    }
}

function test(cloud) {
    clouds = cloud;
    get_cloud_id_by_title(clouds)
}

button.addEventListener('click', function () {
    back_response();
});

function back_response() {
    const http = new XMLHttpRequest()

    let access_token = document.querySelector('.yandex-func-token').value
    let cloud_id = get_cloud_id_by_title(clouds)
    let ozon_token = document.querySelector('.ozon-token').value
    let ozon_id = document.querySelector('.ozon-id').value
    let google_creds = document.querySelector('.google-creds').value
    let google_table_name = document.querySelector('.table-name').value
    let google_sheet_name = document.querySelector('.sheet-name').value

    let url = "https://functions.yandexcloud.net/d4e6phdkbaf8p33pccl8?oauth_token=" + access_token +
        "&cloud_id=" + cloud_id + "&ozon_id=" + ozon_id + "&ozon_token=" + ozon_token  + "&google_creds=" + google_creds +
        "&google_table_name=" + google_table_name + "&google_sheet_name=" + google_sheet_name

    http.open("GET", url)

    http.responseType = "json"

    http.onload = () => console.log(http.response)

    http.send()
}