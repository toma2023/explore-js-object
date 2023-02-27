/*const numbers = [12, 54, 65, 3, 65]
for(const number of numbers){
    console.log(number);
}
for of loop can not used with object
*/
const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
};
//first option to loop through an object
const keys = Object.keys(bottle);
//console.log(keys);
for (const key of keys){
    console.log(key, bottle[key]);
}
//for in loop
for (const key in bottle){
    console.log(key);
}
//advanced
const pair = Object.entries(bottle);
console.log(pair);
for (const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}