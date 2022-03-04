import { Route, Navigate  } from 'react-router-dom';
import { useSelector } from '../../../services/hooks';
import { useState, useEffect } from 'react';
export const ProtectedRoute = ({ children,  ...rest }:any) => {
    const [isLogin, setIslogin] = useState(false);
    useEffect(() => {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
            setIslogin(true)
        }
    }, [isLogin])
    let refreshToken = localStorage.getItem('refreshToken');

    return ((refreshToken) ? children : <Navigate replace to= "/login" />
    )};
export default ProtectedRoute