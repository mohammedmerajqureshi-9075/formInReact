import LogInForm from "./Form/LogInForm"
import SignInForm from "./Form/SignInForm"
import { Route,Routes } from "react-router-dom"


const App = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/LogInForm" element={<LogInForm />} />
        {/* Add other routes as necessary */}
      </Routes>
    </div>
  )
}

export default App
