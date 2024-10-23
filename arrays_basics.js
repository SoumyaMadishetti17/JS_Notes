// let friend1_age = 21;
// let friend2_age = 20;
// let friend3_age = 25;
// let friend4_age = 21;
// let friend5_age = 20;
// let friend6_age = 28;
// let friend7_age = 24;


// let friends_age = [21, 20, 25, 21, 20, 28, 24];


// let item1_name = "apple";
// let item2_name = "orange";
// let item3_name = "lichi";
// let item4_name = "banana";
// let item5_name = "grape";
// let item6_name = "mango";
// let item7_name = "pineapple";
// let item8_name = "strawberry";


// let items_name = ["apple", "orange", "lichi", "banana", "grape", "mango", "pineapple", "strawberry"];

// let category = ["movie", "cartoon", "Show", "funny"];
// let showNames = ["iron man", "Doremon", "Shark Tank", "Mr.Bean"];

// for (let i = 0; i < category.length; i++) {
//     console.log(category[i], "=", showNames[i]);
// }

// function happyNum(N){
//     flag=false
//     for(i=0;i<10;i++){
//         let sum=0
//         while(N>0){
//             let rem=N%10
//             sum+=rem**2
//             N=Math.floor(N/10)
//         }
//         N=sum
//         if(sum===1){
//             flag=true
//         }
//     }
//     if(flag){
//         console.log('hn');
//     }else{
//         console.log('no');
//     }
// }
// happyNum(20)

function fun(s,n){
    ans=0
    for(i=0;i<n;i++){
        ans=ans+charCodeAt(s[i])-96
    }
    console.log(ans)
}
fun('abcd',4)