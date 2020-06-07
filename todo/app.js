const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchForm = document.querySelector('.search input');

//append li to ul
const generateTemplate = todo =>{
    console.log(todo);
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>   
                </li>`;

    list.innerHTML += html;
};

//filter todo search
const filterSearch = (search) => {

    Array.from(list.children)
    .filter( todo => !todo.textContent.toLowerCase().includes(search))
    .forEach(todo => todo.classList.add('filtered')); 
    
    Array.from(list.children)
    .filter( todo => todo.textContent.toLowerCase().includes(search))
    .forEach(todo => todo.classList.remove('filtered')); 
}

//search operation
searchForm.addEventListener('keyup', e =>{

    e.preventDefault();

    const search = searchForm.value.toLowerCase().trim();
    
    filterSearch(search);

});

//add todo
addForm.addEventListener('submit', e =>{
    
    e.preventDefault();
    const todo = addForm.add.value.trim();
    
    if(todo.length){

        generateTemplate(todo);
        addForm.reset();
    }
    else{
        alert('you must enter a value for todo');
    }
});

//delete todos
list.addEventListener('click', e =>{

    if(e.target.classList.contains('delete')) {

        e.target.parentElement.remove();
    }
});