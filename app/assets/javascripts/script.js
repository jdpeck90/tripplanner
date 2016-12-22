console.log("script loaded")


$('#yoyo').click(function(event){
console.log('hi')
})


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
    resultDiv = $('<div class="col-md-3 col-md-offset-2 opaque2 whtTxt"></div>')
    results = $('<ul class="list-unstyled"></ul>');


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


    results.append('<li>' + 'Price: ' + inboundprice + '</li>')
    results.append('<li>' +'Arrival: ' + inboundarrive + '</li>')
    results.append('<li>' + 'Departure: ' + inbounddeparts + '</li>')
    results.append('<li>' + 'Class: ' + inboundclass + '</li>')
    results.append('<li>' + 'Seats: ' + inboundseats + '</li>')
    results.append('<li>' + 'Destination Airport: ' + inbounddestinationairport  + '</li>')
    results.append('<li>' + 'Origin Airport: ' + inboundoriginairport  + '</li>')
    results.append('<li>' + 'Airline Designator: ' + inboundairline + '</li>')
    results.append('<li>' + 'Flight Number: ' + inboundflightnumber + '</li><br>')
    results.append('<li>' + 'Price: ' + outboundprice + '</li>')
    results.append('<li>' + 'Arrival : ' + outboundarrive + '</li>')
    results.append('<li>' + 'Departure : ' + outbounddeparts + '</li>')
    results.append('<li>' + 'Class: ' + outboundclass + '</li>')
    results.append('<li>' + 'Seats: ' + outboundseats + '</li>')
    results.append('<li>' + 'Desination Airport: ' + outbounddestinationairport + '</li>')
    results.append('<li>' + 'Origin Airport: ' + outboundoriginairport + '</li>')
    results.append('<li>' + 'Airline Designator: ' + outboundairline + '</li>')
    results.append('<li>' + 'Flight Number: ' + outboundflightnumber + '</li>')

    resultDiv.append(results)


    $('body').append(resultDiv);
  }
}



$('#submit2').click(function(event) {
  console.log('hi')
    event.preventDefault();
    $("#body").css("background-image", "url('http://www.intrawallpaper.com/static/images/abstract-mosaic-background.png')");
    $(".opaque").hide();
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
    $("#body").css("background-image", "url('http://www.intrawallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg')");
    $(".opaque").hide();
    HOTELLOCATION = $('#hotellocation').val()
    HOTELCHECKINDATE = $('#checkin').val()
    HOTELCHECKOUTDATE = $('#checkout').val()
    MAXRATE = $('#maxhotelrate').val()
    getAllInfoHotel(HOTELLOCATION);
})

appendAllHotelInfo = function(data){
  for(i=0;i<10;i++){
    resultDiv = $('<div class="col-md-3 col-md-offset-2 opaque2 whtTxt"></div>')
    results = $('<ul class="list-unstyled"></ul>');

    name = data.results[i].property_name
    addressLine1 = data.results[i].address.line1
    addressLine2 = data.results[i].address.city
    addressLine3 = data.results[i].address.region
    addressLine4 = data.results[i].address.postal_code
    addressLine5 = data.results[i].address.country
    itemPricee = data.results[i].min_daily_rate.amount
    itemContactt = data.results[i].contacts[0].detail

    results.append('<li>' + 'Hotel: ' + name + '</li>');
    results.append('<li>' + 'Address: ' + addressLine1+ '<br>'
      + addressLine2 + ', ' + addressLine3 + '<br>' + addressLine4 +
      ' ' + '(' + addressLine5 + ')' + '</li>');
    results.append('<li>' + 'Lowest Daily Rate: ' + itemPricee + '</li>');
    results.append('<li>' + 'Contact Number: ' + itemContactt + '</li>');
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
    $('#whatev').hide()
    var $toggled = $(this).attr('href');
    $($toggled).siblings(':visible').hide();
    $($toggled).toggle("slide", {direction: 'up'}, 750);
    return false;
    });
  };
divToggle()

/*
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
*/
var getLocation = function(){
           $(function() {
            $( "#origin, #hotellocation, #destination, #location, #attractionlocation" ).autocomplete({
               source: availableCities,
               autoFocus:true
            });
    });
  }
getLocation()




