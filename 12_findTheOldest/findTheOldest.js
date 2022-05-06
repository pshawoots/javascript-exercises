const findTheOldest = function(persons) {
    return persons.reduce(function(oldestPerson, person) {
        person.age = 0;
        if(!person.yearOfDeath) {
            person.age = new Date().getFullYear() - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        return person.age > oldestPerson.age ? person:oldestPerson; 

    },{yearOfBirth:0, yearOfDeath:0, age: 0,});
};

// Do not edit below this line
module.exports = findTheOldest;
