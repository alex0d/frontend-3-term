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

})