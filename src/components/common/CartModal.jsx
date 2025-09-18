import { Modal, Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import UserContext from "../context/UserContext";
const CartModal = ({showModals, closeModals, removeItems}) => {
    
    const {cart} = useContext(UserContext);
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    
    function FormatCurrency(amount){
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    }
    return (
        <Modal show={showModals} onHide={closeModals} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            cart.length > 0 ? (
                <>
                    <Table className="border">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Title</th>
                                <th>Lecturer</th>
                                <th>Price</th>
                                <th>Quantity</th>               
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.code}</td>
                                        <td>{item.title}</td>
                                        <td>{item.lecture}</td>
                                        <td>{FormatCurrency(item.price)}</td>
                                        <td>{item.quantity}</td>                                   
                                        <td>{FormatCurrency(item.price * item.quantity)}</td>
                                        <td><Button variant="danger" onClick={() => removeItems(item.code)}>
                                            Remove
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-end align-items-center mt-3">
                        <h4 className="me-3">Total of cart items:</h4>
                        <h4 className="text-primary fw-bold">{FormatCurrency(totalAmount)}</h4>
                    </div>
                </>
            ):(
                <p className="text-center">Cart is empty</p>
            )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModals}>
            Close
          </Button>
          <Button variant="primary">
            Pay all
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
export default CartModal;