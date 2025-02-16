import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./Components/common/Footer"
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
    <Footer/>
    </>
  )
}

export default App

