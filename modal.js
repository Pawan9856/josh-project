// Get elements
const modalContainer = document.querySelector('.request-dish-modal-container');
const openModalButton = document.querySelector('.request-dish-btn');
const closeModalButton = document.querySelector('.cancel-btn');
const submitButton = document.querySelector('.submit-btn');

openModalButton.addEventListener('click', () => {
  console.log('clicked');
  modalContainer.style.display = 'flex';  
  document.body.style.overflow = 'hidden'; 
});

closeModalButton.addEventListener('click', () => {
  modalContainer.style.display = 'none';  
  document.body.style.overflow = 'auto';  
});

submitButton.addEventListener('click', () => {
  modalContainer.style.display = 'none';  
  document.body.style.overflow = 'auto';  
});

modalContainer.addEventListener('click', (event) => {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';  
    document.body.style.overflow = 'auto';  
  }
});


const cartModalContainer = document.querySelector('.cart-modal-container');
const openCartModalButton = document.querySelector('.nav-btn .cart');
const closeCartModalButton = document.querySelector('.back-to-menu');

openCartModalButton.addEventListener('click', () => {
  cartModalContainer.style.display = 'flex';  
  document.body.style.overflow = 'hidden'; 
});

closeCartModalButton.addEventListener('click', () => {  
  cartModalContainer.style.display = 'none';  
  document.body.style.overflow = 'auto';  
}); 

cartModalContainer.addEventListener('click', (event) => {
  if (event.target === cartModalContainer) {
    cartModalContainer.style.display = 'none';  
    document.body.style.overflow = 'auto';  
  }
});