//rest parameter
const double = (...nums)=>{
    console.log(nums);
    return nums.map(num => num *2);
};

const result = double(1,3,5,6);

//spread syntax(arrays)
const people = ['david', 'emily'];
console.log(...people);

const members = ['mario', 'chunli', ...people];
console.log(members);

//spread syntax(object)
const person = {name : 'david', age : 35};
const personClone = {...person, jobs : 'developer'};

console.log(personClone);

//sets

const namesArray = ['david', 'emily', 'edgardo', 'david'];
const nameSet = new Set(namesArray);

console.log(nameSet);

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(35);
ages.add(36);
ages.add(37);
ages.delete(35);

console.log(ages, ages.size);

console.log(ages.has(35));

ages.clear();
console.log(ages);

//symbols
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne == symbolTwo);