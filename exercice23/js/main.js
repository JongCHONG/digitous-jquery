$(function(){
    $(".btn").click(function(){
        $("#square").animate({
            left: '400px',
            top: '190px'
        }, 3000, function() { 
          console.log("animation terminée !");
        });
    });
})