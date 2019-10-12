



// ---------------------------------------------------------
// ----------------------- Functions -----------------------
// ---------------------------------------------------------
function elementVisibility(element, expression) {
    if(expression) {
        $(element).css("opacity", "1");
        $(element).css("visibility", "visible");
    } else {
        $(element).css("opacity", "0");
        $(element).css("visibility", "hidden");
    }
}

function moveHi(direction) {
    if(direction == "up") {
        $(".hi").css("transform", "translateY(50%)");
    } else {
        $(".hi").css("transform", "translateY(200%)");
    }
}

function moveLine(direction) {
    var delay = 50;
    if(direction == "left") {
        $(".s1").animate({opacity: 1}, delay, function() {
            $(".s2").animate({opacity: 1}, delay, function() {
                $(".s3").animate({opacity: 1}, delay, function() {
                    $(".s4").animate({opacity: 1}, delay, function() {
                        $(".s5").animate({opacity: 1}, delay, function() {
                            $(".s6").animate({opacity: 1}, delay, function() {
                                $(".s7").animate({opacity: 1}, delay, function() {
                                    $(".s8").animate({opacity: 1}, delay);
                                });
                            });
                        });
                    });
                });
            });
        });
    } else {
        $(".s1").animate({opacity: 0}, delay, function() {
            $(".s2").animate({opacity: 0}, delay, function() {
                $(".s3").animate({opacity: 0}, delay, function() {
                    $(".s4").animate({opacity: 0}, delay, function() {
                        $(".s5").animate({opacity: 0}, delay, function() {
                            $(".s6").animate({opacity: 0}, delay, function() {
                                $(".s7").animate({opacity: 0}, delay, function() {
                                    $(".s8").animate({opacity: 0}, delay);
                                });
                            });
                        });
                    });
                });
            });
        });
    }
}

function GetContentFromFile(file) {
    $.ajax({url: file, dataType: "String", success: function(result){
        return result;
    }});
}


// ---------------------------------------------------------
// ----------------------- Main ----------------------------
// ---------------------------------------------------------

$(document).ready(function(){
    // var typed = new Typed    out', {
    //     strings: ["about"],
    //     typeSpeed: 1000,
    //   });
      
    

    // TODO:   x -> Make all nav-buttons invisible when pressed.                      
    //         x -> Make Back-button a snakebutton, fadein/out.            
    //         x -> BackBtn same position.   
    //         o -> <h1>title</h1> under BackBtn, as  well as the rest of the content.
    //         o -> Make scroll: overflow on only content grid-area. 
    //         o -> Define Media query (check for min size of convenience.) 
    //         x -> Separate the .line into .line {segments}, then animate.
    //         o -> Glitch @ name .
    //         x -> Think about name representation (design-wise). 

    // ---------------------------------------------------------
    // ----------------------- Language Handler ----------------
    // ---------------------------------------------------------
    var lang = "en";

    $(".en").click(function () { 
        lang = "en";
    });
    $(".fr").click(function () { 
        lang = "fr";
    });
    $(".sp").click(function () { 
        lang = "es";
    });
    $(".ru").click(function () { 
        lang = "ru";
    });
    $(".nl").click(function () { 
        lang = "nl";
    });




    $(".contact").click(function() { 

        let content = GetContentFromFile("../resources/" + lang + "/contact.txt");
        console.log(content);
        console.log("./resources/" + lang + "/contact.txt");
        moveLine("left");
        moveHi("up");
        elementVisibility(".backbtn", true);
        elementVisibility(".work", false);
        elementVisibility(".contact", false);
        elementVisibility(".about", false);
        elementVisibility(".contentGrid", true);
        $(".sectionContent").text(content);
    });

    $(".work").click(function() { 
        elementVisibility(".backbtn", true);
        elementVisibility(".contact", false);
        elementVisibility(".about", false);
        elementVisibility(".work", false);
        elementVisibility(".contentGrid", true);
        // elementVisibility(".line", true);
        moveLine("left");
        moveHi("up"); 

    });

    $(".about").click(function() { 
        elementVisibility(".backbtn", true);
        elementVisibility(".contact", false);
        elementVisibility(".about", false);
        elementVisibility(".work", false);
        elementVisibility(".contentGrid", true);
        // elementVisibility(".line", true);
        moveLine("left");
        moveHi("up"); 
    });

    $(".backbtn").click(function() { 
        elementVisibility(".backbtn", false);
        elementVisibility(".about", true);
        elementVisibility(".contact", true);
        elementVisibility(".work", true);
        elementVisibility(".contentGrid", false);
        // elementVisibility(".line", false);
        moveLine("right");
        moveHi("down"); 
    });

});