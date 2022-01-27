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
let carosalIndicator = document.querySelector('#carosal-indicator');
let data = NewsData();
if (carosal) {
    document.addEventListener('DOMContentLoaded', addCorosal);
    window.addEventListener('resize', addCorosal)
}
function addCorosal(event) {
    if (data) {
        let n;
        if (window.innerWidth > 1598) n = 10;
        else if (window.innerWidth > 1330) n = 8;
        else if (window.innerWidth > 1080) n = 6;
        else if (window.innerWidth > 780) n = 4;
        else n = 1
        if (n === 1) {
            for (let i = 0; i < data.length; i++) {
                let bttn = document.createElement('button');
                bttn.dataset.bsTarget = "#carouselExampleIndicators";
                bttn.dataset.bsSlideTo = i;
                let t3 = document.createElement('div');
                t3.classList.add('carousel-item');
                let t2 = document.createElement('div');
                t2.classList.add('carosal')
                t3.append(t2);
                if (i === 0) {
                    carosal.innerHTML = '';
                    carosalIndicator.innerHTML = '';
                    bttn.classList.add('active');
                    t3.classList.add('active');
                }
                let t1 = document.createElement('div');
                t1.classList.add('palmplate')
                t1.innerHTML = data[i]
                t2.append(t1);
                carosalIndicator.append(bttn);
                carosal.append(t3);
            }
        }
        else {
            for (let i = 0; i < data.length; i++) {
                let bttn = document.createElement('button');
                bttn.dataset.bsTarget = "#carouselExampleIndicators";
                bttn.dataset.bsSlideTo = Math.floor(i / n);
                let t3 = document.createElement('div');
                t3.classList.add('carousel-item');
                let t2 = document.createElement('div');
                t2.classList.add('carosal')
                t3.append(t2);
                if (i === 0) {
                    carosal.innerHTML = '';
                    carosalIndicator.innerHTML = '';
                    bttn.classList.add('active');
                    t3.classList.add('active');
                }
                for (let j = 0; j < n; j++) {
                    let t1 = document.createElement('div');
                    t1.classList.add('palmplate')
                    t1.innerHTML = data[i]
                    t2.append(t1);
                    i++;
                }
                carosalIndicator.append(bttn);
                carosal.append(t3);
            }
        }

    }
}
function NewsData() {
    //Hi guys please implement a fetch here that will give array of string as return value that will be the content of the carosal.
    return [
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
    ]
}
let inputs = document.querySelectorAll('input');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', (e) => {
        e.target.style.border = "solid 3px rgb(49,103,235)";
    })
    inputs[i].addEventListener('blur', (e) => {
        e.target.style.border = "none";
    })
}
const districts = [
    ["Bhojpur", "Dhankuta", "Ilam", "Jhapa", "Khotang", "Morang", "Okhaldhunga", "Panchthar", "Sankhuwasabha", "Solukhumbu", "Sunsari", "Taplejung", "Terhathum", "Udayapur"],
    ['Bara', 'Dhanusa', 'Mahottari', 'Parsa', 'Rautahat', 'Saptari', 'Sarlahi', 'Siraha'],
    ['Bhaktapur', 'Chitwan', 'Dhading', 'Dolakha', 'Kathmandu', 'Kavrepalanchok', 'Lalitpur', 'Makawanpur', 'Nuwakot', 'Ramechhap', 'Rasuwa', 'Sindhuli', 'Sindhupalchok'], ['Baglung', 'Gorkha', 'Kaski', 'Lamjung', 'Manang', 'Mustang', 'Myagdi', 'Nawalpur', 'Parbat', 'Syangja', 'Tanahu'],
    ['Arghakhanchi', 'Banke', 'Bardiya', 'Dang', 'Gulmi', 'Kapilvastu', 'Parasi', 'Palpa', 'Pyuthan', 'Rolpa', 'Rukum', 'Rupandehi'],
    ['Dailekh ', 'Dolpa ', 'Humla ', 'Jajarkot ', 'Jumla ', 'Kalikot ', 'Mugu ', 'Rukum Paschim ', 'Salyan ', 'Surkhet'],
    ['Achham', 'Baitadi', 'Bajhang', 'Bajura', 'Dadeldhura', 'Darchula', 'Doti', 'Kailali', 'Kanchanpur']
];
let province= document.querySelector('#sign-up-province');
province.addEventListener('change',(e)=>{
    let district=document.querySelector('#sign-up-district');
    let n=e.target.value;
    console.log(n);
    district.innerHTML ='';
    districts[n].forEach((d,i)=>{
        let option = document.createElement('option');
        option.innerHTML = d;
        option.value= i;
        district.append(option)
    })
})
document.addEventListener('DOMContentLoaded',(e)=>{
    let district=document.querySelector('#sign-up-district');
    let n= province.value;
    districts[n].forEach((d,i)=>{
        let option = document.createElement('option');
        option.innerHTML = d;
        district.append(option)
    })
})
let login=document.querySelector('#login');
let main= document.querySelector('#main');
let signup =document.querySelector('#signup');
document.addEventListener('DOMContentLoaded',(event)=>{
    login.style.display= 'none';
    signup.style.display= 'none';
    main.style.display = 'block';
})
let loginBttnHome= document.querySelector('#login-button-home');
let signupBttnHome= document.querySelector('#signup-button-home');
loginBttnHome.addEventListener('click',(event)=>{
    login.style.display= 'block';
    signup.style.display= 'none';
    main.style.display= 'none';
})
signupBttnHome.addEventListener('click',(event)=>{
    login.style.display= 'none';
    signup.style.display= 'block';
    main.style.display= 'none';
})
let cancelLogin = document.querySelector('#cancel-from-login');
let cancelSignup= document.querySelector('#cancel-from-signup');
cancelLogin.addEventListener('click',(e)=>{
    login.style.display= 'none';
    signup.style.display= 'none';
    main.style.display= 'block';
})
cancelSignup.addEventListener('click',()=>{
    login.style.display= 'none';
    signup.style.display= 'none';
    main.style.display= 'block';
})