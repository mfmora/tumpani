@attractions.each do |attraction|
  json.set! attraction.id do
    json.partial! 'attraction', attraction: attraction
  end
end
