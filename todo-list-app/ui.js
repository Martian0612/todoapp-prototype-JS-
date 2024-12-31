// const element = document.getElementById("submitBtn");
// // Adding an event handler
// element.addEventListener("click", CreateUser);


export function handleFormSubmit(){
    const user_form = document.getElementById("user-data");
    const name = user_form["name"].value.trim();
    const email = user_form["email"].value.trim();
    
    return {name, email};
}

export function handleTaskData(){
    const task_form = document.getElementById("task-creation");
    const task = task_form["task"].value.trim();
    const description = task_form["description"].value.trim();
    const status = task_form["status"].value;
    console.log("status is", status);
    const priority = task_form["priority"].value;
    const dueDate = task_form["dueDate"].value;
    return {task, description, status, priority, dueDate};
}


// Just checkin via calling like this.
// document.getElementById("demo").innerHTML = CreateUser();

// Checking code.....

// const element = document.getElementById("submitBtn");
// // Adding an event handler
// element.addEventListener("click", CreateUser);

// function CreateUser(){
//     const user_form = document.getElementById("user-data");
//     const name = user_form["name"].value;
//     const email = user_form["email"].value;
//     const user = new User(name, email);
//     // document.getElementById("demo").innerHTML = "name is " + name + " " + "email is " + email;
//     // Just printing values to check.
//     console.log("name" + name + " " + "email is "+ email);
//     const user_list = [];
//     // Here I want to store a complete user object but want to display them in the list using username over user object, so how to do this?
//     // user_list.push(user.username); // Just trying
//     user_list.push(user);

//     localStorage("user_list", JSON.stringify(user_list));
// }

// // Just checkin via calling like this.
// document.getElementById("demo").innerHTML = CreateUser();