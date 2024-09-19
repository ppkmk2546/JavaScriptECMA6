
// ? MultiLine String สามารถทำงานกับข้อความยาวๆได้ โดยการขึ้นบรรทัดใหม่แล้วไม่มีข้อผิดพลาดเกิดขึ้นโดยใช้  ` (Backtick)
// ? Interpolation สามารถแทรกตัวแปรลงในพื้นที่ String ได้โดยใช้ ${ชื่อตัวแปร} ร่วมกับ ` (Backtick)

let employeeName = "PpLarry";
let tel = "098-888-8888"

const address = `ชื่อลูกค้า : ${employeeName}
ที่อยู่ 100/10 ถนนเฮฮา อำเภอเมือง 
จังหวัด ตุ๋ยดุ่ย เบอร์ติดต่อ ${tel}`

console.log(address);