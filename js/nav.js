



// ---------------------------------------------------------
// ----------------------- Functions -----------------------
// ---------------------------------------------------------

function DynamicResizeContainer(section) {
    var container_height = document.getElementById("container").offsetHeight;
    switch (section) {
        case "work":
            var git_height = document.getElementById("my-github-projects").offsetHeight;
            var new_height = (container_height + git_height);
            // console.log(container)
            document.getElementById("container").style.height = new_height;
            break;
        case "back":
            break;
        case "about":
            break;
        case "contact":
            break;
        default:
            break;
    }
}

function elementVisibility(element, expression) {
    if(expression) {
        $(element).css("opacity", "1");
        $(element).css("visibility", "visible");
    } else {
        $(element).css("opacity", "0");
        $(element).css("visibility", "hidden");
    }
}

// PERFORMANCE SUCKS
function elementNotHidden(element, expression) {
    if(expression) {
        $(element).show("fast", function() {
            $(element).css("opacity", "1");
            $(element).css("visibility", "visible");
        });
    } else {
        $(element).hide("fast", function() {
            $(element).css("opacity", "0");
            // $(element).css("visibility", "hidden");
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
        $(".sectionTitle").text(data[lang][section]["title"]);
        switch(section) {
            case "about":
                var obj = $(".aboutContent").html(data[lang][section]["content"]);
                obj.html(obj.html().replace(/\n/g,'<br/>'));
                break;
            case "work":
                var obj0 = $(".GenDescTitle").html(data[lang][section]["GenDescTitle"]);
                var obj1 = $(".GenDescContent").html(data[lang][section]["GenDescContent"]);
                obj1.html(obj1.html().replace(/\n/g,'<br/>'));

                var obj2 = $(".WhatDoIKnow").html(data[lang][section]["WhatDoIKnow"]);
                var obj3 = $(".OpenSource").html(data[lang][section]["OpenSource"]);
                break;
            case "contact":
                break;
            default: 
                break;
        }
    }});
}

function showActiveLanguage(target) {
    var allLang = [".en", ".fr", ".sp", ".ru", ".nl"];
    allLang.forEach(element => {
        if(element == target) {
            $(element).animate({"background-color":"black","color":"transparent !important"}, 100);
        } else {
            $(element).animate({"background-color":"transparent","color":"black"}, 500);
        }
    });
}

function updateNavLanguage(lang) {
    var four_span = "<span></span><span></span><span></span><span></span>";
    $.ajax({url: "../resources/international.json", dataType: "json", success: function(data){
        $("div.about").html(data[lang]["about"]["nav"] + four_span);
        $("div.work").html(data[lang]["work"]["nav"] + four_span);
        $("div.contact").html(data[lang]["contact"]["nav"] + four_span);
    }});
}



// ---------------------------------------------------------
// ----------------------- Main ----------------------------
// ---------------------------------------------------------

$(document).ready(function(){
    elementNotHidden(".workContent", false);
    elementNotHidden(".aboutContent", false);
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
    showActiveLanguage(".en");
    updateNavLanguage(".en");

    // TODO: implement content update upon language change.
    $(".en").click(function () { 
        lang = "en";
        showActiveLanguage(".en");
        updateNavLanguage("en");
        updateContentFromFile(lang, "about");
        updateContentFromFile(lang, "work");
        updateContentFromFile(lang, "contact");

    });
    $(".fr").click(function () { 
        lang = "fr";
        showActiveLanguage(".fr");
        updateNavLanguage("fr");
        updateContentFromFile(lang, "about");
        updateContentFromFile(lang, "work");
        updateContentFromFile(lang, "contact");

    });
    $(".sp").click(function () { 
        lang = "es";
        showActiveLanguage(".sp");
        updateNavLanguage("sp");
        updateContentFromFile(lang, "about");
        updateContentFromFile(lang, "work");
        updateContentFromFile(lang, "contact");
    });
    $(".ru").click(function () { 
        lang = "ru";
        showActiveLanguage(".ru");
        updateNavLanguage("ru");
        updateContentFromFile(lang, "about");
        updateContentFromFile(lang, "work");
        updateContentFromFile(lang, "contact");
    });
    $(".nl").click(function () { 
        lang = "nl";
        showActiveLanguage(".nl");
        updateNavLanguage("nl");
        updateContentFromFile(lang, "about");
        updateContentFromFile(lang, "work");
        updateContentFromFile(lang, "contact");
    });



    // ---------------------------------------------------------
    // ------------------- Navigation Handler ------------------
    // ---------------------------------------------------------
    $(".contact").click(function() { 
        updateContentFromFile(lang, "contact", ".contactContent");
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
        updateContentFromFile(lang, "work", ".workContent");
        elementVisibility(".backbtn", true);
        elementVisibility(".contact", false);
        elementVisibility(".about", false);
        elementVisibility(".work", false);
        elementNotHidden(".ProgLanguageGrid", true);
        elementVisibility(".GenDescTitle", true);
        elementVisibility(".GenDescContent", true);
        elementVisibility(".WhatDoIKnow", true);
        elementVisibility(".OpenSource", true);

        moveLine("left");
        moveHi("up");

        elementVisibility(".contentGrid", true);
        elementVisibility(".sectionContent", true);
        elementNotHidden(".workContent", true); 
        DynamicResizeContainer("work");
    });

    $(".about").click(function() { 
        updateContentFromFile(lang, "about", ".aboutContent");
        elementVisibility(".backbtn", true);
        elementVisibility(".contact", false);
        elementVisibility(".about", false);
        elementVisibility(".work", false);
        moveLine("left");
        moveHi("up"); 

        elementVisibility(".contentGrid", true);
        elementVisibility(".sectionContent", true);
        elementNotHidden(".aboutContent", true);
    });

    $(".backbtn").click(function() { 
        elementVisibility(".backbtn", false);
        elementVisibility(".about", true);
        elementVisibility(".contact", true);
        elementVisibility(".work", true);
        elementNotHidden(".ProgLanguageGrid", false);
        elementVisibility(".GenDescTitle", false);
        elementVisibility(".GenDescContent", false);
        elementVisibility(".WhatDoIKnow", false);
        elementVisibility(".OpenSource", false);

        moveLine("right");
        moveHi("down"); 

        elementVisibility(".contentGrid", false);
        elementVisibility(".sectionContent", false);
        elementNotHidden(".workContent", false);
        elementNotHidden(".aboutContent", false);

    });

});