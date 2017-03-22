json.extract! attraction, :id, :name, :place_id, :image_url, :rating, :street_address, :city

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
