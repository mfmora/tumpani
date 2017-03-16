class Attraction < ApplicationRecord
  validates :name, :place_id, :image_url, presence: true

  has_many :taggings
  has_many :tags, through: :taggings

  def self.find_by_text(text)
    Attraction.where('name LIKE ?', "%#{text}%")
  end
end
