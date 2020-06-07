const scores = [10,35,40,5,70];
const prices = [10,35,40,5,70];

const filterScores = scores.filter((score) =>{

    return score > 20;
});

console.log(filterScores);

const users = [
    {name : 'david', premium : true},
    {name : 'maria', premium : true},
    {name : 'romina', premium : false}
];

const filterUsers = users.filter( user => user.premium
);

console.log(filterUsers);

const salePrices = prices.map((price) => price/2);

console.log(salePrices);

const products = [

    {name : 'cell', price : 45},
    {name : 'tv', price : 10},
    {name : 'cell', price : 50},
    {name : 'notebook', price : 38}
];

products.sort((a, b) =>{

    if(a.price < b.price){
        return -1;
    }
    else if (b.price < a.price){
        return 1;
    }
    else{

        return 0;
    }
});

console.log("products");
console.log(products);

const productsFilter = products.filter(product => product.price > 30)
    .map(product => {

        return {name : product.name, price : product.price/2};
    });

console.log(productsFilter);

const result = scores.reduce((acc, curr) =>{

    if(curr > 50){

        acc++;
    }

    return acc;
}, 0);

console.log(result);

const cellTotal = products.reduce((acc, curr) =>{

    if(curr.name === 'cell'){

        acc += curr.price;
    }
    return acc;
}, 0);

console.log(cellTotal);

const firstHighScore = scores.find((score) => score > 50);

console.log(firstHighScore);


const names = ['david', 'romina', 'emily'];

names.sort();

scores.sort();

console.log(names);
console.log(scores);


const productFiltered = products.filter(product => product.price > 20);

const promos = productFiltered.map(product =>{

    return `the ${product.name} is ${product.price / 2} pounds`;
});

console.log(promos);

