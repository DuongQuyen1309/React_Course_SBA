import Card from "react-bootstrap/Card";
import {BsEyeFill, BsCartPlusFill} from "react-icons/bs";
import Button from "react-bootstrap/Button";
const CourseCard = ({course, onAddToCart}) => {

  function clickAddToCart(){
    onAddToCart(course);
  }
  return (
      <Card className="h-100 shadow-sm rounded-3 overflow-hidden">
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-truncate" style={{ fontWeight: 'bold' }}>
            {course.title}
          </Card.Title>
          <Card.Text>
            Code: {course.code} <br/>
            Duration: {course.duration} <br/>
            Lecture: {course.lecture} <br/>
          </Card.Text>
          <h4 className="mt-auto text-success fw-bold">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(course.price)}
          </h4>
          <div className="d-grid gap-2 mt-3">
            <Button variant="outline-primary" className="d-flex align-items-center justify-content-center">
              <BsEyeFill className="me-2" />
              Detail
            </Button>
            <Button variant="success" className="d-flex align-items-center justify-content-center"
            onClick={clickAddToCart}>
              <BsCartPlusFill className="me-2" />
              Add to cart
            </Button>
          </div>
        </Card.Body>
      </Card>
  );
}
export default CourseCard;