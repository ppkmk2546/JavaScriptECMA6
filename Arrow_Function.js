
// * การเขียนแบบเดิม
// function fullname(fname, lname){
//     return fname + lname
// }
// console.log(fullname("Pp","Larry"));

// * การเขียนแบบ Arrow-Function
fullname = (fname,lname) => fname+lname
setAge = (age) => "อายุ = " +age

console.log(fullname("Larry","LaLa"));
console.log(setAge(21));
