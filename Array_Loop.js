
// ? forLoop
/*const data = [10,20,30,40,50]

for(let i = 0 ; i<data.length; i++){
    if (data[i]>=30) break
    console.log(`ลำดับที่ ${i} = ${data[i]}`);
}
*/

// ? forEach ไม่สามารถใช้ break continue
/*const data_2 =[10,20,30,40,50]

data_2.forEach(element => {
    if (element>=30){
        console.log(`มีค่ามากกว่า 30 หรือ เท่ากับ `)
    }
    console.log(`สมาชิกใน Array data_2 = ${element}`);
});

let sum = 0
data_2.forEach(element =>{
    sum += element
    console.log(`ผลรวม = ${sum}`);
});
*/

// ? for Of สามารถใช้ break continue
const data_3 =[10,20,30,40,50]

for( const element of data_3){
    if(element >= 30)
        break
    console.log(`สมาชิก Array Data_3 = ${element}`);
}