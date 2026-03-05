var tasks = [];
function addTask(id, desc) {
    tasks.push({ id: id, desc: desc });
}
function viewTasks() {
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var task = tasks_1[_i];
        console.log("Task id: ".concat(task.id));
        console.log("Description: ".concat(task.desc));
        console.log("--------------------------");
    }
    console.log("--------------------------");
}
function updateTask(task_id, new_desc) {
    tasks.forEach(function (task) {
        if (task.id == task_id) {
            task.desc = new_desc;
        }
    });
}
function deleteTask(task_id) {
    var idx = tasks.findIndex(function (task) { return task.id == task_id; });
    var removed_task = tasks.splice(idx, 1)[0];
    return removed_task;
}
//adding task
addTask(1, "this is task1");
addTask(2, "this is task2");
addTask(3, "this is task3");
addTask(4, "this is task4");
console.log("The current tasks are");
viewTasks();
//update task
updateTask(3, "task3 was updated");
viewTasks();
//deleteTask
var deletedTask = deleteTask(4);
console.log(deletedTask);
//view tasks
console.log("The current tasks are");
viewTasks();
