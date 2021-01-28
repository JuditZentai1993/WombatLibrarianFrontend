# The Wombat Librarian
 
This is the frontend (built with React) part of our web-application made for book lovers, where people can browse books, keep track of what books they have and what books they want to read. The aim of the site to create a community where the users can trade, rate, and discuss books.
To give you an idea, the aim is to make it similar to https://www.goodreads.com/, or the hungarian moly.hu (https://hu.wikipedia.org/wiki/Moly.hu)

Backend repository can be found here: https://github.com/Dusernajder/WombatLibrarianApi

## Project Status

This project is currently in development. The user can add books to his/her bookshelf and wishlist, which is stored on the server side in a database with the help of Entity Framework. The current sprint's scope is to implement registration/login on the website, trach individual bookshelves and wishlists per user.

Further tasks for subsequent sprints: develop the community side of the webpage, make following people possible, add rating and comment section to book, create a forum as part of the web application.

## Project Screenshots

Front page:
![Welcome page](https://i.ibb.co/2czn1dC/wombat-Librarian01.png)

Results of a search for "Asimov":

![Search results](https://i.ibb.co/XJDFRtL/wombat-Librarian02.png)

Details of a selected book:

![Book details](https://i.ibb.co/dD2vFRn/wombat03.png)

The current state of our bookshelf (after adding some books to it):

![Bookshelf content with books](https://i.ibb.co/mtdmDnx/wombat04.png)

How our wishlist looks without adding any books to it:

![Wishlist content without books](https://i.ibb.co/vVLL3ZY/wombat05.png)

## Installation and Setup Instructions

1. Clone this repository. You will need node and npm installed globally on your machine in order to run the frontend.
   You also have to clone the backend repository and follow the instruction in the readme file you can find there.
   Backend repository can be found here: https://github.com/Dusernajder/WombatLibrarianApi
   We recommend setting up the backend first, and coming back for the frontend part after that, but it works flawlessly both ways.
2. Open the frontend repository in your favorite IDE or editor, or just open the project folder in a command line tool.
3. If you don't have node package manager installed, now is the perfect time to install it with this command line command:
### `npm install`
4. After npm is surely and safely installed, hit
### `npm start`
to access the frontend.

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

6. If you for some reason don't have the backend on your local, you will have a pretty but not very usable page. So don't forget to go to the backend repository and follow the instructions in the readme!

The page will reload if you make edits.\
You might also see lint errors in the console; our team is currently working hard to delete all traces of such annoying, but otherwise harmless errors.
