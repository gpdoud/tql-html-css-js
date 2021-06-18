const getUrlParms = URL =>  {
    let parms = document.URL.split("?")[1];
    parms = parms.split("&");
    let json = {};
    for(let p of parms) {
        let kv = p.split("=");
        json[kv[0]] = isNaN(kv[1]) ? kv[1] : +kv[1];
    }
    return json;
}