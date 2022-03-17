#OneClickJs

**GetStarted**

`npm install oneclickjs`

import oneClick from 'oneclickjs'

`let products = [
{
id: productId,
src: ProductPrimaryImageSrc,
title: ProductTitle,
quantity: ProductQuantity,
price: ProductPrice
}
];`

`let shippingMethods = [
{
title: shippingMethodTitle,
cost: shippingMethodCost
}
];`

`let totalPrice = 1000;`

`let currency = 'PKR';`

`let url= 'your site url';`

`let tax = 100;`


`let checkoutUrl = oneClick.createCheckoutUrl({
	products,
	shippingMethods,
	totalPrice,
	currency,
	url,
	tax
});`

Either open checkout url in new window or use Iframe

