// Search functionality
document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.querySelector('.search-btn').addEventListener('click', performSearch);

function performSearch() {
    const searchTerm = document.querySelector('.search-input').value;
    if (searchTerm.trim()) {
        alert(`Searching for: ${searchTerm}`);
        // In a real application, this would redirect to search results
    }
}

// Category buttons functionality
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        if (buttonText.includes('Toys')) {
            alert('Browsing Toys category');
        } else if (buttonText.includes('Gadgets')) {
            alert('Browsing Gadgets category');
        } else if (buttonText === 'Login') {
            alert('Login functionality - Demo version');
        } else if (buttonText === 'Sign Up') {
            alert('Sign up functionality - Demo version');
        } else if (buttonText.includes('Shop')) {
            alert(`${buttonText} clicked - Demo version`);
        } else if (buttonText.includes('Browse')) {
            alert(`${buttonText} clicked - Demo version`);
        }
    });
});

// Smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

