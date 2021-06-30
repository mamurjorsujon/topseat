
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

// left dashboard item click details
$('body').on('click', '.dashboard-item', function(){
    document.getElementById('user-left-dashboard').style.display = 'none';
    document.getElementById('user-dashboard-show').style.display = 'block';
});

// dashboard close btn
function dashboardCloseBtn(){
    document.getElementById('user-left-dashboard').style.display = 'block';
    document.getElementById("user-dashboard-show").style.display = "none";
}

// Open Login Panel
function openLoginPanel() {
	document.getElementById("loginPanel").style.display = "block";
}

function loginPanelClose() {
	document.getElementById("loginPanel").style.display = "none";
}