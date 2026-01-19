const text = document.getElementById('new-fruit');
const addButton = document.getElementById('add-btn');
const fruitList = document.getElementById('fruit-list');
let fruitArray = [];
function renderFruits (){
    fruitList.innerHTML = '';
    for (let i = 0 ;i <fruitArray.length;i++){
        const li = document.createElement('li');
        li.innerHTML = fruitArray[i];
        fruitList.appendChild(li);
    }
}

addButton.addEventListener('click',()=>{
    if(text.value !==''){
        fruitArray.push(text.value);
    }
    text.value = '';
    renderFruits();
})