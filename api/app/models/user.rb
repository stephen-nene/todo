class User < ApplicationRecord
  validates :username, length: { in: 5..12 }, uniqueness: true, presence: true
  validates :email, uniqueness: true, presence: true
  validates :password, length: { in: 5..12 }, presence: true
  has_secure_password
end
