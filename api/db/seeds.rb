user1 = User.find(1)
user2 = User.find(2)

Todo.create([
  {
    title: 'Finish homework',
    summary: 'Complete all math problems and write a book report',
    user: user1
  },
  {
    title: 'Buy groceries',
    summary: 'Pick up milk, bread, and eggs from the store',
    user: user1
  },
  {
    title: 'Clean house',
    summary: 'Vacuum the carpets, do laundry, and wash the dishes',
    user: user2
  },
  {
    title: 'Attend meeting',
    summary: 'Join the team call and provide status update on the project',
    user: user2
  }
])
