
//* Array
const colors = ["Red","Green","Blue"]
//  ? การเขียนแบบทีละตัว
// const red = colors[0];
// const green = colors[1];

// ? การเขียนแบบ Destructuring
const [red, green, blue] = colors // *ถ้าจะดึงมาแค่ทีละตัวก็แค่ลบแล้วใส่ , แล้วนับเลข index แล้วก็แสดงผล [,,blue]
// console.log(blue);

// * object
const product = {
    productName : "Computer",
    price : 20000.00,
    stock : 5
}
// const {productName:productName, price:price, stock:stock} = product //*การเขียนแบบจับคู่ ซ้ายคือ property ขวาคือตัวแปรที่เรากำหนดแล้วจะจับคู่กัน/
const{productName,price,stock} = product //*การเขียนแบบย่อถ้าชื่อ propety กับตัวแปรเหมือนกันสามารถเขียนชื่อได้เลย

console.log(productName);
console.log(price);
console.log(stock);
