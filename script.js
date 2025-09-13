// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

function initApp() {
    // Add animation to category cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Observe category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Rent button functionality
    document.querySelectorAll('.rent-btn').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            const itemName = this.closest('.item-card').querySelector('h3').textContent;
            rentItem(itemId, itemName);
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', function() {
        performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            subscribeNewsletter(emailInput.value);
            emailInput.value = '';
        });
    }
}

function performSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput.value.trim() !== '') {
        alert(`Searching for: ${searchInput.value}`);
        // In a real application, you would filter items based on the search term
    } else {
        alert('Please enter something to search for');
    }
}

function rentItem(itemId, itemName) {
    alert(`"${itemName}" has been added to your cart! You will be redirected to checkout.`);
    // In a real application, you would add the item to a cart system
}

function subscribeNewsletter(email) {
    alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
    // In a real application, you would send this to a server
}

// Additional functions for a more dynamic experience
function toggleMobileMenu() {
    // This would be used if we add a mobile menu button
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

function filterItems(category) {
    // This would filter items based on category
    alert(`Filtering items by category: ${category}`);
}

// Initialize any carousels or sliders if needed
function initCarousels() {
    // This would initialize any image carousels
}