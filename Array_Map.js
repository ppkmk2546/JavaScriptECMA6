// ? Array Map นำ array ที่เรามีอยู่มา map ค่า แล้วสร้าง array ใหม่เอามาใช้งาน
const numbers = [10,20,30,40]
console.log(`number = ${numbers}`)

// const result = numbers.map(Element =>{
//     const a = Element * 2
//     return a
// })

const result = numbers.map(Element => Element * 2) // ? เขียนแบบย่อ
console.log(`Array Map = ${result}`);


const data_temperature =[18,22,30,35,38,37,32,31]

const result_temperature = data_temperature.map((Element,i) => {
    return `Day ${i+1} , temperature = ${Element} Celsius`
})
console.log(result_temperature);


// ? Map object
const data_object =[
    {day: "01/09/2024", weather:"แดดจัด", temp:38},
    {day: "02/09/2024", weather:"มีเมฆฝน", temp:27},
    {day: "03/09/2024", weather:"ท้องฟ้าโปร่ง", temp:35},
]
const result_object = data_object.map(Element=>{
    return Element.weather;
})
console.log(result_object);