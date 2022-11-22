$(function () {
    function truncate(str, maxLength) {
        if (str.length > maxLength) {
            return str.substring(0, maxLength - 3) + '...';
        }
        return str;
    }

    $(".img_element p").each(function(index, element) {
        let $element = $(element);
        let text = $element.text();
        let textWidth = $element.width();
        let fontSize = parseInt($element.css("font-size"));

        let maxLength = Math.floor(textWidth / fontSize);
        let newText = truncate(text, maxLength);
        $element.text(newText);
    })
})