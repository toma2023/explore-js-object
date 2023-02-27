/*const first = {a: 2};
const second = {a: 2};
if (first === second) {
    console.log('they are same');
}
else {
    console.log('different');;
}
//
const first = { a: 2 };
const second = { a: 2 };
function compareObject(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        return true;
    }
    else {
        return false;
    }
}
const isSame = compareObject(first, second);
console.log(isSame);*/
const first = { a: 5, b:2, d:5};
const second = { a: 5, c:5, d:2};
function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first [key] !== second [key]){
                return false;
            }
        }
        return true;
    }
}
const result =compareObject(first,second);
console.log(result);