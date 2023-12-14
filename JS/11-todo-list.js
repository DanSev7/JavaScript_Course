const todoList = [{
    name:'Hello',
    dueDate: '280-842-82',
}];

const dateList = [];
renderTodoList();

function renderTodoList () {

    let todoListHTML = '';
    
    for (let i=0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        const html =`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="delete-todo-button">Delete</button>
        </div>
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-lists').innerHTML = todoListHTML;
}
    
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



