class Tag < ApplicationRecord
  validates :name, :public_name, presence: true

  has_many :taggings
  has_many :attractions, through: :taggings
end
