Rails.application.routes.draw do
  scope '/api/v1' do
    post 'user_token' => 'user_token#create'
    get 'users/current' => 'users#current'
    resources :todos
  end
end
