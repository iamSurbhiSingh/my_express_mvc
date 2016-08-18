# my_express_mvc

 Created using **my_express** 
 For basic file structure refer https://github.com/SiddharthaChowdhury/my_express
 
It is extended from **my_express** to achieve MVC flavour.

This setup is initially configured, considering **MongoDB** as the database. To test this setup, make sure you have MongoDB
installed and you have a database created named "mydb".

**SETUP**

1.  Clone the repo / download the Zip
2.  cd to "app" directory
3.  ~ [ sudo ] npm install
4.  npm start

Database config *./app/config/db_conn.js*

      var db_config = {
      	connection : 'mongo',
      	db_name : "mydb"
      }
     ...
     ...
