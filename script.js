let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let blackBox = document.querySelector('.blackBox')
let modal_bg = document.querySelector('.modal_bg')
let modal = document.querySelector('.modal')
let h5 = document.querySelector('h5')
let h4 = document.querySelector('h4')

let pattern = {
    name: /^[a-z ,.'-]+$/i,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    phone: /(?:\+\([9]{2}[8]\)[0-9]{2}\ [0-9]{3}\-[0-9]{2}\-[0-9]{2})/g,
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
}

let inputs = document.querySelectorAll('input')

function validate(field, regex){
    if(regex.test(field.value)){
        field.style.border = "2px solid green"
    } else{
        field.style.border = "2px solid red"
    }
}

inputs.forEach(inp =>{
    inp.onkeyup = () => {
        let key = inp.getAttribute('name')

        console.log(key);

        validate(inp, pattern[key])
    }
})

btn1.onclick = () => {
    blackBox.style.display = "block"
    
    setTimeout(() => {
        blackBox.style.opacity = "1"
    }, 200);
}

h4.onclick = () => {
    blackBox.style.opacity = "0"
    
    setTimeout(() => {
        blackBox.style.display = "none"
    }, 200);
}

btn2.onclick = () => {
    modal.style.display = "block"
    modal_bg.style.display = "block"
    
    setTimeout(() => {
        modal_bg.style.opacity = "1"
        modal.style.opacity = "1"
        modal.style.transform = "translate(-50%, -50%) scale(1)"
    }, 200);
}

h5.onclick = () => {
    modal_bg.style.opacity = "0"
    modal.style.opacity = "0"
    modal.style.transform = "translate(-50%, -50%) scale(.2)"
    
    setTimeout(() => {
        modal.style.display = "none"
        modal_bg.style.display = "none"
    }, 200);
}


