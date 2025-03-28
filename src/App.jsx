import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import User from "./routes/UserRoutes"
import Admin from "./routes/AdminRoutes"
import {Toaster} from 'react-hot-toast'

function App() {
  

  return (
    <>
     <Toaster
  position="top-center"
  reverseOrder={false}
/>
     <Router>
      <Routes>
        <Route path="/*" element={<User/>}/>
        <Route path="/admin/*"element={<Admin/>}/>
      </Routes>
     </Router>
       
    </>
  )
}

export default App
