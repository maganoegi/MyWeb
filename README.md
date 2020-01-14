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
1. Non-navigational animations
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

## 2 File Structure
The source files are subdivided into functional parts: 
* __index.html__
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
### 3.1 Landing
### 3.2 About
### 3.3 Projects
### 3.4 Contact
## 4 Language Support
## 5 Non-navigational animations
## 6 Responsiveness
## 7 Assets Used
## 8 Consumed API
## 9 Exposed API
## 10 Things to improve

  
