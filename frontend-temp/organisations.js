
function show_organisations(response){
    let selectElement = document.querySelector('.orgs');

    selectElement.innerHTML = "";

    console.log(response.orgs.length)

    if (response.orgs.length > 0){
        for (let i = 0; i < response.orgs.length; i++) {
            selectElement.add(new Option(response.orgs[i].title));
        }

        selectElement.style.display = "inline-block";
    }
}

function test2() {

    let selectElement = document.querySelector('.orgs');
    selectElement.style.display = "none";
}

function get_org_id_by_title(org_title){
}