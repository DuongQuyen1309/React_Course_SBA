import {useContext, useState, useEffect, useReducer} from 'react';
import UserContext from './UserContext';

function getCartInLocalStorage(){
    const selectedItem = localStorage.getItem('myCart');
    return selectedItem ? JSON.parse(selectedItem) : [];
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const courseToAdd = action.payload;
            const existingItem = state.find(item => item.code === courseToAdd.code);
            if (existingItem) {
                const updatedCart = state.map(item => 
                    item.code === courseToAdd.code ? {...item, quantity: item.quantity + 1} : item);
                return updatedCart;
            } else {
                return [...state, {...courseToAdd, quantity: 1}];
            }
        case 'REMOVE_FROM_CART':
            const courseCodeToRemove = action.payload;  
            const updatedCart = state.filter(item => item.code !== courseCodeToRemove);
            return updatedCart;
        default:
            return state;
    }
}

const UserProvider = ({children}) => {
    const user = {
        name: 'Nguyen Van A',
        role: 'admin',
        password: '123',
    }

    const [authenUser, setUser] = useState(null);
    const [showModal, showModals] = useState(false);
    // const [cart, setCart] = useState(getCartInLocalStorage());

    // sử dụng useReducer thay cho useState
    //dispatch là hàm dùng để gửi các action
    const [cart, dispatch] = useReducer(cartReducer, [], getCartInLocalStorage);

    function handleAddToCart(course) {
        dispatch({type: 'ADD_TO_CART', payload: course});
    }

    function handleRemoveFromCart(courseCode) {
        dispatch({type: 'REMOVE_FROM_CART', payload: courseCode});
    }

    const login = () => {
        setUser(user);
    }

    const logout = () => {
        setUser(null);
    }

    const handleShowModal = () => {
        showModals(true);
    }

    const handleCloseModal = () => {
        showModals(false);
    }
    
    useEffect(()=>{
        localStorage.setItem('myCart', JSON.stringify(cart)); 
        // json.stringify để chuyển một object/mảng sang chuỗi json vì trong setItem thì
        // key là string(đã thỏa mãn) và value nếu lưu thẳng cart sẽ bị lỗi và ko đọc
        // được nên phải chuyển sang chuỗi, muốn đọc lại, chuyển thành mảng/object thì sd json.parse
    },[cart]);

    // const handleAddToCart = (course) => {
    //     const existingItem = cart.find(item => item.code === course.code);
    //     if (existingItem) {
    //         const updatedCart = cart.map(item => 
    //             item.code === course.code ? {...item, quantity: item.quantity + 1} : item);
    //         setCart(updatedCart);
    //     } else {
    //         setCart([...cart, {...course, quantity: 1}]);
    //     }
    //     console.log(cart);
    // }

    // const handleRemoveFromCart = (courseCode) => {
    //     const updatedCart = cart.filter(item => item.code !== courseCode);
    //     setCart(updatedCart);
    // }

    const contextValues = {
        authenUser,
        login,
        logout,
        showModal,
        handleShowModal,
        handleCloseModal,
        cart, 
        handleAddToCart,
        handleRemoveFromCart
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;