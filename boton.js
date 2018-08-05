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
/* Boton pestaña 4 step 2 */
$('.pop-up').hide(0);
$('.pop-up-container').hide(0);

$('.pop-up-button').click(function(){
  $('.pop-up-container').show(0);
  $('.pop-up').fadeIn(300);
  $('.pop-up-button').hide(0);
});
$('.pop-up span').click(function() {
  $('.pop-up-container').hide(0);
  $('.pop-up').hide(0);
  $('.pop-up-button').show(0);
});


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

/* PESTAÑA 6: SLIDER*/
// initialize is-active and is-visible states on "first" tab and slides.
$("[class^=slide]").find("li").eq(0).addClass("is-active");
$("[class$=content]").find("[class$=pane]").eq(0).addClass("slide--content__pane--is-visible");

// click functions for tabs and slides
$("[class^=slide]").on("click", "li", function(){
  var $this = $(this),
    listIndex = $this.index(); // gets the index of the clicked list item
  
  // add active class to currently "clicked" list item
  $this.closest("ul").find("li").removeClass("is-active"); // remove class from previously clicked li's
  $this.addClass("is-active"); // add to newly clicked li
  
  // display associated pane and associate the pane of the same index with the list item being clicked
  var paneIndex = $(".slide--content__pane:eq(" + listIndex + ")");
  $(".slide--content").children().removeClass("slide--content__pane--is-visible");
  paneIndex.addClass("slide--content__pane--is-visible");
});


/* CARRUSEL PESTAÑA 6*/
var carousel = $('#carousel'),
    threshold = 150,
    slideWidth = 500,
    dragStart, 
    dragEnd;

$('#next').click(function(){ shiftSlide(-1) })
$('#prev').click(function(){ shiftSlide(1) })

carousel.on('mousedown', function(){
  if (carousel.hasClass('transition')) return;
  dragStart = event.pageX;
  $(this).on('mousemove', function(){
    dragEnd = event.pageX;
    $(this).css('transform','translateX('+ dragPos() +'px)')
  })
  $(document).on('mouseup', function(){
    if (dragPos() > threshold) { return shiftSlide(1) }
    if (dragPos() < -threshold) { return shiftSlide(-1) }
    shiftSlide(0);
  })
});

function dragPos() {
  return dragEnd - dragStart;
}

function shiftSlide(direction) {
  if (carousel.hasClass('transition')) return;
  dragEnd = dragStart;
  $(document).off('mouseup')
  carousel.off('mousemove')
          .addClass('transition')
          .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
  setTimeout(function(){
    if (direction === 1) {
      $('.slides:first').before($('.slides:last'));
    } else if (direction === -1) {
      $('.slides:last').after($('.slides:first'));
    }
    carousel.removeClass('transition')
    carousel.css('transform','translateX(0px)'); 
  },700)
}
