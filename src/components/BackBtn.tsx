import React from 'react'
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

const BackBtn = () => {
    const history = useHistory()

    const handlePress = () => history.goBack();
    return (
        <div className="post-card" onClick={handlePress}>
            back
        </div>
    )
}

export default BackBtn
