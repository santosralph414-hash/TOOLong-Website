let cart = [];
let currentItem = "";

function showDetails(item, price, desc) {
  currentItem = item;
  document.getElementById("modalTitle").textContent = item;
  document.getElementById("modalPrice").textContent = price;
  document.getElementById("modalDesc").textContent = desc;
  document.getElementById("itemModal").style.display = "block";
}

function closeModal() {
  document.getElementById("itemModal").style.display = "none";
}

function confirmRent() {
  cart.push(currentItem);
  displayCart();
  closeModal();
}

function displayCart() {
  const cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}

// Close modal if user clicks outside
window.onclick = function(event) {
  const modal = document.getElementById("itemModal");
  if (event.target === modal) {
    close
