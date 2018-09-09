const rootNode = document.getElementById('root');
const todoItems = [];

function  myFunction(){
    window.location.hash = '';
    rootNode.innerText = '';
    let mainTitle = document.createElement('h1');//h1
    mainTitle.innerText = 'Simple TODO application';
    mainTitle.className = 'h1';
    let button = document.createElement('button');//btn
    button.className = 'button';
    button.innerText = 'Add new task';
    let emptyTodo = document.createElement('h2');
    emptyTodo.innerText = 'TODO is empty';
    emptyTodo.className = 'h2';
    let list = document.createElement('ul');
    list.id = 'list';

    rootNode.appendChild(mainTitle);
    rootNode.appendChild(button);
    if (todoItems.length === 0) {
        rootNode.appendChild(emptyTodo);
    }
    rootNode.appendChild(list);

    button.addEventListener('click', addNewItems);
    function addNewItems() {

            let title = document.createElement('h1');
            title.innerText = 'Add new TODO action';
            title.className = 'h1';
            let mainInput = document.createElement('input');
            mainInput.id = 'input';
            mainInput.type = 'text';
            let freePlace = document.createElement('div');
            freePlace.id = 'place';
            let cancel = document.createElement('button');
            cancel.className = 'cancel buttons';
            cancel.innerText = 'Cancel';

            let save = document.createElement('button');
            save.className = 'add buttons';
            save.innerText = 'Save changes';

            rootNode.appendChild(title);
            rootNode.appendChild(mainInput);
            rootNode.appendChild(freePlace);
            freePlace.appendChild(cancel);
            freePlace.appendChild(save);

            cancel.addEventListener('click', closeElement);

            function closeElement(){
                window.close();
            }

            save.addEventListener('click', newElement);
            let todoList = [];
            function newElement() {
                let d =document.getElementById('input').value;
                let temp={};
                temp.todo = d;
                temp.check = false;
                let i = todoList.length;
                todoList[i] = temp;
                console.log(todoList);
                out();
            }
            function out() {
                let out='';
                for(let key in todoList){
                    if(todoList[key].check===true){
                        out+='<input type="checkbox" checked/>';
                    } else{
                        out+='<input type="checkbox"/>';
                    }
                    out += todoList[key].todo + '<br>';
                }
                document.getElementById('place').innerHTML = out;
                freePlace.appendChild(cancel);
                freePlace.appendChild(save);
                document.getElementById('input').value = "";
            }

    }
}
myFunction();


