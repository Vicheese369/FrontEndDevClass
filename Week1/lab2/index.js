const box = document.getElementById('box');
const buttonColor = document.getElementById('color-btn');
buttonColor.addEventListener('click',()=>{
    if(box.style.backgroundColor === 'blue'){
        box.style.backgroundColor = 'red';
    }else {
        box.style.backgroundColor = 'blue';
    }
})
