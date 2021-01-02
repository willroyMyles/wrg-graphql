import { action, observable, makeObservable } from "mobx";



class Store{

    constructor(){
        makeObservable(this, {
            drawerNode : observable,
            drawerVisible:observable,
            changeDrawerVisibility:action
        })
    }

    drawerVisible : boolean = false;
    drawerNode : React.ReactNode = undefined;

    changeDrawerVisibility = (val : boolean) => this.drawerVisible = val;
}


const ui_manager = new Store();
export default ui_manager;