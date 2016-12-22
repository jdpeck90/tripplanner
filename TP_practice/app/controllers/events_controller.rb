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
    urlNoFormat = splitId[4]
    eUrl1 = urlNoFormat.gsub!("+", "/")
    @eventUrl = eUrl1.gsub!("Q",".")

  end

end
