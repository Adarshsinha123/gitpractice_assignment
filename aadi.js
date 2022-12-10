let number=5;

let count=0;
for(let j=1;j<=number;j++){

if(number%j==0){
   count++
}
}

if(count==2){
console.log("prime number");

else{
  console.log("not prime number");
}