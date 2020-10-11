import covidentry from './covidentry.js';

export default function getCovidData(fromDate, toDate) {
    /*var request = new XMLHttpRequest();
    request.open("GET", "https://api.covid19api.com/country/india?from="+fromDate+"&to="+toDate, false);
    request.send(null);
    if (request.status === 200) {
        console.log(request.responseText);
    }
    var jsonResponse = JSON.parse(request.responseText);*/
    return window.fetch("https://api.covid19api.com/country/india?from="+fromDate+"&to="+toDate)
            .then(respose => respose.json())
            .then(data => convertToCovidEntries(data));
    /**/
}

function convertToCovidEntries(jsonResponse) {
    console.log(jsonResponse);
    var coviddetails = [];
    jsonResponse.forEach((item) => { 
            coviddetails.push(new covidentry(
            item.Date,
            item.Confirmed,
            item.Deaths,
            item.Recovered
        ))
    }
    )
    for(var i = 0; i < jsonResponse.length; i++) {
        coviddetails.push(new covidentry(
            jsonResponse[i].Date,
            jsonResponse[i].Confirmed,
            jsonResponse[i].Deaths,
            jsonResponse[i].Recovered
        ));
    }
    
    return coviddetails;
}