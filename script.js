// Initialize cart
let cart = [];

// Add to Cart function
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const product = event.target.dataset.product;
    const price = event.target.dataset.price;
    cart.push({ product, price });
    event.target.innerText = 'Added';
    event.target.disabled = true;
  });
});

// View Cart function
const viewCartButton = document.getElementById('view-cart');
viewCartButton.addEventListener('click', () => {
  let cartItems = cart.map(item => `<li>${item.product} - $${item.price}</li>`).join('');
  if (cartItems === '') {
    cartItems = '<li>Your cart is empty</li>';
  }
  alert(`Your Cart:\n${cartItems}`);
});

// Admin Login function
const adminLoginButton = document.getElementById('admin-login');
adminLoginButton.addEventListener('click', () => {
  const username = prompt("Enter Admin Username:");
  const password = prompt("Enter Admin Password:");
  if (username === 'admin118' && password === 'printablesareawesome') {
    window.location.href = 'admin.html';
  } else {
    alert('Invalid Login');
  }
});

// Handle form submission for checkout
const checkoutForm = document.getElementById('checkout-form');
const errorMessage = document.getElementById('error-message'); // Error message element

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const specialRequests = document.getElementById('special-requests').value;

  // Check if any required field is missing
  if (!firstName || !lastName) {
    errorMessage.style.display = 'block';  // Show error message
    return; // Prevent form submission
  }

  // If all fields are filled out, hide the error message
  errorMessage.style.display = 'none';

  // Handle order (you could send this data to a server or store it locally)
  console.log('Order submitted:');
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Special Requests:', specialRequests);

  // Clear form after submission
  checkoutForm.reset();

  // Show confirmation
  alert('Your order has been submitted!');
});
