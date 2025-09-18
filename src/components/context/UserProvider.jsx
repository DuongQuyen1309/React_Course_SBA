import {useContext, useState} from 'react';
import UserContext from './UserContext';

const UserProvider = ({children}) => {
    const user = {
        name: 'Nguyen Van A',
        role: 'admin',
        password: '123',
    }

    const [authenUser, setUser] = useState(null);
    const [showModal, showModals] = useState(false);

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
    
    const contextValues = {
        authenUser,
        login,
        logout,
        showModal,
        handleShowModal,
        handleCloseModal,
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;