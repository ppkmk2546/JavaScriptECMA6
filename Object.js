
const employeeName = "Larry LaLa"
const age = 21
const salary = 22000.00

const employee = {
    // ? เขียนแบบ กำหนด ชื่อใน obj เลย
    // employeeName : "PpLarry",
    // age : 21,
    // salary : 22000.00

    // ? เขียนแบบดึงข้อมูลมาจากตัวแปร แล้วมากำหนดค่า ของ property นั้นๆ
    // employeeName : employeeName,
    // age : age,
    // salary : salary

    // ? ใน javaScript ถ้าตัวแปรที่เราตั้ง ชื่อ เหมือนกับ property ของเรา สามารถเขียนได้ดังนี้
    
    employeeName,
    age,
    salary,
    
    // *method
    showData(){
        console.log("ข้อมูลชื่อพนักงาน = " + employeeName)
    }


}
// console.log(employee);
employee.showData();