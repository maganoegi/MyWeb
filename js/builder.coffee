styles = """

pre { 
  z-index: -1;
  position: absolute; width: 100%;
  top: 1px; bottom: 1px;
  overflow: hidden;
  background-color: #313744; color: black;
}

pre em:not(.comment) { font-style: normal; }

.comment       { color: #707e84; }
.selector      { color: #c66c75; }
.selector .key { color: #c66c75; }
.key           { color: #c7ccd4; }
.value         { color: #d5927b; }

html {
    height: 100%;
}

body {
  z-index: 1;
  height: 100%;
  margin: 0;
  width: 100%;
  border: 0;
  /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
  /* font-family: 'Ubuntu', sans-serif; */
  font-family: 'Mukta', sans-serif;
  overflow: auto;
}

#container {
    z-index: 2;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 20% 70% 10%;
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
    /* background-color: aquamarine; */
    text-align: center;
}

.content {
    grid-area: c;
    /* background-color: blanchedalmond; */
    justify-items: center;
}

#myNav {
    padding: 0;
    justify-content: center;
    width: auto;
    transform: translateY(400%);
    display: flex;
} 

ul li {
    list-style: none;
}

.footer {
    grid-area: f;
    display: fixed;
    position: relative;
    /* background-color: aquamarine; */
}


.myFoot {
    padding: 0;
    margin: 0;
    justify-items: center;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    width: 100%;
    grid-template-areas: 
    ". en fr sp ru nl .";
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

.sp {
    grid-area: sp;
}

.ru {
    grid-area: ru;
}

.nl {
    grid-area: nl;
}

.line {
    position: absolute;
    height: 60%;
    width: 30%;
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
    /* margin-left: 20%; */
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
    /* Android */
    -webkit-tap-highlight-color: transparent;
}

.contentGrid {
    position: absolute;
    visibility: hidden;
    display: grid;
    width: 80vw;
    height: 65vh;
    grid-template-columns: 100%;
    grid-template-rows: 90px 10% 80%;
}

.backbtn {
    grid-row: 1;
    display: block;
    position: absolute !important;
    margin-top: -5px !important;
    margin-left: 15px !important;
    opacity: 0;
    cursor: pointer;
    transition: 0.5s;
    visibility: hidden;
    padding: 5px !important;
}

.sectionTitle {
    background-color: tomato;
    grid-row: 2;
    font-size: 30px;
    margin-left: 15px;
}

.sectionContent {
    overflow: auto;
    grid-row: 3;
    transition: 0.5s;
    display: inline-block;
    position: absolute;
    background-color: aqua;
    height: 100%;
    width: 100%;
    margin-left: 15px;
}



.hi {
    font-family: 'Poppins', sans-serif;
    align-self: center;
    align-content: center;
    /* margin-top: 10%; */
    /* top: 10%; */
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


/* README
----------------- Source -------------------
https://www.youtube.com/watch?v=Vm_te-D25D4

------------- USED HTML MARKUP -------------
<ul>
    <li>
        <div class="snakebtn">Test
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </li>
    <li></li>
    <li></li>
    <li></li>
</ul> */


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
    position: relative;
    padding: 20px; /* Allows for text to always fit inside */
    height: auto;
    font-size: 17px;
    text-align: center;
    text-decoration: none;
    margin: 0 40px;
    width: auto;
    color: #262626;
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

.hi {
  padding: 12.5px;
}

.hi:before, .hi:after {
  content: "sergey platonov";
  position: absolute;
  color: #000;
  top: 13px;
  overflow: hidden;
}

.hi:before {
  left: 15px;
  text-shadow: 1px 0 red;
  -webkit-animation: glitch-before 2s linear 0s infinite alternate;
          animation: glitch-before 2s linear 0s infinite alternate;
}

.hi:after {
  left: 15px;
  text-shadow: -1px 0 black;
  animation: glitch-after 2s linear 0s infinite alternate-reverse;
}

@-webkit-keyframes glitch-before {
  0% {
    clip: rect(2px, 700px, 132px, 30px);
  }
  5% {
    clip: rect(122px, 700px, 176px, 30px);
  }
  10% {
    clip: rect(120px, 700px, 45px, 30px);
  }
  15% {
    clip: rect(118px, 700px, 137px, 30px);
  }
  20% {
    clip: rect(57px, 700px, 106px, 30px);
  }
  25% {
    clip: rect(31px, 700px, 77px, 30px);
  }
  30% {
    clip: rect(37px, 700px, 166px, 30px);
  }
  35% {
    clip: rect(72px, 700px, 185px, 30px);
  }
  40% {
    clip: rect(13px, 700px, 155px, 30px);
  }
  45% {
    clip: rect(103px, 700px, 68px, 30px);
  }
  50% {
    clip: rect(33px, 700px, 173px, 30px);
  }
  55% {
    clip: rect(28px, 700px, 160px, 30px);
  }
  60% {
    clip: rect(97px, 700px, 32px, 30px);
  }
  65% {
    clip: rect(143px, 700px, 33px, 30px);
  }
  70% {
    clip: rect(29px, 700px, 117px, 30px);
  }
  75% {
    clip: rect(33px, 700px, 30px, 30px);
  }
  80% {
    clip: rect(133px, 700px, 12px, 30px);
  }
  85% {
    clip: rect(157px, 700px, 173px, 30px);
  }
  90% {
    clip: rect(149px, 700px, 56px, 30px);
  }
  95% {
    clip: rect(19px, 700px, 28px, 30px);
  }
  100% {
    clip: rect(29px, 700px, 72px, 30px);
  }
}

@keyframes glitch-before {
  0% {
    clip: rect(2px, 700px, 132px, 30px);
  }
  5% {
    clip: rect(122px, 700px, 176px, 30px);
  }
  10% {
    clip: rect(120px, 700px, 45px, 30px);
  }
  15% {
    clip: rect(118px, 700px, 137px, 30px);
  }
  20% {
    clip: rect(57px, 700px, 106px, 30px);
  }
  25% {
    clip: rect(31px, 700px, 77px, 30px);
  }
  30% {
    clip: rect(37px, 700px, 166px, 30px);
  }
  35% {
    clip: rect(72px, 700px, 185px, 30px);
  }
  40% {
    clip: rect(13px, 700px, 155px, 30px);
  }
  45% {
    clip: rect(103px, 700px, 68px, 30px);
  }
  50% {
    clip: rect(33px, 700px, 173px, 30px);
  }
  55% {
    clip: rect(28px, 700px, 160px, 30px);
  }
  60% {
    clip: rect(97px, 700px, 32px, 30px);
  }
  65% {
    clip: rect(143px, 700px, 33px, 30px);
  }
  70% {
    clip: rect(29px, 700px, 117px, 30px);
  }
  75% {
    clip: rect(33px, 700px, 30px, 30px);
  }
  80% {
    clip: rect(133px, 700px, 12px, 30px);
  }
  85% {
    clip: rect(157px, 700px, 173px, 30px);
  }
  90% {
    clip: rect(149px, 700px, 56px, 30px);
  }
  95% {
    clip: rect(19px, 700px, 28px, 30px);
  }
  100% {
    clip: rect(29px, 700px, 72px, 30px);
  }
}

@-webkit-keyframes glitch-after {
  0% {
    clip: rect(194px, 700px, 61px, 30px);
  }
  5% {
    clip: rect(59px, 700px, 67px, 30px);
  }
  10% {
    clip: rect(39px, 700px, 24px, 30px);
  }
  15% {
    clip: rect(108px, 700px, 83px, 30px);
  }
  20% {
    clip: rect(44px, 700px, 87px, 30px);
  }
  25% {
    clip: rect(61px, 700px, 79px, 30px);
  }
  30% {
    clip: rect(28px, 700px, 5px, 30px);
  }
  35% {
    clip: rect(165px, 700px, 47px, 30px);
  }
  40% {
    clip: rect(195px, 700px, 72px, 30px);
  }
  45% {
    clip: rect(6px, 700px, 138px, 30px);
  }
  50% {
    clip: rect(183px, 700px, 200px, 30px);
  }
  55% {
    clip: rect(11px, 700px, 83px, 30px);
  }
  60% {
    clip: rect(173px, 700px, 11px, 30px);
  }
  65% {
    clip: rect(152px, 700px, 151px, 30px);
  }
  70% {
    clip: rect(55px, 700px, 54px, 30px);
  }
  75% {
    clip: rect(127px, 700px, 187px, 30px);
  }
  80% {
    clip: rect(100px, 700px, 63px, 30px);
  }
  85% {
    clip: rect(75px, 700px, 104px, 30px);
  }
  90% {
    clip: rect(19px, 700px, 10px, 30px);
  }
  95% {
    clip: rect(23px, 700px, 68px, 30px);
  }
  100% {
    clip: rect(24px, 700px, 101px, 30px);
  }
}

@keyframes glitch-after {
  0% {
    clip: rect(194px, 700px, 61px, 30px);
  }
  5% {
    clip: rect(59px, 700px, 67px, 30px);
  }
  10% {
    clip: rect(39px, 700px, 24px, 30px);
  }
  15% {
    clip: rect(108px, 700px, 83px, 30px);
  }
  20% {
    clip: rect(44px, 700px, 87px, 30px);
  }
  25% {
    clip: rect(61px, 700px, 79px, 30px);
  }
  30% {
    clip: rect(28px, 700px, 5px, 30px);
  }
  35% {
    clip: rect(165px, 700px, 47px, 30px);
  }
  40% {
    clip: rect(195px, 700px, 72px, 30px);
  }
  45% {
    clip: rect(6px, 700px, 138px, 30px);
  }
  50% {
    clip: rect(183px, 700px, 200px, 30px);
  }
  55% {
    clip: rect(11px, 700px, 83px, 30px);
  }
  60% {
    clip: rect(173px, 700px, 11px, 30px);
  }
  65% {
    clip: rect(152px, 700px, 151px, 30px);
  }
  70% {
    clip: rect(55px, 700px, 54px, 30px);
  }
  75% {
    clip: rect(127px, 700px, 187px, 30px);
  }
  80% {
    clip: rect(100px, 700px, 63px, 30px);
  }
  85% {
    clip: rect(75px, 700px, 104px, 30px);
  }
  90% {
    clip: rect(19px, 700px, 10px, 30px);
  }
  95% {
    clip: rect(23px, 700px, 68px, 30px);
  }
  100% {
    clip: rect(24px, 700px, 101px, 30px);
  }
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