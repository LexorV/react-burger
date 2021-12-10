const urlServ = "https://norma.nomoreparties.space/api/ingredients";
const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}
export const getIngredients = () => {

    return fetch(urlServ)
        .then(checkResponse)

}