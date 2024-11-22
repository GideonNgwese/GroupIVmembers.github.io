// Smooth scroll for sidebar links
document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Donation Form Validation
document.getElementById("donation-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let amount = document.getElementById("donation-amount").value;
    let name = document.getElementById("donor-name").value;
    let email = document.getElementById("donor-email").value;

    if (amount <= 0 || name.trim() === "" || !validateEmail(email)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    alert("Thank you for your donation!");
});

// Email Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
// JavaScript for Smooth Horizontal Scrolling
document.querySelector('.sidebar nav a[href="#mission"]').addEventListener('click', function(e) {
    e.preventDefault();
    const missionSection = document.getElementById("mission");
    missionSection.scrollIntoView({ behavior: 'smooth', inline: 'center' });
});

