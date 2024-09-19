// * splice & slice
// * splice(ตำแหน่งindexที่อยูในarrayทีเราจะลบ, จำนวนที่จะลบ, สามารถสมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่ลบ) 
//  * slice (ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้ายลบ -1 แล้วจะได้ค่าที่เราต้องการ  )
const data = [10,20,30,40,50];
console.log(data);

data.splice(1,3,999);
console.log(data);

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
const data_fruits = fruits.slice(2, 4); 
/*
    ? เมื่อใช้ slice(2, 4) หมายความว่า: เริ่มต้นคัดลอกจาก index ที่ 2 ซึ่งคือ "Orange" หยุดคัดลอกก่อนที่จะถึง index ที่ 4 ซึ่งก็คือ "Pineapple"
    ? ดังนั้น slice(2, 4) จะได้ผลลัพธ์เป็น ["Orange", "Mango"].
    ? เหตุผลที่ slice(2, 4) คืนค่าตำแหน่งที่ 2 และ 3 แต่ไม่คืนตำแหน่งที่ 4 นั้นเป็นเพราะว่า JavaScript จะไม่นับค่าที่ตำแหน่งสุดท้ายที่คุณระบุ (คือตำแหน่งที่ 4) ในการคัดลอกข้อมูลจาก Array
*/
console.log(data_fruits)