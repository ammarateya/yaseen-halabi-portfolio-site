import { Router, Route, Link } from "wouter";
import App from "./App.tsx" 
function Navigator() {
  return (
    <Router base="/">
      <Route path="/"><App/></Route>
      <Route path="/projects"></Route>
      <Router path="/experience"></Router>
    </Router>
  )
}

export default Navigator;
