import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import profile from './profile.module.css'
export const Profile = () => {
    const test = () => {
        console.log('test')
    }
    return (
        <div className={profile.main}>
            <div className={profile.main__box}>
            <div className={profile.menu__box}>
                <ul className={profile.menu__lists}>
                    <li className={`${profile.menu__list} ${profile.menu__list_active} text text_type_main-medium`}>Профиль</li>
                    <li className={`${profile.menu__list} text text_type_main-medium`}>История заказов</li>
                    <li className={`${profile.menu__list} text text_type_main-medium`}>Выход</li>
                </ul>
                <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете
                    изменить свои персональные данные</p>
            </div>
            <div className={profile.inputs__box}>
                <Input icon="EditIcon" type="text" placeholder="Имя" value={''} onChange={test}></Input>
                <Input icon="EditIcon" type="text" placeholder="Логин" value={''} onChange={test}></Input>
                <Input icon="EditIcon" type="password" placeholder="Пароль" value={''}
                onChange={test}></Input>
            </div>
            </div>
        </div>
    )

}
export default Profile