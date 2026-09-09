import { Router, Route, Link, Switch } from "wouter";
import App from "./App.tsx" 
import Life from "./Life.tsx"
import Projects from "./Projects.tsx"
function Navigator() {
  return (
    <Switch>
      <Route path="/"><App/></Route>
      <Route path="/projects"><Projects /></Route>
      <Router path="/life"><Life /></Router>
    </Switch>
  )
}

export default Navigator;
