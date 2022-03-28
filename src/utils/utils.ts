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
export function validateField(fieldName: 'email' | 'password', value: string, setErrosText: Function, stateValid: any, setStateValid: Function) {
    let checkValid = stateValid
    switch (fieldName) {
        case 'email':
            checkValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            setErrosText(checkValid ? '' : 'Неправильный Email');
            setStateValid(checkValid);
            break;
        case 'password':
            checkValid = value.length >= 6;
            setErrosText(checkValid ? '' : 'Слишком короткий пароль не менее, чем 6 символов');
            setStateValid(checkValid);
            break;
        default:
            break;
    }
}
export const orderDateChange = (date: any) => {
    const earlier = new Date(date);
    const now = new Date();
    const days = () => {
        const daysNumber = Math.floor((now.getTime() - earlier.getTime()) / (60 * 60 * 24 * 1000));
        if (daysNumber === 0) {
            return 'Сегодня'
        }
        else if (daysNumber === 1) {
            return 'Вчера'
        }
        else if (daysNumber > 1) {
            return `${days} дня назад`
        }
    }
    const hours = earlier.getHours().toString();
    const minutes = earlier.getMinutes().toString().padStart(2, '0');
    const timeZone = new Intl.NumberFormat("ru-RU", { signDisplay: "exceptZero" }).format(0 - earlier.getTimezoneOffset() / 60);;
    return `${days()}, ${hours}:${minutes} i-GMT${timeZone}`;
};
  /*
validateForm() {
this.setState({formValid: this.state.emailValid &&
                          this.state.passwordValid});
}*/