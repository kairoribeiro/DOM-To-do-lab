
// Cached Elements

const input = document.getElementById('input')
const button = document.getElementById('submit-button')
const toDoList = document.getElementById('todo-list')

// Event Listeners

button.addEventListener('click', function(event) {
    if(input.value === "") 
    return 
    const newTodo = document.createElement('li')
    newTodo.textContent = input.value
    toDoList.appendChild(newTodo)
    input.value = ''
    
})

toDoList.addEventListener('click', function(event) {
    const parentNode = event.target.parentNode
    parentNode.removeChild(event.target)
  })

