class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if params[:review][:username]
      @user = User.find_by_username(params[:review][:username])
      unless @user
        @user = User.create(username: params[:review][:username], password: "secret")
      end
      @review.user_id = @user.id
    else
      @review.user_id = current_user.id
    end
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.where({attraction_id: params[:attraction_id]})
    render :index
  end

  private

  def review_params
    params.require(:review).permit(:rate_id, :message, :attraction_id)
  end
end
