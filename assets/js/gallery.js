$like_listener = function () {
    console.log($(this).siblings(".counter").text());
    $(this).toggleClass("is-active");
    if (!$(this).data("is_like_pressed")) {
        $(this).data("is_like_pressed", true);
        $(this).siblings(".counter").text("1");
    } else {
        $(this).data("is_like_pressed", false);
        $(this).siblings(".counter").text("0");
    }
}

$(function() {
    $(".heart").each(function(index, element) {
        $(element).data("is_like_pressed", false);
        $(element).on("click", $like_listener);
    })
});