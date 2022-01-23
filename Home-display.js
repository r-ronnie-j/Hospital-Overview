document.querySelector('#link-to-hospital').addEventListener('click', (event) => {
    let hospital = document.querySelector('#link-of-hospital');
    if (hospital.classList.contains('display-none')) {
        hospital.classList.add('link-hospital');
        hospital.classList.remove('display-none');
    } else {
        hospital.classList.add('display-none')
        hospital.classList.remove('link-hospital');
    }
})
let carosal = document.querySelector('#carosal-inner')
let carosalIndicator= document.querySelector('#carosal-indicator');
