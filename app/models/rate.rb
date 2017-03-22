class Rate < ApplicationRecord
  validates :stars, :message, presence: true
  has_many :reviews
end
