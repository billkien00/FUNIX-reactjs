import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

export default function DishdetailComponent({ dish }) {

    const renderDish = ()=> {
        if (dish) {
            return (
                <div className='container'>

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
                            {dish.comments.map((comment) => {
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








