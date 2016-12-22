class HotelsController < ApplicationController

skip_before_action  :verify_authenticity_token
  def show
    @ID = params[:id]
    @ID2 = @ID.split(' ')
    @hotelname = @ID2[0]
    @hotelname2 = @hotelname.split /(?=[A-Z])/
    @hotelname3 = @hotelname2.join(' ')
    @address = @ID2[1]
    @address2 = @address.split /(?=[A-Z])/
    @address3 = @address2.join(' ')
    @rate = @ID2[2].gsub('P', '.')
    @phone = @ID2[3]
    @trips = Trip.all
  end

  def create
    # to associate name with trip id, do Trip.where(name = 'name')
    @trip = Trip.find_by(trip_name: params[:trip])
    p params[:phone]
    p @trip
    @hotel = Hotel.create(name: params[:name],
                  address: params[:address],
                  rate: params[:rate],
                  phone: params[:phone],
                  trip_id: @trip[:id]
                  )

                redirect_to "/trips"
  end

 def destroy
    Hotel.destroy(params[:id])
    redirect_to "/trips/show"
  end

end




