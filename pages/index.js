import { useState } from 'react'
import Admin from '../components/CookiesAdmin'
import Login from '../components/LoginForm'


export default function Home() {

  const [userName,setUserName] = useState('tester')
  const [savedPassword,setsavedPassword] = useState('tester')
  const [logged,setLogged] = useState(false)

  function change(username,password){
    if (userName == username && password == savedPassword){
      setLogged(true);
    }
  }

  return (
    <div className="bg-green-100">
      {logged ? <Admin username={userName} password={savedPassword}/> : <Login change={change}/>}
    </div>
  )
}

