const room = document.getElementById("room");
const switchButton = document.getElementById("switch-button");
const statusText = document.getElementById("status-text");
let isLightON = true;
const render = function (light){
    if(light){
        room.style.backgroundColor = "black";
        statusText.textContent = 'Lights are OFF';
    }else{
        room.style.backgroundColor = "white";
        statusText.textContent = 'Lights are ON';
    }
}
switchButton.addEventListener("click",()=>{
    isLightON = !isLightON;
    render(isLightON);
})
render(isLightON);
