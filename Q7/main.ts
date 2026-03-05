type task = {
    id: number,
    desc: string,
}

const tasks : task[] = [];

function addTask(id: number, desc: string) : void {
    tasks.push({id,desc});
}

function viewTasks() : void{
    for(let task of tasks){
        console.log(`Task id: ${task.id}`);
        console.log(`Description: ${task.desc}`);
        console.log("--------------------------");
    }
    console.log("--------------------------");
    
}

function updateTask(task_id: number, new_desc: string) : void{
    tasks.forEach((task)=>{
        if(task.id == task_id){
            task.desc = new_desc;
        }
    })
}

function deleteTask(task_id: number) : task{
    let idx = tasks.findIndex(task => task.id == task_id);
    if(idx == -1) return {};
    let removed_task : task = tasks.splice(idx,1)[0];
    return removed_task

}

//adding task
addTask(1,"this is task1")
addTask(2,"this is task2")
addTask(3,"this is task3")
addTask(4,"this is task4")
console.log("The current tasks are");
viewTasks();

//update task
updateTask(3,"task3 was updated");
viewTasks();

//deleteTask
let deletedTask: task = deleteTask(4);
console.log(deleteTask);

//view tasks
console.log("The current tasks are");
viewTasks();