export default class TaskObject  {
    constructor(description, id=1, completed = false)  {
        this._description = description ; 
        this._id = id ; 
        this._completed = completed;
        
    }
}