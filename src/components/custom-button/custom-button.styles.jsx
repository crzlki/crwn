import styled,{ css } from 'styled-components'

const buttonStyles = css`
background-color: black;
color: white;
border: none;
&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`
const invertedButtonStyles = css`
background-color: white;
color: black;
border: 1px solid black;

&:hover {
  background-color: black;
  color: white;
}
`
const googleSignInstyles = css`
background-color: #4285f4;
color: white;
border: none;
&:hover{
  background-color: #357ae8;
  border: 1px solid white;
}`

const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInstyles
    }else{
        return props.inverted?invertedButtonStyles:buttonStyles
    }
}

export const CustomButtonContainer = styled.button`
min-width: 165px;
width: auto;
height: 50px;
line-height: 50px;
padding: 0 35px 0 35px;
white-space: nowrap;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
cursor: pointer;
display: flex;
justify-content: center;
${getButtonStyles}

`


