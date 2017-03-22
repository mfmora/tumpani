class Attraction < ApplicationRecord
  validates :name, :place_id, :image_url, :lat, :lng, presence: true
  validates :place_id, uniqueness: true
  has_many :taggings
  has_many :tags, through: :taggings
  has_many :reviews

  def self.find_by_text(text)
    Attraction.joins(:tags).where("lower(tags.public_name)
      LIKE '#{text.downcase}' or
      lower(attractions.name) LIKE '%#{text.downcase}%'")
  end

  def self.find_by_tag(tag)
    Attraction.joins(:tags).where("lower(tags.public_name)
      LIKE '#{tag.downcase}'")
  end

  def average_review
    rates = self.reviews.includes(:rate).pluck(:stars)
    rates.inject(:+).to_f / rates.length
    # Get AVG from all his reviews
  end
end
