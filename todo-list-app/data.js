// import {v4 as uuidv4} from 'uuid';

// export class User{
    
//     // I don't know that why we can't create class properties like this.

//     // An array to store all the task created by the user.
//     taskList = [];
//     constructor(name, email){
//         this.name = name; // Full name or just name
//         this.email = email;

//         this.created_at = new Date()
//         this.username = email.split("@")[0]; // username will be a unique identifier ( and it is useful because if two users have same name but they can't have same email, and we will create username from email.)

//         // An array to store all the task created by the user.
        
//         // localStorage.setItem("username", this);
        
//     }

//     // static fromJSON(json_str){
//     //     const obj = JSON.parse(json_str);
//     //     return new User(obj.name, obj.email);
//         // if typeof obj === "string"{
//         //     obj = JSON.parse(obj);
//         // }

//         // const user = new User(obj.name, obj.email);
//         // user.taskList = obj.taskList || [];
//         // return user;
//     // }
//     addTasks(task){
//         // is it not possible to pass the complete object here.
//         // const user = this.user; // this is the wrong code
//         // const task_obj = new Task(task, user);
        
//         const task_obj = new Task(this.username, task);

//         this.taskList.push(task_obj);

//         // Basically fetching the user list from local storage updating it and storing it back to local storage, similar to what you was thinking.
//         // Update the user data in local storage

//         // I think userList = [] won't be the case becasue we can add tasks only if atleast a user exist.
//         const userList = JSON.parse(localStorage.getItem("userList")) || [];
//         const index = userList.findIndex(user => user.email === this.email);
//         // if we wil get any index with this email, i.e. user exist.

//         if(index !== -1){
//             userList[index] = this; // Update the user in the array
//             localStorage.setItem("userList",JSON.stringify(userList));
//         }
        

//         // this.taskList.push(task_obj);
//     }

//     updateTasks(){
//         // here we need an id of a task to update it.

//     }

//     removeTasks(){
//         // here also we need an id to remove the task.
//     }

//     displayTasks(){
//         for(let i in (this.taskList)){
//             console.log(i + "<br>");
//         }
//     }
// }

// class Task{

//     constructor(username,task){
//         this.username = username;// username is an identifier
//         this.task = task;
//         this.created_at = new Date();
//         this.isCompleted = false;
//         this.id = 4;

//         const user = JSON.parse(localStorage["userList"]).find(user=> user.username === username);
//         // checking
//         console.log("user is ", user);
//         // const taskList = user["taskList"];
        
//         const taskList = user ? user.taskList : [];
//         console.log("taskList is ", taskList);
//         // let random_number = Math.random;
//         // this.task_id = `${this.created_at}${random_number}`;

//         // this.task_id = uuidv4();


//         // localStorage.setItem();
//     }



//     update(task_id, user){
//         // here update thing will happen based on event listener, we will add a checkbox, by default it is unchecked(so false), if user clicked it we will mark it True(completed)

//     }

//     delete(){
//         // here also we need a task id to remove it.
//     }

// }

// import {v4 as uuidv4} from 'uuid';


// export class StorageProxy {

//     constructor(target, storageKey){
//         this.storageKey = storageKey;

//         // Initialize from LocalStorage if exists
//         const storedData = localStorage.getItem(storageKey);

//         if (storedData){
//             Object.assign(target,JSON.parse(storedData));
//         }

//         return new Proxy(target, {
//             set:(obj,prop,value)=>{
//                 obj[prop] = value;
//                 localStorage.setItem(this.storageKey, JSON.stringify(obj));
//                 return true;
//             },
//             get:(obj,prop) =>{
//                 if (typeof obj[prop] === 'function'){
//                     return (...args)=>{
//                         const result = obj[prop].apply(obj,args);
//                         localStorage.setItem(this.storageKey, JSON.stringify(obj));
//                         return result;
//                     };
//                 }
//                 return obj[prop];
//             }
//         });
//     }
// }

// export class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//         this.created_at = new Date();
//         this.username = email.split("@")[0];
//         // this.taskList = [];
//         this.taskList = new StorageProxy([],`user_${this.email}_tasks`);


//         // Wrap the instance with StorageProxy
//         return new StorageProxy(this, `user_${this.email}`);
//     }

//     addTasks(task){
//         const task_obj = new Task(this.username, task);
//         this.taskList.push(task_obj);
//         return task_obj;
//     }
// }

// export class Task{
//     constructor(username, task){
//         this.username = username;
//         this.task = task;
//         this.created_at = new Date();
//         // this.isCompleted = false;
//         this.task_id = uuidv4();
//     }
// }

// ###########################################
export class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.created_at = new Date();
        this.username = email.split("@")[0];
        this.taskList = [];
    }

    addTasks(task,description,status,priority,dueDate){
        const taskObj = new Task(this.username, task,description, status , priority , dueDate);
        this.taskList.push(taskObj);
        return taskObj;
    }

    // Convert User instance to a plain data object for storage.
    toData(){
        return {
            name: this.name,
            email : this.email,
            created_at : this.created_at.toISOString(),
            username : this.username,
            // Converting the task object into a string in taskList object, so firstly we are iterating those tasks object and converting them into a string and then storing them into a map.
            taskList : this.taskList.map(task => task.toData())
        };
    }

    // Creates a User instance from a plain data object
    static fromData(data){
        const user = new User(data.name, data.email);
        user.created_at = new Date(data.created_at);
        user.taskList = data.taskList.map(taskData => Task.fromData(taskData));
        return user;
    }

    updateTask(task){

    }
}

export class Task{
    // constructor(username, task, status , priority ,description, dueDate){
    constructor(username, task, description="", status = "", priority = "", dueDate){
        this.username = username;
        this.task = task;
        this.created_at = new Date();
        this.task_id = uuidv4();

        // Optional fields
        this.status = status;
        this.priority = priority;
        this.description = description;
        this.dueDate = dueDate;
        
    }

    toData(){
        return {
            username: this.username,
            task : this.task,
            created_at : this.created_at.toISOString(),
            task_id : this.task_id,
            // Extra fields
            description: this.description,
            status: this.status,
            priority:this.priority,
            dueDate:this.dueDate

        };
    }

    static fromData(data){
        const task = new Task(data.username, data.task);
        task.created_at = new Date(data.created_at);
        task.task_id = data.task_id;

        // Extra fields
        task.description = data.description;
        task.status = data.status;
        task.priority = data.priority;
        task.dueDate = new Date(data.dueDate);
        return task;
    }
}