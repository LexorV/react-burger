export function setCookie(name: any, value: any, props: any) {
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
export function getCookie(name: any) {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
export function deleteCookie(name:string) {
    setCookie(name, false, { expires: -1 });
  }
export function validateField(fieldName: any, value: any, setErrosText: any, stateValid: any, setStateValid: any) {
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
  /*
validateForm() {
  this.setState({formValid: this.state.emailValid &&
                            this.state.passwordValid});
}*/