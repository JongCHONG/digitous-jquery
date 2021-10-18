$(function(){
    $(".btn").click(function () {
        $("#exercise input").removeAttr("disabled")
    })
})
// By using removeAttr(), you are completely removing the disabled attribute itself - 
// while prop() is merely setting the property's underlying boolean value to false.