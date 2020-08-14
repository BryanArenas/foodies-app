class Review < ApplicationRecord
  belongs_to :restaurant
  #belongs_to :user
  validates_presence_of :title, :description, :score
  validates :title, length: { minimum: 8, maximum: 50 }
  validates :description, length: { minimum: 8, maximum: 250 }
  validates :score, length: { is: 1 }
  
end
