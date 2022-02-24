const oneClick = {
    createCheckoutUrl({products, shippingMethods, totalPrice, currency, url, tax}) {
        let oneClickProducts = products.map(product => {
            console.log(product);
            let title = product.title.replaceAll('\'', '');
            let src = product.src.indexOf('&') !== -1? product.src.substring(0, product.src.indexOf('&')): product.src
            return {
                id: product.id,
                title: title.indexOf('&') !== -1? title.substring(0, title.indexOf('&')): title,
                price: product.amount?product.amount:product.price,
                quantity: product.quantity,
                src: src
            }
        });

        let oneClickShippingMethods = shippingMethods.map(method => {
            return {
                title: method.title,
                cost: method.cost? method.cost:(method.amount? method.amount:method.price)
            }
        });
        oneClickShippingMethods = JSON.stringify(oneClickShippingMethods);
        let queryUrl = btoa(encodeURIComponent('products='+JSON.stringify(oneClickProducts)+'&price='+totalPrice+'&currency='+currency+'&url='+url+'/api/one-click/create-order'+'&tax='+tax+'&shipping_methods='+oneClickShippingMethods).replace(/%([0-9A-F]{2})/g, function(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
        let identityToken = btoa(url);

        return 'https://tezcheckout.qisstpay.com/?identity-token='+identityToken+'&queryUrl='+queryUrl
    },
    openCheckoutWindow({products, shippingMethods, totalPrice, currency, url, tax}) {
        let oneClickLink = this.createUrl({products, shippingMethods, totalPrice, currency, url, tax});

        window.open(oneClickLink,'newwindow', 'height=670,width=1400,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no');
    }
}

export default oneClick;
