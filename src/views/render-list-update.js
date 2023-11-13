import addElem from "../utility/addingElement";

export const renderListUpdate = ({taskData, listContainer}) => {
    listContainer.innerHTML = '' ; 
    taskData.forEach((task) => {
        

        const todoContainer = addElem('div', ['todo__item', 'todo-list-container'], listContainer); 
        const checkBox = addElem('input', ['checkbox'], todoContainer) ; 
        checkBox.setAttribute('type', 'checkbox');
        const todoDescription = addElem('input',['todo__item__description', task._completed?'strike-through' : 'through'], todoContainer) ; 
        todoDescription.value = task._description ; 
        const threeDot = addElem('i', ['fa-solid', 'fa-ellipsis-vertical', 'fa-lg', 'font-awesome-icon'], todoContainer);

    });
};
