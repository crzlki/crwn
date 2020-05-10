import React from 'react'
import Directory from '../../directory/directory.component'
import HomePageContainer from './homepage.styles'
// import './homepage.styles.scss'

const HomePage = ({history}) =>{
    return (
        <HomePageContainer>
         <Directory history={history}></Directory>
        </HomePageContainer>
    )
}

export default HomePage