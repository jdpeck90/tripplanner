console.log("script loaded---")


$('#yoyo').click(function(event){
console.log('hi')
})


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
  appendAllInfoEvents(data.event.search.events.event)
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



  var urlIDEvents = title + '%20'+ venueAddress + event.city_name + event.region_name  + event.country_abbr + '%20' + dayShowing + '%20' + timeShowing + '%20' + splitUrl[0]
  var namelist = $('<a href=/events/'+urlIDEvents+'>'+event.venue_name+'</a>');

  $('body').append($eventDiv)
  $($eventDiv).append($eventUl)
  // $($eventUl).append('<li>Image: <img src="'+event.image.medium.url+'"></li>')
  $($eventUl).append(namelist)
  $($eventUl).append('<li>Number of Days: '+event.all_day+'</li>')
  $($eventUl).append('<li>City Name: '+event.city_name+'</li>')
  $($eventUl).append('<li>Country: '+event.country_name+'</li>')
  $($eventUl).append('<li>Latitude: '+event.latitude+'</li>')
  $($eventUl).append('<li>Longitude: '+event.longitude+'</li>')
  $($eventUl).append('<li>Postal Code: '+event.postal_code+'</li>')
  $($eventUl).append('<li>State: '+event.region_name+'</li>')
  $($eventUl).append('<li>Title: '+event.title+'</li>')
  $($eventUl).append('<li>Venue: '+event.venue_address+'</li>')
  $($eventUl).append('<li>Venue Link:<a href="'+event.venue_url+'">'+event.venue_name+'</a></li>')
  $($eventUl).append('<li>Day Showing: '+dayShowing+'</li>')
  $($eventUl).append('<li>Time Showing: '+timeShowing+'</li>')
  $($eventUl).append('<li>Description: '+event.description+'</li>')

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
$('#ME').click(function(event) {
    event.preventDefault();
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
    category = $('#attractionkeyword').val()
    category = category.split(' ');
    category = category.join('%20')
    ll = $('#attractionlocation').val();
    ll = ll.split(' ');
    ll = ll.join("%20")
    getAllInfoFourSquare(category);
})

$('#clear').click(function(event) {
   $('.col-md-6').remove();
})

// $('.dropdown-toggle').dropdown()

$('li').mouseover(function(event){
  $(this).addClass('active')
})

$('li').mouseout(function(event){
  $('li').removeClass('active')
})

appendResults = function(data){
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
    name = result.items[i].venue.name;
    namer = JSON.stringify(name)
    namer = namer.split(' ');
    namer = namer.join('%20');
    namer = namer.replace('"', '');
    namer = namer.replace('"', '');
    address1 = data.response.groups[0].items[i].venue.location.formattedAddress[0];
    address2 = data.response.groups[0].items[i].venue.location.formattedAddress[1];
    address3 = data.response.groups[0].items[i].venue.location.formattedAddress[2];
    // src = data.response.groups[0].items[i].venue.categories[0].icon.prefix+ data.response.groups[0].items[i].venue.categories[0].icon.suffix
    // icon = $('<img src='+src+'>')
    // price = data.response.groups[0].items[i].venue.price.message + data.response.groups[0].items[i].venue.price.tier;
    rating = data.response.groups[0].items[i].venue.rating
    ratingColor = data.response.groups[0].items[i].venue.ratingColor;
    // item.text(name);
    itemAddress1.text(address1 + ' ');
    itemAddress2.text(address2 + ' ');
    itemAddress3.text(address3 + ' ');
    // itemPrice.text(price);
    itemRating.text('Rating: '+rating);
    itemRating.css('color', '#'+ratingColor)
    addMeLink = $("<a href=/"+ll+'/'+namer+'>'+name+"</a>");
    results.append(addMeLink);
    results.append(item);
    results.append(itemAddress1);
    results.append(itemAddress2);
    results.append(itemAddress3);
    // results.append(itemPrice);
    results.append(itemRating);
    results.append(itemHours);
    resultDiv.append(results);
    $('body').append(resultDiv);
  }


}


appendAllInfoFlights = function(data){
    for(i=0;i<10;i++){
    resultDiv = $('<div></div>')
    results = $('<ul></ul>');
    inboundpricelist = $('<li></li>');
    inboundarrivelist = $('<li></li>');
    inbounddepartslist = $('<li></li>');
    inboundclasslist = $('<li></li>');
    inboundseatslist = $('<li></li>');
    inbounddestinationairportlist = $('<li></li>');
    inboundoriginairportlist = $('<li></li>');
    inboundflightnumberlist = $('<li></li>');
    inboundairlinelist = $('<li></li>');
    outboundpricelist = $('<li></li>');
    outboundarrivelist = $('<li></li>');
    outbounddepartslist = $('<li></li>');
    outboundclasslist = $('<li></li>');
    outboundseatslist = $('<li></li>');
    outbounddestinationairportlist = $('<li></li>');
    outboundoriginairportlist = $('<li></li>');
    outboundairlinelist = $('<li></li>');
    outboundflightnumberlist = $('<li></li>');

    inboundprice = data.results[i].fare.total_price
    inboundarrive = data.results[i].itineraries[0].inbound.flights[0].arrives_at
    inbounddeparts = data.results[i].itineraries[0].inbound.flights[0].departs_at
    inboundclass = data.results[i].itineraries[0].inbound.flights[0].booking_info.travel_class
    inboundseats = data.results[i].itineraries[0].inbound.flights[0].booking_info.seats_remaining
    inbounddestinationairport = data.results[i].itineraries[0].inbound.flights[0].destination.airport
    inboundflightnumber = data.results[i].itineraries[0].inbound.flights[0].flight_number
    inboundoriginairport = data.results[i].itineraries[0].inbound.flights[0].origin.airport
    inboundairline =  data.results[i].itineraries[0].inbound.flights[0].marketing_airline

    outboundprice = data.results[i].fare.total_price
    outboundarrive = data.results[i].itineraries[0].outbound.flights[0].arrives_at
    outbounddeparts = data.results[i].itineraries[0].outbound.flights[0].departs_at
    outboundclass = data.results[i].itineraries[0].outbound.flights[0].booking_info.travel_class
    outboundseats = data.results[i].itineraries[0].outbound.flights[0].booking_info.seats_remaining
    outbounddestinationairport = data.results[i].itineraries[0].outbound.flights[0].destination.airport
    outboundflightnumber = data.results[i].itineraries[0].outbound.flights[0].flight_number
    outboundoriginairport = data.results[i].itineraries[0].outbound.flights[0].origin.airport
    outboundairline =  data.results[i].itineraries[0].outbound.flights[0].marketing_airline


    inboundpricelist.text(inboundprice)
    inboundarrivelist.text(inboundarrive)
    inbounddepartslist.text(inbounddeparts)
    inboundclasslist.text(inboundclass)
    inboundseatslist.text(inboundseats)
    inbounddestinationairportlist.text(inbounddestinationairport)
    inboundoriginairportlist.text(inboundoriginairport)
    inboundairlinelist.text(inboundairline)
    inboundflightnumberlist.text(inboundflightnumber)
    outboundpricelist.text(outboundprice)
    outboundarrivelist.text(outboundarrive)
    outbounddepartslist.text(outbounddeparts)
    outboundclasslist.text(outboundclass)
    outboundseatslist.text(outboundseats)
    outbounddestinationairportlist.text(outbounddestinationairport)
    outboundoriginairportlist.text(outboundoriginairport)
    outboundairlinelist.text(outboundairline)
    outboundflightnumberlist.text(outboundflightnumber)

    results.append(inboundpricelist)
    results.append(inboundarrivelist)
    results.append(inbounddepartslist)
    results.append(inboundclasslist)
    results.append(inboundseatslist)
    results.append(inbounddestinationairportlist)
    results.append(inboundoriginairportlist)
    results.append(inboundairlinelist)
    results.append(inboundflightnumberlist)
    results.append(outboundpricelist)
    results.append(outboundarrivelist)
    results.append(outbounddepartslist)
    results.append(outboundclasslist)
    results.append(outboundseatslist)
    results.append(outbounddestinationairportlist)
    results.append(outboundoriginairportlist)
    results.append(outboundairlinelist)
    results.append(outboundflightnumberlist)

    resultDiv.append(results)


    $('body').append(resultDiv);
  }
}



$('#submit2').click(function(event) {
  console.log('hi')
    event.preventDefault();
    ORIGIN = $('#origin').val()
    DESTINATION = $('#destination').val()
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
            +HOTELLOCATION+"&check_in="+HOTELCHECKINDATE+"&check_out="+HOTELCHECKOUTDATE+
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
            url: "http://api.sandbox.amadeus.com//v1.2/flights/low-fare-search?apikey=qzex7QQAbrN1YS9N7nDo2TQDlENnACs8&origin="+ORIGIN+
            "&destination="+DESTINATION+"&departure_date="+DATE4+"&return_date="+RETURNDATE4+
            "&adults="+ADULTS+"&children="+CHILDREN+"&nonstop=false&max_price="+MAXPRICE+"&one-way=false&number_of_results=10",
            method: 'GET'
        })
        .done(function(data) {
          appendAllInfoFlights(data)
          console.log(data.results[0].outbound[0].flights[0].departs_at)
          console.log(data.results[0].outbound[0].flights[0].arrives_at)
          console.log(data.results[0].outbound[0].flights[0].origin.airport)
          console.log(data.results[0].outbound[0].flights[0].origin.terminal)

        })
}




$('#submit3').click(function(event) {
    event.preventDefault();
    HOTELLOCATION = $('#hotellocation').val()
    HOTELCHECKINDATE = $('#checkin').val()
    HOTELCHECKOUTDATE = $('#checkout').val()
    MAXRATE = $('#maxhotelrate').val()
    getAllInfoHotel(HOTELLOCATION);
})

appendAllHotelInfo = function(data){
  for(i=0;i<10;i++){
    resultDiv = $('<div></div>')
    results = $('<ul></ul>');
    itemName = $('<li></li>');
    itemAddress1 = $('<li></li>');
    itemAddress2 = $('<li></li>');
    itemAddress3 = $('<li></li>');
    itemAddress4 = $('<li></li>');
    itemAddress5 = $('<li></li>');
    itemPrice = $('<li></li>');
    itemContact = $('<li></li>');
    name = data.results[i].property_name
    addressLine1 = data.results[i].address.line1
    addressLine2 = data.results[i].address.city
    addressLine3 = data.results[i].address.region
    addressLine4 = data.results[i].address.postal_code
    addressLine5 = data.results[i].address.country
    itemPricee = data.results[i].min_daily_rate.amount
    itemContactt = data.results[i].contacts[0].detail
    itemName.text(name)
    itemAddress1.text(addressLine1)
    itemAddress2.text(addressLine2)
    itemAddress3.text(addressLine3)
    itemAddress4.text(addressLine4)
    itemAddress5.text(addressLine5)
    itemPrice.text(itemPricee)
    itemContact.text(itemContactt)

    results.append(itemName);
    results.append(itemAddress1);
    results.append(itemAddress2);
    results.append(itemAddress3);
    results.append(itemAddress4);
    results.append(itemAddress5);
    results.append(itemPrice);
    results.append(itemContact);
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

var calendarOptions = function(){
    var dateFormat = "yyyy/mm/dd",
      from = $( "#departuredate, #checkin" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#duration, #checkout" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });

    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }

      return date;
    }
}
calendarOptions()

var getLocation = function(){
           $(function() {
            $( "#origin" ).autocomplete({
               source: availableCities,
               autoFocus:true
            });$( "#destination" ).autocomplete({
               source: availableCities,
               autoFocus:true
            });$( "#location" ).autocomplete({
               source: availableCities,
               autoFocus:true
            });$( "#attractionlocation" ).autocomplete({
               source: availableCities,
               autoFocus:true
            });
});
}
getLocation()
