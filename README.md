Environment
===

If you are using windows and wish to set up a [vagrant](https://www.vagrantup.com/) environment for development just follow the next steps:

1. Install [Virtual Box](https://www.virtualbox.org/)
2. Install [Vagrant](https://www.vagrantup.com/)
3. Install Git
4. Choose a folder were you wish to put the vagrant files
5. Inside that folder run: 
       
        git clone https://github.com/rails/rails-dev-box.git
        cd rails-dev-box
        vagrant up

6. After `vagrant up` finish run:

        vagrant ssh

7. You can now use this environment to develop the Project

Setup the Project
===

1. Clone the project to your environment
2. Make sure you have ruby installed
3. Install [Bower](https://bower.io/)

        npm install -g bower

4. Inside the project folder run

        bundle install
        bower install

5. To run the server locally:
 
        rails s

6. All done :smiley:

NOTE: If anything is missing in the setup please add it :+1:
