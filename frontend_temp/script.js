let card = document.querySelector(".card");
let card_text = document.querySelector(".card-text");
let ozon_inputs = document.querySelector(".ozon-inputs");
let ozon_contents = document.querySelector(".ozon-card-background");

let is_clicked = false;


document.querySelector('.yandex').style.display = 'none';
document.querySelector('.google').style.display = 'none';

ozon_contents.addEventListener("click", function () {
  if (!is_clicked) {
    card_text.style.display = "none";
    ozon_inputs.style.display = 'inline-block';
    document.querySelector('.yandex').style.display = 'inline-block';
    document.querySelector('.google').style.display = 'inline-block';
    // document.querySelector('.instruction').style.display = 'none';
    document.querySelector('.ozon-token').focus();
    // card.active.style.setProperty("box-shadow", "0px 0px 20px 2px rgba(0, 0, 0, 0.4)")
    is_clicked = true;
  }
  else {
    card_text.style.display = "inline-block";
    ozon_inputs.style.display = 'none';
    document.querySelector('.yandex').style.display = 'none';
    document.querySelector('.google').style.display = 'none';
    document.querySelector('.instruction').style.display = '';
    is_clicked = false;
  }
});
