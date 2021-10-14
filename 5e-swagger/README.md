## Fundamentals in Backend Development

# Day 3 (Aug 17) Home work

This home work was defined in the slide titled <a href="./Homework - 17 Aug.pdf">[Homework - 17 Aug]</a>, which specified this:

Extend the CRUD app with the following:
<ol>
<li>Add an API for retrieving all items that belong to a particular user id.</li>
<li>Modify the PUT /items API to restrict updating of the item by its user only.</li>
    <ol>
	<li>For example: item id 2 belongs to user id 3</li>
    <li>PUT /items/2 can only be called successfully by user id 3</li>
    <li>All other users should be forbidden from accessing the API</li>
	</ol>
</ol>
You may choose to store the objects in memory without persisting to a database. The focus of
the homework is on the API design, implementation and error handling.



# Implementation

This homework submission was forked from the repository https://github.com/qinjiang03/backend-development.

The changes were made in the folder `5e-swagger` in the repository.

The changes were achieved with modification to these two files in the folder:

- `srv\db\items.js`
    <ul>
        <li>Enhanced method `db.findAllItems` to accept an optional argument `uid`.  When provided, 
            the method will only return Items created by that `uid`.</li>
        <li>Modified method `db.updateItem` to update an Item only if the Item was created by the 
            requesting user.  When not, return null.</li>
    </ul>
- `srv\routes\items.js`
    <ul>
        <li>Added a new route `/items/{uid}/user` to make use of the enhanced method `db.findAllItems` 
            to list Items created by the specified user.</li>
        <li>Modified route response for `PUT/items/{id}` to handle the circumstance when the requesting user
            is not the user who created the Item.</li>
    </ul>

## Deployment

The homework has been uploaded to GitHub in repository `https://github.com/encore428/BackEndHW`.
Clone it to your local computer.  The computer has to have PostgreSQL installed.

Edit file `.env` to set up your DATABASE_URL.

Perform the following to bring up the application:
```bash
# Change to the directory
$ cd 5e-swagger

# Install project dependencies
$ npm install

# One-off Database tables setup
$ npm run db:migrate

# Start server
$ npm run start
```

User Postman to test the app.
