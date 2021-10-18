$(function(){
    $(".btn").click(function(){
        $("#bg").css('position', 'absolute')
        $("#bg").animate({
            left: '100px'
        }, 3000, function() { 
          console.log("animation terminée !");
        });
    });
})