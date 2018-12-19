$(document).ready(function () {
    $("#menu li").hover(function () {
        $(".dropdown-list", this).clearQueue().delay(100).fadeIn()
    }, function () {
        $(".dropdown-list", this).stop().delay(200).fadeOut()
    })
})

const divArr = ["about", "login", "more1", "more2", "more3"]

function toggle(x) {
    var i;
    for (i=0; i<divArr.length; i++) {
        if (x === divArr[i]) {
            $("#" + divArr[i]).css("display", "block")
            console.log(divArr[i])
        } else {
            $("#" + divArr[i]).css("display", "none")
        }
    }
}
