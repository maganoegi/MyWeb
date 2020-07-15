# Personal Website of Sergey Platonov.
## Web Dev class HEPIA, sem. 3.
## Table of Contents:
1. General Description
1. File Structure
1. Pages
   1. Landing
   1. About
   1. Projects
   1. Contact
1. Language Support
1. Responsiveness
1. Assets Used
1. Consumed API
1. Exposed API
1. Things to improve

## 1 General Description
For a while I've been wanting to create my own "portfolio" website, but never had the time to do it correctly. When making something for yourself, you want it to be the best version it can be, in my case from the design point-of-view. So I took the opportunity given by this class to make something that would make me happy. 

I ended up making a SPA (single page application), as I personally prefer the interactions with that kind of web-apps. Since there is a relatively small amount of content, I could get away with it without having to resort to using more specialized frameworks for SPA's, such as Angular.

The goals of this website are to tell who I am and what I do in life, by employing minimalist, clean design enhanced by well-placed transitions and animations to help present the information needed to the reader.

This README serves as a project report.

To visualise the web-app, open _index.html_ in your browser of choice.

Comments have been provided as much as is necessary - I tried to make the code speak for itself.

## 2 File Structure
The source files are subdivided into functional parts: 
* __index.html__ - Quite a loaded file, but normal since it's an SPA.
* __css /__
    * __flip.css__ - describes the behaviour of the flipped images in the _about_ page
    * __hi.css__ - my name in big, surrounded by brackets
    * __index.css__ - main css file, containing the majority of DOM elements, and their interactions
    * __snakebtn.css__ - all the buttons with the brackets around them, as well as their CSS-driven animations on hover
* __js /__ 
    * __animations.js__ - contains the function definitions for the animations and transitions
    * __nav.js__ - handles the navigation across the webapp
    * __work.js__ - handles the GitHub API fetch requests to display my public work
* __resources /__
    * __international.json__ - contains the web-app content in different languages to load on demand
    * __img /__ - programming languages logos and segmented images for the _about_ page
* __api /__ - contains the logic for my API (NOT IN LIVE VERSION)
    * __data /__ - where my data is saved
        * __custom.json__ - my custom-added projects
        * __hub.json__ - projects fetched from GitHub API
        * __final.json__ - _custom_ and _hub_ merged together
    * __dataMethods.js__ - function definitions for data processing
    * __projects.js__ - HTTP-verb behavior is defined here
    * __server.js__ - server file to launch on a separate thread
    * __sync.js__ - CRON job-activated script, that updates __final.json__  

## 3 Pages
The web-app consists of four "pages". Since it's a SPA, I will refer to these pages as "views". Every view consists of three parts: a header (my name), the content, a segmented line that marks a transition, and a footer (languages). The pages differ by their "content". All the content is contained under _.content_ class.
### 3.1 Landing
This is the view that is shown upon load. Its content is a navigation bar, with __snakebutton__ animations (borders that change on hover).

### 3.2 About
Once in the about section, we can see the following key elements:
* A text telling my story. This text is loaded from the _international.json_ file when the language is changed. This is done through the handlers located in _nav.js_. I decided to not use any translation API as these languages represent the languages I speak myself, and so the text should be written by me as well.
* A series of pictures, tied to a scrolling position. These pictures are segmented into 9 pieces, and depending on how far the client has scrolled, different sub-pictures are displayed. 9 sub-pictures are displayed at all times, inviting intuitively the client to scroll in order to see the full picture. __I decided not to display this in the mobile version due to bad UX.__

### 3.3 Projects
This content consists of three parts:
* _international.json_-loaded content.
* a multicolored grid representing the programming languages / frameworks that I know.
* a grid of constructed elements with links to my public personal repositories. This grid contains the repo description, link and a dynamically loaded image of the logo of the language used. The images are in the __resources/img/.__ The information is pulled from the GitHub API of my public record (maganoegi). Then this information is assembled dynamically through Javascript and injected into DOM. All this happens in the __work.js__ file. In order to update this information on the deployed version, all I need to do is create a new public repository under my name on GitHub.

### 3.4 Contact
This part is as of now unfinished as I have not made up my mind on the design. 

## 4 Language Support
In _nav.js_ we can find JQuery triggers, that allow us to change the language when footer buttons are clicked and load the content in the selected language. From there, if we look into _animations.js_ file, we find `updateContentFromFile()`, which uses an AJAX call to asynchronously load the desired content for the desired part from the _international.json_. This content is then inserted into specific elements' innerHTML. As of now only English is fully translated, and French and Spanish partially

## 5 Responsiveness
From the beginning I have tried to keep the website responsive. Honestly, it was quite a battle at some point, due to the sheer amount of elements that are present in the DOM. The website has been checked on the following browsers, on both __desktop__ and __mobile__.
* Opera
* Firefox
* Edge
* Samsung Internet
* Chrome
* Chromium
* Safari

## 6 Assets Used
* JQuery
* Node JS
* express.js
* Font: Mukta sans-serif

## 7 Consumed API
Unfortunately I only consumed one API - GitHub. I could not find a public API that would inspire me to put inside this website. I tried my luck with Instagram and Spotify, giving up after a while because of the restrictions and the lack of time.

## 8 Exposed API
This api is provided in the source code under _api/_, but is not implemented into the website. This is because my webhost does not support NodeJS, and this is a class assignment :)
### The Goal
As of now, the GitHub API is consulted every time the page loads. This is not optimal, as there is a limited amount of API calls allowed per hour. So I wanted to create my own API that would store the necessary data from GitHub (and other), giving me unlimited access.

### Data Managament
So, my server aims to do the following things:
1. Once every x minutes, a CRON job executes _sync.js_.
1. This fetches the data from GitHub into _hub.json_.
1. We also have _custom.json_, which contains projects that are not on GitHub, but that I would also like to mention in my listing. The data for the latter is added manually through POST HTTP calls.
1. _sync.js_ then merges _custom.json_ and _hub.json_ into _final.json_, which is then read with HTTP GET.
         
        custom.json + hub.json = final.json
1. The rest of the api is simple:
* _projects.js_ handles the calls
* _server.js_ handles the server-level organisation
* _dataMethods.js_ contains the function definitions

### Setup
        install npm
        npm install express
        node sync.js (2x)*
        node server.js

        ========================================================================
        🌎 svplatonov.com/api server is running at http://localhost: 3000
        ========================================================================
\* a bug that fails to create the _data/_ folder on the first run. 

Then, the following API calls can be executed:
        
        GET http://localhost:3000/projects/
            => retrieve JSON of all the projects
        -----------------------------------------------------------------
        GET http://localhost:3000/projects/xxxx
            => retrieve JSON of project with id xxxx
        -----------------------------------------------------------------
        POST http://localhost:3000/projects/
            => insert JSON-formatted project into custom.json
        -----------------------------------------------------------------
        PATCH http://localhost:3000/projects/xxxx
            => update JSON-formatted project into custom.json, of id xxxx
        -----------------------------------------------------------------
        DELETE http://localhost:3000/projects/xxxx
            => delete the project with ID xxxx in custom.json

I used a software called __Postman__ to test my API.

Unfortunately POST, PATCH and DELETE are bugged, and I don't understand why. The calls pass, but do not parse the JSON data correctly on the server side.
            
## 9 Things to improve
A lot of work went into this website, mainly because of the design and wanting to make is complete. Im glad that the "skeleton" of the website is tested and responsive, and I shall continue working on it.

In the end, I ran into trouble with my API calls and express, messing up my POST, PATCH and DELETE calls.

I also used __CSS-Grid__ more than __Flexbox__ because of personal preference and the complicated relationship between the numerous elements in my DOM. The responsiveness was achieved easier this way, in my opinion.


  
