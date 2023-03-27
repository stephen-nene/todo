class RemoveStatusAndPriorityFromTodos < ActiveRecord::Migration[6.1]
  def change
    remove_column :todos, :status, :integer
    remove_column :todos, :priority, :integer
  end
end
