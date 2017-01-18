class TripsController < ApplicationController

skip_before_action  :verify_authenticity_token
    # before_action :autheticate_user!
    # before_action :set_post, only: [:show, :edit, :update, :destroy]
  def index

end

def show
  @trips=Trip.all
  @flights = Flight.all
  @restaurant = Restaurant.all
  @hotel = Hotel.all
  @attraction = Attraction.all
end


  def create

    @trip = Trip.create(
                  locations: params[:locations],
                  trip_name: params[:trip_name])

    @trip.user = current_user
    @trip.update(user_id: @trip.user[:id])

  end

    def destroy
    @destroyid = params[:id]
    Trip.destroy(@destroyid)
    redirect_to "/trips/show"
  end


end


