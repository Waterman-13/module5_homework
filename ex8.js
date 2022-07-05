let map=new Map([
    ["apple","green"],
    ["strawberry","red"],
    ["blueberry","blue"]
    ]);
    for (let pair of map)
    {
    console.log(pair[0]);
    console.log(pair[1]);   
    console.log(`Ключ-${pair[0]},значение-${pair[1]}`);
    } 