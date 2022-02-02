import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
export const RegisterForm = () => {
    const test = () => {
        console.log('test')
    }
return(
        <div className={autchFormStyle.main}>
            <form className={autchFormStyle.box_form}>
                <h2 className="text text_type_main-medium pb-6">Регистрация</h2>
                <div className="pb-6">
                <Input type="text" placeholder="имя" value={''} onChange={test}></Input>
                </div>
                <div className="pb-6">
                <Input type="email" placeholder="E-mail" value={''} onChange={test}></Input>
                </div>
                <div className="pb-6">
                <Input icon="ShowIcon" type="password" placeholder="Пароль" value={''} onChange={test}></Input>
                </div>
                <Button type="primary" size="medium" >Зарегистрироваться</Button>
                <div className= {`${autchFormStyle.box_register} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
                    <p className={`text text_type_main-default ${autchFormStyle.link}`} >Войти</p>
                </div>
            </form>
            </div>)
            }
export default RegisterForm