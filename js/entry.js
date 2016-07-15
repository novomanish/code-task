$(document).ready(function(){
    
    $("#searchForm").on("submit", handleSearchSubmit);
    $("input[data-type=airport").on("keyup", autocomplete(airportSearch));

    function handleSearchSubmit(evt){
        evt.preventDefault();
        var form = evt.target;
        
        var searchData = {
            from: form.from.getAttribute("data-code"),
            to: form.to.getAttribute("data-code"),
            date: form.date.value
        };


        console.log("Searching");

        $.ajax("index.html",{
            data:searchData
        }).done(handleSearchResult);


        console.log(searchData);
    }

    function handleSearchResult(data){
        data = [
  {
    "key": "UUY1MDQgMTQ3Mjc3NDQwMDAwMA==",
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 504,
    "start": {
      "dateTime": "2016-09-03T08:56:00+10:00",
      "airportCode": "SYD",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T14:57:00-04:00",
      "airportCode": "JFK",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 1201,
    "price": 2270.33
  },
  {
    "key": "UUY0NDAgMTQ3Mjc3NDQwMDAwMA==",
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 440,
    "start": {
      "dateTime": "2016-09-03T02:40:00+10:00",
      "airportCode": "SYD",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T08:41:00-04:00",
      "airportCode": "JFK",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "74H",
      "shortName": "Boeing 747-8",
      "fullName": "Boeing 747-8",
      "manufacturer": "Boeing",
      "model": "747-8 Intercontinental"
    },
    "distance": 16014,
    "durationMin": 1201,
    "price": 2258.67
  },
  {
    "key": "UUYzMjggMTQ3Mjc3NDQwMDAwMA==",
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 328,
    "start": {
      "dateTime": "2016-09-03T08:57:00+10:00",
      "airportCode": "SYD",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T14:58:00-04:00",
      "airportCode": "JFK",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 1201,
    "price": 3395.64
  },
  {
    "key": "UUYyNzIgMTQ3Mjc3NDQwMDAwMA==",
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 272,
    "start": {
      "dateTime": "2016-09-03T02:40:00+10:00",
      "airportCode": "SYD",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T08:41:00-04:00",
      "airportCode": "JFK",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "789",
      "shortName": "Boeing 787-9",
      "fullName": "Boeing 787-9 Dreamliner",
      "manufacturer": "Boeing",
      "model": "787-9"
    },
    "distance": 16014,
    "durationMin": 1201,
    "price": 3205.29
  },
  {
    "key": "UUYxNzYgMTQ3Mjc3NDQwMDAwMA==",
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 176,
    "start": {
      "dateTime": "2016-09-03T00:35:00+10:00",
      "airportCode": "SYD",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T06:36:00-04:00",
      "airportCode": "JFK",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "333",
      "shortName": "Airbus A330-300",
      "fullName": "Airbus Industrie A330-300",
      "manufacturer": "Airbus",
      "model": "A330-300"
    },
    "distance": 16014,
    "durationMin": 1201,
    "price": 2182.9
  },
  {
    "key": "UUY1MDggMTQ3Mjc3NDQwMDAwMA==",
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 508,
    "start": {
      "dateTime": "2016-09-02T18:21:00+10:00",
      "airportCode": "SYD",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T00:22:00-04:00",
      "airportCode": "JFK",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "KAN",
      "shortName": "Skippy",
      "fullName": "Kangaroo",
      "manufacturer": "Australia",
      "model": "Red"
    },
    "distance": 16014,
    "durationMin": 1201,
    "price": 2303.18
  },
  {
    "key": "UUYzMDIgMTQ3Mjc3NDQwMDAwMA==",
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 302,
    "start": {
      "dateTime": "2016-09-03T05:49:00+10:00",
      "airportCode": "SYD",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T11:50:00-04:00",
      "airportCode": "JFK",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "380",
      "shortName": "Airbus A380",
      "fullName": "Airbus Industrie A380",
      "manufacturer": "Airbus",
      "model": "A380"
    },
    "distance": 16014,
    "durationMin": 1201,
    "price": 3401.18
  },
  {
    "key": "UUY4NzMgMTQ3Mjc3NDQwMDAwMA==",
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 873,
    "start": {
      "dateTime": "2016-09-02T15:12:00+10:00",
      "airportCode": "SYD",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-02T21:13:00-04:00",
      "airportCode": "JFK",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "KAN",
      "shortName": "Skippy",
      "fullName": "Kangaroo",
      "manufacturer": "Australia",
      "model": "Red"
    },
    "distance": 16014,
    "durationMin": 1201,
    "price": 2894.38
  },
  {
    "key": "UUYzNTIgMTQ3Mjc3NDQwMDAwMA==",
    "airline": {
      "code": "QF",
      "name": "Qantas"
    },
    "flightNum": 352,
    "start": {
      "dateTime": "2016-09-03T01:38:00+10:00",
      "airportCode": "SYD",
      "airportName": "Kingsford Smith",
      "cityCode": "SYD",
      "cityName": "Sydney",
      "countryCode": "AU",
      "countryName": "Australia",
      "latitude": -33.946111,
      "longitude": 151.177222,
      "stateCode": "NS",
      "timeZone": "Australia/Sydney"
    },
    "finish": {
      "dateTime": "2016-09-03T07:39:00-04:00",
      "airportCode": "JFK",
      "airportName": "John F Kennedy Intl",
      "cityCode": "NYC",
      "cityName": "New York",
      "countryCode": "US",
      "countryName": "United States",
      "latitude": 40.639751,
      "longitude": -73.778925,
      "stateCode": "NY",
      "timeZone": "America/New_York"
    },
    "plane": {
      "code": "789",
      "shortName": "Boeing 787-9",
      "fullName": "Boeing 787-9 Dreamliner",
      "manufacturer": "Boeing",
      "model": "787-9"
    },
    "distance": 16014,
    "durationMin": 1201,
    "price": 3245
  }
];

        var source = $("#searchResultsTemplate").html();
        var template = Handlebars.compile(source);
        var html = template(data);
        var container = $("#resultsContainer");
        
        container.empty().html(html);

        container.find(".content").hide();

        container.find(".content:eq(2)").show();


    }

    function autocomplete(fn){
        var timeout;

        return function(evt){
            var input = evt.target;
            var handleResult = function(data){
                data = [
                  {
                    "airportCode": "MLB",
                    "airportName": "Melbourne International Arpt",
                    "cityCode": "MLB",
                    "cityName": "Melbourne",
                    "countryCode": "US",
                    "countryName": "United States",
                    "latitude": 28.102753,
                    "longitude": -80.645258,
                    "stateCode": "FL",
                    "timeZone": "America/New_York"
                  },
                  {
                    "airportCode": "MEL",
                    "airportName": "Tullamarine Arpt",
                    "cityCode": "MEL",
                    "cityName": "Melbourne",
                    "countryCode": "AU",
                    "countryName": "Australia",
                    "latitude": -37.673333,
                    "longitude": 144.843333,
                    "stateCode": "VI",
                    "timeZone": "Australia/Hobart"
                  }
                ];
                var source   = $("#airportLineTemplate").html();
                var template = Handlebars.compile(source);
                var html = template(data);

                var container = $("#airportResulsContainer");
                container.show();
                container.html(html);

                container.find("ul").find("li").on("click", function(evt){
                    var li = evt.target;
                    var value = li.innerHTML;
                    var code = li.getAttribute("data-code");
                    input.value = value;
                    input.setAttribute("data-code", code);

                    container.hide();
                    
                });
            };



            clearTimeout(timeout);
            timeout = setTimeout(function(){
                fn(evt.target.value, handleResult);
            }, 1000);
        };
    }

    function airportSearch(query, callback){
        console.log("Searching location "+query);
        $.ajax("index.html",{
            data:{"q":query}
        }).done(callback);
    }


});