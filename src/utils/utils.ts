export function setCookie(name: string, value: string | boolean, props: any) {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        const propValue = props[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }
    document.cookie = updatedCookie;
}
export function getCookie(name: string) {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
export function deleteCookie(name: string) {
    setCookie(name, false, { expires: -1 });
}
export function validateField(fieldName: 'email' | 'password' | 'name', value: string, setErrosText: Function, stateValid: any, setStateValid: Function) {
    let checkValid = stateValid
    switch (fieldName) {
        case 'email':
            checkValid = value.match(/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i);
            console.log(checkValid);
            setStateValid(checkValid ? true : false);
            setErrosText(checkValid  ? '' : 'Неправильный Email');
            break;
        case 'password':
            checkValid = value.length >= 6;
            setErrosText(checkValid ? '' : 'Слишком короткий пароль не менее, чем 6 символов');
            setStateValid(checkValid);
            break;
        case 'name':
            if (value.length > 0) {
                setErrosText('введите имя')
                break;
            }
            else if(value.length > 12) {
                setErrosText('Слишком длинное имя, введите не более 12 символов' )
                break;
            }
            else {
                setErrosText('ошибка имени')
                break;
            }

        default:
            break;
    }
}
export const orderDateChange = (date: any) => {
    const earlier = new Date(date);
    const now = new Date();
    const days = () => {
        const daysNumber = Math.floor((now.getTime() - earlier.getTime()) / (60 * 60 * 24 * 1000));
        let daysText = 'Нет Даты';
        if (daysNumber === 0) {
            daysText = 'Сегодня'
        }
        else if (daysNumber === 1) {
            daysText = 'Вчера'
        }
        else if (daysNumber > 1) {
            daysText = `${daysNumber} ${daysNumber > 1 && daysNumber < 5 ? 'дня' : 'дней'} назад`
        }
        else {
            daysText = 'Нет Даты'
        }
        return daysText
    }
    const hours = earlier.getHours().toString();
    const minutes = earlier.getMinutes().toString().padStart(2, '0');
    const timeZone = new Intl.NumberFormat("ru-RU", { signDisplay: "exceptZero" }).format(0 - earlier.getTimezoneOffset() / 60);
    return `${days()}, ${hours}:${minutes} i-GMT${timeZone}`;
};
export const ordesCardFilter = (ordersCard: any, ingredients: any) => {
    const orderArrayWitchNumber = ordersCard.ingredients.map((el: any) => {
        const result2 = ordersCard.ingredients.map((element: any) => {
            let number = 0
            number = element === el ? number + 1 : number;
            return number
        })
        const result4 = result2.reduce((a: any, b: any) => a + b)

        return { id: el, number: result4 }
    })
    const ingredientsArrayCard = ingredients.filter((el: any) => ordersCard.ingredients.includes(el._id)).map((element: any) => {
        const result = orderArrayWitchNumber.find((e: any) => e.id === element._id)
        element['numberIngred'] = result.number
        return element
    })
    return ingredientsArrayCard
}
export const totalCardOrder = (cardOrder: any) => {
    return cardOrder.map((el: any) => el.price * el.numberIngred).reduce((sum: any, current: any) => sum + current);
}



/*
validateForm() {
this.setState({formValid: this.state.emailValid &&
                        this.state.passwordValid});
}*/