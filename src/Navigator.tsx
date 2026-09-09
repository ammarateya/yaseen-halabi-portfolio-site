import { Route, Switch } from "wouter";
import App from "./App.tsx" 
import Life from "./Life.tsx"
import Projects from "./Projects.tsx"
function Navigator() {
  return (
    <Switch>
      <Route path="/"><App/></Route>
      <Route path="/projects"><Projects /></Route>
      <Route path="/life"><Life /></Route>
    </Switch>
  )
}

export default Navigator;
