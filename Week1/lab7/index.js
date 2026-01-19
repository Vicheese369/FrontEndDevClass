const fruitList = document.getElementById('fruit-list');
let fruits = ["Apple", "Banana", "Orange", "Mango"];
function renderFruits (){
    fruitList.innerHTML = '';
    for (let i = 0 ; i < fruits.length; i++){
        const li = document.createElement('li');
        li.innerHTML = fruits[i];
        fruitList.appendChild(li);
    }
}
renderFruits();