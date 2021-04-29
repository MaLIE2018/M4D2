# M4D2

Create your first React App!
In this exercise you are going to create your own book store by using React Components!

Install and use the create-react-app boilerplate to create your new react application
Install and set up bootstrap + react-bootstrap in your app
Create a MyNav component which will render a bootstrap navigation bar with the following links: Home, About and Browse. Note: we don't know how to perform navigation yet, so for now just put "#" as the href for each one on them
Create a MyFooter component which will render a footer for the page
Create a Welcome component with a Jumbotron and a subtitle for your shop
Create a Latest Release component. This component should read from one of the json files and print out the cover of the books
Push everything on GitHub and publish on Eduflow before 17:00 CET

M4D4

Create a CommentArea component. When the user clicks on a book, this component should be displayed.
CommentArea component contains the picture of the book, and two subcomponents: CommentsList and AddComment.
CommentsList holds a list of comments about the selected book, the comments array is passed as a prop. Each comment is made by the same SingleComment component.
AddComment contains a form for adding a text comment and a rating (from 1 to 5). This component should allow the user to POST a new Comment on the selected Book
Add, to each "Comment", a button for DELETING it. Create a request towards https://striveschool-api.herokuapp.com/api/comments/{commentId}
Create a Loading component. This loading component should appear on the page when an remote request is ongoing.
Create an error handler for the remote requests. If something goes wrong, an error message should appear!
Publish everything on GitHub
Add to CommentList component the ability to filter comments using a text box. The filter will display only the comments that contain the specified string in the text or in the author properties.
