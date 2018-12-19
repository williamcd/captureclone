$(document).ready(function () {
    $("#menu li").hover(function () {
        $(".dropdown-list", this).clearQueue().delay(100).fadeIn()
    }, function () {
        $(".dropdown-list", this).stop().delay(200).fadeOut()
    })
})
