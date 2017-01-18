class FlightsController < ApplicationController
  def show
  @ID = params[:id]
  @ID2 = @ID.split(' ')
  @price = @ID2[0]
  @price = '$'+@price.gsub('P', '.')

  @dateofarrivaltodestination = @ID2[1]
  @dateofarrivaltodestination2 = @dateofarrivaltodestination[0] + @dateofarrivaltodestination[1] +
  @dateofarrivaltodestination[2] + @dateofarrivaltodestination[3] + @dateofarrivaltodestination[4] + @dateofarrivaltodestination[5] +
  @dateofarrivaltodestination[6] + @dateofarrivaltodestination[7] + @dateofarrivaltodestination[8] +
  @dateofarrivaltodestination[9]
  @dateofarrivaltodestination3 = ', ' + @dateofarrivaltodestination[10] + @dateofarrivaltodestination[11] +
  @dateofarrivaltodestination[12] + @dateofarrivaltodestination[13] + @dateofarrivaltodestination[14]
  @dateofarrivaltodestination4 = @dateofarrivaltodestination2 + @dateofarrivaltodestination3

  @dateofdeparturefromorigin = @ID2[2]
  @dateofdeparturefromorigin2 = @dateofdeparturefromorigin[0] + @dateofdeparturefromorigin[1] +
  @dateofdeparturefromorigin[2] + @dateofdeparturefromorigin[3] + @dateofdeparturefromorigin[4] + @dateofdeparturefromorigin[5] +
  @dateofdeparturefromorigin[6] + @dateofdeparturefromorigin[7] + @dateofdeparturefromorigin[8] +
  @dateofdeparturefromorigin[9]
  @dateofdeparturefromorigin3 = ', ' + @dateofdeparturefromorigin[10] + @dateofdeparturefromorigin[11] +
  @dateofdeparturefromorigin[12] + @dateofdeparturefromorigin[13] + @dateofdeparturefromorigin[14]
  @dateofdeparturefromorigin4 = @dateofdeparturefromorigin2 + @dateofdeparturefromorigin3

  @classofflighttodestination = @ID2[3]
  @arrivaleairporttodestination = @ID2[4]
  @todestinationflightnumber = @ID2[5]
  @airportyouleavefromtogettodestination = @ID2[6]
  @outboundairline = @ID2[7]


  @arrivaltimefromdestination = @ID2[8]
  @arrivaltimefromdestination2 = @arrivaltimefromdestination[0] + @arrivaltimefromdestination[1] +
  @arrivaltimefromdestination[2] + @arrivaltimefromdestination[3] + @arrivaltimefromdestination[4] + @arrivaltimefromdestination[5] +
  @arrivaltimefromdestination[6] + @arrivaltimefromdestination[7] + @arrivaltimefromdestination[8] +
  @arrivaltimefromdestination[9]
  @arrivaltimefromdestination3 = ', ' + @arrivaltimefromdestination[10] + @arrivaltimefromdestination[11] +
  @arrivaltimefromdestination[12] + @arrivaltimefromdestination[13] + @arrivaltimefromdestination[14]
  @arrivaltimefromdestination4 = @arrivaltimefromdestination2 + @arrivaltimefromdestination3


  @departuretimefromdestination = @ID2[9]
  @departuretimefromdestination2 = @departuretimefromdestination[0] + @departuretimefromdestination[1] +
  @departuretimefromdestination[2] + @departuretimefromdestination[3] + @departuretimefromdestination[4] + @departuretimefromdestination[5] +
  @departuretimefromdestination[6] + @departuretimefromdestination[7] + @departuretimefromdestination[8] +
  @departuretimefromdestination[9]
  @departuretimefromdestination3 = ', ' + @departuretimefromdestination[10] + @departuretimefromdestination[11] +
  @departuretimefromdestination[12] + @departuretimefromdestination[13] + @departuretimefromdestination[14]
  @departuretimefromdestination4 = @departuretimefromdestination2 + @departuretimefromdestination3


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
