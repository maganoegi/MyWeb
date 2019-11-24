
// https://css-tricks.com/slide-in-as-you-scroll-down-boxes/
// https://davidwalsh.name/css-flip


// ---------------------------------------------------------
// ----------------------- Functions -----------------------
// ---------------------------------------------------------


let four_span = "<span></span><span></span><span></span><span></span>";

function elementVisibility(element, expression) {
    let speed = 50;
    if(expression) {
        $(element).show("fast", function() {
            $(element).animate({
                opacity: 1
            }, speed);
        });
        // $(element).animate({
        //     opacity: 1
        // }, speed, function() {
        //     $(element).show();
        // });
    } else {
        // $(element).hide(function() {
        //     $(element).animate({
        //         opacity: 0
        //     }, speed);
        // });
        $(element).animate({
            opacity: 0
        }, speed, function() {
            $(element).hide("fast");
        });
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

function updateContentFromFile(lang, section) {
    $.ajax({url: "../resources/international.json", dataType: "json", success: function(data){
        $(".backbtn").html(data[lang]["back"] + four_span);
        switch(section) {
            case "about":
                $(".sectionTitle").text(data[lang][section]["title"]);
                var obj = $(".aboutContent").html(data[lang][section]["content"]);
                obj.html(obj.html().replace(/\n/g,'<br/>'));
                break;
            case "work":
                $(".sectionTitle").text(data[lang][section]["title"]);
                $(".GenDescTitle").html(data[lang][section]["GenDescTitle"]);
                var obj1 = $(".GenDescContent").html(data[lang][section]["GenDescContent"]);
                obj1.html(obj1.html().replace(/\n/g,'<br/>'));

                $(".WhatDoIKnow").html(data[lang][section]["WhatDoIKnow"]);
                $(".OpenSource").html(data[lang][section]["OpenSource"]);
                break;
            case "contact":
                $(".sectionTitle").text(data[lang][section]["title"]);
                break;
            case "base":
                updateNavLanguage(lang);
                break;
            default: 
                break;
        }
    }});
}

function showActiveLanguage(target) {
    var allLang = [".en", ".fr", ".es", ".ru", ".nl"];
    allLang.forEach(element => {
        if(element == target) {
            $(element).animate({"background-color":"black","color":"transparent !important"}, 100);
        } else {
            $(element).animate({"background-color":"transparent","color":"black"}, 500);
        }
    });
}

function updateNavLanguage(lang) {
    $.ajax({url: "../resources/international.json", dataType: "json", success: function(data){
        $("div.about").html(data[lang]["about"]["nav"] + four_span);
        $("div.work").html(data[lang]["work"]["nav"] + four_span);
        $("div.contact").html(data[lang]["contact"]["nav"] + four_span);
        $("div.hi").html(data[lang]["name"] + four_span);
        $("div.backbtn").html(data[lang]["back"] + four_span);
    }});
}

function getScrollPercentage() {
    var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

    return ((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
}


// ---------------------------------------------------------
// ----------------------- Main ----------------------------
// ---------------------------------------------------------

$(document).ready(function(){
    elementVisibility(".workContent", false);
    elementVisibility(".aboutContent", false);
    elementVisibility(".aboutImages", false);
    elementVisibility(".sectionTitle", false);
    elementVisibility(".sectionContent", false);
    elementVisibility(".ProgLanguageGrid", false);

    // var typed = new Typed    out', {
    //     strings: ["about"],
    //     typeSpeed: 1000,
    //   });
    
    var speed = 1000;
    setInterval(function(){ 
        // TODO: Fix bug: make sure the random values are not repeated, and when fixed, that the browsers don't freeze
        new_rdm = Math.floor(Math.random() * $(".ProgLanguageGrid > div").length); 
        var element = $(".ProgLanguageGrid > div")[new_rdm]
            $(element).css("opacity", "1");
        setTimeout(function() {
            $(element).css("opacity", "0.2");
        }, speed);
    }, speed);

    // ---------------------------------------------------------
    // ----------------------- Language Handler ----------------
    // ---------------------------------------------------------
    var lang = "en";
    var currentSection = "base";

    showActiveLanguage(".en");
    updateNavLanguage("en");

    // TODO: implement content update upon language change.
    $(".en").click(function () { 
        lang = "en";
        showActiveLanguage("." + lang);
        updateContentFromFile(lang, currentSection);
    });
    $(".fr").click(function () { 
        lang = "fr";
        showActiveLanguage("." + lang);
        updateContentFromFile(lang, currentSection);
    });
    $(".es").click(function () { 
        lang = "es";
        showActiveLanguage("." + lang);
        updateContentFromFile(lang, currentSection);
    });
    $(".ru").click(function () { 
        lang = "ru";
        showActiveLanguage("." + lang);
        updateContentFromFile(lang, currentSection);
    });
    $(".nl").click(function () { 
        lang = "nl";
        showActiveLanguage("." + lang);
        updateContentFromFile(lang, currentSection);
    });

    // ---------------------------------------------------------
    // ------------------- Navigation Handler ------------------
    // ---------------------------------------------------------
    $(".contact").click(function() { 
        moveLine("left");
        moveHi("up");
        currentSection = "contact";
        updateContentFromFile(lang, currentSection);

        $("#myNav").animate({
            opacity: 0
        }, 50, function() {
            $("#myNav").hide();
                        
            elementVisibility(".backbtn", true);
            elementVisibility(".sectionTitle", true);
            elementVisibility(".sectionContent", true);
        });
    });

    $(".work").click(function() { 

        moveLine("left");
        moveHi("up");
        currentSection = "work";
        updateContentFromFile(lang, currentSection);

        $("#myNav").animate({
            opacity: 0
        }, 50, function() {
            $("#myNav").hide();
            elementVisibility(".backbtn", true);
            elementVisibility(".sectionTitle", true);
            elementVisibility(".sectionContent", true)
            
            elementVisibility(".ProgLanguageGrid", true);
            elementVisibility(".GenDescTitle", true);
            elementVisibility(".GenDescContent", true);
            elementVisibility(".WhatDoIKnow", true);
            elementVisibility(".OpenSource", true);
            elementVisibility(".workContent", true); 
        }); 
    });

    $(".about").click(function() { 
        moveLine("left");
        moveHi("up"); 

        currentSection = "about";
        updateContentFromFile(lang, currentSection);

        $("#myNav").animate({
            opacity: 0
        }, 50, function() {
            $("#myNav").hide();

            elementVisibility(".backbtn", true);
            elementVisibility(".aboutImages", true);
            
            elementVisibility(".sectionTitle", true);
            elementVisibility(".sectionContent", true);
            
            elementVisibility(".aboutContent", true);
            
        });
    });

    $(".backbtn").click(function() { 
        currentSection = "base";
        updateContentFromFile(lang, currentSection);
        moveLine("right");
        moveHi("down"); 
        
        elementVisibility(".backbtn", false);
        elementVisibility("#myNav", true);

        
        elementVisibility(".sectionTitle", false);
        elementVisibility(".sectionContent", false);
        elementVisibility(".aboutImages", false);
        elementVisibility(".aboutContent", false);
        elementVisibility(".ProgLanguageGrid", false);
        elementVisibility(".GenDescTitle", false);
        elementVisibility(".GenDescContent", false);
        elementVisibility(".WhatDoIKnow", false);
        elementVisibility(".OpenSource", false);
        elementVisibility(".workContent", false); 
    });


    $(window).scroll(function(event) {

        currentPos = getScrollPercentage();
        currentRelative = Math.round(getScrollPercentage() / 3.6);
        var elements = ["#me1", "#me2", "#me3", "#me4", "#me5", "#me6", "#me7", "#me8", "#me9",
                        "#me21", "#me22", "#me23", "#me24", "#me25", "#me26", "#me27", "#me28", "#me29",
                        "#bb1", "#bb2", "#bb3", "#bb4", "#bb5", "#bb6", "#bb7", "#bb8", "#bb9"];
        var lower = 0;
        var higher = 0;

        if(currentRelative <= 3) {
            lower = 0;
            higher = lower + 8;
        } else if(currentRelative >= 23) {
            higher = 26;
            lower = higher - 8;
        } else {
            lower = currentRelative - 4;
            higher = currentRelative + 4;
        }

        for(i = 0; i < 27; i++) {
            var element = $(elements[i]).children("div.flipper");
            if(i >= lower && i <= higher) {
                if(!element.hasClass("visible")) {
                    element.addClass("visible");
                    element.css({
                        transform: "rotateY(180deg)"
                    });
                }
            } else {
                if(element.hasClass("visible")) {
                    element.removeClass("visible");
                    element.css({
                        transform: "rotateY(0deg)"
                    });
                }
            }
    
        }

        // $(".flipper").each(function(i, el) {
        //     var el = $(el);
        //     var degree = 0;
        //     if (el.visible(true)) {
        //         degree = 180;
        //     } else {
        //         degree = 0;
        //     } 
        //     var formattedDegree = "rotateY(" + degree + "deg)";
        //     el.css({
        //         transform: formattedDegree
        //     });
        // });
    });
});