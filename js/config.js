var yahooURLs = {
    formats: '.query.results.channel.item.(condition.(temp,text),forecast[i].(day,date,high,low,text))'
    , url1: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20u%3D%22C%22%20and%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'
    , url2: '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
};

function trimmer(name) {
    let i;
    for (i = 0; i < name.length; i++) {
        if (name[i] === ',') {
            break;
        }
    }
    name = name.slice(0, i);
    return name;
}
/*https://query.yahooapis.com/v1/public/yql?
    q=select%20*%20from%20weather.forecast%20where%20u%3D%22C%22%20and%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22london%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
*/