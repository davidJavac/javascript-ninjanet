const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

const feedback = document.querySelector('.feedback');

const usernamePattern = /^[a-zA-Z]{6,12}$/;
const pattern = /^[a-z]{6,}$/;

form.addEventListener('submit', e =>{

    e.preventDefault();
    //validation
   const username = form.username.value;
   
   if(usernamePattern.test(username)){
       
        feedback.textContent = 'user valid';
    }
    else{
        
        feedback.textContent = 'username must contains only letters between 6 and 12 characters';

    }
});

/* let result = pattern.test(username);

console.log(result); */

/* if(result){
    
    console.log('regex test pass');
}
else{
    
    console.log('regex test fail');
} */

form.username.addEventListener('keyup', e =>{

    //console.log(e.target.value, form.username.value);
    
    if(usernamePattern.test(e.target.value)){

        //e.target.style.border = '2px solid green';
        form.username.setAttribute('class', 'success');
    }
    else{
        form.username.setAttribute('class', 'error');
        //e.target.style.border = '2px solid red';

    }
})