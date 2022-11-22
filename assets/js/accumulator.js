$(function () {
    function Basket(startingValue) {
        this.value = startingValue;
    }

    let baskets = [];

    let $cards = $(".card");

    for (let card of $cards) {
        let $card = $(card);
        baskets[$card.attr('id')] = new Basket(0);

        let $volume = $card.find(".volume");

        let $button = $card.find(".btn-increase");
        $button.on("click", function () {
            let n = parseInt(prompt("Сколько прибавить?"));
            if (!isNaN(n)) {
                baskets[$card.attr('id')].value += parseInt(n);
                $volume.text(baskets[$card.attr('id')].value);
            } else {
                alert("Введите целое число!");
            }
        });
    }
})