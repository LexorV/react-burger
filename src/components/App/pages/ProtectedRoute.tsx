import { Navigate, useLocation  } from 'react-router-dom';
import { getCookie } from '../../../utils/utils'
export const ProtectedRoute = ({ children,  ...rest }:any) => {
    const location = useLocation()
        const token = getCookie('accessToken')
    return ((token) ? children : <Navigate replace to= "/login" state={location.pathname}/>
    )};
export default ProtectedRoute