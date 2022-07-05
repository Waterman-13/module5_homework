let num=+prompt('Введите число','');

typeof num;
let checkNaN=isNaN(num);
if(typeof num==="number" && checkNaN===false)
{
if(num%2===0){
console.log('Это чётное число');
}
else if(num%2!==0){
    console.log('Это нечётное число');
}
}
else if(typeof num!=="number"){
    console.log('Упс, кажется вы ошиблись');
}
else if(typeof num==="number" && checkNaN===true){
    console.log('Упс, кажется вы ошиблись'); 
}

