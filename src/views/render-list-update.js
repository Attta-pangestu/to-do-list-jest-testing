import LocalStorageUtility from "../data/local-storage-utility";
import addElem from "../utility/addingElement";


export const renderListUpdate = ({taskData, listContainer}) => {
    _initialDOM(taskData, listContainer) ;
    console.log('memanggil render list update');
};


const _initialDOM = (taskData, listContainer) => {
    listContainer.innerHTML = '' ; 
    taskData.data.forEach((task) => {
        const todoContainer = addElem('div', ['todo__item', 'todo-list-container'], listContainer); 
        const checkBox = addElem('input', ['checkbox'], todoContainer) ; 
        checkBox.setAttribute('type', 'checkbox');
        const todoDescription = addElem('input',['todo__item__description', task._completed?'strike-through' : 'through'], todoContainer) ; 
        todoDescription.value = task._description ; 
        const threeDot = addElem('i', ['fa-solid', 'fa-ellipsis-vertical', 'fa-lg', 'font-awesome-icon'], todoContainer);
        const removeBtn = addElem('button', ['hide', 'remove-button'], todoContainer);
        const removeIcon = addElem('i', ['fa-solid', 'fa-trash-can', 'fa-lg', 'font-awesome-icon'], removeBtn);
        
        // Give event handler
        document.body.addEventListener('click',() => {
            if(document.activeElement === todoDescription) {
                todoContainer.style.backgroundColor = 'rgb(255, 253, 204)';
                threeDot.classList.add('hide');
                removeBtn.classList.remove('hide');


                todoDescription.onchange = () => {
                    console.log('rename happened');
                    taskData.renameTask(task._id, todoDescription.value);
                    renderListUpdate({taskData : taskData, listContainer : listContainer,})
                }
                
            } else {
                todoContainer.style.backgroundColor = 'transparent';
                threeDot.classList.remove('hide');
                removeBtn.classList.add('hide');
            }
        })

        removeBtn.onclick = () => {
            taskData.removeTask(task._id);
            renderListUpdate({taskData : taskData, listContainer : listContainer,})
        }

       


    });

}
