const kodomAli = {
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        return this.name + 'is participating in an exam';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount + tips;
        return this.money
    }
}
const result = kodomAli.exam();
const badamAli = {
    name: 'kacha badam',
    money: 8000,

}
const result2 = kodomAli.exam.call(badamAli);
const badamMoney = kodomAli.treatDey.call(badamAli, 400, 40);
const badamMoney2 = kodomAli.treatDey.apply(badamAli, [1000, 100]);
//console.log(badamMoney2);
const badamAliTreat = kodomAli.treatDey.bind(badamAli);

const remaining = badamAliTreat(1000, 100);
//console.log(remaining);
const obj = {
    a: 1,
    b: 7,
    c: 3,
    length: 2
};
//console.log(Object.keys(obj).length);
const obj1= {module: 35, video:2}; 
const obj2= {module: 35, video:2};
//console.log(obj1 === obj2);
const getGirlFriend= (name = "chokina")=>"name";
 console.log(getGirlFriend()); 


