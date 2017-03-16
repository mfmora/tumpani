class Api::AttractionsController < ApplicationController
  def index
    @attractions = Attraction.where('name LIKE ?', "%#{params[:text]}%")
    render :index
  end

  def show
    @attraction = Attraction.find(params[:attraction][:id])
  end
end
