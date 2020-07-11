import React from "react"
import Nav from "./sections/Nav"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Qualification from "./sections/Qualification"
import Course from "./sections/Course"
import Transportation from "./sections/Transportation"
import Contact from "./sections/Contact"
import Copyright from "./sections/Copyright"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Qualification />
      <Course />
      <Transportation />
      <Contact />
      <Copyright />
    </div>
  )
}

export default App
