require 'sinatra/base'

class Thermostat < Sinatra::Application

  enable :sessions
  set :session_secret, 'super_secret'

  get '/' do
    erb :index
  end

  get '/details' do
    erb :details
  end

  get '/thermostat' do
    erb :thermostat
  end

end
