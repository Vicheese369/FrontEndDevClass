const text = document.getElementById('username');
const greetingButton = document.getElementById('greet-btn');
const message = document.getElementById('message');
greetingButton.addEventListener('click',()=>{
    const name = text.value;
    if(name === ''){
        message.textContent = "Please input something come onnnnn";
    }else {
        message.textContent = "Hello " + name;
        message.style.color = "red";
    }
})
