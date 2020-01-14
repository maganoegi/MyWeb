

$(document).ready(function(){

    // ---------------------------------------------------------
    // -------- Initial Visibility Parameters ------------------
    // ---------------------------------------------------------


    elementVisibility(".workContent", false);
    elementVisibility(".aboutContent", false);
    elementVisibility(".aboutImages", false);
    elementVisibility(".sectionTitle", false);
    elementVisibility(".sectionContent", false);
    elementVisibility(".ProgLanguageGrid", false);

    // ---------------------------------------------------------
    // ----------------------- Language Handler ----------------
    // ---------------------------------------------------------
    var lang = "en";
    var currentSection = "base";

    showActiveLanguage(".en");
    updateNavLanguage("en");

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
            elementVisibility(".spotifyContainer", true);
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

            AnimateFirstPicture() 
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
        elementVisibility(".spotifyContainer", false);

    });


    // ---------------------------------------------------------
    // ---------- About Photo Scrolling behaviour --------------
    // ---------------------------------------------------------

    $(window).scroll(function(event) {

        currentPos = getScrollPercentage();
        currentRelative = Math.round(getScrollPercentage() / 3.6);

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
            var element = $(Picturelements[i]).children("div.flipper");
            if(i >= lower && i <= higher) {
                if(!element.hasClass("visible")) {
                    flip(element);
                }
            } else {
                if(element.hasClass("visible")) {
                    backflip(element);
                }
            }
    
        }
    });
});