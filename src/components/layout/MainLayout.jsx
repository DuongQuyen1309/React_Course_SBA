import Adverisment from './Advertisment';
import Header from './Header';
import Focus from './Focus';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;