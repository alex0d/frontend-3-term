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
    });

    const currentMousePos = {x: -1, y: -1};
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
    });

    let $draw_pictures = false;

    function draw_heart(e = null) {
        let timeout = 100;
        let action = function() {
            if ($draw_pictures) {
                $("body").append("<div class='black_heart'></div>");
                let $heart = $(".black_heart").last();
                $heart.text("❤");
                $heart.css({
                    "font-size": "2rem",
                    "position": "absolute",
                    "z-index": 1000,
                    "left": currentMousePos.x,
                    "top": currentMousePos.y,
                });
                setTimeout(action, timeout);
            }
        }
        action();
    }

    $(".btn-add-image").on("click", function() {
        $draw_pictures = !$draw_pictures;
        draw_heart();
    });
});