const greet = (name) =>{

    console.log(`hello ${name}`);

    const h1 = document.querySelector('h1');

    h1.innerHTML = name;
};

greet('david');