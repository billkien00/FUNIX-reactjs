import React, { Component } from 'react';
import {DISHES} from '../shared/dishes'
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'
import MenuComponent from './MenuComponent';
import DishDetail from './DishdetailComponent'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import { Redirect, Route, Router, Switch } from 'react-router';
import HomeComponent from './HomeComponent';
import Contact from './ContactComponent'


export default class MainCoponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dishes : DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    render() {
        
        const HomePage =()=>{
         return <HomeComponent dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
                                promotion={this.state.promotions.filter((promo)=> promo.featured)[0]}
                                leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
                />   
        }

        const DishWithId =(match)=>{
            return (
                <DishDetail dish ={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishID,10))[0]}
                comments = {this.comments.filter((comment)=>comment.dishID)}
                />
            )
        }

        return (
            <div>
                <HeaderComponent/>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/menu' component={()=><MenuComponent dishes={this.state.dishes}/>}/>
                    <Router path='/menu/:dishId' component = {DishWithId} />
                    <Route exact path='/contactus' component ={Contact}/>
                    <Redirect to='/home'/>
                </Switch>
                <FooterComponent/>
            </div>
        )
    }
}
