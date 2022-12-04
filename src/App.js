import "./App.css";
import {  useState } from "react";
import User from "./components/user";
function App() {
  const [githubData, setGithubData] = useState([]);
  const [githubUser, setGithubUser] = useState("omeerdvrn");
  
  const fetchData = () => {
    return fetch(`https://api.github.com/users/${githubUser}`)
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  };

  
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for User"
        onChange={(e) => setGithubUser(e.target.value)}
        className="input_search"
      />
      <button onClick={fetchData}>Search</button>
      <br></br>
      <User data={githubData}></User>
    </div>
  );
}

export default App;
