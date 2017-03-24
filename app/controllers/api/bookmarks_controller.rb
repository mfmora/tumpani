class Api::BookmarksController < ApplicationController
  def create
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.user_id = current_user.id
    if @bookmark.save
      render :show
    else
      render json: @bookmark.errrors.full_messages, status: 422
    end
  end

  def destroy
    @bookmark = Bookmark.find_by_user_attraction(current_user.id, params[:id])
    if @bookmark.delete
      render :show
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:attraction_id)
  end
end
