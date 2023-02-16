
let searchBtn = document.getElementById("search");

function sendRequest() {
    let userText = document.getElementById("text").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var universities = JSON.parse(xhttp.responseText); 
            var list = "";
            for(var i = 0; i < universities.length; i++) {
                list += "<a href=' " + universities[i].web_pages + "'> " + universities[i].name + "," + universities[i].country + "</br> </a>";
            }
            document.getElementById("results").innerHTML = list;
       }
    };

    xhttp.open("GET", "http://universities.hipolabs.com/search?name=" + userText, true);
    console.log(xhttp);
    xhttp.send();
}
