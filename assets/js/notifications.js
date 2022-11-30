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
        $dropdown_menu.prepend('<a class="dropdown-item" href="#">' + 'Новость #' + count + '</a>');

        if (count > 10) {
            $dropdown_menu.find('a:last').remove();
        }
    }

    function notificationDecorator(func) {
        return function(cmd) {
            if (cmd === 1) {
                clearInterval(intervalId)
                setTimeout(function() {
                    func
                    intervalId = setInterval(changeNotification, 3000, 0)
                }, 100, cmd)
            }
            else {
                func.call(cmd)
            }
        };
    }

    let intervalId  = setInterval(changeNotification,3000, 0)
    changeNotification = notificationDecorator(changeNotification)
    $dropdown.on('click', function(){
        changeNotification(1)
    });

})