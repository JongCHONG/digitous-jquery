$(function(){
    $(".btn").click(function(){
        $("#text").animate({
            "font-size": '50px'
        }, 3000, function() { 
          console.log("animation terminée !");
        });
    });
})