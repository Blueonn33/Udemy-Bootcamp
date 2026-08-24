let command;
const todoList = [];

while (command !== "quit") {
    command = prompt("Enter your command");
    switch(command) {
        case "new":
            let todo = prompt("What is your todo");
            todoList.push(todo);
            console.log(`${todo} added to list`);
            break;
        case "list":
            console.log("***************");
            for (let i = 0; i < todoList.length; i++) {
                console.log(`${i}: ${todoList[i]}`);
            }
            console.log("***************");
            break;
        case "delete":
            let index = prompt("Select an index");
            todoList.splice(index, 1);
            console.log("Todo Removed");
            break;
        case "quit":
            console.log("Byeeeee...");
            break;
    }
}