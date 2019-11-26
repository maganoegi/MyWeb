styles = """


*:not(.line, .line span) {
    transition: 0.5s;
}


html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    min-height: 100vh;
}


body {
    border: 0;
    width: calc(100vw - 34px); 
    font-family: 'Mukta', sans-serif;
}

#container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 20% auto 70px;
    grid-template-columns: auto minmax(20%, 80%) auto;
    grid-template-areas: 
    ". h ."
    "s c ."
    ". f .";
}

.header {
    grid-area: h;
    position: relative;
    width: 100%;
    text-align: center;
}

.content {
    grid-area: c;
    justify-items: center;
}

#myNav {
    height: 50%;
    top: 25%;
    margin: 0;
    position: relative;
    height: 90px;
    transform: translateY(50%);
    padding: 0;
    margin: 0 auto;
    text-align: center;
} 

ul li {
    display: inline-block;
}

.footer {
    grid-area: f;
    display: block;
    height: 50px;
    position: relative;
}


.myFoot {
    padding: 0;
    display: grid;
    gap: 10%;
    margin: 0 auto;
    width: 50%;
    text-align: center;
    grid-template-columns: repeat(5, 12%);
    grid-template-areas: 
    "en fr es ru nl";
}

.myFoot ul li {
    margin: 0 auto;
}

.smaller {
    margin: 0 !important;
    justify-self: center;
}

.en {
    grid-area: en;
}

.fr {
    grid-area: fr;
}

.es {
    grid-area: es;
}

.ru {
    grid-area: ru;
}

.nl {
    grid-area: nl;
}

.line {
    position: absolute;
    height: 70%;
    width: 30%;
    left: 8%;
}

.segment {
    position: absolute;
    width: 8px;
    height: 13.5%;
    background-color: black;
    z-index: 20;
    opacity: 1;

}

.s1, .s2, .s3, .s4, .s5, .s6, .s7, .s8 {
    opacity: 0;
}

.s1 {
    top: 0;
}

.s2 {
    top: 11.5%;
}

.s3 {
    top: 24%;
}

.s4 {
    top: 36.5%
}

.s5 {
    top: 49%;
}

.s6 {
    top: 61.5%;
}

.s7 {
    top: 74%;
}

.s8 {
    top: 86.5%;
}

.noSelect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

.backbtn {
    grid-row: 1;
    display: block;
    position: absolute !important;
    margin-top: 4px !important;
    margin-left: 15px !important;
    opacity: 0;
    cursor: pointer;
    transition: 0.5s;
    padding: 10px !important;
}

.sectionTitle {
    float: right;
    display: block;
    transition: 0.5s;
    grid-row: 2;
    font-size: 40px;
    font-weight: 800;
}

.sectionContent {
    transition: 0.5s;
    grid-row: 3;
    display: inline-block;
    height: max-content;
    width: 100%;
    margin-left: 15px;
}

.aboutContent {
    transition: 0.5s;
    margin-top: 10px;
    font-size: 22px;
    overflow: visible;
    display: inline-block;
    position: relative;
    margin-bottom: 50px;
    height: 100%;
    width: 50%;
    margin-left: 15px;
}

.aboutImages {
    display: inline-block;
    position: absolute;
    height: 100%;
    margin-left: 50px;
}

.workContent {
    width: 100%;
    height: 100%;
    position: relative;
}

.gitGrid {
    position: relative;
    display: grid;
    overflow: visible;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 40px;
    margin-bottom: 50px;
}

.gitwrapper {
    height: 200px;
    position: relative;
    left: 20%;
    display: block;
    border: 2px solid transparent;
    cursor: pointer;
    transition: 0.5s;
}

.gitImg {
    display: block;
    position: absolute;
    height: 200px;
    width: 200px;
    left: calc(50% - 100px);
    z-index: 1;
    opacity: 0.2;
}

.gitDesc {
    text-align: center;
    display: block;
    position: absolute; 
    height: 70px;
    width: 100%;
    bottom: calc(50% - 35px);
    z-index: 2;
    font-size: 21px;
    font-weight: bold;
    transform: 0.5s;
}

.gitwrapper:hover {
    border: 2px solid black;
    background-color: rgb(52, 53, 54);
    color: antiquewhite;
}

.GenDescContent {
    font-size: 20px;
}


.title {
    font-size: 30px;
    position: relative;
    margin: 20px 0;
}


.ProgLanguageGrid {
    width: 60%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    gap: 5px;
}


.progLang {
    text-align: center;
    vertical-align: middle;
    font-size: 20px;
    line-height: 25px; 
    width: 100px;
    height: 25px;
    border-radius: 8px;
    transition: 0.5s;
}


.web {
    background-color: rgba(6, 154, 190, 0.2);
    border: 2px solid rgba(6, 154, 190, 0.2);

}

.general {
    background-color: rgba(75, 57, 57, 0.2);
    border: 2px solid rgba(75, 57, 57, 0.2)
}

.other {
    background-color: rgba(165, 165, 9, 0.2);
    border: 2px solid rgba(165, 165, 9, 0.2);
}



@media (max-width: 800px) { /*------------------------------------------------------------------------------------*/

    .ProgLanguageGrid {
        width: 100%;
    }

    body {
        width: calc(100vw - 10px); 

    }

    #container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 20% auto 70px;
        grid-template-columns: auto minmax(20%, 80%) auto;
        grid-template-areas: 
        ". h ."
        "s c ."
        ". f .";
    }

    .content {
        height: 100%;
    }

    .hi {
        font-size: 30px !important;
        line-height: 25px !important;
        transform: translateY(100%) !important;
    }

    #myNav {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        top: 25%;
        transform: translateY(0);
    }

    #myNav li .snakebtn {
        width: auto !important;
        padding: 10px !important;
        margin: 0;
    }

    #myNav li {
        width: 60%;
        padding: 10px 0;
    }

    .line {
        height: 60%;
    }

    ul li .backbtn {
        position: relative;
        font-size: 20px !important;
        width: 50px !important;
        padding: 2px !important;
        z-index: 10;

    }

    .sectionTitle {
        font-size: 30px;
    }

    .aboutContent {
        position: relative;
        z-index: 1;

        height: 100%;
        margin: 10px 0;
        word-wrap: normal;
        font-size: 15px;
        width: 100%;
    }

    .aboutImages {
        display: block;
        position: absolute;
        float: left;
        left: 0;
        z-index: -1;
    }


    .sectionContent {
        overflow: visible;
        position: relative;
        height: auto;
    }

    .workContent {
        margin-bottom: 50px;
        min-height: 100% !important;
    }


    .gitGrid {
        grid-template-columns: repeat(auto-fill, 95%);
        gap: 20px;
        position: relative;
    }

    .gitwrapper {
        display: grid;
        grid-template-columns: 100px auto;
        grid-template-rows: 100px;
        left: 0;
        width: 100%;
        height: 100px;
    }


    .gitImg {
        left: 0;
        grid-column: 1;
        height: 100px;
        width: 100px;
    }

    .gitDesc {
        grid-column: 2;
        font-size: 15px;
    }

    .GenDescContent {
        font-size: 15px;
    }
    
    .footer {
        position: inherit;
    }

    .myFoot {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        width: auto;
        -webkit-box-pack: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;

        text-align: center;
    }

    .smaller {
        font-size: 12px !important;
    }


    .hi:before, .hi:after {
        display: none;
    }

    .ProgLanguageGrid {
        margin-left: 7%;
    }
}
.hi {
    font-family: 'Poppins', sans-serif;
    align-self: center;
    align-content: center;
    transform: translateY(200%);
    font-size: 60px;
    display: inline-block;
    position: relative;
    height: auto;
    line-height: 70px;
    text-align: center;
    font-weight: bold;
    transition: 0.5s;
    /* background-color: chocolate; */
}

.header .hi span {
    position: absolute;
    transition: transform 0.5s; 
}

/* LEFT-UP/RIGHT-DOWN */
.header .hi span:nth-child(1),
.header .hi span:nth-child(2) {
    width: 5px;
    height: 50%;
    background: #262626;
    border-radius: 2px;
}

.header .hi span:nth-child(1) {
    top: -10px;
    left: -10px;
    transform-origin: right
}

.header .hi span:nth-child(2) {
    bottom: -10px;
    right: -10px;
    transform-origin: right
}


/* UP/DOWN */
.header .hi span:nth-child(3),
.header .hi span:nth-child(4) {
    width: 100%;
    height: 5px;
    background: #262626;
    border-radius: 2px;
}

.header .hi span:nth-child(3) {
    top: -10px;
    left: -10px;
    transform-origin: right
}

.header .hi span:nth-child(4) {
    bottom: -10px;
    right: -10px;
    transform-origin: right
}

.aboutPlusImages {
    /* display: flex; */
    width: 100%;
    position: relative;
}

.aboutImages {
    flex: 1;
    display: inline-block;
    /* height: 100%; */
    /* width: 30%; */
}

#megrid {
    top: 0; 
    z-index: 2;
}

#bbgrid {
    bottom: 100px; 
    z-index: 2;

}

#me2grid {
    bottom: calc(50% - 150px); 
    left: 184px;
    z-index: 1;
}

.flip-grid {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
}

.flip-container {
    perspective: 1000px;
}
	/* flip the pane when hovered */
	/* .flip-container:hover .flipper, .flip-container.hover .flipper {
		transform: rotateY(180deg);
	} */

.flip-container, .front, .back {
	width: 123.75px;
    height: 144.75px;
}


/* Image dimensions: 495 x 579 -> 165 x 193 -> 96.6 x 85.2 */
.flipper .back img {
    display: block; 
    height: 100%; /* THE SAME AS THE ONES ABOVE!! */
    width: 100%;
}

/* flip speed goes here */
.flipper {
	transition: 0.7s;
	transform-style: preserve-3d;

	position: relative;
}

/* hide back of pane during swap */
.front, .back {
    -webkit-backface-visibility: hidden;
	backface-visibility: hidden;

	position: absolute;
	top: 0;
	left: 0;
}

/* front pane, placed above back */
.front {
	z-index: 2;
	/* for firefox 31 */
	transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
    transform: rotateY(180deg);
    background-color: aquamarine;
}

@media (max-width: 800px) { /*------------------------------------------------------------------------------------*/
    #me2grid {
        bottom: calc(50% - 70px); 
        left: 0;
    }

    .aboutImages {
        width: 100%;
        margin: 0;
        left: 5%;
        position: static;
        display: inline-block;
    }

    .flip-container, .front, .back {
        width: 80px;
        height: 101px;
        opacity: 0.5;
    }
}

/*-------------------------------*/
/* BIGGER BUTTONS - NAVIGATION    */
/*-------------------------------*/
ul li .snakebtn {
    position: relative;
    padding: 20px; /* Allows for text to always fit inside */
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    text-align: center;
    text-decoration: none;
    margin: 0 30px;
    width: auto;
    color: #262626;
    cursor: pointer;
    transition: 0.5s;
}

ul li .snakebtn span {
    position: absolute;
    transition: transform 0.5s;
}

/* TOP + BOTTOM */
ul li .snakebtn span:nth-child(1),
ul li .snakebtn span:nth-child(3) {
    width: 100%;
    height: 5px;
    background: #262626;
    border-radius: 2px;
}

/* Top border animation */
ul li .snakebtn span:nth-child(1) {
    top: 0;
    left: 0;
    transform-origin: right; 
}

ul li .snakebtn:hover span:nth-child(1) {
    transform: scaleX(0);
    transform-origin: left; 
    transition: transform 0.5s;
}

/* Bottom border animation */
ul li .snakebtn span:nth-child(3) {
    bottom: 0;
    left: 0;
    transform-origin: left; 
}

ul li .snakebtn:hover span:nth-child(3) {
    transform: scaleX(0);
    transform-origin: right; 
    transition: transform 0.5s;
}

/* LEFT + RIGHT */
ul li .snakebtn span:nth-child(2),
ul li .snakebtn span:nth-child(4) {
    width: 5px;
    height: 100%;
    background: #262626;
    border-radius: 2px;
}

/* LEFT border animation */
ul li .snakebtn span:nth-child(2) {
    top: 0;
    left: 0;
    transform: scaleY(0);
    transform-origin: bottom; 
}

ul li .snakebtn:hover span:nth-child(2) {
    transform: scaleY(1);
    transform-origin: top; 
    transition: transform 0.5s;
}

/* RIGHT border animation */
ul li .snakebtn span:nth-child(4) {
    top: 0;
    right: 0;
    transform: scaleY(0);
    transform-origin: top; 
}

ul li .snakebtn:hover span:nth-child(4) {
    transform: scaleY(1);
    transform-origin: bottom; 
    transition: transform 0.5s;
}

/*-------------------------------*/
/* SMALLER BUTTONS - LANGUAGES   */
/*-------------------------------*/
.smaller {
    /* Allows for text to always fit inside */
    padding: 20px; 
    position: relative;
    height: auto;
    font-size: 17px;
    text-align: center;
    text-decoration: none;
    /* margin: 0 40px; */
    width: auto;
    color: black;
    cursor: pointer;
    transition: 0.5s;
}

.smaller span {
    position: absolute;
    transition: transform 0.5s;
}

/* TOP + BOTTOM */
.smaller span:nth-child(1),
ul li .snakebtn span:nth-child(3) {
    width: 100%;
    height: 5px;
    background: #262626;
    border-radius: 2px;
}

/* Top border animation */
.smaller span:nth-child(1) {
    top: 0;
    left: 0;
    transform-origin: right; 
}

.smaller:hover span:nth-child(1) {
    transform: scaleX(0);
    transform-origin: left; 
    transition: transform 0.5s;
}

/* Bottom border animation */
.smaller span:nth-child(3) {
    bottom: 0;
    left: 0;
    transform-origin: left; 
}

.smaller:hover span:nth-child(3) {
    transform: scaleX(0);
    transform-origin: right; 
    transition: transform 0.5s;
}

/* LEFT + RIGHT */
.smaller span:nth-child(2),
.smaller span:nth-child(4) {
    width: 5px;
    height: 100%;
    background: #262626;
    border-radius: 2px;
}

/* LEFT border animation */
.smaller span:nth-child(2) {
    top: 0;
    left: 0;
    transform: scaleY(0);
    transform-origin: bottom; 
}

.smaller:hover span:nth-child(2) {
    transform: scaleY(1);
    transform-origin: top; 
    transition: transform 0.5s;
}

/* RIGHT border animation */
.smaller span:nth-child(4) {
    top: 0;
    right: 0;
    transform: scaleY(0);
    transform-origin: top; 
}

.smaller:hover span:nth-child(4) {
    transform: scaleY(1);
    transform-origin: bottom; 
    transition: transform 0.5s;
}

/* Voilà */
"""

openComment = false

writeStyleChar = (which) ->
	# begin wrapping open comments
  if which == '/' && openComment == false
    openComment = true
    styles = $('#style-text').html() + which
  else if which == '/' && openComment == true
    openComment = false
    styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>')
  # wrap style declaration
  else if which == ':'
    styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:')
  # wrap style value 
  else if which == ';'
    styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;')
  # wrap selector
  else if which == '{'
    styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{')
  else
    styles = $('#style-text').html() + which
  $('#style-text').html styles
  $('#style-tag').append which

writeStyles = (message, index, interval) ->
  if index < message.length
    pre = document.getElementById 'style-text'
    pre.scrollTop = pre.scrollHeight
    writeStyleChar message[index++]
    setTimeout (->
      writeStyles message, index, interval
    ), interval
    

# appending the tags I'll need.
$('body').append """
  <style id="style-tag"></style>
	<pre id="style-text"></pre>
"""

# faster typing in small iframe on codepen homepage
time = if window.innerWidth <= 578 then 4 else 0.0001
  
# starting it off
writeStyles(styles, 0, time)

### 
 - coffee -c filename.coffee to compile to .js
 - replace the wrapper around the function with jq doc ready
 - include the .js file as script in <head>
 - include jquery script in <head>
 - TODO: add html tags through the .coffee file, not html
 - TODO: express gratitude to Jake Albaugh https://codepen.io/jakealbaugh/
 - TODO: (accelerate): shorten css
 - TODO: (accelerate): divide css code in multiple sections
 - TODO: (accelerate): do not write out ALL the CSS -> inject entire tags after
 - let er rip!
###