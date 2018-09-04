//let rootNode = document.getElementById('root');
//rootNode.appendChild(/* Append your list item node*/);


window.onload = function () {
    const addButton = document.getElementById('add');
    const textInput = document.getElementById('in');
    const maxLenght = 10;
    const nineLenght = 9;
    let todoList = [];

    document.getElementById('add').onclick = function () {
        if (todoList.length === nineLenght) {
            addButton.disabled = true;
            textInput.disabled = true;
        }
        let d = textInput.value;
        let temp = {};
        temp.todo = d;
        temp.check = false;
        todoList[todoList.length] = temp;
        if (todoList.length === maxLenght) {
            document.getElementById('header-text').innerHTML = 'Maximum item per list are created';
        }
        out();
    };

    function out() {
        let out = '';
        for (let key in todoList) {
            if(key!==null){
                out += '<button><i class="material-icons" id="check" >check_box_outline_blank</i></button>';
                out += todoList[key].todo + '<br>'
            }

        }
        document.getElementById('out').innerHTML = out;
        document.getElementById('in').value = '';
    }


};