let first_name='janu'
let last_name='dew'
let full_name=first_name+last_name
console.log(`Hello, ${full_name}`);


// q2
let num1=3
let num2=3
console.log(num1*num2);//9
console.log(num1+num2);//6
console.log(num1-num2);//0
console.log(num1/num2);//1
console.log(num1==num2);//true
console.log(num1===num2);//true
console.log(num1%num2);//0


//q3
let numval=42
let strval='42'
console.log(numval+strval);//4242
res=numval+strval
if(res>100){
    console.log('great than 100');
}else{
    console.log('no');
}

//q4
let r = 5; 
for (let i = 1; i <= r; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

// q5
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }
    console.log(row.trim());
}
