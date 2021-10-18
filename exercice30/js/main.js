$(function() {
    $("#exercise input").keyup(function() {
        if ($("#exercise input").val().length > 5) {
            $("#exercise input").addClass("is-valid")
            $("#exercise input").removeClass("is-invalid")
        } else {
            $("#exercise input").addClass("is-invalid")
            $("#exercise input").removeClass("is-valid")
        }
    })
    
})