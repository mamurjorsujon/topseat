
$(document).ready(function(){

    // left side
    const leftScrollBar = document.querySelector('.right-panel');
    new PerfectScrollbar(leftScrollBar);

    $('#user-info-btn').on('click', function(){
        alert();
        // $('#user-info-show').show();
    })


});