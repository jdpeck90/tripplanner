class Trip < ApplicationRecord
  belongs_to :user, required: false
  has_many :hotel, :dependent => :destroy
  has_many :restaurant, :dependent => :destroy
  has_many :attraction, :dependent => :destroy
  has_many :event, :dependent => :destroy
  has_many :flight, :dependent => :destroy
end
