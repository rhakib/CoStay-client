
import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {


    const { user, loading } = useAuth()

    if (loading) {
        return <div className='flex justify-center min-h-screen'><span className="loading loading-bars loading-lg"></span></div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
}

export default PrivateRoute;