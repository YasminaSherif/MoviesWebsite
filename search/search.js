$(document).ready(function(){
    
    $("#click").click(function(){
        var str = $("#name").val().toLocaleLowerCase();
        const myMovies=['disturbing the peace','bad boys for life','bloodshot','quite place 2','dune','the high note'];
        
        $(".heading2 h1").html("Your Ruslets is:");
        
        if(str == myMovies[0]){
                $(".row .item").show();
                $("#movie2,#movie3,#movie4,#movie5,#movie6").css("display","none");
            }
        else if(str == myMovies[1]){
                $(".row .item").show();
                $("#movie1,#movie3,#movie4,#movie5,#movie6").css("display","none");
            }
        else if(str == myMovies[2]){
                $(".row .item").show();
                $("#movie2,#movie1,#movie4,#movie5,#movie6").css("display","none");
            }
        else if(str == myMovies[3]){
                $(".row .item").show();
                $("#movie2,#movie3,#movie1,#movie5,#movie6").css("display","none");
            }
        else if(str == myMovies[4]){
                $(".row .item").show();
                $("#movie2,#movie3,#movie4,#movie1,#movie6").css("display","none");
            }
         else if(str == myMovies[5]){
                $(".row .item").show();
                $("#movie2,#movie3,#movie4,#movie1,#movie5").css("display","none");
            }
        else{
               $(".row").css("display","none");
               $(".section2").html("<h1 style='text-align: center'>Not found</h1><br><p style='text-align: center'>you can find more in <a href='../home/home.html' style='color: hotpink; font-weight: bold';>Home</a></p> <br><p style='text-align: center'>wanna search again? <a href='search.html' style='color: darkblue; font-weight: bold';><i class='fas fa-search'></i></a></p>");
               
        }
               
        
    });
});
