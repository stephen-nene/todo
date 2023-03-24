class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.text :summary, null: false
      t.integer :status, null: false, default: 0
      t.integer :priority, null: false, default: 0
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
