import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap'

export default class DishdetailComponent extends Component {
    constructor(props) {
        super(props)
    }

    renderDish() {
        const { data } = this.props
        if (data !== null) {
            return (
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <Card>
                            <CardImg width='100%' src={data.image} alt={data.name}></CardImg>
                            <CardBody>
                                <CardTitle>{data.name}</CardTitle>
                                <CardText>{data.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h1>Comments</h1>
                        {data.comments.map((comment) => {
                            return (
                                <div key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author},{comment.date}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

            )
        } else {
            return <div />
        }
    }
    render() {
        return (

            <div>
                {this.renderDish()}
            </div>
        )
    }
}
