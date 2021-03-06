# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rubygems'
require 'json'

def seed_from_api
  file = File.read(File.dirname(__FILE__) + '/seed.json')
  file.gsub(/\n/, '')
  parsed = JSON.parse(file)
  parsed["results"].each do |attraction|
    full_address = attraction["vicinity"].split(", ")
    image_url = attraction["photos"] ? attraction["photos"][0]["photo_reference"] : ""
    info = { name: attraction["name"],
             place_id: attraction["place_id"],
             rating: attraction["rating"],
             image_url: image_url,
             lat: attraction["geometry"]["location"]["lat"],
             lng: attraction["geometry"]["location"]["lng"],
             street_address: full_address[0],
             city: full_address[1] }

    a = Attraction.create(info)

    #Create the taggings
    same_tags = attraction["types"] & Tag.pluck(:name)

    if same_tags.any?
      same_tags.each do |tag_name|
        tag = Tag.find_by_name(tag_name)
        Tagging.create(attraction_id: a.id, tag_id: tag.id)
      end
    end

  end
end

User.create(username: "demo", password: "secret")
User.create(username: "fernanda", password: "secret")

Tag.create(name: "point_of_interest", public_name: 'landmark')
Tag.create(name: "museum", public_name: 'museum')
Tag.create(name: "art_gallery", public_name: 'art gallery')
Tag.create(name: "park", public_name: 'park')
Tag.create(name: "movie_theater", public_name: 'movie theater')
Tag.create(name: "amusement_park", public_name: 'amusement park')

seed_from_api

Rate.create(stars: 1, message: 'Eek! Methinks not!')
Rate.create(stars: 2, message: "Meh. I've experienced better.")
Rate.create(stars: 3, message: 'A-OK.')
Rate.create(stars: 4, message: "Yay! I'm a fan.")
Rate.create(stars: 5, message: 'Woohoo! As good as it gets!')

Review.create(user_id: 1, attraction_id: 1, rate_id: 4, message: 'This is the best landmark in all city.')
Review.create(user_id: 2, attraction_id: 1, rate_id: 1, message: 'Terrible park.')
