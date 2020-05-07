import React from 'react'
import Directory from '../../directory/directory.component'
import './homepage.styles.scss'

const HomePage = ({history}) =>{
    return (
        <div className="homepage">
         <Directory history={history}></Directory>
        </div>
    )
}

export default HomePage