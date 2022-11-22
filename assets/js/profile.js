$(function () {
    $("#register").on("click", function () {
        let ans = prompt("Желаете пройти регистрацию?");
        if (ans === "Да") {
            alert("Круто!");
        } else {
            alert("Попробуй еще раз!");
        }
    });

    $(".background-square").eq(0).on("click", function () {
        let login = prompt("Секретный вход. Введите логин");
        if (login === "Админ") {
            let password = prompt("Введите пароль");
            if (password === "Я главный") {
                alert("Здравствуйте!");
            } else if (password == null) {
                alert("Отменено");
            } else {
                alert("Неверный пароль");
            }
        } else if (login == null || login === "") {
            alert("Отменено");
        } else {
            alert("Я вас не знаю");
        }
    });


    function generate_random_letters() {
        let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let random_letters = "";
        for (let i = 0; i < 5; i++) {
            random_letters += letters[Math.floor(Math.random() * letters.length)];
        }
        return random_letters;
    }

    function get_random_number(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let $log_in_button = $("#log-in");

    let $captcha_user_input = $("#captcha-enter");
    $captcha_user_input.val("");

    let $captcha_submit_button = $(".btn-enter-captcha");

    let $captcha_generated_text = $("#captcha-generated");
    $captcha_generated_text.text(generate_random_letters());

    let N = get_random_number(1, 10);
    let M = get_random_number(1, 10);

    let captcha_success = false;
    let number_of_attempts = 0;

    function check_captcha() {
        console.log($captcha_user_input.val());
        if ($captcha_user_input.val() === "") {
            $captcha_generated_text.css("color", "red");
            $captcha_user_input.css("border-color", "red");

            setTimeout(function() {
                $captcha_generated_text.css("color", "");
                $captcha_user_input.css("border-color", "");
            }, 700);
        } else if ($captcha_user_input.val() === $captcha_generated_text.text() || $captcha_user_input.val() === (N + M).toString()) {
            captcha_success = true;
            $captcha_submit_button.attr("disabled", true);
            $captcha_user_input.attr("disabled", true);
            $captcha_submit_button.text("✅");
            $log_in_button.removeAttr("disabled");
        } else if (number_of_attempts < 1) {
            number_of_attempts++;
            $(".captcha p").text("Решите пример")
            $captcha_generated_text.text(`${N} + ${M} = ?`);
            $captcha_user_input.val("");
        } else {
            $captcha_submit_button.attr("disabled", true);
            $captcha_user_input.attr("disabled", true);
            $captcha_submit_button.text("❌");
            $log_in_button.attr("disabled", true);
            $captcha_generated_text.css("display", "none");
            $(".captcha p").text("Вы не справились. Попробуйте позже");
        }

    }

    $captcha_submit_button.on("click", check_captcha);

    $log_in_button.on("click", function () {
        $(".captcha").css("visibility", "visible");
        $(".captcha").css("opacity", "1");
        if (!captcha_success) {
            $log_in_button.attr("disabled", true);
        }
    });

})