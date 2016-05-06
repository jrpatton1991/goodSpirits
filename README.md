# goodSpirits

###Technologies Used
####Frontend
* Bootstrap & CSS 
* jQuery  
* HTML & EJS  

####Backend
* node.js
* express 

###Approach

* First we needed to plan out all of the larger necessities to get the MVP up and running. We initially decided what API to use, how we would create likes, what pages were needed and would house certain information, and what information would be included in our database. 
* We decided we needed to pull in information from our API that would include all of the information about the beers, but would also need to create our own API that would be a relational database that would house the users that have liked certain beers. 

* As a group, we decided what we all though the app should have and what functionalities it should include. Afterwards we had to assess what was needed for the MVP versus what were "Nice-to-haves". We then decided what would be included in our MVP and what would be left out for out initial build.

* Next, we made a list of all the larger tasks to be completed initially and determined what skills were needed to achieve each goal of functionality and then what group member would work on which tasks. The backend work with node.js was going to be the bulk of the work because we are pulling in so many different types of information from multiple API's. 

* We then had to begin documenting what the "Plan of action" would be for the project and other misecllaneous whiteboarding. We began divying out assignments to teammates based on strengths and interests. 
[Whiteboard](http://imgur.com/a/SbmGD)

* Throughout our project, we kept a log of what was still needed and what was completed.

* Lastly we began our QA of the website application. 

###Installation

All of the dependencies can be obtained buy using NPM Install. For the server side scripts we used CDN's.

#### Packages Downloaded: 
* Passport
* Passport-Local
* Passport-Local-Mongoose
* Request JS
* Express Session 
* Mongoose

###User Stories

Our users are anyone who's ever needed to look for a new beer, anyone who wants to keep track of ones they've tried, and anyone who'd like to see reviews from other avid beer enthusiast.

As a user I'd love a place where I can come and see what drinks i should try next and what others have liked. Good Spirits is that place for me.  I can see what drinks are popular, I can see things i've tried and loved, I can search for new drinks, and I can write and read reviews of the various ones. It is easy for me to login and when I do I always find myself in Good Spirits.


#### User Story #1 
* User #1 hears how great GoodSpirits from their friend who uses it. He wants to be part of the GoodSpirits community.
* User #1 visits GoodSpirits Home Page.
* User #1 clicks the Sign Up link in the nav bar and is taken to the Sign up page/
* User #1 enters their name, password, and email address and clicks "sign up"/
* User #1 is then taken to their profile page that allows them to see where the beers they will like will be shown.
* User #1 wants to add a beer that he had last night and loved so he clicks on "search" in the nav bar and is taken to the Search Page.
* User #1 clicks in the search bar and begins typing the name of the beer he had, he clicks like, and adds a comment about the beer.
* User #1 then navigates back to his profile page to see that the beer he likes is now there. 
* User #1 then signs out of his session and leaves to go try more beers so that he can add them on GoodSpirits.

#### User Story #2
* User #2 has been a GoodSpirits user for a while now and wants to check on a beer she has heard about. 
* User #2 visits the home page and then clicks on Log In in the nav bar which takes her to her profile page that has all of the beers she's liked in previous sessions.
* User #2 goes to the search page in the nav which takes her to the search page.
* User #2 searches for the beer that she's heard about and clicks on that beers name, which takes her to that beer's profile page.
* User #2 is then able to see all of the other users that have liked the beer and all of their comments.
* User #2 reads that it tastes extremely bitter and isn't one that a lot of people recommend. 
* User #2 decides based on other users of GoodSpirits that she should skip trying this beer.
* User #2 then signs out of GoodSpirits by clicking the "Log Out" button in the nav bar.

#### User Story #3
* User #3 is wanting to know a good recommendation about a beer from his friend, who is a beer connoisseur.
* User #3 is already a user of GoodSpirits, so he visits the home page and clicks on Log In in the nav bar.
* User #3 enters his credentials and is redirected to his profile page. He knows that his beer connoisseur friend likes the same beer as he does, so he clicks on that beer and is taken to the beer profile page.
* User #3 then sees his friend's username and clicks on it, which takes him to his friends profile page.
* User #3 is then able to see all of his friend's recommendations and reviews on his profile page. He sees one that thinks would be good and decides to try that. 
* User #3 forgets to log out immediately, but when he returns 10 minutes later, his session has expired for security reasons. 

###Wireframes
[wireframes](http://imgur.com/a/eZF8a)

###Future goals and issues to address
####Future Goals
* Add an ability to follow others
* Add profile photos
* Add more information to the beers
* Make the product a single page application to help with slow loading times
* Expand user models (add more personal information to connect users)

####Issues
* Show when a beer has already been liked
* There's currently no way to search for other users
* Find a better API for this application, this API is more products for sale and less about broad beer information

