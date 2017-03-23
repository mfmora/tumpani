class Review < ApplicationRecord
  validates :user_id, :attraction_id, :rate_id, :message, presence: true
  validates :attraction_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :attraction
  belongs_to :rate

  def time_diff
    Time.now - self.created_at
  end
end
