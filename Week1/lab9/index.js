const taskContainer = document.getElementById('task-container');
let tasks = [
    { title : "Do Homework", isUrgent:true},
    { title : "Wash Dishes", isUrgent:false},
]
function renderTasks (){
    for(let i = 0 ;i < tasks.length;i++){
        const taskChild = document.createElement('button');
        taskChild.textContent = tasks[i].title;
        taskChild.style.color = 'white';
        if(tasks[i].isUrgent){
            taskChild.style.backgroundColor = 'red';
        }else {
            taskChild.style.backgroundColor = 'black';
        }
        taskContainer.appendChild(taskChild);
    }
}
renderTasks();
