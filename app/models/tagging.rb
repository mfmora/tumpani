class Tagging < ApplicationRecord
  validates :attraction_id, :tag_id, presence: true
  validates :attraction_id, uniqueness: { scope: :tag_id }

  belongs_to :attraction
  belongs_to :tag
end
