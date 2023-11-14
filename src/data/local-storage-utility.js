import Config from "../global/config";

const LocalStorageUtility = {

    isStorageAvailable () {
        let storage ; 
        try {
            storage = window['localStorage'] ; 
            const x = '__storage-test__'
            storage.setItem(x,x) ; 
            storage.getItem(x) ; 
            storage.removeItem(x) ; 
            return true; 
        } catch(err) {
            console.log('Error happens when access localStorage') ; 
            return false ;
        } 
    }, 

    addTaskToLocalStorage(taskArrayObj) {
        localStorage.setItem(Config.LOCAL_STORAGE_NAME, JSON.stringify(taskArrayObj));
    }, 

    getAllTaskFromLocalStorage() {
        return JSON.parse(localStorage.getItem(Config.LOCAL_STORAGE_NAME)) ; 
    }, 
    
    removeTaskFromLocalStorage(task) {
        localStorage.removeItem(Config.LOCAL_STORAGE_NAME, task );
    }




}



export default LocalStorageUtility ; 