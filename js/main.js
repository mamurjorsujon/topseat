
$(document).ready(function(){

    // left side
    const leftScrollBar = document.querySelector('.right-panel');
    new PerfectScrollbar(leftScrollBar);

    $('#user-info-btn').on('click', function(){
        $('#user-info-show').addClass('d-block');
    });

    $('#user-dashboard-close-btn').on('click', function(){
        $('#user-info-show').removeClass('d-block');
        $('#user-info-show').addClass('d-none');
    })



});