// what's function ??

// why do we need function

// task perform 

// we want sum 
// sir argument me array ke element ko kaise sum krenge

//para -- you can name it anything
// let numX=10;
// let numY=10
// function sum(x,y=0){
//    console.log(x+y)
    
// }

// sum(numY,10) // argu

// // ecmascript -- 


// const sum=(x,y)=> {
//     console.log(x+y)
// }

// sum(1,2)



// function totalSumFunc(array){
//     let totalSum=0;

//     for(let i =0;i<array.length;i++){
//         totalSum=totalSum+array[i]
//     }
//     console.log(totalSum)
// }

// totalSumFunc([5,5,10,5,10])

// -- please for loop & function clear kr dijiye sir
// ashu kaushik

// diffult argument (array) function in js
// --brijmohan


// scope in function --akshay



const money=[5,5,10,5];

const printAll=(array)=>{
    for(let i=0;i<array.length;i++){
       isOddEven(array[i])
    }

}

printAll("money")

function isOddEven(num){
    if(num%2==0){
        console.log(num,"Even")
    }else
    {
        console.log(num,"Odd")
    }
}
