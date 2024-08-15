// we can get this code from chat gpt : write a code to switch the active class in a navbar using JavaScript
const navItems = document.querySelectorAll('.nav-link');

// Add click event listener to each nav item
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all items
    navItems.forEach(nav => nav.classList.remove('active'));

    // Add 'active' class to the clicked item
    item.classList.add('active');
  });
});


function goTologin() {
  window.location.href = "login.html";
}

