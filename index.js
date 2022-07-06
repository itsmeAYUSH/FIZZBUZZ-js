let randomNumber = Math.random()*100;
var number1to100 = (Math.floor(randomNumber));
if(number1to100 % 5===0 && number1to100 % 3===0){
    console.log("FizzBuzz"); 
}else if(number1to100 % 5===0){
    console.log("Buzz");  
}else if(number1to100 % 3===0){
    console.log("Fizz");
}else{
    console.log(number1to100)
}
