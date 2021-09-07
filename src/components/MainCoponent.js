import React, { Component } from 'react';
import { Navbar, NavbarBrand  } from 'reactstrap';
import {DISHES} from '../shared/dishes'
import MenuComponent from './MenuComponent';
import DishDetail from './DishdetailComponent'

export default class MainCoponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dishes : DISHES,
             selectedDish: null

        }
    }

    onDishSelect(dishID) {
        this.setState({ selectedDish: dishID })
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">this is lab 2</NavbarBrand>
                        
                    </div>
                </Navbar>
                <MenuComponent dishes={this.state.dishes} onClick={(dishID) => {this.onDishSelect(dishID)}} />

                {/* 1. truyền vào dishes={this.state.dishes}
                2. bắt sự kiện onclick <Card onClick={()=>this.props.onClick(dish.id)}> ở MenuComponent
                3. khi click thì gọi đến    
                4. truyền dish.id tại sự kiện click cho  onClick={(dishID) => {this.onDishSelect(dishID) ở main */}

                <DishDetail dish={this.state.dishes.filter(dish=>dish.id === this.state.selectedDish)[0]}/>
            </div>
        )
    }
}
