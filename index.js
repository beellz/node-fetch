const fetch = require('node-fetch');
var wget = require('node-wget');


function getdata() {

        var title = "bike";
        var pagenum = 2;
        let urldata = "https://coub.com/api/v2/timeline/tag/" + title + "?order_by=newest_popular&page=" + pagenum + "&per_page=25" ;
        // console.log(urldata);
        
        fetch(urldata)
        .then(response => response.json())
        .then(data => {
            let simple = JSON.stringify(data);
            //  console.log(simple);
            //  file_versions = simple[2];
            //  console.log(file_versions);
            // console.log(simple)
            const toJson = JSON.parse(simple);
            // console.log (typeof toJson);
            var link = toJson.coubs[0].file_versions.share.default;
            
          
        for (var i = 0 ; i < 25; i++){
            var obj = toJson.coubs[i].file_versions.share.default;
            console.log(obj);
            wget(obj); 
        }
    });
}
getdata();