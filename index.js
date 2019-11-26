const fetch = require('node-fetch');


function getdata() {
    let pagenum = 1
    let urldata = "https://coub.com/api/v2/timeline/tag/cars?order_by=newest_popular&page=" + pagenum + "&per_page=10" ;
    // console.log (urldata);

    fetch(urldata)
    .then(response => response.json())
    .then(data => {
         let simple = JSON.stringify(data);
        //  console.log(simple);
         file_versions = simple[2];
        //  console.log(file_versions);
        // console.log(simple)
        const toJson = JSON.parse(simple);
        // console.log (typeof toJson);
        var link = toJson.coubs[0].file_versions.share.default;
        console.log(link)
       
    });
}
getdata();


