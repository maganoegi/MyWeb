

// ---------------------------------------------------------
// ----------------------- Functions -----------------------
// ---------------------------------------------------------


let four_span = "<span></span><span></span><span></span><span></span>";

let Picturelements = ["#me1", "#me2", "#me3", "#me4", "#me5", "#me6", "#me7", "#me8", "#me9",
    "#me21", "#me22", "#me23", "#me24", "#me25", "#me26", "#me27", "#me28", "#me29",
    "#bb1", "#bb2", "#bb3", "#bb4", "#bb5", "#bb6", "#bb7", "#bb8", "#bb9"];

function elementVisibility(element, expression) {
    let speed = 50;
    if(expression) {
        $(element).show("fast", function() {
            $(element).animate({
                opacity: 1
            }, speed);
        });
    } else {
        $(element).animate({
            opacity: 0
        }, speed, function() {
            $(element).hide("fast");
        });
    }
}

// Move the name up or down
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
    let val = 0;
    if(direction == "left") {
        val = 1;
    }

    $(".s1").animate({opacity: val}, delay, function() {
        $(".s2").animate({opacity: val}, delay, function() {
            $(".s3").animate({opacity: val}, delay, function() {
                $(".s4").animate({opacity: val}, delay, function() {
                    $(".s5").animate({opacity: val}, delay, function() {
                        $(".s6").animate({opacity: val}, delay, function() {
                            $(".s7").animate({opacity: val}, delay, function() {
                                $(".s8").animate({opacity: val}, delay);
                            });
                        });
                    });
                });
            });
        });
    });
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

// Animation picture when "about" opened
function AnimateFirstPicture() {
    for(var i = 0; i < 9; i++) {
        var element = $(Picturelements[i]).children("div.flipper");
        if(!element.hasClass("visible")) {
            flip(element);
        }
    }
}

function flip(element) {
    element.addClass("visible");
    element.css({
        transform: "rotateY(180deg)"
    });
}

function backflip(element) {
    element.removeClass("visible");
    element.css({
        transform: "rotateY(0deg)"
    });
}

