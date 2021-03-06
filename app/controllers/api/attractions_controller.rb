class Api::AttractionsController < ApplicationController
  def index
    if params[:text]
      @attractions = Attraction.find_by_text(params[:text])
    elsif params[:tag]
      @attractions = Attraction.find_by_tag(params[:tag])
    else
      # Fetch Bookmarks
      @attractions = Attraction.find_by_bookmarked(current_user.id)
    end
    render :index
  end

  def show
    @attraction = Attraction.find(params[:attraction][:id])
  end
end
