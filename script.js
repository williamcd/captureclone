$(document).ready(function () {
    // set all divs (except home) to display: none; initially.
    // this allows each div to use flex, as the fadeIn method defaults to display: block;
    const divArr = ["login", "more1", "more2", "more3"]
    var i;
    for (i=0; i<divArr.length; i++) {
        $("#" + divArr[i]).css("display", "none")
    }
    // when hovering over a menu option
    $("#menu li").hover(function () {
        // check if that menu li has a child of .dropdown-list
        // clear animations for that list, fade in
        $(".dropdown-list", this).clearQueue().delay(100).fadeIn()
    }, function () {
        // on mouseout, stop any animations and fade out
        $(".dropdown-list", this).stop().delay(200).fadeOut()
    })
})

// view toggle logic
// divArr defines the options
const divArr = ["about", "login", "more1", "more2", "more3"]
function toggle(x) {
    $("#home").css("display", "none")
    var i;
    // the toggle(x) function takes an input and loops through each option
    for (i=0; i<divArr.length; i++) {
        // if input = an option, set that option's display to flex
        if (x === divArr[i]) {
            $("#" + divArr[i]).delay(200).fadeIn(200)
        // all non-matching options are faded out
        } else {
            $("#" + divArr[i]).fadeOut(200)
        }
    }
};

// changes input type to either password or text
function togglePassword() {
    var input = document.getElementById("password")
    if (input.type === "password") {
        input.type = "text"
    } else {
        input.type = "password"
    }
};