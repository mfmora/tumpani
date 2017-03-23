json.extract! attraction, :id, :name, :place_id, :image_url, :street_address, :city

json.rating attraction.get_rating
json.bookmark attraction.bookmarked?(current_user.id)
json.userReview attraction.user_review(current_user.id)

json.position do
  json.extract! attraction, :lat, :lng
end

json.tags do
  attraction.tags.each do |tag|
    json.set! tag.id do
      json.extract! tag, :id, :name, :public_name
    end
  end
end

json.reviews do
  json.partial! 'api/reviews/review', collection: attraction.reviews, as: :review
end
