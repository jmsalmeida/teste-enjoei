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


function montaCheckout(){
    get('/api/checkouts/:checkoutId').then(dados => {
        productImage.src = dados.product.image
        // descountCupon.innerHTML = dados.availableCupons[0].discount;
        // console.log(dados.availableCupons[0].discount);
        
    });
}