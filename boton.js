var outButton = document.querySelector('.click'),
    pop = document.getElementById('click_button');
var main = document.getElementById("window");
var shadow = document.querySelector("body");
var hide = document.getElementById("close");

function simulator_FB (){
  "use strict"
  main.style.display = "block";
  shadow.style.backgroundColor = "rgba(0, 0, 0, 0.38)"
}

function simulator_FB_close (){
  "use strict"
  main.style.display = "none";
   shadow.style.backgroundColor = "#FFF"

}

/* LIGHTBOX */

$(document).ready(function () {
    "use strict";
    $(".lightbox").click(function () {
        var imgsrc = $(this).attr('src');
        $("body").append("<div class='img-popup'><span class='close-lightbox'>&times;</span><img src='" + imgsrc + "'></div>");
        $(".close-lightbox, .img-popup").click(function () {
            $(".img-popup").fadeOut(500, function () {
                $(this).remove();
            }).addClass("lightboxfadeout");
        });

    });
    $(".lightbox").click(function () {
        $(".img-popup").fadeIn(500);
    });

});

/*PESTAÑA 5*/

var tabbedContent = function() {
    //get all tab link elements
    var tab = document.getElementsByClassName("tab-link");
    //get all tab content elements
    var tabContent = document.getElementsByClassName("tab-content");
    //loop through each tab
    for (var i = 0; i < tab.length; i++) {
        //add click event listener to all tab links
        tab[i].addEventListener('click', function() {
            //each time tab clicked remove all current classes
            //remove 'current' class from all tabs
            for (var i = 0; i < tab.length; i++) {
                tab[i].classList.remove('current');
            };
            //remove 'current' class from all tab content
            for (var i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove('current');
            };
            //add current class back to the clicked tab
            this.className += ' current';
            //get data-tab attribute of what has been clicked
            var matchingTab = this.getAttribute('data-tab');
            //add current class to the tabContent element thats id matches the data-tab of the clicked tab
            document.getElementById(matchingTab).className += ' current';
        }, false);
    }
}

tabbedContent();