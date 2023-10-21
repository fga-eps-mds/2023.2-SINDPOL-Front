import logo from "./logo.svg"
import Login from "./pages/Login"
import "./App.css"
import Sidebar from "./components/Sidebar"
import AppRouter from "./utils/router/AppRouter"

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  )
}

export default App
