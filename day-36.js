//Promises Made me Broken
//https://www.codewars.com/kata/587593285448632b8d000143
function submitOrder(user) {
  let shoppingCart;
  let zipCode;
  let shippingRate;
  let orderSuccessful;

  OrderAPI.getShoppingCartAsync(user).then((cart) => (shoppingCart = cart));

  CustomerAPI.getProfileAsync(user)
    .then((profile) => (zipCode = profile.zipCode))
    .then(() => (shippingRate = calculateShipping(shoppingCart, zipCode)))
    .then(() => OrderAPI.placeOrderAsync(shoppingCart, shippingRate))
    .then((success) => (orderSuccessful = success));

  console.log(
    `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
  );
}
//[JEDI LEVEL] This isn't what you think!
//https://www.codewars.com/kata/5876a9f6b09010b1b4000191/train/javascript
