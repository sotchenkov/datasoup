function show_clouds(response) {
    let selectElement = document.querySelector('.clouds');

    selectElement.innerHTML = "";

    console.log(response.clouds.length)

    if (response.clouds.length > 0) {
        for (let i = 0; i < response.clouds.length; i++) {
            selectElement.add(new Option(response.clouds[i].name));
        }

        selectElement.style.display = "inline-block";
    }
}

function get_cloud_id_by_title() {
    let selectElement = document.querySelector('.clouds');

    console.log(selectElement.options[selectElement.selectedIndex].text)
}