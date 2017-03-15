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
    info = { name: attraction["name"],
             place_id: attraction["place_id"],
             rating: attraction["rating"],
             image_url: attraction["photos"][0]["photo_reference"],
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

Tag.create(name: "point_of_interest")
Tag.create(name: "museum")
Tag.create(name: "art_gallery")
Tag.create(name: "park")
Tag.create(name: "movie_theater")
Tag.create(name: "zoo")

seed_from_api
