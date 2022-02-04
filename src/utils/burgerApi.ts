const urlServ = "https://norma.nomoreparties.space/api/";
const checkResponse = (res:any) => {
    return res.ok ? res.json() : res.json().then((err:any) => Promise.reject(err));
}
export const getIngredients = () => {

    return fetch(`${urlServ}ingredients`)
        .then(checkResponse)

}
export const sendOrder = (ingredients:string[]) => {
    return fetch(`${urlServ}orders`, {
            method: 'POST',
            headers: new Headers([
                ['Content-Type', 'application/json'],
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