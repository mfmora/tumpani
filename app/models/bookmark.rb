class Bookmark < ApplicationRecord
  validates :attraction_id, :user_id, presence: true
  validates :attraction_id, uniqueness: { scope: :user_id }
  belongs_to :attraction
  belongs_to :user

  def self.find_by_user_attraction(user_id, attraction_id)
    Bookmark.find_by_user_id_and_attraction_id(user_id, attraction_id)
  end
end
