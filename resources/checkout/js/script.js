// Main Scripts
const productImage = document.querySelector(`.enjoei-product-image img`);
const descountTitle = document.querySelector(`#descountTitle`);
const descountCoupon = document.querySelector(`#price-off`);
const originalPrice = document.querySelector(`#originalPrice`);
const coupon = document.querySelector(`#coupon`);
const shipping = document.querySelector(`#shipping`);
const totalPrice = document.querySelector(`#total`);
const radioNot = document.querySelector(`#not-use-coupon`);
const radioCoupon = document.querySelector(`#use-coupon`);
const modalAlert = document.querySelector(`.modal-alert`);
const confirmBtn = document.querySelector(`#confirm`);
const cancelBtn = document.querySelector(`#cancel`);
const modalTitle = document.querySelector(`.modal-text span`);
const modalText = document.querySelector(`.modal-text p`);

buildCheckout();

confirmBtn.onclick = modalConfirm;
cancelBtn.onclick = modalCancel;


