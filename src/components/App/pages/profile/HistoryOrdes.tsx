import profile from './profile.module.css';
import { ProfileMenu } from './ProfileMenu';
import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { getCookie } from '../../../../utils/utils';
import { wsConnectionStart, wsConnectionClosed } from '../../../../services/action/wsOrdes';
import { CardListOrder } from '../../../OrdesCards/listCardOrder'
export const HistoryOrdes = () => {
    const { orders } = useSelector(state => state.wsOrdes)
    const dispatch = useDispatch();
    let token = getCookie('accessToken')
    useEffect(() => {
        dispatch(wsConnectionStart(`wss://norma.nomoreparties.space/orders?token=${token}`));
        return () => {
            dispatch(wsConnectionClosed())
        }
    }, [dispatch]);
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