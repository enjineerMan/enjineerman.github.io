import './App.css';
import {useState, useEffect} from "react";
function App() {
  const [linkedinColor, setLinkedinColor] = useState("black");
  const [githubColor, setGithubColor] = useState("black");
  const [resumeColor, setResumeColor] = useState("black");
  var handleEnter_L = function(event){
    //setLinkedinColor("rgb(48, 229, 252)");
    setLinkedinColor("rgb(78, 234, 245)")
  }

  var handleLeave_L = function(){
    setLinkedinColor("black");
  }
  var handleEnter_G = function(event){
    setGithubColor("rgb(78, 234, 245)");
  }

  var handleLeave_G = function(){
    setGithubColor("black");
  }
  var handleEnter_R = function(event){
    setResumeColor("rgb(78, 234, 245)");
  }

  var handleLeave_R = function(){
    setResumeColor("black");
  }
  return (
    <div className="App">
      <div className="div" >
        <h1 className="header"> David Wang </h1>

        <a 
        className="linkedin" 
        href={"https://www.linkedin.com/in/david-wang-3abab7189/"}
        onMouseEnter={handleEnter_L} 
        onMouseLeave={handleLeave_L}
        target="_blank"
        style={{textDecoration: "none", color: linkedinColor, fontWeight: linkedinColor === "black" ? "normal" : "600"}}
        > 
          Linkedin 
        </a>

        <a 
        className="github" 
        href={"https://github.com/enjineerMan"}
        onMouseEnter={handleEnter_G}
        onMouseLeave={handleLeave_G}
        target="_blank"
        style={{textDecoration: "none", color:githubColor, fontWeight:githubColor === "black" ? "normal" : "600"}}
        > 
          Github 
        </a>

        <a 
        className="resume" 
        href={"David_Wang_resume.pdf"}
        download
        onMouseEnter={handleEnter_R}
        onMouseLeave={handleLeave_R}
        target="_blank"
        style={{textDecoration: "none", color:resumeColor, fontWeight:resumeColor === "black" ? "normal" : "600"}}
        > 
          Resume 
        </a>

      </div>
    </div>
  );
}

export default App;
