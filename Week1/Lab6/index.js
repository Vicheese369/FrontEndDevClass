const card = document.getElementById('card');
const userName = document.getElementById('user-name');
const userRole = document.getElementById('user-role');
const promoteButton = document.getElementById('promote-button');
let user = { name:"Sok" , role:"Student"};

const render = function (){
    userName.textContent = user.name;
    userRole.textContent = user.role;
}
promoteButton.addEventListener('click',()=>{
    user.role = "Admin";
    render();
})
render();





