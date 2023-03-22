function make_deploy() {
    // let oauth_token = document.querySelector('.yandex-oauth-token').value
    // let cloud_id = get_cloud_id_by_title()
    // let ozon_token = document.querySelector('.ozon-token').value
    // let ozon_id = document.querySelector('.ozon-id').value
    // let google_creds = document.querySelector('.google-creds').value
    // let google_table_name = document.querySelector('.google-table-name').value
    // let google_sheet_name = document.querySelector('.google-sheet-name').value
    //
    // let url = "https://functions.yandexcloud.net/d4enaabvqp6hc2iaa8f1" +
    //     "?oauth_token=" + oauth_token +
    //     "&cloud_id=" + cloud_id +
    //     "&ozon_id=" + ozon_id +
    //     "&ozon_token=" + ozon_token  +
    //     "&google_creds=" + google_creds +
    //     "&google_table_name=" + google_table_name +
    //     "&google_sheet_name=" + google_sheet_name
    //
    // request(url, function(response){
    //     console.log(response)
    // })
    log_writer()
    // setTimeout(success_checker, 8000, {"info": "BAD"})
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function log_writer() {
    let output = document.querySelector('.deploying-process');
    output.append("Some text... \n");
    output.scrollIntoView({block: "end"});
    success_checker({"info": "OK"})
    setTimeout(success_checker, 8000, {"info": "BAD"})
}

async function success_checker(response) {
    // alert('im called')
    if (response.info === "OK") {
        document.querySelector('.soup').style.display = 'none';
        document.querySelector('.done').style.display = 'block';
        document.querySelector('.done').innerHTML = '<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_lp7qD9RDx1.json" background="transparent" speed="1" autoplay ></lottie-player>';
        setTimeout(show_donation, 2000)
    } else {
        document.querySelector('.done').style.display = 'none'
        document.querySelector('.donation').style.display = 'none'
        document.querySelector('.error').innerHTML = '<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_yw3nyrsv.json"  background="transparent"  speed="1" autoplay></lottie-player>'
        await sleep(2000).then(() => {
            document.querySelector('.error-text').innerHTML = '<p>ERROR: smth error code + smth error text :)</p>';
        });
    }
}

function show_donation() {
    document.querySelector('.donation').innerHTML = '<lottie-player src="https://assets2.lottiefiles.com/packages/lf20_gICLST7SLO.json"  background="transparent" speed="1" autoplay></lottie-player></div>'
    document.querySelector('.donation').style.display = 'block'
}