class Post < ApplicationRecord
  has_many :profiles, through: :likes
  belongs_to :community
  validates :content, length: { minimum: 1, maximum: 8000 }
  # validates :, presence: true
  has_one_attached :photo
end
