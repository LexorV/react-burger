import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
export const ForgotPasswordForm = () => {
    const test = () => {
        console.log('test')
    }
    return(
        <div className={autchFormStyle.main}>
        <form className={autchFormStyle.box_form}>
            <h2 className="text text_type_main-medium pb-6">Востановление пароля</h2>
            <div className="pb-6">
            <Input type="email" placeholder="Укажите e-mail" value={''} onChange={test}></Input>
            </div>
            <Button type="primary" size="medium">Востановить</Button>
            <div className= {`${autchFormStyle.box_register} mt-20`}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                <p className={`text text_type_main-default ${autchFormStyle.link}`} >Войти</p>
            </div>
        </form>
        </div>
    )

}
export default ForgotPasswordForm