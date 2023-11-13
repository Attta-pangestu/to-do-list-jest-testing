import LocalStorageUtility from "../data/local-storage-utility";
import Config from "../global/config";
import TaskObject  from "./taskObject";

export default class Tasklist {
    constructor() {
        this.data = [] ; 
        this.id = 1; 
        this._initUpdateDataArray() ; 
    }

    _initUpdateDataArray() {
        //get from local storage if there's data
        if(LocalStorageUtility.isStorageAvailable()) {
            const dataTask = JSON.parse(localStorage.getItem(Config.LOCAL_STORAGE_NAME)) ; 
            console.log('local storage is available') ; 
            // if data not empty, update data array
            if(dataTask && dataTask.length !== 0) {
                console.log('ditemukan data di local storage', dataTask) ; 
                this.data = dataTask ; 
                this.id = dataTask.length ;
                
            }
            
            
        }
    }

    addTask(task) {
        if(LocalStorageUtility.isStorageAvailable()) {
            console.log('Add task storage available') ; 
            this.id += 1 ; 
            const taskObj = new TaskObject(task, this.id);
            console.log('Data Object Task : ', taskObj); 
            this.data.push(taskObj);
            // update to local Storage
            localStorage.setItem(Config.LOCAL_STORAGE_NAME, JSON.stringify(this.data)) ; 
            window.alert('Task successly recorded'); 
        }
    }

}