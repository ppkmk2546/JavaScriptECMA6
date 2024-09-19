// * Array Filter
const data =[10,20,30,40,50] 

const result = data.filter(Element=>{
    return Element >= 20
})
console.log(result);

const Employee = [
    {name:"Pp", salary:25000, depratment: "Programmer"},
    {name:"Kaem", salary:35000, depratment: "Marketing"},
    {name:"olo", salary:18000, depratment: "It-Support"},
    {name:"Larry", salary:40000, depratment: "HR"},
    {name:"KK", salary:35000, depratment: "Marketing"},
]

const result_Employee = Employee
    .filter(Element=>Element.salary > 20000)
    .filter(Element => Element.depratment === "Marketing")
    .filter(Element => Element.name ==="Kaem")

console.log(result_Employee);
