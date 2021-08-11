# Activity 5: A simple MVC
- Create a simple database with userid , login, password, and a few other
attributes of your choice. You can use mockaroo.com if necessary.
- Make sure that two different users have different logins.
- Create a simple HTML document with a form asking for login and password.
- After submission, these credentials must be passed to a nodejs web server
which returns an error if login and/or password are empty, are not
alphanumeric or are too long.
- If the credentials do not trigger an error, the web server send a SQL query
to the database requesting the information about the user.
- If the user exists, the user should be able to view his details in his/her
browser.
- If the user does not exist, an error message should be sent back.
- Otional: you can add other features of your choice. For example, you can
allow a new user to create an account, update or to delete his/her record.
  
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
  
  
  
