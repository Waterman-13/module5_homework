let X;
typeof X;
let checkNaN=isNaN(X);
if(typeof X==="number")
{
console.log("X-число");
}
else if(typeof X==="string")
{
console.log("X-строка");
}
else if(typeof X==="boolean")
{
console.log("X-логический тип");
}
else if(typeof X==="number" && checkNaN===true){
console.log("X имеет тип NaN");
}
else
{
console.log("тип X не определён");
};