$(document).ready(function () {
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
            $("#" + divArr[i]).css("display", "flex")
        // if the logo is clicked, input is "home", returns to home view
        } else if (x === "home") {
            $("#" + divArr[i]).css("display", "none")
            $("#home").css("display", "block")
        // all options that != input are set to display: none;
        } else {
            $("#" + divArr[i]).css("display", "none")
        }
    }
}
