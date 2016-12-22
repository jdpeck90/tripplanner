class AjaxcallsController < ApplicationController
  before_action :set_ajaxcall, only: [:show, :edit, :update, :destroy]

def index

    url = params[:url]
              puts '-----controller-----'
              puts url
              puts '-----controller-----'
    p url
    getEvents = {}
    getEvents[:event] = HTTParty.get(url)
    render json: getEvents


end

def create
  end
  end
