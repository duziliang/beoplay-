$("h1").hover(function () {
    var $h1 = $(this);
    for (var i = 0; i < 3; i++) {
        $h1.fadeOut().fadeIn();
    }
    $h1.fadeOut();
});

$("#aa").hover(function () {
    var $h1 = $(this);
    for (var i = 0; i < 10; i++) {
        $h1.fadeOut().fadeIn();
    }
    $h1.fadeOut();
});
$("#aa1,#aa2").hover(function () {
    var $aa = $(this)
    $aa.animate({
        width: 500,
        height: 500,
        opacity: 0,
        marginLeft: -100,
        marginTop: -100,
    }, 5000,).animate({
        width: 299,
        height: 299,
        opacity: 1,
        marginLeft: 0,
        marginTop: 0,
    }, 10)
});
$("#er3").on("click", function () {
    $("#er1").addClass("er111")
    $("#er2").addClass("er222").animate({
        marginLeft: -150,
    }, 200)
    $("#er3").animate({
        marginLeft: -150,
    }, 200)
}) 
$(".bg-3").hover(function(){
    var $bg=$(this);
    $bg.addClass("bg-3")
    $bg.addClass("bg-31")
})
$("h2").hover(function(){
    var $h2=$(this);
    $h2.addClass("h2")
   $h2.addClass("h2-color")
})