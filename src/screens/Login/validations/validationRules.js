export default validation = (value, rules, form) => {
    let valid = true;
    for(let rule in rules) {
        switch(rule) {
            case 'isRequired':
                valid = valid && validateRequired(value)
                break
            case 'isEmail':
                valid = valid && validateEmail(value)
                break
            case 'minLength':
                valid = valid && validateMinLength(value) && validateRequired(value)
                break
            case 'confirmPass': 
                valid = valid && 
                validateMinLength(value) && 
                valideConfirmPass(value, form[rules.confirmPass].value)
            default:
                valid = true
        }
    }
    return valid;
}

const validateRequired = (value) => {
    if (value != '') {
        return true
    } 
    return false
}

const validateEmail = (value) => {
    const expression = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return expression.test(String(value).toLocaleLowerCase());
}

const validateMinLength = (value) => {
    if (value.length >= 6) {
        return true
    } 
    return false
}

const valideConfirmPass = (value, pass) => {
    return value === pass
}