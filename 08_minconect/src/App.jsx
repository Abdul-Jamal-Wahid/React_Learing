import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
            <h1 className='bg-orange-600 flex justify-center  text-white'>Hello Guy's</h1>
            <Login/>
            <Profile/>
    </UserContextProvider>
    
  )
}

export default App
