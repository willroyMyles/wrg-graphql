import { action, makeObservable, observable } from "mobx";


class Store{
    jwt : string = ""
    isLoggedIn = this.jwt != "";

    constructor(){
        makeObservable(this, {
            jwt : observable,
            isLoggedIn : observable
        })

        console.log(this.jwt);
        
    }
}

const data_store = new Store()
export default data_store