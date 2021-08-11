# Activity 2
- Set up a server as previously but with Express.js such that
browser side, at localhost:5000, if a name is submitted,
the user receives a “Welcome <name>!” page.
- If an empty name is submitted, a 401 error should be
triggered and the server should send back an “Please
provide something” message.
- Make use of routers in order to make the code as clean
and modular as possible.
  
# Submission
  - The application has these entries points:
  1. **POST /login?user=xx&pass=xx** to authenticate against static data.
  1. **GET /login**  to log out curent user.
  1. Both the above use **router** auth.js.
  1. **GET /api/user** to list all users.
  1. **POST /api/user?user=xx** refers to stataic data to list books liked by user.  if user=all, all books  are listed.
  1. Both the above use **router** api.js, and they both use **middleware** guardpost.js.
  1. All of the above use **middleware** logger to console log key http request data.
  1. **guardpost.js** checks if there is a logged in user.  If not, the request is rejected.
  1. **Static data** are hardcoded in library.js. It has two lists: books, and users.
  - To execute:
  <br>node .\httpServer2.js
  
  
  
  
