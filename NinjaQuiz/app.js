const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');


form.addEventListener('submit', e =>{
    
    e.preventDefault();
    console.log(result);
    
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
    let score = 0;
    //check answers
    userAnswers.forEach((answer, index) =>{
        
        if(answer === correctAnswers[index]){
            
            score += 25;
        }
        
    });

    scrollTo(0,0);
    
    //show result on page
    
    result.classList.remove('d-none');
    
    let output = 0;
    
    const timer = setInterval(() =>{
        
        if(output == score){
            
            clearInterval(timer);
        }
        
        result.querySelector('span').textContent = `${output}%`;
        
        output++;
    
    }, 50);
})

