import {getCookie} from './utils'
const urlServ = "https://norma.nomoreparties.space/api/";
const checkResponse = (res:any) => {
    return res.ok ? res.json() : res.json().then((err:any) => Promise.reject(err));
}
export const getIngredients = () => {

    return fetch(`${urlServ}ingredients`)
        .then(checkResponse)

}
export const sendOrder = (ingredients:string[]) => {
    console.log(`${getCookie('accessToken')}`);
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
export const sendRegisterUser = ( userDataRegister:any) => {
    console.log(userDataRegister);
    return fetch(`${urlServ}auth/register`, {
        method: 'POST',
        headers: new Headers([
            ['Content-Type', 'application/json'],
        ]),
        body:JSON.stringify( userDataRegister)
    })
    .then(checkResponse)
}
export const autchUser =  ( userDataRegister:any) => {
    console.log(userDataRegister);
    return  fetch(`${urlServ}auth/login`, {
        method: 'POST',
        headers: new Headers([
            ['Content-Type', 'application/json'],
        ]),
        body:JSON.stringify( userDataRegister)
    })
    .then(checkResponse)
}
export const checkTokenUserApi:any = (accessToken:any) =>{
    fetch(`${urlServ}auth/user`, {
        method: 'GET',
        headers: new Headers([
            ['Content-Type', 'application/json'],
            ['Authorization', `Bearer ${getCookie('accessToken')}`]
        ]),
    })
    .then(checkResponse)
} 
export const forgotPasswordApi =  ( userDataRegister:any) => {
    console.log(userDataRegister);
    return  fetch(`${urlServ}password-reset`, {
        method: 'POST',
        headers: new Headers([
            ['Content-Type', 'application/json'],
        ]),
        body:JSON.stringify( userDataRegister)
    })
    .then(checkResponse)
}
export const resetPasswordApi =  ( userDataRegister:any) => {
    console.log(userDataRegister);
    return  fetch(`${urlServ}password-reset/reset`, {
        method: 'POST',
        headers: new Headers([
            ['Content-Type', 'application/json'],
        ]),
        body:JSON.stringify( userDataRegister)
    })
    .then(checkResponse)
}
export const getProfileData = (tokenUser:any) => {
    console.log(tokenUser);
return fetch(`${urlServ}auth/user`, {
    method: 'GET',
        headers: new Headers([
            ['Content-Type', 'application/json'],
            ['Authorization', `Bearer ${getCookie('accessToken')}`]
        ]),
})
.then(checkResponse)
}
export const sendProfileData = (tokenUser:any, changeDataProfile:any) =>
 {
     console.log(changeDataProfile);
    return fetch(`${urlServ}auth/user`, {
        method: 'PATCH',
            headers: new Headers([
                ['Content-Type', 'application/json'],
                ['Authorization',`Bearer ${getCookie('accessToken')}`]
            ]),
            body:JSON.stringify( changeDataProfile)
    })
    .then(checkResponse)

 }
 export const logoutUserApi = (refreshToken:any) => {
     return fetch(`${urlServ}auth/logout`, {
        method: 'POST',
        headers: new Headers([
            ['Content-Type', 'application/json'],
        ]),
        body:JSON.stringify(refreshToken)
     } )
     .then(checkResponse)
 }