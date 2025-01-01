// // export function sum(a,b){
// //     return a+b;
// // }

// // document.getElementById("demo").innerHTML = sum(5,6);
// import { handleFormSubmit } from "./ui.js";
// import {User } from "./data.js";

// const userList = [];
// document.getElementById("submitBtn").addEventListener("click",()=>{
//     // const userList = []; // It needed to create outside of the function, otherwise it will get created again and again.
//     const {name, email} = handleFormSubmit();

//     let newUser = None;
//     if (userList.length){
//         userList.forEach((user_obj) => {

//             if(user_obj["email"] != email){
//                 // Create user only if it doesn't exist.
//                 newUser = new User(name, email);
//                 // userList.push(newUser);
//                 const list = JSON.parse(localStorage.getItem("userList"));
//                 list.push(newUser);
//             }
//         });
//     }
//     else{
//         // For the case when there is zero users exist.
//         newUser = new User(name, email);

//         // Instead of adding it in the array, we should add it in the browser array.
//         // converting the string into an array
//         const list = JSON.parse(localStorage.getItem("userList") );
//         list.push(newUser);
        
//         // userList.push(newUser);
//     }
   

//     // I need to find the right place for userList variable, so that things won't repeated or get cluttered.
    
//     // This is for the case when userList array is not added to the local storage.

//     if(! localStorage.getItem("userList")){
//         console.log("I am inside if statment for adding users.")
//         localStorage.setItem("userList",JSON.stringify(userList));
//     }

//     // just for checking
//     console.log(newUser);
// });

// // displaying the user from the local storage (userList) and adding the constraint of not adding the user if it is already exist, basically will check the email of the existing object, if exist then we will say no, you can't take it.
// // and we will also have to prevent userList in local storage if already exist.

// // This is for showing dropdown only if any user exist in userList.
// // It basically return null if no user exist, which is equal to 0(maybe), so no need to check the length of the array, in order to verify whether user exists or not.
// if (! JSON.parse(localStorage.getItem("userList"))){
//     dropdown_options = document.getElementById("choose-user");
//     dropdown_options.addEventListener("change", ()=> {
//         const select_options = JSON.parse(localStorage.getItem("userList"));

//     });
// }
// else{
//     document.getElementById("user-dropdown").style.display = "none";
// }


// ##############################


// import { handleFormSubmit, handleTaskData } from "./ui.js";    
// import {User} from "./data.js";

// const userList = JSON.parse(localStorage.getItem("userList")) || [];

// document.getElementById("submitBtn").addEventListener("click" , (event)=>{
//     // Prevent automatic submission on loading.
//     event.preventDefault();
//     const {name, email} = handleFormSubmit();

//     if( !name || !email){
//         alert("Please fill out all required fields.");
//         return;
//     }
//     const existingUser = userList.find(user => user.email === email);

//     if(!existingUser){

//         // Create the user
//         const newUser = new User(name, email);
//         userList.push(newUser);
//         localStorage.setItem("userList", JSON.stringify(userList));
//         alert("New user added: ", newUser);
//         // Clearing the form fields.
//         document.getElementById("user-data").reset();
//     }

//     else{
//         alert("User with this email already exists: ", email);
//     }
// })

// // Allowing the user choose option to display, only if any user exist, otherwise hide this option.
// let currentUser = null;
// // Hide the choose option
// if(!userList.length){
//     document.getElementById("user-dropdown").style.display = "none";
// }
// // Display the user choose option
// else{
//     const dropdown = document.getElementById("choose-user");
//     userList.forEach((user, index ) => {
        
//         // Its for displaying the options 
//         const optionElement = document.createElement('option');
//         optionElement.value = index
//         optionElement.textContent = user["username"];

//         dropdown.appendChild(optionElement);
       
//     } );
//         //  A trigger for allowing the chosen user to create tasks.
//         dropdown.addEventListener("change",() => {
//             // currentUser = user;
//             // console.log("userr is ", user);
//             // console.log("currentUser is ", currentUser + "is instance of User: ", currentUser instanceof User);
//             // Hiding the user creation form.
//             // document.getElementById("user-data").style.display = "none";
//             // Hiding the user-selection dropdown container
//             // document.getElementById("user-dropdown").style.display = "none";

//             // Hiding the home page itself and showing user profile
//             // document.getElementById("home-page").style.display = "none";
//             // // showing the profile page
//             // document.getElementById("user-profile").style.display = "block";

//             // const element = document.getElementById("user-profile");
//             // const para = element.querySelector("p");
//             // const user_obj = document.createElement("h1");
//             // user_obj.textContent = `Hi ${user["username"]}!`;
//             // para.appendChild(user_obj);
        
//             const selectedIndex = dropdown.value;
//             currentUser = userList[selectedIndex];
            
//             document.getElementById("home-page").style.display = "none";
//             document.getElementById("user-profile").style.display = "block";

//             const element = document.getElementById("user-profile");
//             const para = element.querySelector("p");

//             para.innerHTML = '';
//             const user_obj = document.createElement("h1");
//             user_obj.textContent = `Hi ${currentUser["username"]}!`;
//             para.append(user_obj);
//         }
//     );
    
// }

// // Handling task addition


// document.getElementById("add-task").addEventListener("click", (event) => {
//     event.preventDefault();
//     const {task} = handleTaskData();

//     if (!task){
//         alert("Please add a task.");
//         return;
//     }


//     // const existingTask = task_list.find(existing_task => existing_task === task ); // Wrong code
//     // Here currentUser.taskList basically access the taskList array, and then existingTask represents task objects, so from existingTask, we are trying to get the task by using existingTask.task.
//     currentUser = User.fromJSON(currentUser); // Rehydration
//     const existingTask = currentUser.taskList.find(existingTask => existingTask.task === task);
//     console.log("existingTask: " + existingTask);

//     if(!existingTask){
//         // const current_user = User.fromJSON(currentUser);
//         console.log("currentUser is ", currentUser + "is instance of User: ", currentUser instanceof User);
//         console.log("task is ", task);
//         currentUser.addTasks(task);
//         alert("Task created successfully.");

//     }
//     else{
//         alert("Task already exist.Try adding another task!");
//     }

// });

// // For displaying the tasks
// document.getElementById("view-task").addEventListener("click",()=>{

// });

// document.getElementById("back-to-home").addEventListener("click",()=>{
//     document.getElementById("home-page").style.display = "block";
//     document.getElementById("user-profile").style.display = "none";
// });


// ################################################################
import { handleFormSubmit,handleTaskData } from "./ui.js";
import {User} from "./data.js";
// import {User, StorageProxy } from "./data.js";
import { PageManager } from "./navigation.js";

const userListKey = 'userList';
const userMap = new Map();

// Load from local storage and populate the userMap
const storedUsers = JSON.parse(localStorage.getItem(userListKey)) || [];
storedUsers.forEach(userData => {
    const user = User.fromData(userData);
    userMap.set(user.email, user);
});
let userList = Array.from(userMap.values()); // Create userList from userMap

let currentUser = null;
const pageManager = new PageManager();

// Updating user dropdown
function updateUserDropdown(){
    const dropdown = document.getElementById("choose-user");
    const userDropdownContainer = document.getElementById("user-dropdown");

    // If no user exist, then don't show the dropdwon.
    if(!userList.length){
        userDropdownContainer.style.display = "none";
        return;
    }

    dropdown.innerHTML = '<option value="" disabled selected> Choose an option</option>';
    userDropdownContainer.style.display = "block";
    userList.forEach((user, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = index;
        optionElement.textContent = user.username;
        dropdown.appendChild(optionElement);
    }
);

}

// Choosing user from user selection dropdown.
function handleUserSelection(event){
    const selectedIndex = event.target.value;
    console.log("selectedIndex is", selectedIndex);
    currentUser = userList[selectedIndex];

    updateProfileView(currentUser);
    const task_dropdown = document.getElementById("view-task");
    pageManager.showPage('profile');
    displayTask(currentUser);
}

// Basically updating the profile data after showing the profile page.
function updateProfileView(user){
    const para = document.querySelector("#user-profile p");
    para.innerHTML = '';
    const user_obj = document.createElement("h1");
    user_obj.textContent = `Hi ${user.username}!`;
    para.appendChild(user_obj);
}

function displayTask(user){
    const ele = document.querySelector("#task-display ol");
    const user_task_ls = user["taskList"];
    ele.innerHTML = '';
    for(const task of user_task_ls){
        const li = document.createElement("li");
        for(const prop in task){
            if(prop == "task"){
                li.textContent = task[prop];
                break;
            }
        }
        ele.appendChild(li);
    }
}

function handleBackToHome(){
    pageManager.showPage('home');
    currentUser = null;
    updateUserDropdown();

}



function setupEventListeners(){
    document.getElementById("submitBtn").addEventListener("click", (event) => {
        event.preventDefault();
        const {name, email } = handleFormSubmit();

        if (!name || !email){
            alert("Please fill out all required fields.");
            return;
        }

        // Checking that user exists or not, if not then we will add one.
        if(!userMap.has(email)){
            const newUser = new User(name, email);
            userMap.set(email,newUser);
            // 
            userList = Array.from(userMap.values());
            localStorage.setItem(userListKey, JSON.stringify(Array.from(userMap.values()).map(user => user.toData())));
            
            updateUserDropdown();
            alert("New user added successfully");
            document.getElementById("user-data").reset();
        }
        else{
            alert(`User with email ${email} already exists.`);
        }
    });



    // User selection
    document.getElementById("choose-user").addEventListener("change", handleUserSelection);

    // Task addition
    document.getElementById("add-task").addEventListener("click",(event) => {
        event.preventDefault();
        const {task, description, priority , status, dueDate} = handleTaskData();

        if (!task){
            alert("Please add a task");
            return;
        }

        if(!dueDate){
            alert("Please add a due Date");
            return;
        }

        console.log("task is ",task, "<br> description is ", description, "<br> priority is ", priority, "<br> status is ",status,"<br> dueDate is ",dueDate )
        const existingTask = currentUser.taskList.find(existingTask =>
            existingTask.task === task );

        if (!existingTask){

            // currentUser.addTasks(task);
            currentUser.addTasks(task,description,status,priority,dueDate);
            localStorage.setItem(userListKey, JSON.stringify(Array.from(userMap.values()).map(user => user.toData())));
            displayTask(currentUser);
            alert("Task created successfully.");
            document.getElementById("task-creation").reset();
        }
        else{
            alert("Task already exists. Try adding another task!");
        }
    });
   

    document.getElementById("back-to-home").addEventListener("click", handleBackToHome);
}



// Initialize the application
function initializeApp(){
    updateUserDropdown();
    setupEventListeners();
    pageManager.showPage('home');
}

initializeApp();

// ##################################################
// import { handleFormSubmit,handleTaskData } from "./ui.js";
// import {User, StorageProxy } from "./data.js";
// import { PageManager } from "./navigation.js";

// const userList = new StorageProxy([], 'userList');
// let currentUser = null;
// const pageManager = new PageManager();

// // Updating user dropdown
// function updateUserDropdown(){
//     const dropdown = document.getElementById("choose-user");
//     const userDropdownContainer = document.getElementById("user-dropdown");

//     // If no user exist, then don't show the dropdwon.
//     if(!userList.length){
//         userDropdownContainer.style.display = "none";
//         return;
//     }

//     dropdown.innerHTML = '<option value="" disabled selected> Choose an option</option>';
//     userDropdownContainer.style.display = "block";
//     userList.forEach((user, index) => {
//         const optionElement = document.createElement('option');
//         optionElement.value = index;
//         optionElement.textContent = user.username;
//         dropdown.appendChild(optionElement);
//     }
// );

// }

// // Choosing user from user selection dropdown.
// function handleUserSelection(event){
//     const selectedIndex = event.target.value;
//     currentUser = userList[selectedIndex];

//     updateProfileView(currentUser);
//     pageManager.showPage('profile');
// }

// // Basically updating the profile data after showing the profile page.
// function updateProfileView(user){
//     const para = document.querySelector("#user-profile p");
//     para.innerHTML = '';
//     const user_obj = document.createElement("h1");
//     user_obj.textContent = `Hi ${user.username}!`;
//     para.appendChild(user_obj);
// }

// function handleBackToHome(){
//     pageManager.showPage('home');
//     currentUser = null;
//     updateUserDropdown();

// }

// function setupEventListeners(){
//     document.getElementById("submitBtn").addEventListener("click", (event) => {
//         event.preventDefault();
//         const {name, email } = handleFormSubmit();

//         if (!name || !email){
//             alert("Please fill out all required fields.");
//             return;
//         }

//         const existingUser = userList.find(user => user.email === email);

//         if(!existingUser){
//             const newUser = new User(name, email);
//             userList.push(newUser);
//             alert("New user added successfully");
//             document.getElementById("user-data").reset();
 
//             updateUserDropdown();
//         }else{
//             alert(`User with email ${email} already exists.`);
//         }
//     });

//     // User selection
//     document.getElementById("choose-user").addEventListener("change", handleUserSelection);

//     // Task addition
//     document.getElementById("add-task").addEventListener("click",(event) => {
//         event.preventDefault();
//         const {task} = handleTaskData();

//         if (!task){
//             alert("Please add a task");
//             return;
//         }

//         const existingTask = currentUser.taskList.find(existingTask =>
//             existingTask.task === task );

//         if (!existingTask){
//             currentUser.addTasks(task);
//             alert("Task created successfully");
//             document.getElementById("task-creation").reset();
//         }
//         else{
//             alert("Task already exists. Try adding another task!");
//         }
//     });

//     document.getElementById("back-to-home").addEventListener("click", handleBackToHome);
// }



// // Initialize the application
// function initializeApp(){
//     updateUserDropdown();
//     setupEventListeners();
//     pageManager.showPage('home');
// }

// initializeApp();

// #################################################
// import { handleFormSubmit, handleTaskData } from "./ui.js";
// import { User,Task } from "./data.js";
// import { PageManager } from "./navigation.js";

// const userList = []; // Replace with StorageProxy for future enhancements
// let currentUser = null;
// const pageManager = new PageManager();

// // Choosing user from user selection dropdown (modify based on your implementation)
// function handleUserSelection(event) {
//   // Implement logic to choose user from dropdown and update currentUser
// }

// function updateProfileView(user) {
//   // Update profile view based on user data
// }

// function handleBackToHome() {
//   // Handle going back to home page
// }

// function setupEventListeners() {
//   document.getElementById("submitBtn").addEventListener("click", (event) => {
//     event.preventDefault();
//     const { name, email } = handleFormSubmit();

//     if (!name || !email) {
//       alert("Please fill out all required fields.");
//       return;
//     }

//     const existingUser = userList.find(user => user.email === email);

//     if (!existingUser) {
//       const newUser = new User(name, email);
//       userList.push(newUser);
//       alert("New user added successfully");
//       document.getElementById("user-data").reset();

//       // Update user list for dropdown (if applicable)
//     } else {
//       alert(`User with email ${email} already exists.`);
//     }
//   });

//   // User selection
//   // document.getElementById("choose-user").addEventListener("change", handleUserSelection);

//   // Task addition (not implemented yet)

//   document.getElementById("back-to-home").addEventListener("click", handleBackToHome);
// }

// function initializeApp() {
//   // Load user data from local storage (if using StorageProxy in the future)
//   // updateUserDropdown(); // Update user list for dropdown (if applicable)
//   setupEventListeners();
//   PageManager.showPage('home');
// }

// initializeApp();
