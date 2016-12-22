class FlightsController < ApplicationController
  def show
  @ID = params[:id]
  @ID2 = @ID.split(' ')
  @price = @ID2[0]
  @dateofarrivaltodestination = @ID2[1]
  @dateofdeparturefromorigin = @ID2[2]
  @classofflighttodestination = @ID2[3]
  @arrivaleairporttodestination = @ID2[4]
  @todestinationflightnumber = @ID2[5]
  @airportyouleavefromtogettodestination = @ID2[6]
  @outboundairline = @ID2[7]
  @arrivaltimefromdestination = @ID2[8]
  @departuretimefromdestination = @ID2[9]
  @classofflightfromdestination = @ID2[10]
  @arrivalairportfromdestination = @ID2[11]
  @flighnumberfromdestination = @ID2[12]
  @departureairportfromdestination = @ID2[13]
  @inboundairline = @ID2[14]
  @trips = Trip.all
end
  def destroy
    Flight.destroy(params[:id])
    redirect_to "/trips/show"
  end
  def create
    # to associate name with trip id, do Trip.where(name = 'name')
    @trip = Trip.find_by(trip_name: params[:trip])
    p params[:phone]
    p @trip
    @flight = Flight.create(price: params[:price],
                  departuredate_time: params[:departuredate_time],
                  arrivaldate_time: params[:arrivaldate_time],
                  flightclass: params[:flightclass],
                  departure_airport: params[:departure_airport],
                  arrival_airport: params[:arrival_airport],
                  arrivaldate_time: params[:arrivaldate_time],
                  airline: params[:airline],
                  flight_number: params[:flight_number],
                  returnleavedate: params[:returnleavedate],
                  returnarrivaldate: params[:returnarrivaldate],
                  classreturn: params[:classreturn],
                  seatsleftreturn: params[:seatsleftreturn],
                  returnairportdepart: params[:returnairportdepart],
                  returnairportarrive: params[:returnairportarrive],
                  airlinereturn: params[:airlinereturn],
                  flightnumberreturn: params[:flightnumberreturn],
                  trip_id: @trip[:id]
                  )

                redirect_to "/trips"
  end

end




# class HotelsController < ApplicationController

# skip_before_action  :verify_authenticity_token
#   def show
#     @ID = params[:id]
#     @ID2 = @ID.split(' ')
#     @hotelname = @ID2[0]
#     @hotelname2 = @hotelname.split /(?=[A-Z])/
#     @hotelname3 = @hotelname2.join(' ')
#     @address = @ID2[1]
#     @address2 = @address.split /(?=[A-Z])/
#     @address3 = @address2.join(' ')
#     @rate = @ID2[2].gsub('P', '.')
#     @phone = @ID2[3]
#     @trips = Trip.all
#   end

#   def create
#     # to associate name with trip id, do Trip.where(name = 'name')
#     @trip = Trip.find_by(trip_name: params[:trip])
#     p params[:phone]
#     p @trip
#     @hotel = Hotel.create(name: params[:name],
#                   address: params[:address],
#                   rate: params[:rate],
#                   phone: params[:phone],
#                   trip_id: @trip[:id]
#                   )

#                 redirect_to "/trips"
#   end


# end




