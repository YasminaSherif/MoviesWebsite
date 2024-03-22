$(document).ready(function(){
var slideIndex=0;
autoSlide();
    function autoSlide(){
        var i;
        var slide=document.getElementsByClassName("mySlide");
        for(i=0;i<slide.length;i++){
            slide[i].style.display="none";
        }
        slideIndex++
        if(slideIndex > slide.length){
            slideIndex=1
        }
        slide[slideIndex-1].style.display="inline-flex";
        setTimeout(autoSlide,5000);
    }
    /* start movies */
    $(".last").click(function(){
        $(".all-menu").toggle("slow");
    })
    
     $(".mov").click(function(){
        $(".menu").toggle();
    })
    
    $(".show").click(function(){
        $(".menu-2").toggle();
    })
    
    $("#action").click(function(){
       $(".action").fadeIn("slow",function(){
           $(".none-f,.none-d,.none-c").fadeOut('slow');
           $("#action").css("color","olivedrab");
           $("#fiction,#drama,#comedy").css("color","white");
       });
    })
    
    
    $("#fiction").click(function(){
       $(".none-f").fadeIn("slow",function(){
           $(".action,.none-d,.none-c").fadeOut('slow');
           $("#fiction").css("color","olivedrab");
           $("#action,#drama,#comedy").css("color","white");
       });
    })
    
    
     $("#drama").click(function(){
       $(".none-d").fadeIn("slow",function(){
           $(".action,.none-f,.none-c").fadeOut('slow');
           $("#drama").css("color","olivedrab");
           $("#action,#fiction,#comedy").css("color","white");
       });
    });
    
    
     $("#comedy").click(function(){
       $(".none-c").fadeIn("slow",function(){
           $(".action,.none-f,.none-d").fadeOut('slow');
           $("#comedy").css("color","olivedrab");
           $("#action,#fiction,#drama").css("color","white");
       });
    });
    /*end movie*/
    
    /*start show */
    $("#action-show").click(function(){
        $(".action-show").fadeIn("slow",function(){
            $(".none-fs,.none-ds,.none-cs").fadeOut("slow");
            $("#action-show").css("color","#B37D00");
            $("#fiction-show,#drama-show,#comedy-show").css("color","white");
        });
    });
    
    
    $("#fiction-show").click(function(){
        $(".none-fs").fadeIn("slow",function(){
            $(".action-show,.none-ds,.none-cs").fadeOut("slow");
            $("#fiction-show").css("color","#B37D00");
            $("#action-show,#drama-show,#comedy-show").css("color","white");
        });
    });
    
    
     $("#drama-show").click(function(){
        $(".none-ds").fadeIn("slow",function(){
            $(".action-show,.none-fs,.none-cs").fadeOut("slow");
            $("#drama-show").css("color","#B37D00");
            $("#action-show,#fiction-show,#comedy-show").css("color","white");
        });
    });
    
    
     $("#comedy-show").click(function(){
        $(".none-cs").fadeIn("slow",function(){
            $(".action-show,.none-ds,.none-fs").fadeOut("slow");
            $("#comedy-show").css("color","#B37D00");
            $("#action-show,#drama-show,#fiction-show").css("color","white");
        });
    });
    
    /* $(".next button").click(function(){
       $(".firstSoon").fadeOut(function(){
           $(".secondSoon").css("opacity","1");
           $(".next button").css("marginTop","290px");
           $(".next button").text("see more");
       });
    });*/
       $(".next button").click(function(){
            $(".soon img").attr("src","suicide-squad-1.jpg");
            $(".content-2 .name2").html("Suicide Squad");
            $(".content-2 .name2").css("marginLeft","140");
            $(".content-2 p").html("Amanda Waller assembles a team of imprisoned supervillains to execute dangerous black ops missions. When an ancient witch threatens to destroy mankind the squad is sent to stop her.");
            $(".content-2 p").css("marginLeft","5");
            $(".info2").css("marginLeft","5");
            $(".next button").html("<a href='../coming%20soon/coming_soon.html' style='color:black'>see more</a>");
         });
    
    $(".mid button").click(function(){
        $(".menu-compare").toggle();
    })
    
         var votes1=3605;
         var i=1;
    $(".like").click(function(){
        $(".numVotes p .top").html(votes1+i);
        alert("thank you! your vote have been counted");
        i++;
    });
        var votes2=250;
        var z=1;
    $(".dislike").click(function(){
        $(".numVotes p .bottom").html(votes2+z);
        alert("thank you! your vote have been counted");
        z++;
    });
    
        var votes3=2550;
        var x=1;
    $(".like2").click(function(){
        $(".numVotes2 p .top2").html(votes3+x);
        alert("thank you! your vote have been counted");
        x++;
    });
        var votes4=160;
        var y=1;
    $(".dislike2").click(function(){
        $(".numVotes2 p .bottom2").html(votes4+y);
        alert("thank you! your vote have been counted");
        y++;
    });
    });

