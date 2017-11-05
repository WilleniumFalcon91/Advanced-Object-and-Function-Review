//Function Constructor 

// var john = {
//     name: 'John',
//     yearOfBirth: 1991,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

// }

// Person.prototype.calculateAge = function() {
//     console.log(2017 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1991, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();


// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


//Object.create 

var personProto = {
    calculateAge: function() {
        console.log(2017 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1069},
    job: {value : 'designer'}
});