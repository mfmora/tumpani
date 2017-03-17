class Attraction < ApplicationRecord
  validates :name, :place_id, :image_url, :lat, :lng, presence: true

  has_many :taggings
  has_many :tags, through: :taggings

  def self.find_by_text(text)
    Attraction.joins(:tags).where("lower(tags.public_name)
      LIKE '#{text.downcase}' or
      lower(attractions.name) LIKE '%#{text.downcase}%'")
  end
end
