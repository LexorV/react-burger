import { getCookie } from './utils'
import {
    TsendRegisterUser,
    TautchUser,
    TforgotPasswordApi,
    TresetPasswordApi,
    TsendProfileData,
    TlogoutUserApi
} from '../services/types/autchType';
const urlServ = "https://norma.nomoreparties.space/api/";

const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err: any) => Promise.reject(err));
}
export const getIngredients = () => {

    return fetch(`${urlServ}ingredients`)
        .then(checkResponse)

}
export const sendOrder = (ingredients: string[]) => {
    return fetch(`${urlServ}orders`, {
        method: 'POST',
        headers: new Headers([
            ['Content-Type', 'application/json'],
            ['Authorization', `Bearer ${getCookie('accessToken')}`]
        ]),
        body: JSON.stringify({ 'ingredients': ingredients })
    })
        .then(checkResponse)

}



export const sendRegisterUser = (userDataRegister: TsendRegisterUser) => {
    return fetch(`${urlServ}auth/register`, {
        method: 'POST',
        headers: new Headers([
            ['Content-Type', 'application/json'],
        ]),
        body: JSON.stringify(userDataRegister)
    })
        .then(checkResponse)
}

export const autchUser = (userDataRegister: TautchUser) => {
    return fetch(`${urlServ}auth/login`, {
        method: 'POST',
        headers: new Headers([
            ['Content-Type', 'application/json'],
        ]),
        body: JSON.stringify(userDataRegister)
    })
        .then(checkResponse)
}
export const checkTokenUserApi = () => {
    fetch(`${urlServ}auth/user`, {
        method: 'GET',
        headers: new Headers([
            ['Content-Type', 'application/json'],
            ['Authorization', `Bearer ${getCookie('accessToken')}`]
        ]),
    })
        .then(checkResponse)

}

export const forgotPasswordApi = (userDataRegister: TforgotPasswordApi) => {
    return fetch(`${urlServ}password-reset`, {
        method: 'POST',
        headers: new Headers([
            ['Content-Type', 'application/json'],
        ]),
        body: JSON.stringify(userDataRegister)
    })
        .then(checkResponse)
}

export const resetPasswordApi = (userDataRegister: TresetPasswordApi) => {
    return fetch(`${urlServ}password-reset/reset`, {
        method: 'POST',
        headers: new Headers([
            ['Content-Type', 'application/json'],
        ]),
        body: JSON.stringify(userDataRegister)
    })
        .then(checkResponse)
}
export const getProfileData = () => {
    return fetch(`${urlServ}auth/user`, {
        method: 'GET',
        headers: new Headers([
            ['Content-Type', 'application/json'],
            ['Authorization', `Bearer ${getCookie('accessToken')}`]
        ]),
    })
        .then(checkResponse)
}


export const sendProfileData = (changeDataProfile: TsendProfileData) => {
    return fetch(`${urlServ}auth/user`, {
        method: 'PATCH',
        headers: new Headers([
            ['Content-Type', 'application/json'],
            ['Authorization', `Bearer ${getCookie('accessToken')}`]
        ]),
        body: JSON.stringify(changeDataProfile)
    })
        .then(checkResponse)

}
export const refreshTokenApi = () => {
    return fetch(`${urlServ}auth/token`, {
        method: 'POST',
        headers: new Headers([
            ['Content-Type', 'application/json'],
        ]),
        body: JSON.stringify({ 'token': localStorage.getItem("refreshToken") }),
    })
        .then(checkResponse)
}


export const logoutUserApi = (refreshToken: TlogoutUserApi) => {
    return fetch(`${urlServ}auth/logout`, {
        method: 'POST',
        headers: new Headers([
            ['Content-Type', 'application/json'],
        ]),
        body: JSON.stringify(refreshToken)
    })
        .then(checkResponse)
}