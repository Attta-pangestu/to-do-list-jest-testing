import addElem from "../utility/addingElement";

const ComposeElement = {
    _mainContainer : document.querySelector('.todo-list-container'),

    initialState() {
        this._mainContainer.innerHTML = `
        <div class="row">
            <h1>Today's To Do</h1>
            <i class="fa-solid fa-rotate fa-lg font-awesome-icon"></i>
        </div>
        `;
    }
}