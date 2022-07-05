let chet=0;
let nechet=0;
for(let i=0; i<arr.length; i++)
{
typeof arr[i];
let checkNaN=isNaN(arr[i]);
if(typeof arr[i]!=="number")
{
console.log("это не число");
}
else if(checkNaN===true)
{
console.log("это не число");
}
else if(typeof arr[i]==="number" && checkNaN===false)
{
if(arr[i]%2===0)
{
chet=chet+1;
}
else if(arr[i]%2!==0)
{
nechet=nechet+1;
}
else if(arr[i]===0)
{
console.log("Элемент "+i+" нулевой");
}
console.log("Количество чётных чисел "+chet);
console.log("Количество нечётных чисел "+nechet);
}
}