// Functions Application

let apiUrl = 'http://localhost:3000'

function get(endpoint) {
    return fetch(apiUrl + endpoint, {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    }).then((response) => {
        return response.json();
    });
}

function post(endpoint, data) {
    fetch(apiUrl + endpoint, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then(response => {
        return response.json()
    });
}

function buildCheckout() {
    get('/api/checkouts/:checkoutId').then(dados => {
        productImage.src = dados.product.image;
        descountTitle.innerHTML = dados.checkout.availableCoupons[0].title;
        descountCoupon.innerHTML = `- R$ ${dados.checkout.availableCoupons[0].discount.toFixed(2)}`;
        originalPrice.innerHTML = `R$ ${dados.product.price.toFixed(2)}`;
        coupon.innerHTML = addCouponCheckout(dados);
        shipping.innerHTML = `R$ ${dados.checkout.shippingPrice.toFixed(2)}`;
        totalPrice.innerHTML = `R$ ` + calcTotalPrice(dados.checkout.totalPrice, dados.checkout.availableCoupons[0].discount).toFixed(2);
    }).catch(error => console.error('Error:', error));
    
}

function sendPost() {
    let idCheckout;
    get(`/api/checkouts/:checkoutId`).then(data => {
        idCheckout = data.checkout.id;
    }).catch(error => console.error('Error:', error));
    post(`/api/checkouts/:checkoutId`, idCheckout)
    modalConfirm();
}

function addCouponCheckout(dados) {
    if (radioCoupon.checked === true) {
        return coupon.innerHTML = `- R$ ${dados.checkout.availableCoupons[0].discount.toFixed(2)}`;
    }
    return coupon.innerHTML = `--`
}

function calcTotalPrice(total, descount) {
    if (radioCoupon.checked === true) {
        return total - descount;
    }
    return total;
}

function overlayOn() {
    overlayBody.style.display = `block`;
}

function modalConfirm() {
    overlayOn();
    cartIcon.style.color = `#7cf41a`;
    modalAlert.style.display = `flex`;
    modalTitle.innerHTML = `compra confirmada`;
    modalText.innerHTML = `enviaremos atualizações sobre\n o pedido para o seu e-mail`
}

function modalCancel() {
    overlayOn();
    modalAlert.style.display = `flex`;
    cartIcon.style.color = `#f2941a`;
    modalTitle.innerHTML = `compra cancelada`;
    modalText.innerHTML = `o pedido não foi enviado\n e você não será cobrado`
}



