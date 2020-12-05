class SongsController < ApplicationController
    def show
        @songs = Song.new().Find(params[:id])
        render json: { status: 200, songs: @songs }
    end
    def download
        render json: { status: 200 }
    end
end
