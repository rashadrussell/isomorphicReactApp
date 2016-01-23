brew update

echo "Installing Bower"
npm install -g bower
npm install -g bower-installer
echo "Install Browserify"
npm install -g browserify
echo "Installing Grunt"
sudo npm install -g grunt-cli --save

#update your ruby using rbenvs 
brew install rbenv ruby-build
sudo echo 'export PATH="$HOME/.rbenv/versions/2.2.0/bin:$PATH"' >> ~/.bash_profile
sudo echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
export PATH="$HOME/.rbenv/versions/2.2.0/bin:$PATH"
eval "$(rbenv init -)"
rbenv install 2.2.0
rbenv global 2.2.0
rbenv rehash
ruby -v

#Install tools globally for front-end development
echo "Installing Front End Development Tools"
gem update --system
echo "Installing Bundler"
sudo gem install bundler
echo "Installing Foundation"
sudo gem install foundation
echo "Installing Compass"
sudo gem install compass

echo "Installation Process Complete!!!"