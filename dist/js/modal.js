let overlay = document.getElementById("paymentOverlay");
let button = document.getElementById("btnPay");
let modal = document.getElementById("modal");

button.addEventListener("click", () => {
  overlay.classList.add("overlay");
  modal.classList.remove("hidden");
});
