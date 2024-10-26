//Task 1: Setup HTML Structure for Order Form
//Included in the HTML file



//Task 2: Add Event Listener for Product Selection

const productSelector = document.getElementById('product-selector');

const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

//product seletion event listoner
productSelector.addEventListener('change', updateTotalPrice);
addEventListener('input', updateTotalPrice);



//Task 3: Calculate Total Price Dynamically

// Calculate total price when product or quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice.toFixed(2);
}



// Handle order submission

placeOrderButton.addEventListener('click', function() {
const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
const quantity = quantityInput.value;
const totalPrice = totalPriceElement.textContent;

orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});
