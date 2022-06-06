# AD---SBA---HTML-CSS-JavaScript-

## Table of Contents
1. [Deliverable Requirements](#requirements)
2. [Implementation](#implementation)
   1. [index](#index)
   2. [register](#register)
   3. [log in](#log-in)
   4. [games](#games)
   5. [shop](#shop)

### <a name="requirements"></a>Deliverable Requirements 

This project was written for Per Scholas' Skill-based Assessment on HTML, CSS, and JavaScript.

The project was to contain the following:

HTML
* miminum 3 pages/views with a grid as consistent as possible
* minimum 10 different HTML tags
* an HTML table
* minimum 2 uses for forms
* a dropdown menu
* different types of content, i.e. text, images, videos
* regex validation (optional)

CSS
* inline, internal, AND external styling
* minimum 5 different CSS selectors
* moderate amount of web fonts
* complementary colors
* use Flexbox (optional)
* use Sass/SCSS (optional)
* use animations (optional)

JS
* external scripts
* variables
* if statements and loops
* at least 1 form of collections
* functions with call back
* events & listeners
* use AJAX (optional)
* use JSON or XML (optional)
* use JQuery (optional)

### Implementation
#### Index

The initial page of the site is index.html, this is the 'home' and first thing someone visiting the site should see. The page welcomes visitors and gives them a quick view of the gardens available using a bootstrap carousel. There is also a nav bar with pills (also from bootstrap) that shows visitors what other pages they can look at; This navbar will appear throughout the entire site.

#### Register

The registration page for incoming members to sign up. There is a registration form shown asking for the potential member's email and a password. validation is put in validate.js to check the password (using regex) for a lowercase letter, uppercase letter, and a number. There is also another check for the repeated password to match the initial password, all being listened to by the register submission button. A dropdown is also included which would check for the user's selection to prove they are not a robot (unfortunately this is not implemented).

#### Log In

The log in page for existing members to reach their accounts. There is minimal validation for this page (it doesn't check password with regex), what it does instead is check if the email and password match any presets (provided below) and sends 'users' to a corresponding endpoint.

| email           | password | endpoint       |
|-----------------|----------|----------------|
| admin@gmail.com | admin    | youtube secret |
| shop@gmail.com  | shopping | shop.html      |
| game@gmail.com  | play     | games.html     |
| reg@gmail.com   | join     | register.html  |
| base@gmail.com  | home     | index.html     |

#### Games

The games page shows users the selection of minigames available to play and the payout each game can give. Games are loaded on page load using loadshop.js which makes a bootstrap card with an image for each game.

#### Shop

The shop page shows users the selection of items sold for a given weekday. Items are loaded using loadshop.js and multiple functions determine what items are available depending on what day a user visits the site. Items are loaded in as bootstrap cards with an image and the price of the item in question. There is also a collapsible table at the bottom of the page for users to see what will be available when, so they can plan ahead. 