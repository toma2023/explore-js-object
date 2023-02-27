const kodomAli = {
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus','algebra', 'geometry'],
    exam: function(){
       return  this.name + 'is participating in an exam';
    },
    examArro: () =>{
console.log(this);
    },
    examNested: () =>{
const arrow = () => {
    console.log(this);
}
arrow();
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
this.money = this.money - amount + tips;
return this.money
    }
}
kodomAli.exam();
const result = kodomAli.exam();
const badamAli = {
    name: 'kacha badam',
    money: 8000,

}
badamAli.exam = kodomAli.exam;
badamAli.exam();
function clickHandler(){
    console.log(this);
}
document.getElementById('btn-click2').addEventListener('click',function(){
console.log(this);
})