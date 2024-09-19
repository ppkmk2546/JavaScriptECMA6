// * push , pop หลัง 
// *,shift , unshift หน้า

const data = [10,20,30];
console.log(data);

data.push(...[40,50,60]);
console.log(data);

data.pop();
data.pop();
console.log(data);

data.shift();
data.shift();
data.unshift(999);
data.unshift(888);
console.log(data);