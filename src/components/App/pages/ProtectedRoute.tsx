import { Navigate, useLocation  } from 'react-router-dom';
import { getCookie } from '../../../utils/utils'
export const ProtectedRoute = ({ children,  ...rest }:any) => {
    let location = useLocation()
        let token = getCookie('accessToken')
    return ((token) ? children : <Navigate replace to= "/login" state={location.pathname}/>
    )};
export default ProtectedRoute