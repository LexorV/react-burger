import { Route, Redirect } from 'react-router-dom';
import { useSelector } from '../../../services/hooks';
import { useState, useEffect } from 'react';
export const ProtectedRoute = ({ children, ...rest }: any) => {
    const { registerReceivedData } =
        useSelector((state) => state.registrationForm);
    console.log(registerReceivedData)
    const [isLogin, setIslogin] = useState(false);
    useEffect(() => {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
            setIslogin(true)
        }
    }, [isLogin])

    return (
        <Route
            {...rest}
            render={() => {
                if (isLogin === true) {
                    return children
                }
                else {
                    <Redirect
                        to='/login' />
                }
            }
            }
        />
    );
}
export default ProtectedRoute