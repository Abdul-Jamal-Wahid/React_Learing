import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
   return(
    <div>
        <h1>Custom App !</h1>
    </div>
   )
}

const reactElem={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
const anotherElem=(
    <a href='https://google.com'>visit Google</a>
)

const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google'

)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    //MyApp
    //MyApp()
    //<MyApp/>
    //reactElem() //it will not run because is already object.
    // anotherElem()
    // reactElement
    <App/>
  
)
