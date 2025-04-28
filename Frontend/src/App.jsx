import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import HomePage from "./pages/HomePage.jsx"

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
    </Routes>
    </>
  )
}

export default App;
