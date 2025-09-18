import {useContext, useState} from 'react';
import UserContext from './UserContext';

const UserProvider = ({children}) => {
    const user = {
        name: 'Nguyen Van A',
        role: 'admin',
        password: '123',
    }

    const [authenUser, setUser] = useState(null);

    const login = () => {
        setUser(user);
    }

    const logout = () => {
        setUser(null);
    }

    const contextValues = {
        authenUser,
        login,
        logout
    }
    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;