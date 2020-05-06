import React from'react'
import MenuItem from '../menu-item/menu-item.components'
import './directory-item.styles.scss'
class Directory extends React.Component {
    constructor(props){
        super(props)
        this.state = {
         sections:[
              {
                  id:1,
                  title:'Hats',
                  imageUrl:'https://www.delmonicohatter.com/Merchant2/graphics/00000001/DelMonico-Italian-Boater.jpg'
              },
              {
                id:2,
                title:'Sneaker',
                imageUrl:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-sneakers-index-1583444796.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*'
              },
              {
                  id:3,
                  title:'Clothing',
                  imageUrl:'https://davidsuzuki.org/wp-content/uploads/2017/10/clothing-swap-rack-hangers.jpg'
              },
              {
                  id:4,
                  title:'Women',
                  imageUrl:'https://ae01.alicdn.com/kf/HTB1ubCycO6guuRkSmLyq6AulFXat/3XL-4XL-Plus-Size-Women-Clothing-Pin-UP-Vestidos-Summer-Retro-Casual-Party-Robe-Rockabilly-50s.jpg_50x50.jpg',
                  size:'large'
              },
              {
                    id:5,
                    title:'Mens',
                    imageUrl:'https://www.dhresource.com/webp/m/0x0s/f2-albu-g5-M00-AA-05-rBVaI1lnaPOAGJNHAAb25HUoTG4529.jpg/shanghai-story-chinese-traditional-men-clothing.jpg',
                    size:'large'
            }
             
         ]
        }
    }
    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title,imageUrl,id,size})=>(
                       <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size={size} ></MenuItem>
                    ))
                }
            </div>
        )
    }

}

export default Directory