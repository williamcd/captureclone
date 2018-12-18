$(document).ready(function () {
    $("#menu li").hover(function () {
        $(".dropdown-list", this).delay(100).animate({ height: "toggle" })
    }, function () {
        $(".dropdown-list", this).stop().delay(100).animate({ height: "toggle" }).addClass("hidden")
    })
})
if ($(this).hasClass('hide')) {
    $(this).animate({ height: 40 }, 200).removeClass('hide');
} else {
    $(this).animate({ height: 10 }, 200).addClass('hide');
}