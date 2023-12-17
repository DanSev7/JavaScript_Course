const todoList = [{
    name:'Hello',
    dueDate: '280-842-82',
}];

const dateList = [];
renderTodoList();

function renderTodoList () {

    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject;
        const html =`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
        </div>
        `;
        todoListHTML += html;
    })
    
    document.querySelector('.js-todo-lists').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
            renderTodoList();
            })
        })
}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    })
    
function addTodo(){
    let inputElement = document.querySelector('.js-name-input');
    let dateinputElement = document.querySelector('.js-date-input');
    let date = dateinputElement.value;
    let title = inputElement.value;
    todoList.push({
        name: title,
        dueDate: date
    });
    

    inputElement.value = '';
    dateinputElement.value = '';
    
    renderTodoList();
}

function handleKeydown (event) {
    let key = event.key;
    if (key === 'Enter') {
        addTodo();
    }
}



