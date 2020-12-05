require 'net/http'
require 'json'
class Song < ApplicationRecord
    def Download(id = 3135556)
        url = URI.parse("http://api.deezer.com/track/#{id}")
        req = Net::HTTP::Get.new(url.to_s)
        resp = Net::HTTP.start(url.host, url.port){ |http| http.request(req) }
        if resp.code != "200"
            return { status: resp.code, message: "not found"}
        else
            j = JSON.parse(resp.body)
            return {
                
            }
        end
    end
    def Find(text = "")
        url = URI.parse("http://api.deezer.com/search?q=track:%22#{text}%22")
        req = Net::HTTP::Get.new(url.to_s)
        resp = Net::HTTP.start(url.host, url.port){ |http| http.request(req) }
        if resp.code != "200"
            return { :message => "not found" }
        else
            j = JSON.parse(resp.body)
            return j["data"].map { |s|
                {
                    :readable => s["readable"],
                    :id => s["id"],
                    :title => s["title"],
                    :duration => s["duration"],
                    :author => s["artist"]["name"],
                    :album => s["album"]["title"],
                    :album_cover => s["album"]["cover_medium"],
                    :link => s["link"],
                    :preview_link => s["preview"]
                }
            }
        end
    end
end
