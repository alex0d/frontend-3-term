const NOTIFICATION_LIST = [
    "В Калининграде создадут космический двигатель на воде",
    "Космическая сенсация. Что увидели ученые в Млечном Пути",
    "ГА ООН приняла резолюцию России о неразмещении оружия в космосе",
    "Черная дыра направила мощное излучение к Земле",
    "В России разработали новую технологию уборки космического мусора",
    "Космический аппарат, запущенный с космодрома Плесецк, вывели на орбиту"
];

$(function () {
    let $dropdown = $('.dropdown');
    let $dropdown_menu = $('.dropdown-menu');
    let $notification_count = $('.badge-notification');
    let count = 0;

    $dropdown.on('click', function(e){
        // Kill click event:
        e.stopPropagation();
        // Toggle dropdown if not already visible:
        if ($('.dropdown').find('.dropdown-menu').is(":hidden") && count > 0){
            $('.dropdown-toggle').dropdown('toggle');
        } else if (count > 0) {
            // If dropdown is visible, hide it:
            $('.dropdown-toggle').dropdown('toggle');
        }
    });

    // Hide dropdown when clicking outside it:
    $(document).on('click', function() {
        if ($('.dropdown').find('.dropdown-menu').is(":visible")){
            $('.dropdown-toggle').dropdown('toggle');
        }
    });


    function changeNotification(cmd) {
        count++;
        $notification_count.text(count);
        $dropdown_menu.prepend('<a class="dropdown-item text-wrap" href="#">' + NOTIFICATION_LIST[count - 1] + '</a>');

        if (count > 10) {
            $dropdown_menu.find('a:last').remove();
        }
    }

    function notificationDecorator(func) {
        return function() {
            if (count >= NOTIFICATION_LIST.length - 1) {
                clearInterval(intervalId);
            }
            func();
        }
    }

    changeNotification = notificationDecorator(changeNotification);
    let intervalId  = setInterval(changeNotification, 7000, 0);
})