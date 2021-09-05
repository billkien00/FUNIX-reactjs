import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap'

export default class DishdetailComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         data : props.data
    }
}
    
    render() {
        
        return (
            
            <div>
                <div className='row'>
                    
                    <div className='col-12 col-md-5 m-1'>
                        <Card>
                            <CardImg width='100%' src={this.state.data.image} alt={this.state.data.name}></CardImg>
                            <CardBody>
                                <CardTitle>{this.state.data.name}</CardTitle>
                                <CardText>{this.state.data.description}</CardText>
                            </CardBody>
                        </Card>
                        </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h1>Comments</h1>
                        {this.state.data.comments.map((comment)=>{
                            return (
                               
                                <div>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author},{comment.date}</p>
                                </div>

                            )
                        })}
                    </div>
                    
                        
                </div>
            </div>
        )
    }
}
