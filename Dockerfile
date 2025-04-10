FROM ubuntu:22.04

# Get the latest APT packages
RUN apt-get update

# Install Ubuntu prerequisites for Ruby and GitHub Pages (Jekyll)
RUN apt-get -y install git \
    curl \
    autoconf \
    bison \
    build-essential \
    libssl-dev \
    libyaml-dev \
    libreadline6-dev \
    zlib1g-dev \
    libncurses5-dev \
    libffi-dev \
    libgdbm6 \
    libgdbm-dev \
    libdb-dev \
    apt-utils
    
# GitHub Pages/Jekyll is based on Ruby. Set the version and path
ENV RBENV_ROOT /usr/local/src/rbenv
ENV RUBY_VERSION 3.3.4
ENV PATH ${RBENV_ROOT}/bin:${RBENV_ROOT}/shims:$PATH

# Install rbenv to manage Ruby versions
RUN git clone https://github.com/rbenv/rbenv.git ${RBENV_ROOT} \
  && git clone https://github.com/rbenv/ruby-build.git \
    ${RBENV_ROOT}/plugins/ruby-build \
  && ${RBENV_ROOT}/plugins/ruby-build/install.sh \
  && echo 'eval "$(rbenv init -)"' >> /etc/profile.d/rbenv.sh

# Install ruby and set the global version
RUN rbenv install ${RUBY_VERSION} \
  && rbenv global ${RUBY_VERSION}

# Install the exact versions of gems that GitHub Pages uses
RUN gem install jekyll -v '3.10.0' \
    && gem install jekyll-sass-converter -v '1.5.2' \
    && gem install kramdown -v '2.4.0' \
    && gem install kramdown-parser-gfm -v '1.1.0' \
    && gem install jekyll-commonmark-ghpages -v '0.5.1' \
    && gem install liquid -v '4.0.4' \
    && gem install rouge -v '3.30.0' \
    && gem install github-pages-health-check -v '1.18.2' \
    && gem install jekyll-redirect-from -v '0.16.0' \
    && gem install jekyll-sitemap -v '1.4.0' \
    && gem install jekyll-feed -v '0.17.0' \
    && gem install jekyll-gist -v '1.5.0' \
    && gem install jekyll-paginate -v '1.1.0' \
    && gem install jekyll-coffeescript -v '1.2.2' \
    && gem install jekyll-seo-tag -v '2.8.0' \
    && gem install jekyll-github-metadata -v '2.16.1' \
    && gem install jekyll-avatar -v '0.8.0' \
    && gem install jekyll-remote-theme -v '0.4.3' \
    && gem install jekyll-include-cache -v '0.2.1' \
    && gem install jemoji -v '0.13.0' \
    && gem install jekyll-mentions -v '1.6.0' \
    && gem install jekyll-relative-links -v '0.6.1' \
    && gem install jekyll-optional-front-matter -v '0.3.2' \
    && gem install jekyll-readme-index -v '0.3.0' \
    && gem install jekyll-default-layout -v '0.1.5' \
    && gem install jekyll-titles-from-headings -v '0.5.3' \
    && gem install minima -v '2.5.1' \
    && gem install jekyll-swiss -v '1.0.0' \
    && gem install jekyll-theme-primer -v '0.6.0' \
    && gem install jekyll-theme-architect -v '0.2.0' \
    && gem install jekyll-theme-cayman -v '0.2.0' \
    && gem install jekyll-theme-dinky -v '0.2.0' \
    && gem install jekyll-theme-hacker -v '0.2.0' \
    && gem install jekyll-theme-leap-day -v '0.2.0' \
    && gem install jekyll-theme-merlot -v '0.2.0' \
    && gem install jekyll-theme-midnight -v '0.2.0' \
    && gem install jekyll-theme-minimal -v '0.2.0' \
    && gem install jekyll-theme-modernist -v '0.2.0' \
    && gem install jekyll-theme-slate -v '0.2.0' \
    && gem install jekyll-theme-tactile -v '0.2.0' \
    && gem install jekyll-theme-time-machine -v '0.2.0' \
    && gem install github-pages -v '232' \
    && gem install html-pipeline -v '2.14.3' \
    && gem install sass -v '3.7.4' \
    && gem install safe_yaml -v '1.0.5' \
    && gem install nokogiri -v '1.16.7'

# Set up working directory
WORKDIR /srv/jekyll

# Copy Gemfile and install dependencies
COPY Gemfile* ./
RUN bundle install

EXPOSE 4000 35729 