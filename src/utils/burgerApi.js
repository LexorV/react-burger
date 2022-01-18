const urlServ = "https://norma.nomoreparties.space/api/";
const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}
export const getIngredients = () => {

    return fetch(`${urlServ}ingredients`)
        .then(checkResponse)

}
export const sendOrder = (ingredients) => {
    return fetch(`${urlServ}orders`, {
            method: 'POST',
            headers: new Headers([
                ['Content-Type', 'application/json'],
            ]),
            body: JSON.stringify({ 'ingredients': ingredients })
        })
        .then(checkResponse)

}