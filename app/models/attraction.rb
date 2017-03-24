class Attraction < ApplicationRecord
  validates :name, :place_id, :image_url, :lat, :lng, presence: true
  validates :place_id, uniqueness: true
  has_many :taggings
  has_many :tags, through: :taggings
  has_many :reviews
  has_many :bookmarks
  has_many :users, through: :bookmarks
  has_many :users_review, through: :reviews, source: :user

  def self.find_by_text(text)
    Attraction.joins(:tags).where("lower(tags.public_name)
      LIKE '#{text.downcase}' or
      lower(attractions.name) LIKE '%#{text.downcase}%'")
  end

  def self.find_by_tag(tag)
    Attraction.joins(:tags).where("lower(tags.public_name)
      LIKE '#{tag.downcase}'")
  end

  def self.find_by_bookmarked(user_id)
    Attraction.joins(:bookmarks).where("bookmarks.user_id = #{user_id}")
  end

  def average_review
    rates = self.reviews.includes(:rate).pluck(:stars)
    (rates.inject(:+).to_f / rates.length).round(1)
  end

  def get_rating
    self.reviews.empty? ? self.rating : average_review
  end

  def bookmarked?(user_id)
    self.users.pluck(:id).include?(user_id)
  end

  def reviewed?(user_id)
    self.users_review.pluck(:id).include?(user_id)
  end

  def user_review(user_id)
    self.reviews.where("user_id = #{user_id}")
  end

  def reviews_ordered
    self.reviews.order(updated_at: :desc)
  end
end
