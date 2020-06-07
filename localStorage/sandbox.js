//store data
localStorage.setItem('name', 'David');
localStorage.setItem('age', 35);

//get data

let name = localStorage.getItem('name');

console.log(name);

//update values
localStorage.setItem('name', 'david');

name = localStorage.getItem('name');

console.log(name);

//remove
localStorage.removeItem('age');

localStorage.clear();

const todos = [

    {text : 'play mariokart', author : 'david'},
    {text : 'dance flamenco', author : 'emily'},
    {text : 'sell bread', author : 'romina'}
];

//console.log(JSON.stringify(todos))  ;

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));