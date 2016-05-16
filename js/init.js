(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.carousel').carousel();
    $('#modal1').openModal();
    $('.slider').slider('start');
    $('input#input_text, textarea#textarea1').characterCounter();
    var scroll_pos = 0;
           $(document).scroll(function() {
               scroll_pos = $(this).scrollTop();
               if(scroll_pos > 200) {
                  //  $(".twotwo").css('display', 'none');
                   $("nav a").css('color', '#3A6013');

               } else {
                  //  $("nav").css('background-color', 'red');
                   $("nav a").css('color', 'black');
               }
           });
           var options = [
             {selector: '.carousel', offset: 30, callback: function() {
   Materialize.toast("Here is my story", 1500 );
 } },
             {selector: '#ninja', offset: 50, callback: function() {
   Materialize.toast("Check out my Projects", 2500 );
 } },
 {selector: '#ninja', offset: 225, callback: function() {
   Materialize.toast("Let's create something BEAUTIFUL!", 4500 );
 } },
 {selector: '#ninja', offset: 400, callback: function() {
   Materialize.showStaggeredList("#staggered-test");
 } },

  ];
  Materialize.scrollFire(options);





  }); // end of document ready
})(jQuery); // end of jQuery name space
