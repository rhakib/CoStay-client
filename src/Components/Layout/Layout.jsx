import MainLayout from './MainLayout';
import { Outlet } from 'react-router-dom';
import {Helmet} from "react-helmet";




const Layout = () => {
    return (
        <MainLayout>
            <Helmet>
                <title>CoStay - Home</title>
            </Helmet>
        
            <Outlet></Outlet>
        </MainLayout>
    );
};

export default Layout;