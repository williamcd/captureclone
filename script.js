$(document).ready(function () {
    $("#menu li").hover(function () {
        $(".dropdown-list", this).delay(100).animate({ height: "toggle" })
    }, function () {
        $(".dropdown-list", this).stop().delay(200).animate({ height: "toggle" })
    })

    $("#menu li").click(function() {
        console.log(this.val)
    })
})
