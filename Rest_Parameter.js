summation = (...numberArr) =>{
    let total = 0
    for(let number of numberArr) total +=number //0+500+100
    return total
} 
console.log(summation(50,100,100,100,50,20,10,10,10,10,10,101,10));