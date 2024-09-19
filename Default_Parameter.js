
getDataCustomer=(customerName,customerAddress = "Bangkok")=>{
    const address = `Name :  ${customerName} 
    Address : ${customerAddress}`
    return address
}
console.log(getDataCustomer("PpLarry"))
console.log(getDataCustomer("LarrayLaLa"))