let userName = document.querySelector("#nameInput")
let regexName = /^\w{4,}(\s+\w+)*$/
let nameUserCorrect
let userEmail = document.getElementById('emailInput')
let regexEmail = /^\S+@\S+\.\S+$/;
let emailUserCorrect
let userPhone = document.getElementById('phoneInput')
let regExphone = /^01(0|1|2|5)\d{8}$/
let phoneUserCorrect
let userPass = document.getElementById('passwordInput')
let regexPass = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/
let passUserCorrect
let rePasswordInput = document.getElementById('rePasswordInput')
let rePassCrrect
let ageInput = document.getElementById('ageInput')
let regexAge = /^\S[0-9]{0,3}?$/
let ageUserCorrect
document.getElementById('submitBtn').addEventListener('click', clearInfo)
export default function validation(){
    userName.addEventListener('keyup', function (event) {
        if (regexName.test(event.target.value)) {
            document.getElementById('alretName').classList.replace('d-block', 'd-none')
            nameUserCorrect = true
    
        } else {
            document.getElementById('alretName').classList.replace('d-none', 'd-block')
            nameUserCorrect = false
        }
        btnClick()
    
    })
    
    userEmail.addEventListener('keyup', function (event) {
        if (regexEmail.test(event.target.value)) {
            document.getElementById('alretEmail').classList.replace('d-block', 'd-none')
            emailUserCorrect = true
        } else {
            document.getElementById('alretEmail').classList.replace('d-none', 'd-block')
            emailUserCorrect = false
        }
        btnClick()
    })
    userPhone.addEventListener('keyup', function (event) {
        if (regExphone.test(event.target.value)) {
            document.getElementById('alretPhone').classList.replace('d-block', 'd-none')
            phoneUserCorrect = true
        } else {
            document.getElementById('alretPhone').classList.replace('d-none', 'd-block')
            phoneUserCorrect = false
        }
        btnClick()
    })
    ageInput.addEventListener('keyup', function (event) {
        if (regexAge.test(event.target.value)) {
            document.getElementById('alretAge').classList.replace('d-block', 'd-none')
            ageUserCorrect = true
        } else {
            document.getElementById('alretAge').classList.replace('d-none', 'd-block')
            ageUserCorrect = false
        }
        btnClick()
    })
    userPass.addEventListener('keyup', function (event) {
        if (regexPass.test(event.target.value)) {
            document.getElementById('alretPass').classList.replace('d-block', 'd-none')
            passUserCorrect = true
        } else {
            document.getElementById('alretPass').classList.replace('d-none', 'd-block')
            passUserCorrect = false
        }
        btnClick()
    })
    rePasswordInput.addEventListener('keyup', function (event) {
        if (regexPass.test(event.target.value)) {
            document.getElementById('alretRepass').classList.replace('d-block', 'd-none')
            rePassCrrect = true
        } else {
            document.getElementById('alretRepass').classList.replace('d-none', 'd-block')
            rePassCrrect = false
        }
        btnClick()
    })
}
function clearInfo() {
    userName.value = ''
    userEmail.value = ''
    userPhone.value = ''
    ageInput.value = ''
    userPass.value = ''
    rePasswordInput.value = ''
}
function btnClick() {
    if (nameUserCorrect && emailUserCorrect && phoneUserCorrect && ageUserCorrect && passUserCorrect && rePassCrrect) {
        document.getElementById('submitBtn').disabled = false
    }
    else {
        document.getElementById('submitBtn').disabled = true
    }
}