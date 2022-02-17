import { Route, Redirect } from 'react-router-dom';
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
    console.log(isLogin)

    return (

        <Route
            {...rest}
            render={() => {
                if (dataSuccess === true) {
                    return children
                }
                else  {
                    return <Redirect to= "/login" />
                }
            }
            }
        />
    );
}
export default ProtectedRoute