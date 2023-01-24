import './App.css';
import React, { useState, useEffect }  from 'react'
import logo from './Logo1.svg';
import { ReactComponent as Logo} from './Method1.svg';

function App(){

  const [data, setData] = useState([{}])
  const [usertext, setUserText] = useState('')

  // const handleChange = (e) => {
  //   setUserText(e.target.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userinput = {usertext};

    console.log("Button Clicked")
    
    fetch("http://localhost:5000/result", {
      mode: 'cors',
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userinput)
    })
    .then(res => res.json())
    .then(data => {
      setData(data)
      console.log(data)
    })
  }

  const handleClick = async => {

  }
  // useEffect(() => {
  //   fetch("http://localhost:5000/result").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

  return (
    <div className="App"> 
    <header className="App-Header">

    {/* Logo */}
    <img src={logo} 
         className= "App-Logo"  
         alt="Logo" 
         style={{ alignSelf: 'center' }}/>

    <div><Logo /></div>
    <p> Enter News Headline Below to Start:</p>
    
    <div>
      {/* user input textbox and button */}
      <input required
            value={usertext}
            name="usertext" 
            className="textbox" 
            type="text"  
            placeholder="Enter news" 
            onChange={(e) => setUserText(e.target.value)}/>
      
      <button type="submit"
            className="button" 
            onClick={handleSubmit}> 
            Enter </button>
    
    </div>
        {/* Display result */}
        <div>
          {/* {/* {(typeof data.members === 'undefined') ? (
            <p>Loading...</p>
          ) : ( 
              data.members.map((members) => (
                <p key={i}>{members}</p>
              ))
          } */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>

    </header>  
    </div>
  )
}

export default App
