import MainLayout from './MainLayout';
import { Outlet } from 'react-router-dom';




const Layout = () => {
    return (
        <MainLayout>
            <Outlet></Outlet>
        </MainLayout>
    );
};

export default Layout;