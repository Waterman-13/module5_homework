function reverseString(str)
{
let reversedString=' ';
for(let i=str.length; i>0; i--)
{
reversedString=reversedString+str.substring(i,i-1);
}
console.log(reversedString);
};