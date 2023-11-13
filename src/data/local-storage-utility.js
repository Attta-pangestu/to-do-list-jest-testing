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
    




}



export default LocalStorageUtility ; 