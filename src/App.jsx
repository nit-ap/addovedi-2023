import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from './components/Header'
import Home from './pages/Home'
import Registration from './pages/Registration'
function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
