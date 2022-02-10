import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { Link} from 'react-router-dom';
export const ResetPasswordForm = () => {
    const test = () => {
        console.log('test')
    }
    return(
        <div className={autchFormStyle.main}>
        <form className={autchFormStyle.box_form}>
            <h2 className="text text_type_main-medium pb-6">Востановление пароля</h2>
            <div className="pb-6">
                <Input icon="ShowIcon" type="password" placeholder="Введите новый пароль" value={''} onChange={test}></Input>
                </div>
            <div className="pb-6">
            <Input type="text" placeholder="Введите код из письма" value={''} onChange={test}></Input>
            </div>
            <Button type="primary" size="medium">Сохранить</Button>
            <div className= {`${autchFormStyle.box_register} mt-20`}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                <Link to = '/login' className={`text text_type_main-default ${autchFormStyle.link}`} >Войти</Link>
            </div>
        </form>
        </div>
    )

}
export default ResetPasswordForm