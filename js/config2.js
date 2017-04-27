var darkSkyURLs = {
    locPollURL: 'https://api.darksky.net/forecast/'
    , apikey: 'efa652fa52ba6532174d3788e4c9ec0f'
};
var yahooURLs = {
    formats: 'results.query.results.channel.item.(condition.(temp,text),forecast[i].(day,date,high,low,text))'
    , url1: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'
    , url2: '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
};
var openWeatherURLs = {
    currentWeatherURL: 'http://api.openweathermap.org/data/2.5/weather?q='
    , apikey: '857d06912a6bba329cc9256d13fc8890'
    , hourlyURL: 'http://api.openweathermap.org/data/2.5/forecast?q='
};