class TodosController < ApplicationController
  # before_action :session_expired?
  def index
    user_id = params[:user_id] # get the user_id from the request parameter
    todos = Todo.where(user_id: user_id) # filter todos by user_id
    render json: { data: todos }
  end

  def create
      todo = user.todos.create(todo_params)
      if todo.valid?
          app_response(status: :created, data: todo)
        else
          app_response(status: :unprocessable_entity, data: todo.errors, message: todo.errors.full_messages.join(', '))
        end

  end

  def update
      todo = user.todos.find(params[:id]).update(todo_params)
      if todo
          app_response(data: { info: 'updated todo successfully' })
      else
          app_response(message: 'failed', data: { info: 'something went wrong. could not update todo' }, status: :unprocessable_entity)
      end
  end

  def destroy
      user.todos.find(params[:id]).destroy
      app_response(message: 'success', data: { info: 'deleted todo successfully' }, status: 204)
  end


  private

  def todo_params
      params.permit(:title, :summary)
  end

end
