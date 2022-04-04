import profile from './profile.module.css';
import { ProfileMenu } from './ProfileMenu';
import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { getCookie } from '../../../../utils/utils';
import { useLocation, useNavigate } from "react-router-dom";
import { wsConnectionStart, wsConnectionClosed } from '../../../../services/action/wsOrdes';
import { CardListOrder } from '../../../OrdesCards/listCardOrder'
import {urlWebSoketHistory} from '../../../../utils/burgerApi';
export const HistoryOrdes = () => {
    const { orders } = useSelector(state => state.wsOrdes)
    const dispatch = useDispatch();
    const location = useLocation()
    const navigate = useNavigate()
    const token = getCookie('accessToken')
    useEffect(() => {
        dispatch(wsConnectionStart(urlWebSoketHistory(token)))
        return () => {
            dispatch(wsConnectionClosed())
        }

    }, [dispatch]);
    useEffect(() =>{
        if(location.pathname !== '/profile/orders') {
            navigate('/profile/orders');
        }
    }, [])
    return (
        <div className={profile.main}>
            <div className={profile.main__box_history}>
                <div className='mt-20'>
                    <ProfileMenu />
                </div>
                <ul className={profile.card__list}>
                    <CardListOrder orders={orders} />
                </ul>
            </div>

        </div>
    )
}