import Adverisment from './Advertisment';
import Header from './Header';
import Focus from './Focus';
import Footer from './Footer';

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Adverisment />
            <Focus />
            <Footer />
        </>
    );
}

export default MainLayout;