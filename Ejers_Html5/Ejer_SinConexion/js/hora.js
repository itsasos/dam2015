function srvTime(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('HEAD',url,false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send(null);
    return xmlHttp.getResponseHeader("Date");
}

var st = srvTime("https://www.google.es/");
var date = new Date(st);
