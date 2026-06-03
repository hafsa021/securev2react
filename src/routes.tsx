import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import ServiceDetail from './pages/Services/ServiceDetail'
import ServicesIndex from './pages/Services/ServicesIndex'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServicesIndex />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="products" element={<Products />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  )
}
