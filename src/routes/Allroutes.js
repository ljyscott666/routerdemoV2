import {Home, Admin, PageNotFound,Contact ,ContactCn , ContactIn ,ContactOther } from '../pages/index'
import { Route, Routes,Navigate } from 'react-router-dom';
import { ProductList } from '../pages/index';
import { ProductDetail } from '../pages/index';

export const Allroutes = () => {
    const user = true;
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='products' element={<ProductList></ProductList>}></Route>
        <Route path='products/:id' element={<ProductDetail></ProductDetail>}></Route> 
        <Route path='contact' element={<Contact></Contact>}>
            <Route path='in' element={<ContactIn></ContactIn>} ></Route>
            <Route path='cn' element={<ContactCn></ContactCn>} ></Route>
            <Route path='*' element={<ContactOther></ContactOther>} ></Route>
        </Route>
        <Route path='admin' element={user? <Admin></Admin> : <Navigate to="/"></Navigate>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>    
       </Routes>
    </>
  )
}
