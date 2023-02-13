// 1 часть

const emailInput = document.querySelector('#emailInput')
const emailClick = document.querySelector('.emailClick')
const emailResult = document.querySelector('span')
const passwordInput = document.querySelector('#passwordInput')
const passwordClick = document.querySelector('.passwordClick')
const passwordResult = document.querySelector('span')

const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.(com|kg)$/
const passwordReg = /^[a-zA-Z0-9]{4,30}$/

emailClick.addEventListener('click', () => {
    alert(emailReg.test(emailInput.value))
    if (emailReg.test(emailInput.value)) {
        emailResult.innerText = 'correct login'
        emailResult.style.color = 'green'
    } else {
        emailResult.innerText = 'wrong login'
        emailResult.style.color = 'red'
    }
})

passwordClick.addEventListener('click', () => {
    alert(passwordReg.test(passwordInput.value))
    if (passwordReg.test(passwordInput.value)) {
        passwordResult.innerText = 'correct password'
        passwordResult.style.color = 'green'
    } else {
        passwordResult.innerText = 'wrong password'
        passwordResult.style.color = 'red'
    }
})

// 2 часть

const big = document.querySelector(".big")
const small = document.querySelector(".small")
const button = document.querySelector('.run')
const restart = document.querySelector('.restart')
let i = 0;
let go = () =>
{
    setTimeout(() => {
        if (i < 660) {
            small.style.left = (i += 10) + "px";
            go()
        }
    }, 8);
}
button.onclick = () => go()
restart.onclick = () =>
{
    i = 0;
    small.style.left = 0 + "px";
}