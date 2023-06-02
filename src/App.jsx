import Home from "./components/Home"
import Job from "./components/Job"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
     <Router>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/job' element={<Job />} />
      </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
