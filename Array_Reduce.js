// * Array Reduce
// ? โครงสร้าง array.reduce((คือค่าที่ถูกสะสมจากการดำเนินการในแต่ละรอบ, element)=>{},ค่าเริ่มต้น,ถ้าไม่ใส่ ค่าตัวแรกในอาร์เรย์จะเป็นค่าเริ่มต้น) 
            // ? ส่วนประกอบ 1.มีโครงสร้างของ reduce 2.มีcallback fuction 3.การประกาศค่าเริ่มต้น
// ? value เริ่มต้น มีค่าเป็น 0 จากการที่เรากำหนดค่าเริ่มต้นในโครงสร้าง array.reduce
const data = [10,20,30,40]

const summation = data.reduce((value,element) => {
    // console.log(value)
    const total = element + value;
    return total
},0)

// * เขียนแบบย่อ
// ? const summation = data.reduce((value,element)=> element + value,0)
console.log("Total =",summation);


const cart =[
    {name: "Backpack", price:1200},
    {name: "Book", price:315},
    {name: "Hat", price:150},
]

const summation_cart = cart.reduce((value,element)=>{
    const total = element.price + value
    return total
},0)

console.log("Total =",summation_cart);