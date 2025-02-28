// Script File

// Home Section Starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');
var userName = document.getElementById('user-name');
var userDropdown = document.getElementById('user-dropdown');
var logoutBtn = document.getElementById('logout-btn');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
	menuBtn.classList.remove('active');
	menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 120){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends

// Partners Section Starts 
$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
        	items:5
        }
    }
})
// Partners Section Ends 

// Testimonials Section Starts
$('.testimonials-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
// Testimonials Section Ends

// User name click to toggle dropdown
userName.addEventListener('click', function() {
    userDropdown.classList.toggle('active');
});

// Logout button functionality (example)
logoutBtn.addEventListener('click', function() {
    alert('Logged out!');
    // Add actual logout logic here (e.g., clear session, redirect)
    userDropdown.classList.remove('active');
});

// Set default page (Home) on load
window.addEventListener('load', function() {
    document.getElementById('home-page').style.display = 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!userName.contains(e.target) && !userDropdown.contains(e.target)) {
        userDropdown.classList.remove('active');
    }
});


const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            window.location.href = "index.html";
        } else {
            document.getElementById("user-name").innerText = user.username;
            document.getElementById("user-email").innerText = user.email;

        }

        function logout() {
            localStorage.removeItem("user");
            window.location.href = "index.html";
        }






    


// Select elements
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

// Toggle dark mode on click
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Check saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
    darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}




// time count

window.onload = function() {
    // Get current time in milliseconds
    var currentTime = new Date().getTime();
    
    // Define the duration to add
    var daysToAdd = 20;
    var hoursToAdd = 10;
    var minutesToAdd = 12;
    
    // Calculate milliseconds to add (20 days + 10 hours + 12 minutes)
    var msToAdd = (daysToAdd * 24 * 60 * 60 * 1000) + (hoursToAdd * 60 * 60 * 1000) + (minutesToAdd * 60 * 1000);
    var targetTime = currentTime + msToAdd;

    // Function to update the countdown
    function updateCountdown() {
        var now = new Date().getTime();
        var difference = targetTime - now;
        
        if (difference > 0) {
            // Calculate days, hours, minutes, and seconds
            var days = Math.floor(difference / (24 * 60 * 60 * 1000));
            difference -= days * 24 * 60 * 60 * 1000;
            var hours = Math.floor(difference / (60 * 60 * 1000));
            difference -= hours * 60 * 60 * 1000;
            var minutes = Math.floor(difference / (60 * 1000));
            difference -= minutes * 60 * 1000;
            var seconds = Math.floor(difference / 1000);
            
            // Update the HTML elements
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
        } else {
            // When countdown reaches zero
            document.getElementById('countdown').innerText = "The CTF challenge has started!";
            clearInterval(intervalId); // Stop the interval
        }
    }

    // Initial call to display countdown immediately
    updateCountdown();
    
    // Update every second
    var intervalId = setInterval(updateCountdown, 1000);
}