



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
    if($(window).width() > 600) {
        if(direction == "up") {
            $(".hi").css("transform", "translateY(50%)");
        } else {
            $(".hi").css("transform", "translateY(200%)");
        }
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

function updateContentFromFile(source, target) {
    $.ajax({url: source, dataType: "json", success: function(data){
        $(".sectionTitle").text(data.title);
        switch(target) {
            case ".aboutContent":
                var obj = $(target).html(data.content);
                obj.html(obj.html().replace(/\n/g,'<br/>'));
                break;
            case ".workContent":
                break;
            case ".contactContent":
                break;
            default: 
                break;
        }
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
      

    // ---------------------------------------------------------
    // ----------------------- Language Handler ----------------
    // ---------------------------------------------------------
    var lang = "en";
    // TODO: implement content update upon language change.
    $(".en").click(function () { 
        lang = "en";
        // $(this).css("background-image", "radial-gradient(closest-side, #fff, #000)");
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



    // ---------------------------------------------------------
    // ------------------- Navigation Handler ------------------
    // ---------------------------------------------------------
    $(".contact").click(function() { 
        elementVisibility(".backbtn", true);
        elementVisibility(".work", false);
        elementVisibility(".contact", false);
        elementVisibility(".about", false);
        moveLine("left");
        moveHi("up");
        
        elementVisibility(".contentGrid", true);
        elementVisibility(".sectionContent", true);
    });

    $(".work").click(function() { 
        elementVisibility(".backbtn", true);
        elementVisibility(".contact", false);
        elementVisibility(".about", false);
        elementVisibility(".work", false);
        moveLine("left");
        moveHi("up");

        updateContentFromFile("../resources/" + lang + "/work.json", ".workContent");
        elementVisibility(".contentGrid", true);
        elementVisibility(".sectionContent", true);
        elementVisibility(".workContent", true); 
    });

    $(".about").click(function() { 
        elementVisibility(".backbtn", true);
        elementVisibility(".contact", false);
        elementVisibility(".about", false);
        elementVisibility(".work", false);
        moveLine("left");
        moveHi("up"); 

        updateContentFromFile("../resources/" + lang + "/about.json", ".aboutContent");
        elementVisibility(".contentGrid", true);
        elementVisibility(".sectionContent", true);
        elementVisibility(".aboutContent", true);
    });

    $(".backbtn").click(function() { 
        elementVisibility(".backbtn", false);
        elementVisibility(".about", true);
        elementVisibility(".contact", true);
        elementVisibility(".work", true);
        moveLine("right");
        moveHi("down"); 

        elementVisibility(".contentGrid", false);
        elementVisibility(".sectionContent", false);
        elementVisibility(".workContent", false);
        elementVisibility(".aboutContent", false);

    });

});