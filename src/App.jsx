
import './App.css'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Dehsbord from './Pages/Dehsbord'
import Login from './Pages/Login'
import ResetPassword from './Pages/ResetPassword'
import ForgetPassword from './Pages/ForgetPassword'
import MainLayout from './Components/MainLayout'
import Inquary from './Pages/Inquary'
import BlogList from './Pages/BlogList'
import BlogCategiry from './Pages/BlogCategiry'
import Orders from './Pages/Orders'
import Customers from './Pages/Customars'
import ColorList from './Pages/Colors'
import CategoryList from './Pages/CategoryList'
import BrandList from './Pages/BrandList'
import ProductList from './Pages/ProductList'
import Addblog from './Pages/Addblog'
import AddBlogCategory from './Pages/AddBlogCategory'
import AddColor from './Pages/AddColor'
import AddCategory from './Pages/AddCategory'
import AddBrand from './Pages/AddBrand'
import AddProduct from './Pages/AddProduct'
function App() {
 

  return (
    <Router>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/reset-password" element={<ResetPassword />} />
         <Route path="/forget-password" element={<ForgetPassword />} />
         <Route path="/admin" element={<MainLayout />} >
            <Route index element={<Dehsbord />} />
            <Route path="Inquiries" element={<Inquary />} />
            <Route path="blog-list" element={<BlogList />} />
            <Route path="blog" element={<Addblog />} />
            <Route path="blog-category-list" element={<BlogCategiry />} />
            <Route path="blog-category" element={<AddBlogCategory />} />
            <Route path="Orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />

            <Route path="list-color" element={<ColorList />} />
            <Route path="color" element={<AddColor />} />
            <Route path="list-category" element={<CategoryList />} />
            <Route path="category" element={<AddCategory />} />
            <Route path="brand-list" element={<BrandList />} />
            <Route path="brand" element={<AddBrand />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="product" element={<AddProduct />} />
          </Route>
         <Route path="/" element={<Login />} />
       </Routes>
    </Router>
  )
}

export default App
