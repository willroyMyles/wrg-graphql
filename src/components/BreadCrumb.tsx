import {Breadcrumb} from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

const BreadCrumbs = () => {
    const history = useHistory();
    console.log(history);
    
    return (
        <div>
            <Breadcrumb>
                {/* {history.} */}
            </Breadcrumb>
            
        </div>
    )
}

export default BreadCrumbs
