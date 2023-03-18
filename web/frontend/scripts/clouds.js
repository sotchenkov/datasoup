let clouds = '';

function get_clouds() {
    let selectElement = document.querySelector('.clouds');

    if (isEmpty(document.querySelector(".yandex-oauth-token").value)) {
        selectElement.style.display = "none";
    } else {
        let access_token = document.querySelector('.yandex-oauth-token').value;
        let url = "https://functions.yandexcloud.net/d4e5l1tnkjo9f2jr6cs9?oauth_token=" + access_token;

        request(url, function(response){
            show_clouds(response)
        })
    }
}

function show_clouds(response) {
    let selectElement = document.querySelector('.clouds');

    selectElement.innerHTML = "";

    if (response.clouds.length > 0) {
        for (let i = 0; i < response.clouds.length; i++) {
            selectElement.add(new Option(response.clouds[i].name));
        }

        selectElement.style.display = "inline-block";
    }
    clouds = response.clouds
}

function get_cloud_id_by_title() {
    let selectElement = document.querySelector('.clouds');

    for (let i = 0; i < clouds.length; i++) {
        if (clouds[i]['name'] === selectElement.options[selectElement.selectedIndex].text) {

            return clouds[i]['id']
        }
    }

}