class EventsController < ApplicationController

  def show
    id = params[:id]
    splitId = id.split(' ')
    title = splitId[0].split /(?=[A-Z])/
    @eventName = title.join(" ")
    splitAddress = splitId[1]
    addressNumsAlph = splitAddress.scan(/\d+|\D+/)
    addressNums = addressNumsAlph[0]
    addressAlph = addressNumsAlph[1].split /(?=[A-Z])/
    addressAlphOnly = addressAlph[0..-4]
    country = addressAlph[-3..-1]
    country = country.join("")
    @eventLocation = [addressNums, addressAlphOnly, country].reject(&:empty?).join(' ')
    @eventDate = splitId[2]
    @eventTime = splitId[3]
    eUrl1 = splitId[4].gsub!("+", "/")
    @eventUrl = eUrl1.gsub!("Q",".")
    @trips = Trip.all
  end

   def create
    # to associate name with trip id, do Trip.where(name = 'name')
    @trip = Trip.find_by(trip_name: params[:trip])
    p params[:phone]
    p @trip
    @event = Event.create(name: params[:name],
                              address: params[:address],
                              date: params[:date],
                              time: params[:time],
                              event_url: params[:event_url],
                              trip_id: @trip[:id])

                redirect_to "/trips"
  end
    def destroy
    Event.destroy(params[:id])
    redirect_to "/trips/show"
  end

end


