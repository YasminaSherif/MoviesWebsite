
$(function(){
    // scroll to top
    
   $(window).scroll(function(){

       var scrollToTop = $('.scroll-to-top');
       
       if ($(window).scrollTop() >= 200)
       {
           
           if (scrollToTop.is(':hidden'))
           {
               scrollToTop.fadeIn(400);
           }
       }
       
       else
       {
           scrollToTop.fadeOut(400);
       }
   });
    
    // click on scroll to top to go up
    
    $('.scroll-to-top').click(function(event){
        
       event.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 700);
        
    });
    
});