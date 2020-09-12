import React, { Component } from 'react'
import Products from '../components/Products'
import Cart from '../components/Cart'
import Filter from '../components/Filter'

export default class HomeScreen extends Component {
    render() {
        return (
            <div className="content">
            <div className="main">
              <Filter></Filter>
              <Products
              ></Products>
            </div>
            <div className="sidebar">
              <Cart
              />
            </div>
          </div>
        )
    }
}
