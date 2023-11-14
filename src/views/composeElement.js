import addElem from "../utility/addingElement";
import Tasklist from "../utility/taskListUtility";
import { renderListUpdate } from "./render-list-update";

const ComposeElement = {
    // global variabel 
    _mainContainer : null,
    _inputContainer: null,
    _listContainer : null,
    _taskList : new Tasklist(), 
    _inputText : null, 

    init(){
        this._initialDOM(); 
        this._renderDataToDOM();
        this._initListener();
    },

    _initialDOM() {
        this._renderMainContainer();
    },

    _renderMainContainer() {
        this._mainContainer = document.querySelector('.todo-list-container') ; 
        this._mainContainer.innerHTML = `
        <div class="row">
            <h1>Today's To Do</h1>
            <i class="fa-solid fa-rotate fa-lg font-awesome-icon"></i>
        </div>
        `;
        this._inputContainer =  addElem('form', ['row'], this._mainContainer) ;
        this._inputText = addElem('input', ['input__add'],this._inputContainer) ; 
        this._inputText.setAttribute('placeholder', 'Add your task here') ; 
        addElem('i', ['fa-solid', 'fa-arrow-right-to-bracket', 'fa-sm', 'font-awesome-icon'], this._inputContainer) ;
        // Functionalities Element
        this._listContainer = addElem('div', [], this._mainContainer) ; 
        const clearButton = addElem('button', ['button'], this._mainContainer) ;
        clearButton.textContent = 'Clear all completed' ; 
    }, 

    _renderDataToDOM(){
        //render data on first load
        renderListUpdate({
            taskData : this._taskList, 
            listContainer : this._listContainer,
        });
        
    }, 

    _initListener(){
        // Listener to input task submit
        this._inputContainer.onsubmit = (e) => {
            e.preventDefault() ; 
            e.stopPropagation();
            console.log('Klik tombol') ;
            this._taskList.addTask(this._inputText.value);
            this._inputContainer.reset(); 
            this._renderDataToDOM(); 
        }

        //

    }
}

export default ComposeElement ; 