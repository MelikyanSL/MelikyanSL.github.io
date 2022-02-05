// SELECTORS
const modal = document.querySelector('.modal');
const open_modal_btn = document.querySelector('.add_btn');
const close_modal_btn = document.querySelector('.modal .fa-times');
const todo_input = document.querySelector('.modal input[type=text]');
const add_todo_btn = document.querySelector('.modal input[type=submit]');
const all_status = document.querySelectorAll('.status');

// EVENT LISTENERS
open_modal_btn.addEventListener('click', openModalFunc);
close_modal_btn.addEventListener('click', closeModalFunc);
add_todo_btn.addEventListener('click', addTodoFunc);
all_status.forEach((status)=>{
    status.addEventListener('click', removeTodo);
    status.addEventListener('dragenter', dragEnter);
    status.addEventListener('dragleave', dragLeave);
    status.addEventListener('dragover', dragOver);
    status.addEventListener('drop', dragDrop);
});

// FUNCTIONS
function openModalFunc() {
    modal.classList.add('active');
}

function closeModalFunc() {
    modal.classList.remove('active')
}

function addTodoFunc(e) {
    e.preventDefault();
    
    if(!todo_input.value.trim()) return;

    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.setAttribute('draggable', 'true');
    
    const text = document.createElement('span');
    text.classList.add('text');
    text.innerText = todo_input.value;
    todo.appendChild(text);

    const close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = '<i class="fas fa-times"></i>';
    todo.appendChild(close);

    all_status[0].appendChild(todo)
    todo_input.value = '';
    todo_input.blur();
    modal.classList.remove('active');

    todo.addEventListener('dragstart', dragStart);
    todo.addEventListener('dragend', dragEnd);
}

function removeTodo(e) {
    if(e.target.classList[1] == 'fa-times'){
        e.target.parentElement.parentElement.remove();
    }
}

// DRAG & DROP

// Todo
let draggable_todo = null;

function dragStart() {
    draggable_todo = this;
}

// Status
function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    this.appendChild(draggable_todo);
    this.style.border = '.2rem solid rgb(36, 36, 36)';
}

function dragEnter() {
    this.style.border = '.2rem dashed rgb(36, 36, 36)';
}

function dragLeave() {
    this.style.border = '.2rem solid rgb(36, 36, 36)';
}




