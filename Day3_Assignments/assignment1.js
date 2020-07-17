

console.log("Solution for Q1- Day3 Assignment")

let num = Number(prompt("Enter a Number",0))


let evenOdd = function(num){
    let valNum = num%2
    return valNum

}

let result = evenOdd(num);
//console.log(result)

if (result == 0){
    console.log("Entered Number is "+num+" and it is an even number")
}else{
    console.log("Entered Number is "+num+" and it is an odd number")
}

    