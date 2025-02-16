import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
import Header from "./Components/common/Header"
import Home from "./Pages/Home"

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
    </>
  )
}

export default App

