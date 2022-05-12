import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { MyProjects } from "./pages/MyProjects"
import { Projects } from "./pages/Projects"
import { Register } from "./pages/Register"
export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}
