import addElem from "../utility/addingElement";

const ComposeElement = {
    _mainContainer : document.querySelector('.todo-list-container'),

    init(){
        this._initialDOM() ; 
        
    },

    _initialDOM() {
        this._mainContainer.innerHTML = `
        <div class="row">
            <h1>Today's To Do</h1>
            <i class="fa-solid fa-rotate fa-lg font-awesome-icon"></i>
        </div>
        `;
        const inputContainer =  addElem('form', [], this._mainContainer) ;
        const inputText = addElem('input', ['input__add'],inputContainer ) ; 
        inputText.setAttribute('placeholder', 'Add your task here') ; 
        addElem('i', ['fa-solid', 'fa-arrow-right-to-bracket', 'fa-sm', 'font-awesome-icon'], inputContainer) ;

        // Functionalities Element
        const listContainer = addElem('div', [], this._mainContainer) ; 
        const clearButton = addElem('button', ['button'], this._mainContainer) ;
        clearButton.textContent = 'Clear all completed' ; 

        // ListenerToFunctionalities
        inputContainer.onsubmit = (e) => {
            e.preventDefault() ; 
            
        }

    },
}