
// left side
const leftScrollBar = document.querySelector('.right-panel');
new PerfectScrollbar(leftScrollBar);


function openDashboard(){
    document.getElementById("user-dashboard-show").style.display = "block";
}


function dashboardCloseBtn(){
    document.getElementById("user-dashboard-show").style.display = "none";
}