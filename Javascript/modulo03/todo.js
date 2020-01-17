var listElement = document.querySelector('.listaTodo');
var inputElement = document.querySelector('.novoTodo');
var buttonElement = document.querySelector('.adicionarTodo');


var todos =JSON.parse(localStorage.getItem('list_todos')) || [];

function listarTodos() {
  listElement.innerHTML = '';
  for (todo of todos) {
    var pos =  todos.indexOf(todo);

    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var excluirElement = document.createElement('a');
    var excluirText = document.createTextNode('Excluir');

    excluirElement.setAttribute('href', '#');
    excluirElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

    excluirElement.appendChild(excluirText);
    todoElement.appendChild(todoText);

    listElement.appendChild(excluirElement);
    listElement.appendChild(todoElement);

  }
}
listarTodos();

buttonElement.onclick = function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = '';
  listarTodos();
  saveTodoStorage();

}
function deleteTodo(pos) {
  todos.splice(pos,1);
  listarTodos();
  saveTodoStorage();
}
function saveTodoStorage(){

  localStorage.setItem('list_todos',JSON.stringify(todos));
}