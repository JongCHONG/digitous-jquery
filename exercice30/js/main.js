$(function() {
    $("#exercise input").keyup(function() {
        if ($("#exercise input").val().length > 5) {
            $("#exercise input").addClass("is-valid")
        } else {
            $("#exercise input").addClass("is-invalid")

        }
    })
    
})