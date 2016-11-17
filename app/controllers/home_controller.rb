class HomeController < ApplicationController

  def index

  end


  private
    def imdb_params
      params.require(:id)
    end
end
