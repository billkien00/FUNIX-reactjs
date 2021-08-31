import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap'



export default class MenuComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           selectedDish: null
           
        }
    }
    
    onDishSelect(dish){
        this.setState({selectedDish:dish})
       
    }

    renderDish(dish){
        if(dish!=null){
            return (
               
                <div className='row'>
                    
                    <div className='col-12 col-md-5 m-1'>
                        <Card>
                            <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                        </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h1>Comments</h1>
                        {dish.comments.map((comment)=>{
                            return (
                               
                                <div>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author},{comment.date}</p>
                                </div>

                            )
                        })}
                    </div>
                    
                        
                </div>
               
                
                
            )
        }else{
            return <div/>
        }
    }
    render() {
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={()=>{
                        this.onDishSelect(dish)
                    }}>
                        <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                
                {this.renderDish(this.state.selectedDish)}
                
            </div>
        )
    }
}
