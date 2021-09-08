import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import {Link} from 'react-router-dom'

export default function DishdetailComponent(props) {
    console.log(props)
    const renderDish = () => {
        if (props.dish) {
            return (
                <div className='container'>
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>

                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            <Card>
                                <CardImg width='100%' src={props.dish.image} alt={props.dish.name}></CardImg>
                                <CardBody>
                                    <CardTitle>{props.dish.name}</CardTitle>
                                    <CardText>{props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            <h1>Comments</h1>
                            {props.dish.comments.map((comment) => {
                                return (
                                    <div key={comment.id}>
                                        <p>{comment.comment}</p>
                                        <p>--{comment.author},{comment.date}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            )
        } else {
            return <div />
        }
    }

    return (
        <div>
            {renderDish()}
        </div>
    )
}








