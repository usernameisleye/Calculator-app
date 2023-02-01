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

allButtons.forEach(button => {
    button.addEventListener('click', removeBottom);

    function removeBottom(){
        button.style.borderBottom = 'none';

        setTimeout(() =>{
                if(themeLink.href == 'http://127.0.0.1:5500/styles/themeOne.css'){
                    if(button.classList.contains('number')){
                        button.style.borderBottom = '3px solid hsl(28, 16%, 65%)';
                    }
                    else if(button.classList.contains('operation')){
                        button.style.borderBottom = '3px solid hsl(28, 16%, 65%)';
                    }
                    else if(button.classList.contains('del')){
                        button.style.borderBottom = '3px solid hsl(224, 28%, 35%)';
                    }
                    else if(button.classList.contains('reset')){
                        button.style.borderBottom = '3px solid hsl(224, 28%, 35%)';
                    }
                    else{
                        button.style.borderBottom = '3px solid hsl(6, 70%, 34%)';
                    }
                }

                if(themeLink.href == 'http://127.0.0.1:5500/styles/themeTwo.css'){
                        if(button.classList.contains('number')){
                            button.style.borderBottom = '3px solid hsl(28, 16%, 65%)';
                        }
                        else if(button.classList.contains('operation')){
                            button.style.borderBottom = '3px solid hsl(28, 16%, 65%)';
                        }
                        else if(button.classList.contains('del')){
                            button.style.borderBottom = '3px solid hsl(185, 58%, 25%)';
                        }
                        else if(button.classList.contains('reset')){
                            button.style.borderBottom = '3px solid hsl(185, 58%, 25%)';
                        }
                        else{
                            button.style.borderBottom = '3px solid hsl(25, 99%, 27%)';
                        }
                    }

                if(themeLink.href == 'http://127.0.0.1:5500/styles/themeThree.css'){
                        if(button.classList.contains('number')){
                            button.style.borderBottom = '3px solid hsl(290, 70%, 36%)';
                        }
                        else if(button.classList.contains('operation')){
                            button.style.borderBottom = '3px solid hsl(290, 70%, 36%)';
                        }
                        else if(button.classList.contains('del')){
                            button.style.borderBottom = '3px solid hsl(285, 91%, 52%)';
                        }
                        else if(button.classList.contains('reset')){
                            button.style.borderBottom = '3px solid hsl(285, 91%, 52%)';
                        }
                        else{
                            button.style.borderBottom = '3px solid hsl(177, 92%, 70%)';
                        }
                    }
        }, 100)

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
        output.textContent += button.textContent
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
    output.textContent = eval(output.textContent)
})
