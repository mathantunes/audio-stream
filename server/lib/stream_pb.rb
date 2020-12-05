# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: stream.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("stream.proto", :syntax => :proto3) do
    add_message "stream.SongInfoRequest" do
      optional :Title, :string, 1
      optional :Author, :string, 2
    end
    add_message "stream.AudioResponse" do
      optional :Title, :string, 1
      optional :Author, :string, 2
      optional :Buffer, :bytes, 3
    end
    add_message "stream.SongSearchRequest" do
      optional :Text, :string, 1
    end
    add_message "stream.SongInfoResponse" do
      repeated :Songs, :message, 1, "stream.Song"
    end
    add_message "stream.Song" do
      optional :Title, :string, 1
      optional :Author, :string, 2
      optional :Album, :string, 3
      optional :AlbumImg, :bytes, 4
    end
  end
end

module Stream
  SongInfoRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("stream.SongInfoRequest").msgclass
  AudioResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("stream.AudioResponse").msgclass
  SongSearchRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("stream.SongSearchRequest").msgclass
  SongInfoResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("stream.SongInfoResponse").msgclass
  Song = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("stream.Song").msgclass
end