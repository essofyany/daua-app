const dua = document.querySelector('.dua');
const btns = document.querySelector('.btns');
const addButton = document.querySelector('#add');
const subButton = document.querySelector('#sub');
const counter = document.querySelector('#counter');
const clearButton = document.querySelector('#clear');
const editButton = document.querySelector('#edit');

let currentCounterValue = counter.textContent;
let counterEdited = 5;
const duaImages = [
    {
        id : '0',
        img : 'images/dua1.jpg'
    },
    {
        id : '1',
        img : 'images/dua2.jpg'
    },
    {
        id : '2',
        img : 'images/dua3.jpg'
    },
    {
        id : '3',
        img : 'images/dua4.jpg'
    },
    {
        id : '4',
        img : 'images/dua5.jpg'
    },
    {
        id : '5',
        img : 'images/dua6.jpg'
    }
]


addButton.addEventListener('click', ()=> {
    currentCounterValue++;
    counter.textContent = currentCounterValue;
});

subButton.addEventListener('click', ()=> {
   if(counter.textContent > 0 ) {
       currentCounterValue--;
       counter.textContent = currentCounterValue;
   }
});

clearButton.addEventListener('click', ()=> {
    currentCounterValue = 0;   
    counter.textContent = 0;
});


let i = 0;
btns.addEventListener('click', ()=> {
        if(currentCounterValue >= counterEdited && i < duaImages.length) {          
            dua.textContent = '';
            let imgDua = document.createElement('img');
            imgDua.setAttribute('src', duaImages[i].img);
            dua.appendChild(imgDua);
            currentCounterValue = 0;
            i++;
        }
});

// set counter 
editButton.addEventListener('click', ()=> {
    const control = document.querySelector('.control');
    control.innerHTML = '';
    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('placeholder' ,"enter your new amount of repeat");
    input.setAttribute('style', "width: 360px");
    control.appendChild(input);
    
    if(input){
        const inputBtn = document.createElement('button');
        inputBtn.setAttribute('type', 'submit');
        inputBtn.setAttribute('class', "btn waves-effect waves-light blue");
        inputBtn.setAttribute('style', "width: 360px");
        inputBtn.textContent = 'Submit';
        control.appendChild(inputBtn);
        this.addEventListener('click', ()=> {
            inputBtn.addEventListener('click', ()=> {
                if(input.value !== '') {
                    currentCounterValue = 0;
                    counter.textContent = 0;
                    counterEdited = input.value;
                }
            })
        })
    }
    
});



