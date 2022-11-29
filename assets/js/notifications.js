$(function () {
    let $dropdown = $('.dropdown');
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
})