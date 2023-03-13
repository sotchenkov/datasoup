function show_clouds(response) {
    let selectElement = document.querySelector('.clouds');

    selectElement.innerHTML = "";

    if (response.clouds.length > 0) {
        for (let i = 0; i < response.clouds.length; i++) {
            selectElement.add(new Option(response.clouds[i].name));
        }

        selectElement.style.display = "inline-block";
    }
    test(response.clouds)
}

function get_cloud_id_by_title(cloud) {
    let selectElement = document.querySelector('.clouds');

    for (let i = 0; i < cloud.length; i++) {
        if (cloud[i]['name'] === selectElement.options[selectElement.selectedIndex].text){

            return cloud[i]['id']
        }
    }

}