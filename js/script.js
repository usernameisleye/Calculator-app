const themeLink = document.querySelector('.theme-link');
const themeBtns = document.querySelectorAll('.btn');
const output = document.querySelector('.output');
const allButtons = document.querySelectorAll('.button');
const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.operation');
const delBtn = document.querySelector('.del');
const resetBtn = document.querySelector('.reset');
const equalsBtn = document.querySelector('.equals');



themeBtns.forEach(btn => {
    btn.addEventListener('click', changeTheme);

    function changeTheme(){
        if(btn.classList.contains('btn-1')){
            themeLink.setAttribute('href', './styles/themeOne.css');
        }else if(btn.classList.contains('btn-2')){
            themeLink.setAttribute('href', './styles/themeTwo.css');
        }else{
            themeLink.setAttribute('href', './styles/themeThree.css');
        }
    }
})


//Main Calculator functions
numberBtns.forEach(button =>{
    button.addEventListener('click', () =>{
        output.textContent += button.textContent
    })
})
operationBtns.forEach(button =>{
    button.addEventListener('click', () =>{
        output.textContent += button.value;
    })
})
delBtn.addEventListener('click', () =>{
    if(output.textContent != ''){
        output.textContent = output.textContent.slice(0, -1);
    }
})
resetBtn.addEventListener('click', () =>{
    output.textContent = '';
})
equalsBtn.addEventListener('click', () => {
    try{
        output.textContent = eval(output.textContent);
    }
    catch(err){
        output.textContent = 'Error'

        setTimeout(() => {
            output.textContent = ''
        }, 1000)
    }
})
