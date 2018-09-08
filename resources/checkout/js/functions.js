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

function buildCheckout() {
    get('/api/checkouts/:checkoutId').then(dados => {
        productImage.src = dados.product.image;
        descountTitle.innerHTML = dados.checkout.availableCoupons[0].title;
        descountCoupon.innerHTML = `- R$ ${dados.checkout.availableCoupons[0].discount}`;
        originalPrice.innerHTML = `R$ ${dados.product.price}`;
        coupon.innerHTML = addCouponCheckout(dados);
        shipping.innerHTML = `R$ ${dados.checkout.shippingPrice}`;
        totalPrice.innerHTML = `R$ ` + calcTotalPrice(dados.checkout.totalPrice, dados.checkout.availableCoupons[0].discount)
    });
}

function addCouponCheckout(dados) {
    if (radioCoupon.checked === true) {
        return coupon.innerHTML = `- R$ ${dados.checkout.availableCoupons[0].discount}`;
    }
    return coupon.innerHTML = `--`
}

function calcTotalPrice(total, descount) {
    if (radioCoupon.checked === true) {
        return total - descount;
    }
    return total;
}

function modalConfirm() {
    modalAlert.style.display = `flex`;
    modalTitle.innerHTML = `compra confirmada`;
    modalText.innerHTML = `enviaremos atualizações sobre\n o pedido para o seu e-mail`
}

function modalCancel() {
    modalAlert.style.display = `flex`;
    modalTitle.innerHTML = `compra cancelada`;
    modalText.innerHTML = `o pedido não foi enviado\n e você não será cobrado`
}



