import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </main>
        <Footer/>
      </Router>
    </>
  )
}

export default App
