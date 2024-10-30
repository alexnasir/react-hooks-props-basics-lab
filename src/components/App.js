import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
const user = {
  name: "User Name",
  bio: "User bio here...",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
};

console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home user={user}/>
      <About bio={user.bio} github={user.github} linkedin={user.linkedin}/>
    </div>
  );
}


export default App;
