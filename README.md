Nature's Call!
===========

This project **'Nature's Call'** aims to fulfill the physiological need of every traveler. All of us have been in situations where we want to rush to a washroom, instead of manually searching for washroom facilities, we provide a mobile web-app that makes it simple for travelers to find washrooms.

----------
Implementation
-------------

The application is built on the **MEAN Stack** framework. It uses the following opensource libraries.

 - [Express v4.14.0](https://www.npmjs.com/package/express) - API Routing
 - [MongoDB v2.1.18](https://www.npmjs.com/package/mongodb) - NoSQL Database
 - [Mongoose v4.5.0](https://www.npmjs.com/package/mongoose) - Schema for MongoDB
 - [Express-mongoose v0.1.0](https://www.npmjs.com/package/express-mongoose) - Integrating mongoose with express
 - [Promise v7.1.1](https://www.npmjs.com/package/promise) -   asynchronous control flow in Node.js
 - [Request v2.72.0](https://www.npmjs.com/package/request) - Make HTTP calls from server
 - [GeoLib v2.0.21](https://www.npmjs.com/package/geolib) - Calculate distances between geographical coordinates

  

> **Note:**

>  Node.js version 4.4.5 was used for development and testing. Newer versions have not been tested yet. Made to work with mobile phones on firefox browser. Chrome users can not share location to websites without SSL certificates. 

#### <i class="icon-cog"></i> Installation

The application can be set up on a a linux machine in 4 steps. press <kbd>Alt+Cltr+T</kbd> and run the following commands.

 1. Install Node.js using the Node.js 4.4.x PPA

		$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -`
		$  sudo apt-get install -y nodejs

 2. Install MongoDB

		$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927`
		$ echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
		$ sudo apt-get update
		$ sudo apt-get install -y mongodb-org

 3. Install npm (node package manager)
		 
		 $ sudo apt-get install npm

 4. Run command to download all required modules
			
		$  npm install


#### <i class="icon-download"></i> Getting Started

The application can be started by running the command

    $ nodejs server.js

the server can be accessed at 

    localhost:[port_number]
