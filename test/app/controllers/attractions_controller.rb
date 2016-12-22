class AttractionsController < ApplicationController


    def show
    @ID = params[:id]
    @ID2 = @ID.split(' ')
    @restaurantname = @ID2[0]
    @restaurantname2 = @restaurantname.split /(?=[A-Z])/
    @restaurantname3 = @restaurantname2.join(' ')
    @address = @ID2[1]
    @address2 = @address.split /(?=[A-Z])/
    @address3 = @address2.join(' ')
    @reviewURL = @ID2[2]
    @reviewURL2 = @reviewURL.gsub('QQ', '/')
    @reviewURL3 = @reviewURL2.gsub('KK', '.com')
    @trips = Trip.all
  end
    def create
    # to associate name with trip id, do Trip.where(name = 'name')
    @trip = Trip.find_by(trip_name: params[:trip])
    p params[:phone]
    p @trip
    @restaurant = Attraction.create(name: params[:name],
                  address: params[:address],
                  restaurant_url: params[:restaurant_url],
                  description: params[:description],
                  trip_id: @trip[:id]
                  )

                redirect_to "/trips"
  end

  def destroy
    Attraction.destroy(params[:id])
    redirect_to "/trips/show"
  end

end


