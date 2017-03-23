class Bookmark < ApplicationRecord
  validates :attraction_id, :user_id, presence: true
  validates :attraction_id, uniqueness: { scope: :user_id }
  belongs_to :attraction
  belongs_to :user
end
