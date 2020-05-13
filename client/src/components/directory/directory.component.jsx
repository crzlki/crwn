import React from'react'
import MenuItem from '../menu-item/menu-item.components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectoySections  } from '../../redux/directory/directory.selectors'
import './directory-item.styles.scss'

const  Directory = ({sections})=> (
  
    <div className="directory-menu">
                {
                    sections.map(({id,...collections})=>(
                       <MenuItem key = {id} {...collections} ></MenuItem>
                    ))
                }
            </div> 
 )

 const mapStateToProps = createStructuredSelector({
  sections: selectDirectoySections
 })
export default  connect(mapStateToProps)(Directory)