class Review < ApplicationRecord
  belongs_to :restaurant
  belongs_to :user
  validates_presence_of :title, :description, :score
  #validates :review, length: { minimum 8, maximum: 250 }
end
