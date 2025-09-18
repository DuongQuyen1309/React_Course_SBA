import {useEffect, useState, useContext} from "react";
import { Container, Table, Button, Row, Col} from "react-bootstrap";
import CourseCard from "../common/CourseCard";
import CartModal from '../common/CartModal';
import UserContext from '../context/UserContext';
const courses = [
    {
        code: "CSC101",
        title: "Introduction to Computer Science",
        duration: "3",
        price: "100",
        lecture: "Jackson",
        description: "Learn the basics of computer science"
    },
    {
        code: "CSC201",
        title: "Data Structures and Algorithms",
        duration: "4",
        price: "150",
        lecture: "Smith",
        description: "Learn about data structures and algorithms"
    },
    {
        code: "CSC301",
        title: "Database Management Systems",
        duration: "5",
        price: "200",
        lecture: "Johnson",
        description: "Learn about database management systems"
    },
    {
        code: "CSC401",
        title: "Computer Networks",
        duration: "6",
        price: "250",
        lecture: "Brown",
        description: "Learn about computer networks"
    },
    {
        code: "CSC501",
        title: "Artificial Intelligence",
        duration: "7",
        price: "300",
        lecture: "Davis",
        description: "Learn about artificial intelligence"
    }
];
async function mockCourseApi(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(courses);
        }, 1000);
    });
    return promise;
}


const CourseDashBoard = () => {
    const [currentCourses, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    const {showModal, handleCloseModal, handleAddToCart, handleRemoveFromCart } = useContext(UserContext);

    useEffect(()=>{
        async function getCourse(){
            setLoading(true);
            let data = await mockCourseApi();
            setCourse(data);
            setLoading(false);
        };
        getCourse();
    },[]);
    
    return (
    <Container>
        <h2>Course DashBoard</h2>
        <Row>
            {courses.map((course, index) => {
                return (
                <Col md={3} className="mb-3" key={index}>
                     <CourseCard course={course} onAddToCart={handleAddToCart}/>
                </Col>);
            })}
        </Row>
        {
            !loading?(
                <Table striped bordered hover> 
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Lecture</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentCourses?(
                            currentCourses.map((course, index) => {
                                return(
                                <tr key={index}>
                                    <td>{course.code}</td>
                                    <td>{course.title}</td>
                                    <td>{course.duration}</td>
                                    <td>{course.price}</td>
                                    <td>{course.lecture}</td>
                                    <td>{course.description}</td>
                                    <td>
                                        <Button className="me-2" variant = "warning">Update</Button>
                                        <Button className="me-2" variant = "danger">Delete</Button>                                   
                                    </td>
                                </tr>
                                );
                            })
                        ):(
                            <p>Loading value</p>
                        )
                        }
                    </tbody>
                </Table>
            ):(
                <h5>Loading value....</h5>
            )
        }
        <CartModal showModals = {showModal} closeModals = {handleCloseModal} removeItems = {handleRemoveFromCart}/>
    </Container>
    );
}
export default CourseDashBoard;