import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import loginFormStyles from './loginForm.module.css'
export const LoginForm = () => {
    const test = () => {
        console.log('test')
    }
    return(
        <div className={loginFormStyles.main}>
            <form className={loginFormStyles.box_form}>
                <h2 className="text text_type_main-medium pb-6">Вход</h2>
                <div className="pb-6">
                <Input type="email" placeholder="E-mail" value={''} onChange={test}></Input>
                </div>
                <div className="pb-6">
                <Input icon="ShowIcon" type="password" placeholder="Пароль" value={''} onChange={test}></Input>
                </div>
                <Button type="primary" size="medium" > Войти</Button>
                <div className= {`${loginFormStyles.box_register} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</p>
                    <p className={`text text_type_main-default ${loginFormStyles.link}`} > Зарегистрироваться</p>
                </div>
                <div className={loginFormStyles.box_register}>
                    <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
                    <p className={`text text_type_main-default ${loginFormStyles.link}`}> Восстановить пароль</p>
                </div>
            </form>

            </div>
    )
}
export default LoginForm