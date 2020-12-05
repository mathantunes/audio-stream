FROM ruby:latest
#from grpc/ruby:latest
#from ruby:latest

# RUN bundle config --global frozen 2
RUN gem update --system
RUN gem update bundler

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./

RUN gem install bundler -v 2.1.4

RUN bundle install
EXPOSE 50051

COPY . .
# ENTRYPOINT [ "bundle", "exec"]
CMD ["/bin/sh"]