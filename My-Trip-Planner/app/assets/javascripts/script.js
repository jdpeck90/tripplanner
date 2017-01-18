console.log("script loaded")


$('#newbutton').click(function(event) {
  event.preventDefault();
console.log('test')
var $eventLocation = $('#eventlocation').val()
var $eventKeyword = $('#keyword').val()
var $eventDate = $('#eventdate').val()
var multiwordLocation = function(location){
    var words = location.split(" ")
    if(words.length>1){
      return words.join("+")
    } else {
      return location
    }
}

var eventUrl = 'http://api.eventful.com/rest/events/search?...&keywords='+$eventKeyword+'&location='+multiwordLocation($eventLocation)+'&date='+$eventDate+'&app_key=bBnC2nhp4zqNBB4w'
console.log(eventUrl)
$.ajax({
  type: "POST",
  url: '/ajaxcalls',
  data: {url: eventUrl}
}).done(function(data){
  console.log(data,'data')
  appendAllInfoEvents(data.event.search.events.event)
  console.log('this file')
});


});



var appendAllInfoEvents = function(events){
  var counter = 0;
  for(var i = 0; i < events.length; i++){
    var event = events[counter]
    console.log(event,'event')
  var $eventDiv = $('<div class="eventDiv">');
  var $eventUl = $('<ul>');
  var split = event.start_time.split(" ")
  var dayShowing = split[0]
  var timeShowing = split[1]

var title = event.title.replace(/ /g, '')
var venueAddress = event.venue_address.replace(/ /g, '')
var eUrl1 = event.venue_url.replace(/\//g, '+')
var eUrl2 = eUrl1.replace(/\./g, 'Q')
var splitUrl = eUrl2.split('?')
console.log(splitUrl)
resultDiv = $('<div class="col-md-3 col-md-offset-2 opaque2 whtTxt"></div>')
results = $('<ul class="list-unstyled"></ul>');


  var urlIDEvents = title + '%20'+ venueAddress + event.city_name + event.region_name  + event.country_abbr + '%20' + dayShowing + '%20' + timeShowing + '%20' + splitUrl[0]
  var namelist = $('<a href=/events/'+urlIDEvents+'>'+event.venue_name+'</a>');
 $("#body").css("background-image", "url('http://www.intrawallpaper.com/static/images/abstract-mosaic-background.png')");
    $(".opaque").hide();
  $('body').append(resultDiv)
  $(resultDiv).append(results)
  // $($eventUl).append('<li>Image: <img src="'+event.image.medium.url+'"></li>')
  $(results).append(namelist)
  $(results).append('<li>Number of Days: '+event.all_day+'</li>')
  $(results).append('<li>City Name: '+event.city_name+'</li>')
  $(results).append('<li>Country: '+event.country_name+'</li>')
  $(results).append('<li>Latitude: '+event.latitude+'</li>')
  $(results).append('<li>Longitude: '+event.longitude+'</li>')
  $(results).append('<li>Postal Code: '+event.postal_code+'</li>')
  $(results).append('<li>State: '+event.region_name+'</li>')
  $(results).append('<li>Title: '+event.title+'</li>')
  $(results).append('<li>Venue: '+event.venue_address+'</li>')
  $(results).append('<li>Venue Link:<a href="'+event.venue_url+'">'+event.venue_name+'</a></li>')
  $(results).append('<li>Day Showing: '+dayShowing+'</li>')
  $(results).append('<li>Time Showing: '+timeShowing+'</li>')
  $(results).append('<li>Description: '+event.description+'</li>')

  counter++
  }
}
getAllInfoFourSquare = function(data) {
    $.ajax({
            url: "https://api.foursquare.com/v2/venues/explore?client_id=ZNEGNE4KLQ5OW03GEGIIDCS0XCZFCQE01S04NJVAN5R5LPCY&client_secret=CYYND5AXCAJ1SMQDNPZBHODBX1OEX3SQY4RBLPQKDAPXHQGT&near="+ll+"&sortByDistance=1&radius=500&query="+category+"&v=20161124&m=foursquare",
            method: 'GET'
        })
        .done(function(data) {
          console.log(data)
          appendResults(data)

        })
}
getAllInfoAttraction = function(data) {
    $.ajax({
            url: "https://api.foursquare.com/v2/venues/explore?client_id=ZNEGNE4KLQ5OW03GEGIIDCS0XCZFCQE01S04NJVAN5R5LPCY&client_secret=CYYND5AXCAJ1SMQDNPZBHODBX1OEX3SQY4RBLPQKDAPXHQGT&near="+ll+"&sortByDistance=1&radius=500&query="+category+"&v=20161124&m=foursquare",
            method: 'GET'
        })
        .done(function(data) {
          console.log(data)
          appendResultsAttraction(data)

        })
}
$('#ME').click(function(event) {
    event.preventDefault();
     $("#body").css("background-image", "url('http://www.intrawallpaper.com/static/images/color-wallpapers.jpg')");
    $(".opaque").hide();
    $('#homeNav').hide();
    category = $('#foodkeyword').val()
    category = category.split(' ');
    category = category.join('%20')
    ll = $('#foodlocation').val();
    ll = ll.split(' ');
    ll = ll.join("%20")
    getAllInfoFourSquare(category);
})
$('#ME2').click(function(event) {
    event.preventDefault();
     $("#body").css("background-image", "url('http://www.intrawallpaper.com/static/images/awesome-rain-wallpaper_0_PB7IVa9.jpg')");
    $(".opaque").hide();
    $('#homeNav').hide();
    category = $('#attractionkeyword').val()
    category = category.split(' ');
    category = category.join('%20')
    ll = $('#attractionlocation').val();
    ll = ll.split(' ');
    ll = ll.join("%20")
    getAllInfoFourSquare(category);
})
$('#ME3').click(function(event) {
    event.preventDefault();
        $("#body").css("background-image", "url('http://www.intrawallpaper.com/static/images/awesome-rain-wallpaper_0_PB7IVa9.jpg')");
    $(".opaque").hide();
    $('#homeNav').hide();
    category = $('#attractionkeyword').val()
    category = category.split(' ');
    category = category.join('%20')
    ll = $('#attractionlocation').val();
    ll = ll.split(' ');
    ll = ll.join("%20")
    getAllInfoAttraction(category);
})

appendResults = function(data){
  result = data.response.groups[0]
  for(i=0;i<10;i++){
   resultDiv = $('<div class="col-md-3 col-md-offset-2 opaque2 whtTxt"></div>')
    results = $('<ul class="list-unstyled"></ul>');
    item = $('<li><strong></strong></li><br>');
    itemAddress1 = $('<li></li>');
    itemAddress2 = $('<li></li>');
    itemAddress3 = $('<li></li>');
    itemPrice = $('<li></li>');
    itemRating = $('<li></li>');
    itemHours = $('<li></li>');
    urlli = $('<li></li>');
    reviewurl = data.response.groups[0].items[i].tips[0].canonicalUrl
    urlli.text(reviewurl)
    name = result.items[i].venue.name;
    tip = data.response.groups[0].items[0].tips[0].text;
    tipli = $('<li></li>');
    tipli.text (tip)
    urlli.text(reviewurl)
    namer = JSON.stringify(name)
    namer = namer.split(' ');
    namer = namer.join('%20');
    namer = namer.replace('"', '');
    namer = namer.replace('"', '');
    address1 = data.response.groups[0].items[i].venue.location.formattedAddress[0];
    address2 = data.response.groups[0].items[i].venue.location.formattedAddress[1];
    address3 = data.response.groups[0].items[i].venue.location.formattedAddress[2];
    rating = data.response.groups[0].items[i].venue.rating
    ratingColor = data.response.groups[0].items[i].venue.ratingColor;


    nameParams = name.replace(/ /g, '')
    addressParams0 = address1 + address2 + address3
    addressParams = addressParams0.replace(/ /g, '')
    fullParams = reviewurl.replace(/[/]/g, 'QQ')
    fullParams2 = fullParams.replace(':', 'MM')
    fullParams3 = fullParams.replace('.com', 'KK')
    urlID = nameParams + '%20'+ addressParams  + '%20'+fullParams3
    namelist = $('<a href=/restaurants/'+urlID+'>Add this restaurant</a>');

    itemAddress1.text(address1 + ' ');
    itemAddress2.text(address2 + ' ');
    itemAddress3.text(address3 + ' ');
    itemRating.text('Rating: '+rating);
    itemRating.css('color', '#'+ratingColor)
    results.append(namelist);
    results.append(urlli)
     results.append(tipli)
    results.append(item);
    results.append(itemAddress1);
    results.append(itemAddress2);
    results.append(itemAddress3);
    results.append(itemRating);
    results.append(itemHours);
    resultDiv.append(results);
    $('body').append(resultDiv);
  }


}

appendResultsAttraction = function(data){
  result = data.response.groups[0]
  for(i=0;i<10;i++){
    resultDiv = $('<div class="col-md-6"></div>')
    results = $('<ul></ul>');
    item = $('<li></li>');
    itemAddress1 = $('<li></li>');
    itemAddress2 = $('<li></li>');
    itemAddress3 = $('<li></li>');
    itemPrice = $('<li></li>');
    itemRating = $('<li></li>');
    itemHours = $('<li></li>');
    urlli = $('<li></li>');
    reviewurl = data.response.groups[0].items[i].tips[0].canonicalUrl
    urlli.text(reviewurl)
    name = result.items[i].venue.name;
    tip = data.response.groups[0].items[0].tips[0].text;
    tipli = $('<li></li>');
    tipli.text (tip)
    urlli.text(reviewurl)
    namer = JSON.stringify(name)
    namer = namer.split(' ');
    namer = namer.join('%20');
    namer = namer.replace('"', '');
    namer = namer.replace('"', '');
    address1 = data.response.groups[0].items[i].venue.location.formattedAddress[0];
    address2 = data.response.groups[0].items[i].venue.location.formattedAddress[1];
    address3 = data.response.groups[0].items[i].venue.location.formattedAddress[2];
    rating = data.response.groups[0].items[i].venue.rating
    ratingColor = data.response.groups[0].items[i].venue.ratingColor;


    nameParams = name.replace(/ /g, '')
    addressParams0 = address1 + address2 + address3
    addressParams = addressParams0.replace(/ /g, '')
    fullParams = reviewurl.replace(/[/]/g, 'QQ')
    fullParams2 = fullParams.replace(':', 'MM')
    fullParams3 = fullParams.replace('.com', 'KK')
    urlID = nameParams + '%20'+ addressParams  + '%20'+fullParams3
    namelist = $('<a href=/attractions/'+urlID+'>Add this attraction to a trip!</a>');

    itemAddress1.text(address1 + ' ');
    itemAddress2.text(address2 + ' ');
    itemAddress3.text(address3 + ' ');
    itemRating.text('Rating: '+rating);
    itemRating.css('color', '#'+ratingColor)
    results.append(namelist);
    results.append(urlli)
     results.append(tipli)
    results.append(item);
    results.append(itemAddress1);
    results.append(itemAddress2);
    results.append(itemAddress3);
    results.append(itemRating);
    results.append(itemHours);
    resultDiv.append(results);
    $('body').append(resultDiv);
  }


}



appendAllInfoFlights = function(data){
    for(i=0;i<10;i++){
    resultDiv = $('<div class="col-md-3 col-md-offset-2 opaque2 whtTxt"></div>');
    results = $('<ul></ul>');
    inboundprice = data.results[i].fare.total_price
    inboundarrive = data.results[i].itineraries[0].inbound.flights[0].arrives_at
    inboundarrive = inboundarrive.replace('T', ' ')
    inbounddeparts = data.results[i].itineraries[0].inbound.flights[0].departs_at
    inbounddeparts = inbounddeparts.replace('T', ' ')
    inboundclass = data.results[i].itineraries[0].inbound.flights[0].booking_info.travel_class
    inboundseats = data.results[i].itineraries[0].inbound.flights[0].booking_info.seats_remaining
    inbounddestinationairport = data.results[i].itineraries[0].inbound.flights[0].destination.airport
    inboundflightnumber = data.results[i].itineraries[0].inbound.flights[0].flight_number
    inboundoriginairport = data.results[i].itineraries[0].inbound.flights[0].origin.airport
    inboundairline =  data.results[i].itineraries[0].inbound.flights[0].marketing_airline

    outboundarrive = data.results[i].itineraries[0].outbound.flights[0].arrives_at
    outboundarrive = outboundarrive.replace('T', ' ')
    outbounddeparts = data.results[i].itineraries[0].outbound.flights[0].departs_at
    outbounddeparts = outbounddeparts.replace('T', ' ')
    outboundclass = data.results[i].itineraries[0].outbound.flights[0].booking_info.travel_class
    outboundseats = data.results[i].itineraries[0].outbound.flights[0].booking_info.seats_remaining
    outbounddestinationairport = data.results[i].itineraries[0].outbound.flights[0].destination.airport
    outboundflightnumber = data.results[i].itineraries[0].outbound.flights[0].flight_number
    outboundoriginairport = data.results[i].itineraries[0].outbound.flights[0].origin.airport
    outboundairline =  data.results[i].itineraries[0].outbound.flights[0].marketing_airline
    inboundpriceParams = inboundprice.replace('.', 'P')
    inboundarriveParams = inboundarrive.replace(/ /g, '')
    inbounddepartsParams = inbounddeparts.replace(/ /g, '')
    inboundclassParams = inboundclass.replace(/ /g, '')

    inbounddestinationairportParams = inbounddestinationairport.replace(/ /g, '')
    inboundflightnumberParams = inboundflightnumber.replace(/ /g, '')
    inboundoriginairportParams = inboundoriginairport.replace(/ /g, '')
    inboundairlineParams = inboundairline.replace(/ /g, '')



    outboundarriveParams = outboundarrive.replace(/ /g, '')
    outbounddepartsParams = outbounddeparts.replace(/ /g, '')
    outboundclassParams = outboundclass.replace(/ /g, '')

    outbounddestinationairportParams = outbounddestinationairport.replace(/ /g, '')
    outboundflightnumberParams = outboundflightnumber.replace(/ /g, '')
    outboundoriginairportParams = outboundoriginairport.replace(/ /g, '')
    outboundairlineParams = outboundairline.replace(/ /g, '')



    urlID = inboundpriceParams + '%20' +  outboundarriveParams  + '%20' + outbounddepartsParams + '%20' +  outboundclassParams + '%20' +  outbounddestinationairportParams + '%20' +  outboundflightnumberParams + '%20' +  outboundoriginairportParams  + '%20' + outboundairlineParams  + '%20' + inboundarriveParams  + '%20' + inbounddepartsParams + '%20' +  inboundclassParams  + '%20' + inbounddestinationairportParams + '%20' +  inboundflightnumberParams + '%20' +  inboundoriginairportParams + '%20' +  inboundairlineParams
    namelist = $('<a href=/flights/'+urlID+'>Add this flight to a trip!</a>');
    listURL = $('<li></li>')
    listURL.append(namelist)

    results.append(listURL)
    results.append('<li>' + 'Round Trip Price: $' + inboundprice + '</li><br>')
    results.append('<li>' + 'Outbound Flight Details: ' + '</li>')
    results.append('<li>' + 'Departure : ' + outbounddeparts + '</li>')
    results.append('<li>' + 'Arrival : ' + outboundarrive + '</li>')
    results.append('<li>' + 'Class: ' + outboundclass + '</li>')
    results.append('<li>' + 'Seats left on this flight: ' + outboundseats + '</li>')
    results.append('<li>' + 'Origin Airport: ' + outboundoriginairport + '</li>')
    results.append('<li>' + 'Desination Airport: ' + outbounddestinationairport + '</li>')
    results.append('<li>' + 'Airline Designator: ' + outboundairline + '</li>')
    results.append('<li>' + 'Flight Number: ' + outboundflightnumber + '</li><br>')
    results.append('<li>' + 'Inbound Flight Details: ' + '</li>')
    results.append('<li>' +'Arrival: ' + inboundarrive + '</li>')
    results.append('<li>' + 'Departure: ' + inbounddeparts + '</li>')
    results.append('<li>' + 'Class: ' + inboundclass + '</li>')
    results.append('<li>' + 'Seats: ' + inboundseats + '</li>')
    results.append('<li>' + 'Destination Airport: ' + inbounddestinationairport  + '</li>')
    results.append('<li>' + 'Origin Airport: ' + inboundoriginairport  + '</li>')
    results.append('<li>' + 'Airline Designator: ' + inboundairline + '</li>')
    results.append('<li>' + 'Flight Number: ' + inboundflightnumber + '</li><br>')


    resultDiv.append(results)

    resultDiv.append(results)


    $('body').append(resultDiv);
  }
}



$('#submit2').click(function(event) {
  console.log('hi')
    event.preventDefault();
       event.preventDefault();
    $("#body").css("background-image", "url('http://www.intrawallpaper.com/static/images/abstract-mosaic-background.png')");
    $(".opaque").hide();
    $('#homeNav').hide();
    ORIGIN = $('#origin').val()
    ORIGINNEW = ORIGIN[0] + ORIGIN[1] + ORIGIN[2]
    DESTINATION = $('#destination').val()
    DESTINATIONNEW = DESTINATION[0] + DESTINATION[1] + DESTINATION[2]
    RETURNDATE = $('#returndate').val()
    RETURNDATE2 = RETURNDATE.replace('/','-')
    RETURNDATE3 = RETURNDATE2.replace('/','-')
    ADULTS = $('#adults').val()
    CHILDREN = $('#children').val()
    DATE = $('#departuredate').val()
    DATE2 = DATE.replace('/','-')
    DATE3 = DATE2.replace('/','-')
    DATE4 = DATE3.toString()
    RETURNDATE4 = RETURNDATE3.toString()
    MAXPRICE = $('#maxprice').val()
    ONEWAY = $('#oneway').val()
    DIRECT = $('#direct').val()
    getAllInfoFlights(ORIGIN);


})

getAllInfoHotel = function(data) {
    $.ajax({
            url: "https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=qzex7QQAbrN1YS9N7nDo2TQDlENnACs8&location="
            +HOTELLOCATIONNEW+"&check_in="+HOTELCHECKINDATE+"&check_out="+HOTELCHECKOUTDATE+
            "&radius=50&lang=EN&currency=USD&max_rate="+MAXRATE+
            "&number_of_results=10&all_rooms=true&show_sold_out=false",
            method: 'GET'
        })
        .done(function(data) {

          appendAllHotelInfo(data)

          // appendResultsAmadeus(data)

        })
}


getAllInfoFlights = function(data) {
    $.ajax({
            url: "http://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=qzex7QQAbrN1YS9N7nDo2TQDlENnACs8&origin="+ORIGINNEW+
            "&destination="+DESTINATIONNEW+"&departure_date="+DATE4+"&return_date="+RETURNDATE4+
            "&adults="+ADULTS+"&children="+CHILDREN+"&nonstop=true&max_price="+MAXPRICE+"&one-way=false&number_of_results=10",
            method: 'GET'
        })
        .done(function(data) {
          appendAllInfoFlights(data)


        })
        .fail(function(data){
          appendError(data)
             console.log(URL)
        })
}

appendError = function(data){
   resultDiv = $('<div class="errordiv"></div>')
   result = $('<p class="error"></p>')
   error = (data.responseJSON.message)
   result.text('Something went wrong! '+ error + ' Please go back to fix this and try again.')
   resultDiv.append(result)
   $('body').append(resultDiv)

}


$('#submit3').click(function(event) {
    event.preventDefault();
        $("#body").css("background-image", "url('http://www.intrawallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg')");
    $(".opaque").hide();
    $('#homeNav').hide();
    HOTELLOCATION = $('#hotellocation').val()
    HOTELLOCATIONNEW = HOTELLOCATION[0] + HOTELLOCATION[1] + HOTELLOCATION[2]
    HOTELCHECKINDATE = $('#checkin').val()
    HOTELCHECKOUTDATE = $('#checkout').val()
    MAXRATE = $('#maxhotelrate').val()
    getAllInfoHotel(HOTELLOCATION);
})

appendAllHotelInfo = function(data){
  for(i=0;i<10;i++){
    resultDiv = $('<div></div>')
    results = $('<ul class="list-unstyled"></ul>');
    itemName = $('<li></li>');
    name = data.results[i].property_name
    addressLine1 = data.results[i].address.line1
    addressLine2 = data.results[i].address.city
    addressLine3 = data.results[i].address.region
    addressLine4 = data.results[i].address.postal_code
    addressLine5 = data.results[i].address.country
    itemPricee = data.results[i].min_daily_rate.amount
    itemContactt = data.results[i].contacts[0].detail
    nameparams = name.replace(/ /g, '')
    addressLine1Params = addressLine1.replace(/ /g, '')
    addressLine2Params = addressLine2.replace(/ /g, '')
    addressLine3Params = addressLine3.replace(/ /g, '')
    addressLine3Params = addressLine3.replace(/','/g, '')
    addressLine4Params = addressLine4.replace(/ /g, '')
    addressLine5Params = addressLine5.replace(/ /g, '')
    itemPriceParams = itemPricee.replace(/ /g, '%20')
    itemPriceParams = itemPricee.replace('.', 'P')
    itemContactParams = itemContactt.replace(/ /g, '%20')
    urlID = nameparams + '%20'+ addressLine1Params + addressLine2Params +addressLine3Params  + addressLine4Params + addressLine5Params + '%20' + itemPriceParams + '%20' +itemContactParams
    namelist = $('<a href=/hotels/'+urlID+'>Add this hotel to a trip!</a>');

    itemName.append(namelist)
    results.append(itemName)
    results.append('<li>' + 'Hotel: ' + name + '</li>');
    results.append('<li>' + 'Address: ' + addressLine1+ '<br>'
      + addressLine2 + ', ' + addressLine3 + '<br>' + addressLine4 +
      ' ' + '(' + addressLine5 + ')' + '</li>');
    results.append('<li>' + 'Lowest Daily Rate: ' + itemPricee + '</li>');
    results.append('<li>' + 'Contact Number: ' + itemContactt + '</li>');
    resultDiv.append(results);
    $('body').append(resultDiv);
    resultDiv.append(results);
    $('body').append(resultDiv);
  }


}




var randomizeBackground= function(){
    var images = ["http://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/Philippines-Wallpaper.jpg","http://www.cnac.gob.ve/filmcommission/images/boletines/2013-04/Alex.jpg","https://i.ytimg.com/vi/EvmWqPR06zY/maxresdefault.jpg","http://travelchannel.sndimg.com/content/dam/images/travel/fullset/2015/09/15/family-mountain-vacation-lake-louise.jpg.rend.tccom.1280.960.jpeg","http://www.keribrownhomes.com/wp-content/uploads/2016/07/vacation-house-design-with-wooden-wall-surrounded-by-snow.jpg","http://chainimage.com/images/england-scotland-ireland-tour-luxury-uk-vacation-zicasso.jpg","http://www.daviddanielsphotography.com/wp-content/uploads/2013/12/san-franciscos-golden-gate-bridge-with-a-new-sky.jpg" ]
    $('#body').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'});
};

randomizeBackground()

var divToggle = function(){
$(".toggle").click(function() {
    var $toggled = $(this).attr('href');
    $($toggled).siblings(':visible').hide();
    $($toggled).toggle("slide", {direction: 'up'}, 750);
    return false;
    });
  };
divToggle()


var getLocation = function(){
           $(function() {
            $( "#origin, #hotellocation, #destination, #location, #attractionlocation" ).autocomplete({
               source: availableCities,
               autoFocus:true
            });
    });
  }
getLocation()

