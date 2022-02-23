import { Route, Navigate  } from 'react-router-dom';
import { useSelector } from '../../../services/hooks';
import { useState, useEffect } from 'react';
export const ProtectedRoute = ({ children, dataSuccess, ...rest }: any) => {
    const [isLogin, setIslogin] = useState(false);
    useEffect(() => {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
            setIslogin(true)
        }
    }, [isLogin])
    return ( ( dataSuccess === true) ? children : <Navigate replace to= "/login" />
    )};
export default ProtectedRoute