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
import { baseUrl } from "../shared/baseUrl";
import CommentModal from "./CommentModal";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

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
              <FadeTransform
                in
                transformProps={{
                  exitTransform: "scale(0.5) translateY(-50%)",
                }}
              >
                <Card>
                  <CardImg
                    top
                    src={baseUrl + props.dish.image}
                    alt={props.dish.name}
                  />
                  <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                  </CardBody>
                </Card>
              </FadeTransform>
            </div>
            <div className="col-12 col-md-5 m-1">
              <h1>Comments</h1>
              <Stagger in>
                {props.comments.map((comment) => {
                  return (
                    <Fade in>
                      <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>
                          --{comment.author},{comment.date}
                        </p>
                      </div>
                    </Fade>
                  );
                })}
              </Stagger>
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
