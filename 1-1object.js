const student = {
    name : 'sakib khan',
    id : 121,
    address : true,
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Nirob'],
    movies : [{name : 'no.1', year : 2015}, { name:'King Khan', year : 2018}],
    act : function(){
        console.log('acting like sakib khan')
    },
    car: {
        brand : 'tesla', 
        price: 5000000,
        made: 2025,
        manufacturer:{
            name : 'tesla',
            ceo: 'Elon Mask',
            country: 'USA',
        }
    }
}
// console.log(student);
// console.log(student.friends);

console.log(student.act);

student.act();