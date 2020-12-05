Rails.application.routes.draw do
  resources :songs 
  match '/stream/:id' => 'songs#download', via: :get
end
