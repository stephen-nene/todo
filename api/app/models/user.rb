class User < ApplicationRecord
validates :username, length: { in: 5..8 }, uniqueness: true, presence: true
validates :email, uniqueness: true, presence: true
validates :password, length: { in: 5..8 }, presence: true

end
