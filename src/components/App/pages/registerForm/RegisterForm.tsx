import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import autchFormStyle from '../autchFormStyle.module.css';
import { useSelector, useDispatch } from '../../../../services/hooks';
import { useHistory, Link  } from 'react-router-dom';
import {useCallback} from 'react';
import {register} from '../../../../services/action/registerForm'
import {CHANGE_REGISTER_FORM_VALUE, setRegisterFormValue} from '../../../../services/action/registerForm';
import { useState } from 'react';
export const RegisterForm = () => {
   // const [nameValue, setNameValue] = useState('')
   const {name, email, password, testData} = useSelector(state =>state.registrationForm);
   const {form} = useSelector(state  => state.registrationForm);
   const history =useHistory();
    const dispatch = useDispatch();
    const registerSend = useCallback(
        () => {
            history.replace({ pathname: '/' });
        },
        [history]
      );

    const test = (e:any) => {
        e.preventDefault()
        console.log(form)
        dispatch(register(form))
        console.log(testData)
        registerSend()
    }
    console.log(testData)
    console.log(name);
    console.log(email);
    const onFormChange = (e:any) => {
       dispatch(setRegisterFormValue(e.target.name, e.target.value));
       console.log(e.target.value)
    }
return(
        <div className={autchFormStyle.main}>
            <form className={autchFormStyle.box_form}>
                <h2 className="text text_type_main-medium pb-6">Регистрация</h2>
                <div className="pb-6">
                <Input type="text" placeholder="имя" name={'name'} value={name} onChange={onFormChange}></Input>
                </div>
                <div className="pb-6">
                <Input type="email" name={'email'} placeholder="E-mail" value={email} onChange={onFormChange}></Input>
                </div>
                <div className="pb-6">
                <Input icon="ShowIcon" name = {'password'} type="password" placeholder="Пароль" value={password} onChange={onFormChange}></Input>
                </div>
                <Button onClick={test} type="primary" size="medium" >Зарегистрироваться</Button>
                <div className= {`${autchFormStyle.box_register} mt-20`}>
                    <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
                    <Link to='/login' className={`text text_type_main-default ${autchFormStyle.link}`} >Войти</Link>
                </div>
            </form>
            </div>)
            }
export default RegisterForm