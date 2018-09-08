// Main Scripts
const productImage = document.querySelector(`.enjoei-product-image img`);
const descountTitle = document.querySelector(`#descountTitle`);
const descountCoupon = document.querySelector(`#price-off`);
const originalPrice = document.querySelector(`#originalPrice`);
const coupon = document.querySelector(`#coupon`);
const shipping = document.querySelector(`#shipping`);
const totalPrice = document.querySelector(`#total`);
const radios = document.querySelectorAll(`.container-radio input`)
const radioNot = document.querySelector(`#not-use-coupon`);
const radioCoupon = document.querySelector(`#use-coupon`);
const modalAlert = document.querySelector(`.modal-alert`);
const confirmBtn = document.querySelector(`#confirm`);
const cancelBtn = document.querySelector(`#cancel`);
const modalTitle = document.querySelector(`.modal-text span`);
const modalText = document.querySelector(`.modal-text p`);
const overlayBody = document.querySelector(`.overlay-full`);
const cartIcon = document.querySelector(`#cart-icon i`);

buildCheckout();

confirmBtn.onclick = sendPost;
cancelBtn.onclick = modalCancel;

