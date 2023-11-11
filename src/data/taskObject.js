export default class Task {
    constructor(_description, _id, _completed = false) {
        this._description = _description ;
        this._id = _id ;
        this._completed = _completed ; 
    }
}