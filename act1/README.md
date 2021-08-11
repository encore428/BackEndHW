# Activity 1: Set up a simple web server
- Given the previous slides, set up with Node.js a simple web server using the the http module
on a localhost which sends back the content of an html file.
- By default, the server should send back a valid status code and a response interpreted in html.
-If the requested URL is /plain, the server should send back a valid status code and a response
interpreted in plain text.
- Otherwise, for any other URL requests, the server should send back an invalid status code, an
error message with a back button bringing the user to the home page.
- On the server side, whenever the user hit the server, a message containing the type of the
request (GET, POST, DELETE, etc…) should be displayed on the screen. Look at any Node.js
documentations online if necessary.

# Submission
deploy the application with
- node 
