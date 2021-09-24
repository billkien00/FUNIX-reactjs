import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import CommentModal from "./CommentModal";

export default function DishdetailComponent(props) {
  const renderDish = () => {
    if (props.isLoading) {
      return (
        <div className="container">
          <dis className="row">
            <Loading />
          </dis>
        </div>
      );
    } else if (props.errMess) {
      return (
        <div className="container">
          <dis className="row">
            <h4>{props.errMess}</h4>
          </dis>
        </div>
      );
    }
    if (props.dish) {
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg
                  width="100%"
                  src={props.dish.image}
                  alt={props.dish.name}
                ></CardImg>
                <CardBody>
                  <CardTitle>{props.dish.name}</CardTitle>
                  <CardText>{props.dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
              <h1>Comments</h1>
              {props.comments.map((comment) => {
                return (
                  <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                      --{comment.author},{comment.date}
                    </p>
                  </div>
                );
              })}
              <CommentModal buttonLabel={"Add Comment"} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  };

  return <div>{renderDish()}</div>;
}
