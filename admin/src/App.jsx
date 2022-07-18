import React from 'react';
import './App.css';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import UserList from './pages/UserList';
import User from './pages/User';
import NewUser from './pages/NewUser';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import NewProduct from './pages/NewProduct';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppContainer = styled.div`
  display: flex;
  margin-top: 15px;
`

function App() {

  return (
    <>
      <Router>
        <Topbar />
        <AppContainer>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
        </AppContainer>
      </Router>
    </>
  )
}

export default App
