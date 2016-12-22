class TripsController < ApplicationController
    # before_action :autheticate_user!
    # before_action :set_post, only: [:show, :edit, :update, :destroy]
  def index
    # response["accept"] = "application/json"


    @response = HTTParty.get("https://api.foursquare.com//v2/venues/explore?client_id=JXMGCWGIBGAJUNCQEJAGRANIBCPBW2R210YW0UUQ1Y3NL5HP&client_secret=0DJW0W2MWCSAIZIISJFY3YAI4B2SDIF4DIWN5UWMY2ALXQ2E&near=newyork&sortByDistance=1&radius=500&query=sushi&v=20161124&m=foursquare")
    # response["host"] = "api.skyscanner.net"
    # @response = HTTParty.get('https://api.foursquare.com//v2/venues/explore?client_id=JXMGCWGIBGAJUNCQEJAGRANIBCPBW2R210YW0UUQ1Y3NL5HP&client_secret=0DJW0W2MWCSAIZIISJFY3YAI4B2SDIF4DIWN5UWMY2ALXQ2E&near=chelsea,NY &sortByDistance=1&radius=500&query=sushi&v=20161124&m=foursquare')
    # puts @response2 = @response["response"]["groups"][0]["items"][0]["venue"]["name"]


    # @response3 = HTTParty.get("http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/UK/EUR/en-GB/27539733/2017-12-04/2017-12-10/2/1?apiKey=prtl6749387986743898559646983194")
    # @response4 = @response3["hotels_prices"]
    # @response3 = HTTParty.get('http://api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-iata/GR/anytime/anytime?apikey=mi156141561970594077329637326827')
    # HTTParty.post("http://partners.api.skyscanner.net/apiservices/pricing/v1.0")
    # response["accept"] = "application/json"
    # response["host"] = "api.skyscanner.net"

end

def create
  @response = HTTParty.get("https://api.foursquare.com//v2/venues/explore?client_id=JXMGCWGIBGAJUNCQEJAGRANIBCPBW2R210YW0UUQ1Y3NL5HP&client_secret=0DJW0W2MWCSAIZIISJFY3YAI4B2SDIF4DIWN5UWMY2ALXQ2E&near=#{params[:area]}&sortByDistance=1&radius=500&query=#{params[:category]}&v=20161124&m=foursquare")
  redirect_to "/trips"
  end
end


