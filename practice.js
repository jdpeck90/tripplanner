console.log('yes')
getAllInfoFlights = function() {
    $.ajax({
            url: "http://api.sandbox.amadeus.com//v1.2/flights/low-fare-search?apikey=qzex7QQAbrN1YS9N7nDo2TQDlENnACs8&origin=BOS&destination=NYC&departure_date=2017-01-04&return_date=2017-01-07&adults=2&children=0&nonstop=true&max_price=5000&number_of_results=10",
            method: 'GET'
        })
        .done(function(data) {
          // appendAllInfoFlights(data)
          data.results[i].fare.total_price
          data.results[i].itineraries[0].inbound.flights[0]
          data.results[i].itineraries[0].inbound.flights[0].arrives_at
          data.results[i].itineraries[0].inbound.flights[0].departs_at
          data.results[i].itineraries[0].inbound.flights[0].booking_info.travel_class
          data.results[i].itineraries[0].inbound.flights[0].booking_info.seats_remaining
          data.results[i].itineraries[0].inbound.flights[0].destination.airport
          data.results[i].itineraries[0].inbound.flights[0].flight_number
          data.results[i].itineraries[0].inbound.flights[0].origin.airport
          data.results[i].itineraries[0].inbound.flights[0].marketing_airline

          data.results[i].fare.total_price
          data.results[i].itineraries[0].outbound.flights[0]
          data.results[i].itineraries[0].outbound.flights[0].arrives_at
          data.results[i].itineraries[0].outbound.flights[0].departs_at
          data.results[i].itineraries[0].outbound.flights[0].booking_info.travel_class
          data.results[i].itineraries[0].outbound.flights[0].booking_info.seats_remaining
          data.results[i].itineraries[0].outbound.flights[0].destination.airport
          data.results[i].itineraries[0].outbound.flights[0].flight_number
          data.results[i].itineraries[0].outbound.flights[0].origin.airport
          data.results[i].itineraries[0].outbound.flights[0].marketing_airline

          // console.log(data.results[i].itineraries[0].outbound)

            // outbound[0].flights[0].departs_at)
          // console.log(data.results[i].outbound[0].flights[0].arrives_at)
          // console.log(data.results[i].outbound[0].flights[0].origin.airport)
          // console.log(data.results[i].outbound[0].flights[0].origin.terminal)

        })
}

getAllInfoFlights();
