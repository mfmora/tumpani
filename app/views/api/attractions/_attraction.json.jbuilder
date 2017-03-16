json.extract! attraction, :id, :name, :place_id, :image_url, :rating, :street_address

json.tags do
  attraction.tags.each do |tag|
    json.set! tag.id do
      json.extract! tag, :id, :name, :public_name
    end
  end
end
