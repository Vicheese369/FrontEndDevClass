const value = document.getElementById('content-view');
const incrementButton = document.getElementById('inc-button');
let count = 0
value.value = count;
const render = function (){
    count++;
    value.textContent = count;
}
incrementButton.addEventListener("click",()=>{
    render();
})


