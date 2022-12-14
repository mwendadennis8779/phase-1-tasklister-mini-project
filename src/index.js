document.addEventListener("DOMContentLoaded", () => {
  // your code here
    let form = document.getElementById('create_task_form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleTask(e.target.new_task.value);
        form.reset();

    })

});

function handleTask(newTask) {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    // let edit = document.creatElement('button');
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x';
    // edit.textContent = 'edit';
    li.textContent = `${newTask}   `;
    li.appendChild(btn)
        // li.appendChild(edit)
    document.querySelector('#list').appendChild(li);

}

function handleDelete(e) {
    e.target.parentNode.remove()

}

