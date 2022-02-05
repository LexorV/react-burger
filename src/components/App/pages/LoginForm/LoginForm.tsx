import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { useHistory, Link  } from 'react-router-dom';
export const LoginForm = () => {
    const test = () => {
        console.log('test')
    }
    return(
        <div className={autchFormStyle.main}>
            <form className={autchFormStyle.box_form}>
                <h2 className="text text_type_main-medium pb-6">Вход</h2>
                <div className="pb-6">
                <Input size={'default'} type="email" placeholder="E-mail" value={''} onChange={test}></Input>
                </div>
                <div className="pb-6">
                <Input icon="ShowIcon" type="password" placeholder="Пароль" value={''} onChange={test}></Input>
                </div>
                <Button type="primary" size="medium" > Войти</Button>
                <div className= {`${autchFormStyle.box_register} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</p>
                    <Link to='/register' className={`text text_type_main-default ${autchFormStyle.link}`} > Зарегистрироваться</Link>
                </div>
                <div className={autchFormStyle.box_register}>
                    <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
                    <p className={`text text_type_main-default ${autchFormStyle.link}`}> Восстановить пароль</p>
                </div>
            </form>

            </div>
    )
}
export default LoginForm