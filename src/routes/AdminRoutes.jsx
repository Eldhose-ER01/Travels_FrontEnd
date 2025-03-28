import {Routes,Route} from 'react-router-dom'
import AdminLogin from "../pages/Admin/AdminLogin"
import AdminDashboard from '../pages/Admin/AdminDashboard'
import UsersList from '../pages/Admin/UsersList'
import FindStateandDistrict from '../pages/Admin/FindStateandDistrict'
import EditStatesandDistrict from '../pages/Admin/EditStatesandDistrict'
import AddStatesAndDistrict from '../pages/Admin/AddStatesAndDistrict'
import Destinations from '../pages/Admin/Destinations'
import Finddestinations from '../pages/Admin/Finddestinations'
export default function Adminroutes() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/'element={<AdminDashboard/>}/>
        <Route path='/users'element={<UsersList/>}/>
        <Route path='/statesdistrict'element={<FindStateandDistrict/>}/>
        <Route path='/addstates'element={<AddStatesAndDistrict/>}/>
        <Route path='/editstates'element={<EditStatesandDistrict/>}/>
        <Route path='/destinations'element={<Destinations/>}/>
        <Route path='/finddestination'element={<Finddestinations/>}/>
        
      </Routes>
    </div>
  )
}
