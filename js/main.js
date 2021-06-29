
// left side
const leftScrollBar = document.querySelector('.right-panel');
new PerfectScrollbar(leftScrollBar);

// open dashboard items
function openLeftDashboard(){
    document.getElementById("user-left-dashboard").style.display = "block";
}

// close dashboard items
function leftPanelClose(){
    document.getElementById("user-left-dashboard").style.display = "none";
}

function dashboardCloseBtn(){
    document.getElementById('user-dashboard-show').style.display = 'none';
}

