const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  if(cartItems.length<0){
    console.log("cart cannot be empty");
  }else{
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
      debugger;
  }
  return total;
}
}
function applyDiscount(total, discountRate) {
  if (discountRate<0 )
  { 
    console.log("Discount cannot be zero or negative") 

  }else
  {
  return total - total * discountRate; // Bug: Missing validation for discountRate
}
}


function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
      debugger;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

/*
○ Test the corrected program with the given cart and a few edge cases:
i. An empty cart.
ii. A cart with one item.
iii. A discountRate of 0 or 1.
*/

const cart1=[];
const total1 = calculateTotal(cart1);
const discountedTotal1 = applyDiscount(total1, 0); // 0% discount
const receipt1 = generateReceipt(cart1, discountedTotal1);
document.getElementById("total1").textContent = `Total: $${discountedTotal1}`;
document.getElementById("receipt1").textContent = receipt1;

const cart2 = [
  { name: "Laptop", price: 1000 }
];
const total2 = calculateTotal(cart2);
const discountedTotal2 = applyDiscount(total2, 0.1); // 1% discount
const receipt2 = generateReceipt(cart2, discountedTotal2);

document.getElementById("total2").textContent = `Total: $${discountedTotal2}`;
document.getElementById("receipt2").textContent = receipt2;
/*
Errors:
1. When I open the index.html in the browser and open developer tools in the console tab I see
TypeError. It clearly shows us the trace of the function call(at line 10 the function 
calculateTotal is being called) and says we are trying to perform an operation on undefined
 type. As the for loop is iterating over the max length of the array
(it should have been < length not <=length) during the last iteration the cartItem[i] is undefined
as it doesnot exists in the array. 
"cart.js:10 Uncaught TypeError: Cannot read properties of undefined (reading 'price')
    at calculateTotal (cart.js:10:29)
    at cart.js:30:15"


*/