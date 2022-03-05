import { Navigate  } from 'react-router-dom';
import { getCookie } from '../../../utils/utils'
export const ProtectedRoute = ({ children,  ...rest }:any) => {
        let token = getCookie('accessToken')
    return ((token) ? children : <Navigate replace to= "/login" />
    )};
export default ProtectedRoute