// script.js

// Functionality for product filtering
function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    const filterValue = searchInput.value.toLowerCase();
    const products = document.getElementsByClassName('product');

    Array.from(products).forEach(product => {
        const productName = product.getElementsByClassName('product-name')[0].textContent.toLowerCase();
        if (productName.includes(filterValue)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

// Form validation
function validateForm(event) {
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const message = form.message.value;

    if (!email || !name || !message) {
        alert('All fields are required!');
        event.preventDefault();
    }
}

// Adding event listeners for form validation
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', validateForm);
}

// Adding event listener for product filtering
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
}