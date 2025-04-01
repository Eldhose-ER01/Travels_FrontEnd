import {Routes,Route} from 'react-router-dom'
import UserLogin from '../pages/User/UserLogin'
import UserSignup from '../pages/User/UserSignup'
import UserOtp from '../pages/User/UserOtp'
import ForgetPasswords from '../pages/User/ForgetPasswords'
import Changepassword from '../pages/User/Changepassword'
import ForgetOtp from '../pages/User/ForgetOtp'
import Home from '../pages/User/Home'
import SelectState from '../pages/User/SelectState'
import Alldestination from '../pages/User/Alldestination'
import DestinationBooking from '../pages/User/DestinationBooking'
import ProtectedRoute from './ProtectedRoute'
import Userprofile from '../pages/User/Userprofile'
import EditProfile from '../pages/User/EditProfile'
export default function Userroutes() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/register'element={<UserSignup/>}/>
        <Route path='/otp'element={<UserOtp/>}/>
        <Route path='/forgetpassword'element={<ForgetPasswords/>}/>
        <Route path='/changepassword'element={<Changepassword/>}/>
        <Route path='/forgetotp'element={<ForgetOtp/>}/>
        <Route element={<ProtectedRoute/>}>
     
        <Route path='/selectstate'element={<SelectState/>}/>
        <Route path='/destinations'element={<Alldestination/>}/>
        <Route path='/booking'element={<DestinationBooking/>}/>
        <Route path='/userprofile'element={<Userprofile/>}/>
        <Route path='/editprofile'element={<EditProfile/>}/>
        </Route>
       
      </Routes>
    </div>
  )
}
