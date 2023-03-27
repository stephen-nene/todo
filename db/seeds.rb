require 'faker'

# create users
User.create([
  {
    username: 'User1',
    email: 'user1@example.com',
    password: 'password'
  },
  {
    username: 'User2',
    email: 'user2@example.com',
    password: 'password'
  }
])

# get users
user1 = User.find_by(email: 'user1@example.com')
user2 = User.find_by(email: 'user2@example.com')

# create tasks
10.times do
  Todo.create(
    title: Faker::Lorem.sentence(word_count: 3),
    summary: Faker::Lorem.sentence(word_count: 10),
    user: user1
  )
end

10.times do
  Todo.create(
    title: Faker::Lorem.sentence(word_count: 3),
    summary: Faker::Lorem.sentence(word_count: 10),
    user: user2
  )
end
