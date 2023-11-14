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
            const dataTask = LocalStorageUtility.getAllTaskFromLocalStorage() ; 
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
            LocalStorageUtility.addTaskToLocalStorage(this.data);
            window.alert('Task successly recorded'); 
        }
    }

    removeTask(taskId) {
        this.data = this.data.filter( task => task._id !== taskId);
        LocalStorageUtility.addTaskToLocalStorage(this.data);
        this.id= this.data.length + 1;
    }

    renameTask(taskId, newTask) {
        const newDataArray = [];
        this.data.forEach(task => {
            console.log(task);
            if(task._id === taskId){
                newDataArray.push({...task, _description: newTask});
                console.log(newDataArray);
            } else{
                newDataArray.push(task);
            }
        });
        this.data = newDataArray;
        console.log(this.data); 
        LocalStorageUtility.addTaskToLocalStorage(this.data);
    }
}