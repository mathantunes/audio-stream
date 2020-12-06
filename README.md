# audio-stream

## Proto Generation

```sh
grpc_tools_ruby_protoc -I ./protos --ruby_out=./server/domain/services/lib --grpc_out=./server/domain/services/lib ./protos/stream.proto
```

## Ruby on Docker

```sh
docker build -t rb-stream-server .      
docker run -i -t rb-stream-server:latest
```

## Ruby on Rails local

```sh
cd server/bin
rails server # port 3001
```

## React Native local

```sh
npm start # port 3000
```

### Server API

* List songs on /songs/:search
