import * as faker from 'faker'
interface API_INTERFACE{
    getCategories : () => any
}

abstract class API_ABSTRACT implements API_INTERFACE{
     getCategories = () => {
        let arr =[]
        for (let index = 0; index < 19; index++) {
            let title = faker.commerce.department()
            console.log(`title ${title}`);
            
           let obj = {title:title}
           arr.push(obj)
        }

        return arr;
    }

}



export default API_ABSTRACT