// ? ค้นหาข้อมูลใน Array
// * indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
// * find(ข้อมูล) => ผลการค้นหาจะได้ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
// * findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors = ["red", "green", "blue", "yellow", "black", "pink"]

const index = colors.indexOf("pink");
console.log(index);


const search = colors.findIndex(element => element === "blue") // ? find หรือ findindex ขึ้นอยู่กับเราเลือกใช้ 
console.log(search);