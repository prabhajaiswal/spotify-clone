import Login from "./component/Login";
import './App.css';
import { getTokenFromUrl } from "./component/Spotify";
import { useEffect, useState } from "react";


function App() {
 
  const [token,setToken ]  = useState(null);
  useEffect(() => {
  const hash = getTokenFromUrl();
window.location.hash = "";
const _token = hash.acess_token;

if (_token){
  setToken(_token);
 
}
 console.log(token)
  }, []);
  return (
    <div className="App">
      { token ? (
    <h1>I am logged in</h1>
  ) : (
  <Login />
  )}

    </div>
  );
}

export default App;
