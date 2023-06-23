//caching 
const todoList = document.querySelector("#todo-list")
const todoInput = document.querySelector("#todo-input")

const addBtn = document.querySelector("#add-btn");





 


  



function createNewTodo(task) {
  const todo = document.createElement('li');

  todo.idName="todo-item";
  const todoCheckbox = document.createElement("input");
  todoCheckbox.type ="checkbox"
  //todoCheckbox.idName="todo-item"
  // create a lable 
      
  const label = document.createElement("label")
  label.innerText = task;
  // create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete"
    deleteBtn.className = 'del-btn'
    deleteBtn.style.background+"red";
    deleteBtn.style.marginLeft= "10px"
    deleteBtn.addEventListener('click',deleteTodoItem)
  // append elements

 todo.appendChild(todoCheckbox)
 todo.appendChild(label)
 todo.appendChild(deleteBtn)

 todoList.appendChild(todo)


}


 function deleteTodoItem() {
   const todo = this.parentElement;
   todo.remove();
 }

 function addTask() {
   const inputValue = todoInput.value.trim()
    if(inputValue != ''){
      createNewTodo(inputValue)

      todoInput.value = ""
    }
 }





// Function to handle marking a task as complete
// Function to handle marking a task as complete
function completeTask() {
  const checkbox = this;
  const label = checkbox.nextElementSibling; // Fix: use nextElementSibling instead of nextSibling
  if (checkbox.checked) {
    label.style.textDecoration = 'line-through';
  } else {
    label.style.textDecoration = 'none';
  }
}








// Event listeners 
addBtn.addEventListener("click",addTask)
 todoList.addEventListener('click',completeTask)